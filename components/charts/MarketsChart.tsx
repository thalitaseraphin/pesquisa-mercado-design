"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Design Gráfico Global", value: 49.1, fill: "#2563EB" },
  { name: "UX Services (2030)", value: 32.95, fill: "#F59E0B" },
  { name: "Creator Economy", value: 205.25, fill: "#0F766E" },
  { name: "EdTech Brasil (2034)", value: 15.6, fill: "#60A5FA" },
  { name: "IA Gen Design (2026)", value: 5.38, fill: "#94A3B8" },
];

export default function MarketsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 10, fill: "#6B7480" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tickFormatter={(v) => `USD ${v}B`}
          tick={{ fontSize: 10, fill: "#6B7480" }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          formatter={(v) => [`USD ${Number(v)}B`, "Mercado"]}
          contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
