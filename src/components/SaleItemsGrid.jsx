import { useState } from "react";

export default function SaleItemsGrid() {
  const [rows, setRows] = useState([{ item: "", qty: "", rate: "", disc: "" }]);

  const update = (i, k, v) => {
    const r = [...rows];
    r[i][k] = v;
    setRows(r);
  };

  const amount = (r) =>
    r.item && r.qty && r.rate
      ? (r.qty * r.rate * (1 - (r.disc || 0) / 100)).toFixed(2)
      : "";

  const subtotal = rows.reduce((s, r) => s + Number(amount(r) || 0), 0);

  return (
    <>
      <table className="w-full border mb-2">
        <thead className="bg-slate-100">
          <tr>
            <th className="w-2/5">Item</th>
            <th>Qty</th>
            <th className="hidden">Unit</th>
            <th>Rate</th>
            <th>Disc%</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>
                <input
                  className="w-full"
                  value={r.item}
                  onChange={(e) => update(i, "item", e.target.value)}
                />
              </td>
              {["qty", "rate", "disc"].map((k) => (
                <td key={k}>
                  <input
                    disabled={!r.item}
                    type="number"
                    className="w-full"
                    value={r[k]}
                    onChange={(e) => update(i, k, e.target.value)}
                  />
                </td>
              ))}
              <td>{amount(r)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right font-semibold">
        Subtotal: {subtotal.toFixed(2)}
      </div>
    </>
  );
}
