import { computed, ref } from 'vue';

export default function useCash() {
  const cash = ref([
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 500 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 200 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 100 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 50 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 20 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 10 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 5 },
    { qty: 0, value: 'somoni', type: 'banknote', denomination: 1 },
    { qty: 0, value: 'somoni', type: 'coin', denomination: 5 },
    { qty: 0, value: 'somoni', type: 'coin', denomination: 3 },
    { qty: 0, value: 'somoni', type: 'coin', denomination: 1 },
    { qty: 0, value: 'diram', type: 'coin', denomination: 0.5 },
    { qty: 0, value: 'diram', type: 'coin', denomination: 0.25 },
    { qty: 0, value: 'diram', type: 'coin', denomination: 0.2 },
    { qty: 0, value: 'diram', type: 'coin', denomination: 0.1 }
  ]);
  const onCellEditComplete = (event: any) => {
    cash.value[event.index]['qty'] = event.newValue;
  };
  const totalCash = computed(() => {
    const count = cash.value.reduce((acc, item) => {
      return (acc += item.denomination * item.qty);
    }, 0);
    return parseFloat(count.toFixed(2));
  });

  const change = computed(() => {
    const count = cash.value
      .filter((item) => item.denomination < 10)
      .reduce((acc, item) => {
        return (acc += item.denomination * item.qty);
      }, 0);
    return parseFloat(count.toFixed(2));
  });

  const finalCash = computed(() => {
    const count = cash.value
      .filter((item) => item.denomination >= 10)
      .reduce((acc, item) => {
        return (acc += item.denomination * item.qty);
      }, 0);
    return parseFloat(count.toFixed(2));
  });

  return { cash, change, finalCash, totalCash, onCellEditComplete };
}
