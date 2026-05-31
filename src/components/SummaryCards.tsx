'use client';
import { useFinanceStore } from '@/store/financeStore';
import { ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

export const SummaryCards = () => {
  // Enganchamos el componente a las transacciones globales de Zustand
  const transactions = useFinanceStore((state) => state.transactions);

  // Lógica financiera: filtramos y sumamos en tiempo real
  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      
      {/* Tarjeta 1: Balance Total */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
        <div className="flex justify-between items-center text-zinc-400 text-sm font-medium">
          <span>Balance Total</span>
          <Wallet size={18} className="text-zinc-500" />
        </div>
        <h3 className={`text-3xl font-bold mt-3 ${balance >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
          ${balance.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </h3>
      </div>

      {/* Tarjeta 2: Ingresos */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
        <div className="flex justify-between items-center text-zinc-400 text-sm font-medium">
          <span>Ingresos</span>
          <div className="p-1 bg-emerald-500/10 rounded-md">
            <ArrowUpRight size={18} className="text-emerald-400" />
          </div>
        </div>
        <h3 className="text-3xl font-bold mt-3 text-zinc-100">
          +${income.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </h3>
      </div>

      {/* Tarjeta 3: Gastos */}
      <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
        <div className="flex justify-between items-center text-zinc-400 text-sm font-medium">
          <span>Gastos</span>
          <div className="p-1 bg-rose-500/10 rounded-md">
            <ArrowDownRight size={18} className="text-rose-400" />
          </div>
        </div>
        <h3 className="text-3xl font-bold mt-3 text-zinc-100">
          -${expenses.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </h3>
      </div>

    </div>
  );
};