import { Menu } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="h-14 bg-gray-300 border-b flex items-center px-4 justify-between">
      
      {/* ☰ MENU BUTTON */}
      <button
        className="md:hidden"
        onClick={() => setSidebarOpen(prev => !prev)}
      >
        <Menu size={28} />
      </button>

      <h1 className="text-2xl font-bold tracking-wide">
        RAJASTHAN TOOLS
      </h1>

      <div className="w-8 h-8 rounded-full border-2 border-black" />
    </header>
  );
}
