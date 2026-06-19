"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Até R$250", media: 4, top: 10 },
  { name: "R$250–1k", media: 3, top: 6.5 },
  { name: "R$1k–2,5k", media: 2, top: 4.5 },
  { name: "R$2,5k–5k", media: 1.25, top: 3 },
  { name: "R$5k–10k", media: 0.65, top: 2 },
  { name: "Acima R$10k", media: 0.3, top: 1.25 },
];

export default function TicketChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`${Number(v)}%`, ""]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="media" name="Conversão média" fill="#2563EB" radius={[5, 5, 0, 0]} />
        <Bar dataKey="top" name="Top performers" fill="#F59E0B" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
