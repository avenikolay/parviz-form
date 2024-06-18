<script setup lang="ts">
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
const generalSales = [
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
  }
];
</script>

<template>
  <Panel toggleable>
    <template #header><h1 class="font-black">Общая торговля</h1> </template>
    <template #default>
      <DataTable stripedRows size="small" :value="generalSales">
        <Column field="name" header="Позиция" />
        <Column field="amount" header="Сумма" />
      </DataTable> </template
  ></Panel>
</template>
