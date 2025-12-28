import { useState } from "react";

export default function SaleLedgerGrid() {
  const [rows, setRows] = useState([{ ledger: "", rate: "" }]);

  const update = (i, k, v) => {
    const r = [...rows];
    r[i][k] = v;
    setRows(r);
  };

  return (
    <table className="w-full border mt-4">
      <thead className="bg-slate-100">
        <tr>
          <th className="w-2/5">Ledger</th>
          <th>Rate %</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>
              <input
                className="w-full"
                value={r.ledger}
                onChange={(e) => update(i, "ledger", e.target.value)}
              />
            </td>
            <td>
              <input
                disabled={!r.ledger}
                type="number"
                min="0"
                value={r.rate}
                onChange={(e) => update(i, "rate", e.target.value)}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
