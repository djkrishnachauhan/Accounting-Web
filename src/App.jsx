import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import VoucherDashboard from "./components/VoucherDashboard";
import SaleEntry from "./components/SaleEntry";

export default function App() {
  const [screen, setScreen] = useState("voucher");

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 overflow-auto p-4">
          {screen === "voucher" && (
            <VoucherDashboard onSale={() => setScreen("sale")} />
          )}

          {screen === "sale" && <SaleEntry />}
        </div>
      </div>
    </div>
  );
}
