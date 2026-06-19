"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2023", value: 4.86 },
  { year: "2024", value: 6.18 },
  { year: "2025", value: 7.84 },
  { year: "2026", value: 9.96 },
  { year: "2027", value: 12.65 },
  { year: "2028", value: 16.07 },
  { year: "2029", value: 20.41 },
  { year: "2030", value: 26.03 },
];

export default function VibeCodingChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <defs>
          <linearGradient id="vibeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis tickFormatter={(v) => `USD ${v}B`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`USD ${Number(v)}B`, "AI Code Tools"]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={3} fill="url(#vibeGrad)" dot={{ fill: "#2563EB", r: 3 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
