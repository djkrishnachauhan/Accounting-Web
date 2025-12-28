import { useState } from "react";

export default function SaleEntry() {

  const [rows, setRows] = useState([
    { item: "", qty: "", rate: "", amount: 0 }
  ]);

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;

    const qty = Number(updated[index].qty);
    const rate = Number(updated[index].rate);

    updated[index].amount =
      qty > 0 && rate > 0 ? qty * rate : 0;

    // AUTO ADD NEXT ROW
    if (
      field !== "item" &&
      updated[index].item &&
      updated[index].qty &&
      updated[index].rate &&
      index === rows.length - 1
    ) {
      updated.push({ item: "", qty: "", rate: "", amount: 0 });
    }

    setRows(updated.filter((r, i) =>
      r.item || i === updated.length - 1
    ));
  };

  const total = rows.reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-xl font-semibold mb-6 text-slate-700">
        Sales Invoice
      </h2>

      {/* TABLE */}
      <table className="w-full border text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border text-left">Item</th>
            <th className="p-2 border text-right">Qty</th>
            <th className="p-2 border text-right">Rate</th>
            <th className="p-2 border text-right">Amount</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="border p-1">
                <input
                  value={row.item}
                  onChange={e => updateRow(i, "item", e.target.value)}
                  className="w-full px-2 py-1 border rounded"
                  placeholder="Item name"
                />
              </td>

              <td className="border p-1">
                <input
                  value={row.qty}
                  onChange={e => updateRow(i, "qty", e.target.value)}
                  className="w-full px-2 py-1 border rounded text-right"
                />
              </td>

              <td className="border p-1">
                <input
                  value={row.rate}
                  onChange={e => updateRow(i, "rate", e.target.value)}
                  className="w-full px-2 py-1 border rounded text-right"
                />
              </td>

              <td className="border p-1 text-right">
                {row.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr className="bg-slate-100 font-semibold">
            <td colSpan="3" className="p-2 text-right border">
              Total
            </td>
            <td className="p-2 text-right border">
              {total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}
