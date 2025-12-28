import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import VoucherDashboard from "./components/VoucherDashboard";
import SaleEntry from "./components/SaleEntry";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("dashboard");

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar onNavigate={setActiveScreen} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 overflow-auto p-4">
          {activeScreen === "dashboard" && (
            <VoucherDashboard onSale={() => setActiveScreen("sale")} />
          )}

          {activeScreen === "sale" && <SaleEntry />}
        </main>
      </div>
    </div>
  );
}
