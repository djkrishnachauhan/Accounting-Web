import VoucherDashboard from "./VoucherDashboard";
import SaleEntry from "./SaleEntry";

export default function Dashboard({ active, setActive }) {

  if (active === "vouchers") {
    return <VoucherDashboard onSelect={setActive} />;
  }

  if (active === "sale") {
    return <SaleEntry />;
  }

  return (
    <div className="text-xl font-semibold">
      {active === "home" && "Welcome"}
      {active === "reports" && "Reports Page"}
      {active === "daybook" && "Day Book Page"}
    </div>
  );
}
