<script setup lang="ts">
import { inject } from 'vue';
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Select from 'primevue/select';

const {
  walletTypes,
  walletTransactions,
  walletForm,
  isWalletFormValid,
  totalWalletTransactions,
  addWalletTransaction,
  deleteWalletTransaction
} = inject('walletsStore') as any;
</script>

<template>
  <Panel toggleable collapsed>
    <template #header><h1 class="font-black">Таблица №4. Кошельки</h1> </template>
    <template #default>
      <DataTable stripedRows size="small" :value="walletTransactions">
        <Column field="amount" />
        <Column field="walletType" />
        <Column>
          <template #body="slotProps">
            <Button
              @click="deleteWalletTransaction(slotProps)"
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
        <InputNumber v-model="walletForm.amount" placeholder="Введите сумму" />
        <Select
          class="flex-grow max-w-36"
          v-model="walletForm.walletType"
          placeholder="Выберите тип кошелька:"
          :options="walletTypes"
        />
        <Button
          :disabled="!isWalletFormValid"
          @click="addWalletTransaction"
          label="Добавить"
          icon="pi pi-plus"
        />
      </div>
    </template>
    <template #footer> Итого: {{ totalWalletTransactions }} </template>
  </Panel>
</template>
