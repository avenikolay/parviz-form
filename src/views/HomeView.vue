<script setup lang="ts">
import { computed, provide } from 'vue';

import CostsTable from '@/components/CostsTable.vue';
import CouriersTable from '@/components/CouriersTable.vue';
import CashTable from '@/components/CashTable.vue';
import WalletsTable from '@/components/WalletsTable.vue';
import GeneralSales from '@/components/GeneralSales.vue';
import GeneralAmount from '@/components/GeneralAmount.vue';

import useCosts from '@/composables/useCosts';
import useCouriers from '@/composables/useCouriers';
import useWallets from '@/composables/useWallets';
import useCash from '@/composables/useCash';
import useGeneralSales from '@/composables/useGeneralSales';
import FinalTable from '@/components/FinalTable.vue';

//TODO: переименовать на cost
const { totalCosts, ...costStore } = useCosts();
const { totalCash, change, finalCash, ...cashStore } = useCash();
const { totalAlifTransactions, totalDCTransactions, ...walletsStore } = useWallets();
const { totalCouriersTransactions, ...couriersStore } = useCouriers();
const { last, ...generalStore } = useGeneralSales();

const total = computed(() => {
  return (
    finalCash.value +
    totalAlifTransactions.value +
    totalDCTransactions.value +
    totalCosts.value +
    change.value +
    totalCouriersTransactions.value
  );
});

provide('costsStore', { totalCosts, ...costStore });
provide('couriersStore', { totalCouriersTransactions, ...couriersStore });
provide('cashStore', { totalCash, change, finalCash, ...cashStore });
provide('walletsStore', {
  ...walletsStore
});
provide('generalSalesStore', {
  ...generalStore
});
</script>

<template>
  <main class="container p-5 mx-auto">
    <div class="mb-7">
      <CostsTable />
    </div>
    <div class="mb-7">
      <CouriersTable />
    </div>
    <div class="mb-7">
      <CashTable />
    </div>
    <div class="mb-7">
      <WalletsTable />
    </div>
    <div class="mb-7"><GeneralSales /></div>
    <div class="mb-7">
      <GeneralAmount
        :change="change"
        :finalCash="finalCash"
        :alif="totalAlifTransactions"
        :dc="totalDCTransactions"
        :cost="totalCosts"
        :couriers="totalCouriersTransactions"
        :total="total"
      />
    </div>
    <div>
      <FinalTable :last="last" :total="total" />
    </div>
  </main>
</template>
