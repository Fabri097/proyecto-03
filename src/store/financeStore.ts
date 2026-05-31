import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // Importamos el middleware

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: string;
  date: string;
}

interface FinanceState {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  deleteTransaction: (id: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  filterDate: string;
  setFilterDate: (date: string) => void;
}

// Envolvemos el create con el middleware 'persist'
export const useFinanceStore = create<FinanceState>()(
  persist(
    (set) => ({
      transactions: [], // Empezamos vacío, lo que guardes se queda ahí
      filterCategory: 'all',
      filterDate: '',
      setFilterCategory: (category) => set({ filterCategory: category }),
      setFilterDate: (date) => set({ filterDate: date }),
      addTransaction: (transaction) => set((state) => ({
        transactions: [
          ...state.transactions,
          { ...transaction, id: Date.now().toString() }
        ]
      })),

      deleteTransaction: (id) => set((state) => ({
        transactions: state.transactions.filter((t) => t.id !== id)
      })),
    }),
    {
      name: 'finance-storage', // Nombre de la llave en localStorage
    }
  )
);