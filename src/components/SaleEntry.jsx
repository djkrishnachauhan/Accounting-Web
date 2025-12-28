export default function SaleEntry() {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow">

      <h2 className="text-xl font-semibold text-slate-700 mb-6">
        Sales Invoice
      </h2>

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <div>
          <label className="block text-sm font-medium text-slate-600">
            Party Ledger
          </label>
          <input
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Select Party Ledger"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">
            Invoice No
          </label>
          <input
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="INV-001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">
            Date
          </label>
          <input
            type="date"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

      </div>

      {/* Ledger Entries */}
      <div className="border rounded mb-6 overflow-hidden">

        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="p-2 text-left">Ledger Name</th>
              <th className="p-2 text-right">Debit</th>
              <th className="p-2 text-right">Credit</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-2">
                <input
                  className="w-full border rounded px-2 py-1"
                  placeholder="Sales Account"
                />
              </td>
              <td className="p-2 text-right">
                <input
                  className="w-full border rounded px-2 py-1 text-right"
                  placeholder="0.00"
                />
              </td>
              <td className="p-2 text-right">
                <input
                  className="w-full border rounded px-2 py-1 text-right"
                  placeholder="0.00"
                />
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      {/* Narration */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-600">
          Narration
        </label>
        <textarea
          className="mt-1 w-full border rounded px-3 py-2"
          rows="3"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 rounded border">
          Cancel
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Save
        </button>
      </div>

    </div>
  );
}
