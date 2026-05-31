'use client';
import { useFinanceStore } from '@/store/financeStore';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from '@/styles/finance.module.scss'; // Importamos el SASS

export const FinanceChart = () => {
    const transactions = useFinanceStore((state) => state.transactions);

    // 1. Agrupamos y sumamos las transacciones que caen en el mismo día
    const groupedData = transactions.reduce((acc: any, current) => {
        const date = current.date;
        if (!acc[date]) {
            acc[date] = { fecha: date, Ingresos: 0, Gastos: 0 };
        }
        if (current.type === 'income') {
            acc[date].Ingresos += current.amount;
        } else {
            acc[date].Gastos += current.amount;
        }
        return acc;
    }, {});

    const chartData = Object.values(groupedData).sort(
        (a: any, b: any) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
    );

    return (
        <div className={styles.chartContainer}>
            <h3 className="text-zinc-100 font-semibold mb-6">Flujo de Caja</h3>

            {/* ResponsiveContainer necesita un padre con altura/ancho definido, el CSS ya lo da */}
            <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="fecha" stroke="#71717a" fontSize={12} />
                    <YAxis stroke="#71717a" fontSize={12} />
                    <Tooltip contentStyle={{ background: '#18181b', border: 'none' }} />
                    <Area dataKey="Ingresos" stroke="#34d399" fill="#34d399" fillOpacity={0.1} />
                    <Area dataKey="Gastos" stroke="#f87171" fill="#f87171" fillOpacity={0.1} />
                </AreaChart>
            </ResponsiveContainer>
            </div>
            
        </div>
    );
};