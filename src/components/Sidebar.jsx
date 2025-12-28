export default function Sidebar({ onNavigate }) {
  return (
    <aside className="w-56 bg-slate-900 text-slate-100 flex flex-col">
      <div className="px-4 py-3 font-bold text-lg border-b border-slate-700">
        Accounting ERP
      </div>

      <nav className="flex-1 p-2 space-y-1">
        <SidebarBtn label="Dashboard" onClick={() => onNavigate("dashboard")} />
        <SidebarBtn label="Sale Entry" onClick={() => onNavigate("sale")} />
      </nav>
    </aside>
  );
}

function SidebarBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2 rounded
      hover:bg-slate-800 transition"
    >
      {label}
    </button>
  );
}
