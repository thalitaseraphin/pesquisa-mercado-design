"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2025", value: 6.0 },
  { year: "2027", value: 7.7 },
  { year: "2029", value: 9.9 },
  { year: "2031", value: 12.1 },
  { year: "2034", value: 15.6 },
];

export default function EdtechChart() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis tickFormatter={(v) => `USD ${v}B`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`USD ${Number(v)}B`, "EdTech Brasil"]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Bar dataKey="value" fill="#2563EB" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
