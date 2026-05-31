'use client';
import { useFinanceStore } from '@/store/financeStore';
import { Trash2 } from 'lucide-react';

export const TransactionList = () => {
  // Obtenemos todo lo necesario del store
  const { transactions, filterCategory, filterDate } = useFinanceStore();

  // Lógica de filtrado en tiempo real
  const filtered = transactions.filter((t) => {
    const matchCat = filterCategory === 'all' || t.category === filterCategory;
    const matchDate = !filterDate || t.date === filterDate;
    return matchCat && matchDate;
  });

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
      <h2 className="text-lg font-semibold mb-4">Movimientos</h2>
      {filtered.map((t) => (
        <div key={t.id} className="flex justify-between py-2 border-b border-zinc-800">
          <span>{t.description}</span>
          <span className={t.type === 'income' ? 'text-emerald-500' : 'text-red-500'}>
            {t.type === 'income' ? '+' : '-'}${t.amount}
          </span>
        </div>
      ))}
    </div>
  );
};