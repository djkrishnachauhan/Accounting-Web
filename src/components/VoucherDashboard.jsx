export default function VoucherDashboard({ onSale }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Btn text="Journal" />
      <Btn text="Purchase" />
      <Btn text="Sale" onClick={onSale} />
      <Btn text="Receipt" />
      <Btn text="Payment" />
    </div>
  );
}

function Btn({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border rounded p-6 text-lg hover:bg-gray-100"
    >
      {text}
    </button>
  );
}
