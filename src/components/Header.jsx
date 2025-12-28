export default function Header() {
  return (
    <div className="h-16 bg-white border-b shadow-sm flex items-center px-6 justify-between">
      
      <div className="text-lg font-semibold text-slate-700">
        Voucher Entry
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-slate-600">
          Admin
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
          A
        </div>
      </div>

    </div>
  );
}
