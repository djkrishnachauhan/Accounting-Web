export default function VoucherDashboard() {
  return (
    <div className="bg-[#f5eec0] h-full p-10 grid grid-cols-2 gap-10 place-items-center">

      <VoucherButton label="Purchase" />
      <VoucherButton label="Sale" />
      <VoucherButton label="Receipt" />
      <VoucherButton label="Payment" />

      <div className="col-span-2 flex justify-center">
        <VoucherButton label="Journal" />
      </div>

    </div>
  );
}

function VoucherButton({ label }) {
  return (
    <button
      className="w-60 h-20 border-4 border-black text-xl font-bold bg-transparent hover:bg-black hover:text-white transition"
    >
      {label}
    </button>
  );
}
