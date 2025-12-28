import { useState } from "react";

export default function SaleItemsGrid() {
  const [rows, setRows] = useState([
    { item: "", qty: "", rate: "", disc: "" },
  ]);

  const update = (i, k, v) => {
    const r = [...rows];
    r[i][k] = v;
    setRows(r);
  };

  const amount = (r) => {
    if (!r.item || !r.qty || !r.rate) return "";
    const a =
      r.qty * r.rate * (1 - (parseFloat(r.disc || 0) / 100));
    return a.toFixed(2);
  };

  const subtotal = rows.reduce(
    (s, r) => s + Number(amount(r) || 0),
    0
  );

  return (
    <>
      <table className="w-full border mt-3">
        <thead>
          <tr>
            <th className="w-2/5">Item</th>
            <th>Qty</th>
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
                  value={r.item}
                  onChange={(e) =>
                    update(i, "item", e.target.value)
                  }
                  className="w-full border"
                />
              </td>
              {["qty", "rate", "disc"].map((k) => (
                <td key={k}>
                  <input
                    type="number"
                    min="0"
                    disabled={!r.item}
                    value={r[k]}
                    onChange={(e) =>
                      update(i, k, e.target.value)
                    }
                    className="w-full border"
                  />
                </td>
              ))}
              <td>{amount(r)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right font-semibold mt-1">
        Subtotal: {subtotal.toFixed(2)}
      </div>
    </>
  );
}
