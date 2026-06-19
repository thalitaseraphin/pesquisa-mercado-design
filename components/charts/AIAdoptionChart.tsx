"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2023", pct: 35 },
  { year: "2024", pct: 57 },
  { year: "2025", pct: 75 },
  { year: "2026 (proj.)", pct: 84 },
  { year: "2027 (proj.)", pct: 91 },
];

export default function AIAdoptionChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <defs>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`${Number(v)}%`, "Usando IA"]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Area type="monotone" dataKey="pct" stroke="#2563EB" strokeWidth={3} fill="url(#aiGrad)" dot={{ fill: "#2563EB", r: 4 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
