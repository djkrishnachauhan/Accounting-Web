import VoucherDashboard from "./VoucherDashboard";

export default function Dashboard({ active }) {
  if (active === "vouchers") {
    return <VoucherDashboard />;
  }

  return (
    <div className="text-xl font-semibold">
      {active === "home" && "Welcome"}
      {active === "reports" && "Reports Page"}
      {active === "daybook" && "Day Book Page"}
    </div>
  );
}
