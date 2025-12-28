import { Home, FileText, BarChart } from "lucide-react";

export default function Sidebar({ active, setActive, sidebarOpen }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-full w-64
        bg-white border-r shadow
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0
      `}
    >
      <div className="p-4 flex flex-col gap-3">
        <Nav
          icon={<Home />}
          label="Home"
          active={active === "home"}
          onClick={() => setActive("home")}
        />

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
      </div>
    </aside>
  );
}

function Nav({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg font-medium
        ${active ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
