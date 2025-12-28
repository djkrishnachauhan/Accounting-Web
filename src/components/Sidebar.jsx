import { Home, FileText, BarChart } from "lucide-react";

export default function Sidebar({ active, setActive, sidebarOpen }) {
  return (
    <aside
      className={`
        fixed left-0 z-40
        top-14 h-[calc(100vh-56px)]
        w-64 bg-white border-r shadow
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="p-4 flex flex-col gap-2">
        <Nav icon={<Home size={18} />} label="Home" active={active === "home"} onClick={() => setActive("home")} />
        <Nav icon={<FileText size={18} />} label="Vouchers" active={active === "vouchers"} onClick={() => setActive("vouchers")} />
        <Nav icon={<BarChart size={18} />} label="Reports" active={active === "reports"} onClick={() => setActive("reports")} />
      </div>
    </aside>
  );
}

function Nav({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium
        ${active ? "bg-blue-100 text-blue-700" : "hover:bg-slate-100"}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
