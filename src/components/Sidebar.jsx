import { Home, FileText, BarChart } from "lucide-react";

export default function Sidebar({ active, setActive }) {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">
      <div className="p-4 space-y-2">

        <Nav icon={<Home size={18} />} label="Home"
          active={active === "home"}
          onClick={() => setActive("home")}
        />

        <Nav icon={<FileText size={18} />} label="Vouchers"
          active={active === "vouchers"}
          onClick={() => setActive("vouchers")}
        />

        <Nav icon={<BarChart size={18} />} label="Reports"
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
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium
        ${active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-700 hover:bg-slate-100"}
      `}
    >
      {icon}
      {label}
    </button>
  );
}
