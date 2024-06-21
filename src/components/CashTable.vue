<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Panel from 'primevue/panel';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import { inject } from 'vue';

const { cash, totalCash, change, finalCash, onCellEditComplete } = inject('cashStore') as any;
</script>
<template>
  <Panel>
    <template #header><h1 class="font-black">Подсчет налички</h1> </template>
    <template #default>
      <DataTable
        stripedRows
        size="small"
        :value="cash"
        editMode="cell"
        @cell-edit-complete="onCellEditComplete"
      >
        <Column style="width: 20%" field="qty" header="Количество">
          <template #editor="{ data, field }">
            <InputNumber showButtons min="0" v-model="data[field]" autofocus />
          </template>
        </Column>
        <Column style="width: 20%" field="denomination" header="Номинал">
          <template #body="{ data: { denomination, value } }">
            <span class="font-bold"
              >{{ value === 'somoni' ? denomination : denomination * 100 }}
              {{ value === 'somoni' ? 'сомони' : 'дирам' }}</span
            ></template
          >
        </Column>
        <Column header="Тип">
          <template #body="{ data: { type } }">
            {{ type === 'banknote' ? 'Купюра' : 'Монета' }}
          </template>
        </Column>
        <Column>
          <Column
            :rowEditor="true"
            style="width: 10%; min-width: 8rem"
            bodyStyle="text-align:center"
          ></Column>
          <template #body="{ data: { qty, denomination } }">
            {{ qty * denomination }} сомони</template
          >
        </Column>
      </DataTable>
    </template>
    <template #footer>
      Всего: {{ totalCash }} , Наличка: {{ finalCash }}, Мелочь: {{ change }}
    </template>
  </Panel>
</template>
