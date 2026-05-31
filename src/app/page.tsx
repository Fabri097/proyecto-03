import { SummaryCards } from '@/components/SummaryCards';
import { FinanceChart } from '@/components/FinanceChart';
import { TransactionForm } from '@/components/TransactionForm';
import { TransactionList } from '@/components/TransactionList'; 
import { FilterBar } from '@/components/filterBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard Financiero</h1>

      {/* 1. Aquí irían tus Tarjetas de Resumen (Ingresos/Gastos) */}
      <SummaryCards />

      {/* 2. Aquí va el componente de Filtros que acabamos de crear */}
      <FilterBar />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3. El formulario a un lado */}
        <TransactionForm />

        {/* 4. La lista de transacciones (que debe usar el estado filtrado) */}
        <TransactionList />
      </div>

      {/* 5. El gráfico abajo de todo */}
      <FinanceChart />
    </main>
  );
}