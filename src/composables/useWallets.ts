import { computed, reactive, ref } from 'vue';

export default function useWallets() {
  type walletTransaction = {
    id: number;
    amount: number;
    walletType: WalletType;
  };

  const walletTypes = ['Алиф', 'DC'] as const;
  type WalletType = (typeof walletTypes)[number];
  const walletTransactions = ref<walletTransaction[]>([]);

  const walletForm = reactive({
    amount: 0,
    walletType: ''
  });
  const addWalletTransaction = () => {
    walletTransactions.value.push({
      id: walletTransactions.value.length + 1,
      amount: walletForm.amount,
      walletType: walletForm.walletType as WalletType
    });
    walletForm.amount = 0;
    walletForm.walletType = '';
  };
  const deleteWalletTransaction = (event: any) => {
    walletTransactions.value = walletTransactions.value.filter((_, index) => index !== event.index);
  };

  const isWalletFormValid = computed(() => {
    return walletForm.walletType && walletForm.amount > 0;
  });
  const totalWalletTransactions = computed(() => {
    return walletTransactions.value.reduce((acc, item) => (acc += item.amount), 0);
  });

  return {
    walletTypes,
    walletTransactions,
    walletForm,
    isWalletFormValid,
    totalWalletTransactions,
    addWalletTransaction,
    deleteWalletTransaction
  };
}
