'use client';
import { useState } from 'react';
import { useFinanceStore } from '@/store/financeStore';
import styles from '@/styles/finance.module.scss'; // Reusamos tus estilos

export const TransactionForm = () => {
  const addTransaction = useFinanceStore((state) => state.addTransaction);

  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense' as 'income' | 'expense',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return;

    addTransaction({
      ...formData,
      amount: parseFloat(formData.amount),
    });

    // Resetear formulario
    setFormData({ ...formData, description: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-lg">
      <h3 className="text-zinc-100 font-semibold mb-4">Nueva Transacción</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text" placeholder="Descripción" className="p-2 bg-zinc-800 rounded border border-zinc-700 text-white"
          value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />

        <select
          className="p-2 bg-zinc-800 rounded border border-zinc-700 text-white w-full"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          {/* Opción placeholder: oculta y no seleccionable después */}
          <option value="" disabled>Selecciona una categoría</option>

          <option value="comida">Comida</option>
          <option value="Servicio de agua">Agua</option>
          <option value="Servicio de luz">Luz</option>
          <option value="transporte">Transporte</option>
          <option value="Streaming">Streaming</option>
          <option value="salud">Salud</option>
          <option value="educacion">Educación</option>
          <option value="entretenimiento">Entretenimiento</option>
          <option value="otros">Otros</option>
        </select>
        <input
          type="number" placeholder="Monto" className="p-2 bg-zinc-800 rounded border border-zinc-700 text-white"
          value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        <select
          className="p-2 bg-zinc-800 rounded border border-zinc-700 text-white"
          value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })}
        >
          <option value="expense">Gasto</option>
          <option value="income">Ingreso</option>
        </select>
        <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded transition">
          Guardar Movimiento
        </button>
      </div>
    </form>
  );
};