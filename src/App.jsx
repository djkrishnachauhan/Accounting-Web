import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">

      {/* HEADER */}
      <Header setSidebarOpen={setSidebarOpen} />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        {sidebarOpen && (
          <Sidebar active={active} setActive={setActive} />
        )}

        {/* CONTENT */}
        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          <Dashboard active={active} />
        </main>

      </div>
    </div>
  );
}
