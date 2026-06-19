"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "MOOC (Coursera/edX)", value: 6.5, fill: "#94A3B8" },
  { name: "Gravado auto-dirigido", value: 12, fill: "#60A5FA" },
  { name: "Gravado com coaching", value: 70, fill: "#3B82F6" },
  { name: "Cohort-based (ao vivo)", value: 82, fill: "#1E40AF" },
  { name: "Ao vivo + feedback", value: 90, fill: "#2563EB" },
];

export default function CompletionChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 9.5, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`${Number(v)}%`, "Taxa de conclusão"]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
