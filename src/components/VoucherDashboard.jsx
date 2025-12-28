export default function VoucherDashboard({ onSelect }) {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-xl font-semibold mb-6 text-slate-700">
        Vouchers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <VoucherCard title="Purchase" />
        <VoucherCard title="Sale" onClick={() => onSelect("sale")} />
        <VoucherCard title="Receipt" />
        <VoucherCard title="Payment" />
        <VoucherCard title="Journal" />

      </div>
    </div>
  );
}

function VoucherCard({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="h-24 bg-white border border-slate-300 rounded-lg
      flex items-center justify-center
      text-lg font-medium text-slate-700
      hover:border-blue-500 hover:text-blue-600
      hover:shadow-md transition"
    >
      {title}
    </button>
  );
}
