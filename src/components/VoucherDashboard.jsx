export default function VoucherDashboard({ onSale }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-slate-700">
        Voucher Dashboard
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <VoucherCard title="Journal" />
        <VoucherCard title="Purchase" />
        <VoucherCard title="Sale" onClick={onSale} />
        <VoucherCard title="Receipt" />
        <VoucherCard title="Payment" />
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
      hover:border-blue-600 hover:text-blue-600
      hover:shadow transition"
    >
      {title}
    </button>
  );
}
