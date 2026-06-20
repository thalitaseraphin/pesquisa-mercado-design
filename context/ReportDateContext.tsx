"use client";

import { createContext, useContext, useState } from "react";

type ReportDateCtx = {
  selectedDate: string;        // "" = todos, "19/06/2026" = filtrado
  setSelectedDate: (d: string) => void;
};

const ReportDateContext = createContext<ReportDateCtx>({
  selectedDate: "",
  setSelectedDate: () => {},
});

export function ReportDateProvider({ children }: { children: React.ReactNode }) {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <ReportDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </ReportDateContext.Provider>
  );
}

export function useReportDate() {
  return useContext(ReportDateContext);
}
