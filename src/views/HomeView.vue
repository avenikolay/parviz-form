<script setup lang="ts">
import { provide } from 'vue';

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

//TODO: переименовать на cost
const { totalCosts, ...costStore } = useCosts();
const { totalCash, ...cashStore } = useCash();
const { totalAlifTransactions, totalDCTransactions, ...walletsStore } = useWallets();
const { totalCouriersTransactions, ...couriersStore } = useCouriers();

provide('costsStore', { totalCosts, ...costStore });
provide('couriersStore', { totalCouriersTransactions, ...couriersStore });
provide('cashStore', { totalCash, ...cashStore });
provide('walletsStore', {
  ...walletsStore
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
    <div>
      <GeneralAmount
        :cash="totalCash"
        :alif="totalAlifTransactions"
        :dc="totalDCTransactions"
        :cost="totalCosts"
        :couriers="totalCouriersTransactions"
      />
    </div>
  </main>
</template>
