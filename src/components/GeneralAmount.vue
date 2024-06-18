<script setup lang="ts">
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { computed } from 'vue';
const props = defineProps({
  cash: {
    type: Number,
    default: 0
  },
  alif: {
    type: Number,
    default: 0
  },
  dc: {
    type: Number,
    default: 0
  },
  cost: {
    type: Number,
    default: 0
  },
  couriers: {
    type: Number,
    default: 0
  }
});
const generalAmount = computed(() => {
  return [
    { name: 'Наличные', amount: props.cash },
    { name: 'alif', amount: props.alif },
    { name: 'dc', amount: props.dc },
    { name: 'Расход', amount: props.cost },
    { name: 'Долги курьерам', amount: props.couriers }
  ];
});
</script>

<template>
  <Panel toggleable>
    <template #header><h1 class="font-black">Общая сумма:</h1> </template>
    <template #default>
      <DataTable stripedRows size="small" :value="generalAmount">
        <Column field="name" header="Позиция" />
        <Column field="amount" header="Сумма" />
      </DataTable> </template
  ></Panel>
</template>
