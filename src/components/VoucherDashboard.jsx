export default function VoucherDashboard() {
  return (
    <div className="h-full p-10 bg-[#f6f1c1]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

        <VoucherCard title="Purchase" />
        <VoucherCard title="Sale" />
        <VoucherCard title="Receipt" />
        <VoucherCard title="Payment" />

        <div className="md:col-span-2 flex justify-center">
          <VoucherCard title="Journal" />
        </div>

      </div>
    </div>
  );
}

function VoucherCard({ title }) {
  return (
    <div
      className="w-64 h-24 flex items-center justify-center
      border-4 border-black bg-[#f6f1c1]
      text-xl font-bold tracking-wide
      shadow-[6px_6px_0_0_black]
      hover:bg-black hover:text-white transition"
    >
      {title}
    </div>
  );
}
