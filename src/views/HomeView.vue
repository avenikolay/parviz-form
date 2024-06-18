<script setup lang="ts">
import CostsTable from '@/components/CostsTable.vue';
import CouriersTable from '@/components/CouriersTable.vue';
import CashTable from '@/components/CashTable.vue';
import WalletsTable from '@/components/WalletsTable.vue';
import { provide } from 'vue';
import useCosts from '@/composables/useCosts';
import useCouriers from '@/composables/useCouriers';
import useWallets from '@/composables/useWallets';
import useCash from '@/composables/useCash';

provide('costsStore', {
  ...useCosts()
});
provide('couriersStore', {
  ...useCouriers()
});
provide('walletsStore', {
  ...useWallets()
});
provide('cashStore', {
  ...useCash()
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
    <div>
      <WalletsTable />
    </div>
  </main>
</template>
