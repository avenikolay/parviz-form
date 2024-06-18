import { computed, ref } from 'vue';

export default function useCash() {
  const cash = ref([
    { qty: 0, denomination: 500 },
    { qty: 0, denomination: 200 },
    { qty: 0, denomination: 100 },
    { qty: 0, denomination: 50 },
    { qty: 0, denomination: 20 },
    { qty: 0, denomination: 10 }
  ]);
  const onCellEditComplete = (event: any) => {
    cash.value[event.index]['qty'] = event.newValue;
  };
  const totalCash = computed(() => {
    return cash.value.reduce((acc, item) => {
      return (acc += item.denomination * item.qty);
    }, 0);
  });

  return { cash, totalCash, onCellEditComplete };
}
