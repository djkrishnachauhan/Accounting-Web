export default function Sidebar({ active, setActive }) {
  const menu = [
    { id: "home", label: "Home" },
    { id: "vouchers", label: "Vouchers" },
    { id: "reports", label: "Reports" },
    { id: "daybook", label: "Day Book" },
  ];

  return (
    <div className="w-60 min-h-screen bg-slate-900 text-slate-200 flex flex-col">
      
      <div className="h-16 flex items-center px-6 text-lg font-semibold border-b border-slate-700">
        Accounting
      </div>

      <div className="flex-1 py-4">
        {menu.map(m => (
          <button
            key={m.id}
            onClick={() => setActive(m.id)}
            className={`w-full text-left px-6 py-3 text-sm
              transition
              ${active === m.id
                ? "bg-slate-800 text-white border-l-4 border-blue-500"
                : "hover:bg-slate-800"}
            `}
          >
            {m.label}
          </button>
        ))}
      </div>

    </div>
  );
}
