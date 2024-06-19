<script setup lang="ts">
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import { inject } from 'vue';
const { generalSales, onGeneralSalesCellEditComplete } = inject('generalSalesStore') as any;
</script>

<template>
  <Panel toggleable>
    <template #header><h1 class="font-black">Общая торговля</h1> </template>
    <template #default>
      <DataTable
        editMode="cell"
        stripedRows
        size="small"
        :value="generalSales"
        @cell-edit-complete="onGeneralSalesCellEditComplete"
      >
        <Column style="width: 20%" field="name" header="Позиция" />
        <Column field="amount" header="Сумма">
          <template #editor="{ data, field }">
            <InputNumber min="0" v-model="data[field]" autofocus />
          </template>
        </Column>
      </DataTable> </template
  ></Panel>
</template>
