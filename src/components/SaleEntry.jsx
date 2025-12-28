import { useState, useRef } from "react";

export default function SaleEntry() {

  const itemRefs = useRef([]);
  const ledgerRefs = useRef([]);

  const [items, setItems] = useState([
    { item: "", qty: "", unit: "", rate: "", disc: "", amount: 0 }
  ]);

  const [ledgers, setLedgers] = useState([
    { name: "", rate: "", amount: 0 }
  ]);

  /* ---------------- ITEM LOGIC ---------------- */

  const updateItem = (i, field, value) => {
    const rows = [...items];

    if (["qty", "rate", "disc"].includes(field)) {
      if (value === "" || Number(value) < 0) return;
    }

    rows[i][field] = value;

    const qty = Number(rows[i].qty);
    const rate = Number(rows[i].rate);
    const disc = Number(rows[i].disc);

    const gross = qty * rate;
    const discount = gross * (disc / 100);
    rows[i].amount = gross - discount || 0;

    if (
      rows[i].item &&
      rows[i].qty &&
      rows[i].rate &&
      i === rows.length - 1
    ) {
      rows.push({ item: "", qty: "", unit: "", rate: "", disc: "", amount: 0 });
    }

    setItems(rows.filter((r, idx) => r.item || idx === rows.length - 1));
  };

  const subTotal = items.reduce((s, r) => s + r.amount, 0);

  /* ---------------- LEDGER LOGIC ---------------- */

  const updateLedger = (i, field, value) => {
    const rows = [...ledgers];

    if (field === "rate" && (value === "" || Number(value) < 0)) return;

    rows[i][field] = value;
    rows[i].amount = (subTotal * Number(rows[i].rate || 0)) / 100;

    if (rows[i].name && rows[i].rate && i === rows.length - 1) {
      rows.push({ name: "", rate: "", amount: 0 });
    }

    setLedgers(rows.filter((r, idx) => r.name || idx === rows.length - 1));
  };

  const ledgerTotal = ledgers.reduce((s, r) => s + r.amount, 0);
  const grandTotal = subTotal + ledgerTotal;

  /* ---------------- ENTER HANDLER ---------------- */

  const onEnter = (e, nextRef) => {
    if (e.key === "Enter" && nextRef?.current) {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

      {/* ITEM TABLE */}
      <table className="w-full border text-sm mb-2">
        <thead className="bg-slate-100">
          <tr>
            <th>Item</th><th>Qty</th><th>Unit</th>
            <th>Rate</th><th>Disc %</th><th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r, i) => (
            <tr key={i}>
              {["item","qty","unit","rate","disc"].map((f, idx) => (
                <td key={f}>
                  <input
                    ref={el => itemRefs.current[i*5+idx] = el}
                    className="border p-1 w-full"
                    value={r[f]}
                    onChange={e => updateItem(i, f, e.target.value)}
                    onKeyDown={e =>
                      onEnter(e, itemRefs.current[i*5+idx+1])
                    }
                  />
                </td>
              ))}
              <td className="text-right pr-2">
                {r.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SUBTOTAL */}
      <div className="text-right font-semibold mb-4">
        Subtotal: ₹ {subTotal.toFixed(2)}
      </div>

      {/* LEDGER TABLE */}
      <table className="w-full border text-sm mb-4">
        <thead className="bg-slate-100">
          <tr>
            <th>Ledger</th><th>Rate %</th><th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ledgers.map((r, i) => (
            <tr key={i}>
              <td>
                <input
                  ref={el => ledgerRefs.current[i*2] = el}
                  className="border p-1 w-full"
                  onChange={e => updateLedger(i, "name", e.target.value)}
                  onKeyDown={e =>
                    onEnter(e, ledgerRefs.current[i*2+1])
                  }
                />
              </td>
              <td>
                <input
                  ref={el => ledgerRefs.current[i*2+1] = el}
                  className="border p-1 w-full text-right"
                  onChange={e => updateLedger(i, "rate", e.target.value)}
                />
              </td>
              <td className="text-right pr-2">
                {r.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* GRAND TOTAL */}
      <div className="text-right text-lg font-bold mb-6">
        Grand Total: ₹ {grandTotal.toFixed(2)}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4">
        <button className="px-5 py-2 border rounded">❌ Cancel</button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded">
          💾 Save
        </button>
      </div>

    </div>
  );
}
