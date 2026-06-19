"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { duration: "0–3 min", value: 78 },
  { duration: "3–6 min", value: 100 },
  { duration: "6–9 min", value: 88 },
  { duration: "9–12 min", value: 75 },
  { duration: "12–15 min", value: 60 },
  { duration: "15–20 min", value: 42 },
  { duration: "20+ min", value: 25 },
];

export default function VideoLengthChart() {
  return (
    <ResponsiveContainer width="100%" height={160}>
      <AreaChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
        <defs>
          <linearGradient id="videoGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563EB" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" vertical={false} />
        <XAxis dataKey="duration" tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis domain={[0, 110]} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <Tooltip formatter={(v) => [`${Number(v)}/100`, "Engajamento relativo"]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={3} fill="url(#videoGrad)" dot={{ fill: "#2563EB", r: 5 }} activeDot={{ r: 7 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
