<script setup lang="ts">
import { inject } from 'vue';

import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Panel from 'primevue/panel';

const names = ['Николай', 'Парвиз'];
const types = ['Зарплата', 'Заправка'];

const { costs, costForm, totalCosts, isCostFormValid, addCost, deleteCost } = inject(
  'costsStore'
) as any;
</script>

<template>
  <Panel toggleable collapsed>
    <template #header
      ><h1 class="font-black">Таблица №1. Расходы, сделанные в течении рабочей смены</h1>
    </template>
    <template #default>
      <DataTable stripedRows size="small" :value="costs" tableStyle="min-width: 50rem">
        <Column field="name" header="Имя"></Column>
        <Column field="amount" header="Сумма"></Column>
        <Column field="type" header="Тип расхода"></Column>
        <Column>
          <template #body="slotProps">
            <Button
              @click="deleteCost(slotProps)"
              severity="danger"
              size="small"
              header="Действия"
              label="Удалить"
            />
          </template>
        </Column>
        <template #empty>
          <div class="flex p-3 justify-center items-center">Нет данных</div>
        </template>
      </DataTable>
      <div class="flex space-x-4 mt-4">
        <Select
          class="w-full md:w-56"
          :options="names"
          placeholder="Выберите человека"
          v-model="costForm.name"
        />
        <InputNumber min="0" placeholder="Введите сумму" v-model="costForm.amount" />
        <Select
          class="w-full md:w-56"
          v-model="costForm.type"
          :options="types"
          placeholder="Выберите тип расхода:"
        />
        <Button :disabled="!isCostFormValid" @click="addCost" label="Добавить" icon="pi pi-plus" />
      </div>
    </template>
    <template #footer> Всего: {{ totalCosts }} </template>
  </Panel>
</template>
