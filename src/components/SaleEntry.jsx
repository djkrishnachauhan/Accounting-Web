import { useState } from "react";

export default function SaleEntry() {

  const [header, setHeader] = useState({
    date: "",
    invoice: "",
    party: "",
    address: "",
    mobile: ""
  });

  const [items, setItems] = useState([
    { item: "", qty: "", unit: "", rate: "", disc: "", amount: 0 }
  ]);

  const [ledgers, setLedgers] = useState([
    { name: "", amount: "" }
  ]);

  /* ---------- ITEM LOGIC ---------- */

  const updateItem = (i, field, value) => {
    const rows = [...items];
    rows[i][field] = value;

    const qty = Number(rows[i].qty);
    const rate = Number(rows[i].rate);
    const disc = Number(rows[i].disc);

    let gross = qty * rate;
    let discount = gross * (disc / 100);

    rows[i].amount = gross - discount || 0;

    if (
      rows[i].item &&
      rows[i].qty &&
      rows[i].rate &&
      i === rows.length - 1
    ) {
      rows.push({ item: "", qty: "", unit: "", rate: "", disc: "", amount: 0 });
    }

    setItems(rows.filter((r, idx) =>
      r.item || idx === rows.length - 1
    ));
  };

  const subTotal = items.reduce((s, r) => s + r.amount, 0);

  /* ---------- LEDGER LOGIC ---------- */

  const updateLedger = (i, field, value) => {
    const rows = [...ledgers];
    rows[i][field] = value;

    if (rows[i].name && rows[i].amount && i === rows.length - 1) {
      rows.push({ name: "", amount: "" });
    }

    setLedgers(rows.filter((r, idx) =>
      r.name || idx === rows.length - 1
    ));
  };

  const ledgerTotal = ledgers.reduce(
    (s, r) => s + Number(r.amount || 0), 0
  );

  const grandTotal = subTotal + ledgerTotal;

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">

      {/* HEADER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <input type="date" className="border p-2"
          onChange={e => setHeader({ ...header, date: e.target.value })} />

        <input placeholder="Invoice No" className="border p-2"
          onChange={e => setHeader({ ...header, invoice: e.target.value })} />

        <input placeholder="Party Name" className="border p-2 md:col-span-3"
          onChange={e => setHeader({ ...header, party: e.target.value })} />

        <textarea placeholder="Address (max 4 lines)"
          className="border p-2 md:col-span-2" rows="4"
          onChange={e => setHeader({ ...header, address: e.target.value })} />

        <input placeholder="Mobile No" className="border p-2"
          onChange={e => setHeader({ ...header, mobile: e.target.value })} />

      </div>

      {/* ITEM TABLE */}
      <table className="w-full border text-sm mb-2">
        <thead className="bg-slate-100">
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Rate</th>
            <th>Disc %</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {items.map((r, i) => (
            <tr key={i}>
              <td><input className="border p-1 w-full"
                onChange={e => updateItem(i, "item", e.target.value)} /></td>
              <td><input className="border p-1 w-full text-right"
                onChange={e => updateItem(i, "qty", e.target.value)} /></td>
              <td><input className="border p-1 w-full"
                onChange={e => updateItem(i, "unit", e.target.value)} /></td>
              <td><input className="border p-1 w-full text-right"
                onChange={e => updateItem(i, "rate", e.target.value)} /></td>
              <td><input className="border p-1 w-full text-right"
                onChange={e => updateItem(i, "disc", e.target.value)} /></td>
              <td className="text-right pr-2">{r.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* SUBTOTAL */}
      <div className="text-right font-semibold mb-6">
        Subtotal: ₹ {subTotal.toFixed(2)}
      </div>

      {/* LEDGERS */}
      <table className="w-full border text-sm mb-6">
        <thead className="bg-slate-100">
          <tr>
            <th>Tax / Other Ledger</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {ledgers.map((r, i) => (
            <tr key={i}>
              <td><input className="border p-1 w-full"
                onChange={e => updateLedger(i, "name", e.target.value)} /></td>
              <td><input className="border p-1 w-full text-right"
                onChange={e => updateLedger(i, "amount", e.target.value)} /></td>
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
        <button className="px-5 py-2 border rounded flex items-center gap-2">
          ❌ Cancel
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
          💾 Save
        </button>
      </div>

    </div>
  );
}
