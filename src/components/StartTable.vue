<script setup lang="ts">
import Panel from 'primevue/panel';
import Select from 'primevue/select';
import { ref } from 'vue';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const location = ref('');
const cashier = ref('');
</script>

<template>
  <Panel>
    <template #header
      ><h1 class="font-black">{{ dayjs().locale('ru').format('DD MMM YYYY') }}</h1>
    </template>
    <template #default>
      <div class="flex space-x-4">
        <div class="flex flex-col gap-2">
          <label for="location">Название точки</label>
          <Select
            id="cashier"
            v-model="location"
            class="w-full md:w-56"
            :options="['Основная', 'Гипрозем', 'Худфонд', 'Музей', 'Советский']"
            placeholder="Выберите точку:"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="cashier">Кассир</label>
          <Select
            id="cashier"
            v-model="cashier"
            class="w-full md:w-56"
            :options="[
              'Марина',
              'Хусниддин',
              'Мирзобек',
              'Шариф',
              'Тахмина',
              'Хадятулло',
              'Неру',
              'Мафтуна',
              'Другой'
            ]"
            placeholder="Выберите кассира:"
          />
        </div>
      </div>
    </template>
  </Panel>
</template>
