import { Home, FileText, BarChart } from "lucide-react";

export default function Sidebar({ active, setActive, sidebarOpen }) {
  return (
    <aside
      className={`bg-white border-r shadow transition-all duration-300
      ${sidebarOpen ? "w-64" : "w-16"}`}
    >
      <div className="p-4 flex flex-col gap-3">
        <Nav
          icon={<FileText />}
          label="Vouchers"
          active={active === "vouchers"}
          onClick={() => setActive("vouchers")}
        />
        <Nav
          icon={<BarChart />}
          label="Reports"
          active={active === "reports"}
          onClick={() => setActive("reports")}
        />
        <Nav
          icon={<Home />}
          label="Day Book"
          active={active === "home"}
          onClick={() => setActive("home")}
        />
      </div>
    </aside>
  );
}

function Nav({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg font-medium
      ${active ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
