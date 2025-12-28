export default function Dashboard({ active }) {
  return (
    <div className="h-full flex items-center justify-center text-xl font-semibold text-slate-500">
      {active.toUpperCase()} CONTENT WILL SHOW HERE
    </div>
  );
}
