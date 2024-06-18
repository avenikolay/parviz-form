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

const {
  courierTransactions,
  courierForm,
  totalCouriersTransactions,
  isCourierFormValid,
  addCourierTransaction,
  deleteCourierTransaction
} = inject('couriersStore') as any;
</script>

<template>
  <Panel toggleable collapsed>
    <template #header><h1 class="font-black">Таблица №2. Долги курьеров</h1> </template>
    <template #default>
      <DataTable
        stripedRows
        size="small"
        :value="courierTransactions"
        tableStyle="min-width: 50rem"
      >
        <Column field="name" header="Имя"></Column>
        <Column field="amount" header="Сумма"></Column>
        <Column field="type" header="Тип расхода"></Column>
        <Column>
          <template #body="slotProps">
            <Button
              @click="deleteCourierTransaction(slotProps)"
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
      <div class="flex space-x-4 mt-4 items-start">
        <Select
          class="w-full md:w-56"
          :options="names"
          placeholder="Выберите человека"
          v-model="courierForm.name"
        />
        <InputNumber min="0" placeholder="Введите сумму" v-model="courierForm.amount" />
        <Select
          class="w-full md:w-56"
          v-model="courierForm.type"
          :options="types"
          placeholder="Выберите тип расхода:"
        />
        <Button
          :disabled="!isCourierFormValid"
          @click="addCourierTransaction"
          label="Добавить"
          icon="pi pi-plus"
        />
      </div>
    </template>
    <template #footer> Всего: {{ totalCouriersTransactions }} </template>
  </Panel>
</template>
