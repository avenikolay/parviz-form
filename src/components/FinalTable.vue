<script setup lang="ts">
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { computed } from 'vue';

const props = defineProps({
  last: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  previousShiftCash: {
    type: Number,
    default: 0
  },
  previousShiftCashless: {
    type: Number,
    default: 0
  },
  finalCash: {
    type: Number,
    default: 0
  }
});

const diff = computed(() => props.total - props.last);
const table = computed(() => [
  {
    key: 'Недостача:',
    value: diff.value < 0 ? Math.abs(diff.value) : 0
  },
  { key: 'Излишек:', value: diff.value > 0 ? diff.value : 0 },
  { key: 'Наличка предыдущей смены:', value: props.previousShiftCash },
  { key: 'Безналичка предыдущей смены:', value: props.previousShiftCashless },
  { key: 'Итого налички:', value: props.previousShiftCash + props.finalCash }
]);
</script>

<template>
  <Panel>
    <template #header><h1 class="font-black">Итого:</h1></template>
    <template #default>
      <DataTable :value="table" stripedRows size="small">
        <Column field="key"></Column>
        <Column field="value"></Column>
      </DataTable>
    </template>
  </Panel>
</template>
