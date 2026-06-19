"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Email (lista própria)", media: 20, top: 35 },
  { name: "Google Ads", media: 6.5, top: 15 },
  { name: "Referral/Afiliados", media: 5.5, top: 12 },
  { name: "YouTube / Orgânico", media: 4.5, top: 11 },
  { name: "SEO Orgânico", media: 4, top: 10 },
  { name: "Paid Social (Insta/FB)", media: 3, top: 8 },
];

export default function ChannelsChart() {
  return (
    <ResponsiveContainer width="100%" height={230}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, left: 120, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(20,24,31,0.07)" horizontal={false} />
        <XAxis type="number" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10, fill: "#6B7480" }} tickLine={false} axisLine={false} />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: "#434A57" }} tickLine={false} axisLine={false} width={115} />
        <Tooltip formatter={(v) => [`${Number(v)}%`, ""]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="media" name="Média" fill="#2563EB" radius={[0, 4, 4, 0]} />
        <Bar dataKey="top" name="Top performers" fill="#F59E0B" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
