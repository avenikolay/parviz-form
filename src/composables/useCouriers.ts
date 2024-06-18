import { computed, reactive, ref } from 'vue';

export default function useCouriers() {
  const courierTransactions = ref<Transaction[]>([]);

  const courierForm = reactive({
    name: '',
    amount: 0,
    type: ''
  });

  const addCourierTransaction = () => {
    courierTransactions.value.push({ ...courierForm, id: courierTransactions.value.length + 1 });
    courierForm.name = '';
    courierForm.amount = 0;
    courierForm.type = '';
  };

  const deleteCourierTransaction = ({ data: { id } }: any) => {
    courierTransactions.value = courierTransactions.value.filter((item) => item.id !== id);
  };

  const totalCouriersTransactions = computed(() => {
    if (!courierTransactions.value.length) return 0;
    return courierTransactions.value.reduce((acc, item) => {
      return (acc += item.amount);
    }, 0);
  });

  const isCourierFormValid = computed(() => {
    return courierForm.name && courierForm.amount > 0 && courierForm.type;
  });

  return {
    courierTransactions,
    courierForm,
    totalCouriersTransactions,
    isCourierFormValid,
    addCourierTransaction,
    deleteCourierTransaction
  };
}
