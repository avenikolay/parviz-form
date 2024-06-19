import { computed, ref } from 'vue';

export default function useGeneralSales() {
  const generalSales = ref([
    {
      name: 'Бар',
      amount: 0
    },
    {
      name: 'Доставка',
      amount: 0
    },
    {
      name: 'Кондитерка',
      amount: 0
    },
    {
      name: 'Ресторан',
      amount: 0
    },
    {
      name: 'Суши и роллы',
      amount: 0
    },
    {
      name: 'Общая торговля',
      amount: 0
    }
  ]);

  const onGeneralSalesCellEditComplete = (event: any) => {
    generalSales.value[event.index]['amount'] = event.newValue;
  };
  const last = computed(() => {
    // return generalSales.value.reduce((acc, item) => {
    //   return (acc += item.amount);
    // }, 0);
    return generalSales.value[generalSales.value.length - 1].amount;
  });
  return { generalSales, last, onGeneralSalesCellEditComplete };
}
