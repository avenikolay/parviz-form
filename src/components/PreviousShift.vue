<script setup lang="ts">
import Panel from 'primevue/panel';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import InputNumber from 'primevue/inputnumber';
import { inject } from 'vue';

const { previousShift, onChangePreviousShiftValue } = inject('previousShiftStore') as any;
</script>

<template>
  <Panel>
    <template #header><h1 class="font-black">Предыдущая смена</h1> </template>
    <template #default>
      <DataTable
        editMode="cell"
        stripedRows
        size="small"
        :value="previousShift"
        @cell-edit-complete="onChangePreviousShiftValue"
      >
        <Column style="width: 30%" field="name" header="Позиция" />
        <Column field="amount" header="Сумма">
          <template #editor="{ data, field }">
            <InputNumber min="0" v-model="data[field]" autofocus />
          </template>
        </Column>
      </DataTable>
    </template>
  </Panel>
</template>
