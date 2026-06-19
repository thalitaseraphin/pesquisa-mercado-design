"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "YouTube / Gratuito", value: 43, fill: "#1E3A8A" },
  { name: "Cursos online pagos", value: 22, fill: "#2563EB" },
  { name: "Graduação", value: 20, fill: "#60A5FA" },
  { name: "Autodidatas", value: 10, fill: "#93C5FD" },
  { name: "Outros", value: 5, fill: "#DBEAFE" },
];

export default function LearningChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} cx="50%" cy="45%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={2}>
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.fill} stroke="#fff" strokeWidth={2} />
          ))}
        </Pie>
        <Tooltip formatter={(v) => [`${Number(v)}%`, ""]} contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E7EF" }} />
        <Legend iconSize={10} wrapperStyle={{ fontSize: 11, paddingTop: 8 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
