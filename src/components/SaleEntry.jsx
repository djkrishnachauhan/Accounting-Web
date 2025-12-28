import { useRef } from "react";
import SaleItemsGrid from "./SaleItemsGrid";
import SaleLedgerGrid from "./SaleLedgerGrid";

export default function SaleEntry() {
  const refs = useRef([]);

  const focusNext = (i) => refs.current[i + 1]?.focus();

  return (
    <div className="max-w-6xl mx-auto bg-white p-4 border rounded">
      <h3 className="font-semibold mb-4">Sales Entry</h3>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {["Date", "Invoice No", "Party Name", "Address", "Mobile"].map(
          (lbl, i) => (
            <input
              key={i}
              ref={(el) => (refs.current[i] = el)}
              placeholder={lbl}
              className="border px-2 py-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  focusNext(i);
                }
              }}
            />
          )
        )}
      </div>

      <SaleItemsGrid />
      <SaleLedgerGrid />

      <div className="flex justify-end gap-3 mt-4">
        <button className="px-4 py-2 border rounded">❌ Cancel</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          💾 Save
        </button>
      </div>
    </div>
  );
}
