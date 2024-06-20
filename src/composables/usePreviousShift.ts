import { computed, ref } from 'vue';

export default function usePreviousShift() {
  const previousShift = ref([
    {
      name: 'Мелочь предыдущей смены',
      amount: 0
    },
    {
      name: 'Долги курьеров предыдущей смены (наличка)',
      amount: 0
    },
    {
      name: 'Долги курьеров предыдущей смены (безнал)',
      amount: 0
    }
  ]);

  const previousShiftCash = computed(
    () => previousShift.value[0].amount + previousShift.value[1].amount
  );
  const previousShiftCashless = computed(() => previousShift.value[2].amount);
  const onChangePreviousShiftValue = (event: any) => {
    previousShift.value[event.index]['amount'] = event.newValue;
  };
  return {
    previousShift,
    previousShiftCash,
    previousShiftCashless,
    onChangePreviousShiftValue
  };
}
