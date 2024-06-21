<script setup lang="ts">
import { inject } from 'vue';

import Input from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Panel from 'primevue/panel';

const names = [
  'Руслан Кель',
  'Хусниддин Юлдашев',
  'Мафтуна Азимова',
  'Тахмина Исматова',
  'Малика Маджидова',
  'Губиш Хусникамал',
  'Неру Мусоев',
  'Дмитрий',
  'Ольга Варнавская',
  'Тахмина Наимова',
  'Шахноза Ашурова',
  'Марина Ли',
  'Тахмина Наимова',
  'Мирзо Махмудов',
  'Шариф Исмоилов',
  'Хадятулло Меликов',
  'Мехроб Бобокалонов',
  'Шахром Джураев',
  'Бахриддину Сафаров',
  'Суннатулло Назаров',
  'Шахзод Мухторов',
  'Кишвар Сафарзода',
  'Нуриддин Алиев',
  'Диловар Абдухалилов',
  'Хоким Негматов',
  'Раджабек Саъдуллоев',
  'Давлат Якубов',
  'Шахром Наимов',
  'Фируз Сатторов',
  'Альбина Шарифуллина',
  'Шохона Азамкулова',
  'Манзура Ахмедова',
  'Нодира Олимова'
];
const types = ['ЗП', 'Заправка', 'Служба доставки', 'Другое'];

const { costs, costForm, totalCosts, isCostFormValid, addCost, deleteCost } = inject(
  'costsStore'
) as any;
</script>

<template>
  <Panel>
    <template #header
      ><h1 class="font-black">Расходы, сделанные в течении рабочей смены</h1>
    </template>
    <template #default>
      <DataTable stripedRows size="small" :value="costs" tableStyle="min-width: 50rem">
        <Column field="name" header="Имя"></Column>
        <Column field="amount" header="Сумма"></Column>
        <Column field="type" header="Тип расхода"></Column>
        <Column field="comment" header="Комментарий"></Column>
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
        <Input placeholder="Комментарий" v-model="costForm.comment" />
        <Button :disabled="!isCostFormValid" @click="addCost" label="Добавить" icon="pi pi-plus" />
      </div>
    </template>
    <template #footer> Всего: {{ totalCosts }} </template>
  </Panel>
</template>
