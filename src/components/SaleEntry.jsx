import { useRef } from "react";
import SaleItemsGrid from "./SaleItemsGrid";
import SaleLedgerGrid from "./SaleLedgerGrid";

export default function SaleEntry() {
  const refs = useRef([]);

  const next = (i) => refs.current[i + 1]?.focus();

  return (
    <div>
      <h2 className="text-xl mb-3">Sales Entry</h2>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {["Date", "Invoice No", "Party Name", "Address", "Mobile"].map(
          (p, i) => (
            <input
              key={p}
              ref={(el) => (refs.current[i] = el)}
              placeholder={p}
              className="border p-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  next(i);
                }
              }}
            />
          )
        )}
      </div>

      <SaleItemsGrid />
      <SaleLedgerGrid />

      <div className="flex gap-3 mt-4">
        <button className="border px-4 py-2">❌ Cancel</button>
        <button className="border px-4 py-2 bg-blue-600 text-white">
          💾 Save
        </button>
      </div>
    </div>
  );
}
