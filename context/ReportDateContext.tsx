"use client";

import { createContext, useContext, useState } from "react";

type ReportDateCtx = {
  selectedDate: string;
  setSelectedDate: (d: string) => void;
  historyOpen: boolean;
  setHistoryOpen: (open: boolean) => void;
};

const ReportDateContext = createContext<ReportDateCtx>({
  selectedDate: "",
  setSelectedDate: () => {},
  historyOpen: false,
  setHistoryOpen: () => {},
});

export function ReportDateProvider({ children }: { children: React.ReactNode }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [historyOpen, setHistoryOpen] = useState(false);
  return (
    <ReportDateContext.Provider value={{ selectedDate, setSelectedDate, historyOpen, setHistoryOpen }}>
      {children}
    </ReportDateContext.Provider>
  );
}

export function useReportDate() {
  return useContext(ReportDateContext);
}
