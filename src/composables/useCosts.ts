import { computed, reactive, ref } from 'vue';

export default function useCosts() {
  const costs = ref<Transaction[]>([]);

  const costForm = reactive({
    name: '',
    amount: 0,
    type: '',
    comment: ''
  });

  const addCost = () => {
    costs.value.push({ ...costForm, id: costs.value.length + 1 });
    costForm.name = '';
    costForm.amount = 0;
    costForm.type = '';
    costForm.comment = '';
  };

  const deleteCost = ({ data: { id } }: any) => {
    costs.value = costs.value.filter((item) => item.id !== id);
  };

  const totalCosts = computed(() => {
    if (!costs.value.length) return 0;
    return costs.value.reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
  });

  const isCostFormValid = computed(() => {
    return costForm.name && costForm.amount > 0 && costForm.type;
  });

  return {
    costs,
    costForm,
    totalCosts,
    isCostFormValid,
    addCost,
    deleteCost
  };
}
