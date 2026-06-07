"use client";

import { useFinanceStore } from "@/store/financeStore";


export const FilterBar = () => {
    // Extraemos también los valores actuales para que el filtro se mantenga seleccionado
    const { setFilterCategory, setFilterDate, filterCategory, filterDate } = useFinanceStore();

    return (
        <div className="flex flex-wrap gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl mb-6">
            <select
                value={filterCategory} // <-- Importante: valor controlado
                className="px-4 py-2 bg-zinc-800 rounded-lg text-zinc-100 border border-zinc-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                onChange={(e) => setFilterCategory(e.target.value)}
            >
                <option value="all">Todas las categorías</option>
                <option value="comida">Comida</option>
                <option value="transporte">Transporte</option>
                <option value="Servicio de agua">Agua</option>
                <option value="Servicio de luz">Luz</option>
                <option value="Streaming">Streaming</option>
                <option value="salud">Salud</option>
                <option value="educacion">Educación</option>
                <option value="entretenimiento">Entretenimiento</option>
                <option value="otros">Otros</option>
            </select>

            <input
                type="date"
                value={filterDate} // <-- Importante: valor controlado
                className="px-4 py-2 bg-zinc-800 rounded-lg text-zinc-100 border border-zinc-700 outline-none"
                onChange={(e) => setFilterDate(e.target.value)}
            />
        </div>
    );
};