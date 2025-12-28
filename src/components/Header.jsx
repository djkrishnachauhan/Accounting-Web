import { Menu, User } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4">
      <button onClick={() => setSidebarOpen(p => !p)}>
        <Menu />
      </button>

      <h1 className="font-bold text-xl tracking-wide">
        RAJASTHAN TOOLS
      </h1>

      <User />
    </header>
  );
}
