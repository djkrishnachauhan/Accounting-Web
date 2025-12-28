import { Menu } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="h-14 bg-gray-300 border-b flex items-center px-4 justify-between fixed top-0 left-0 right-0 z-50">
      
      {/* ☰ MENU BUTTON (always visible) */}
      <button
        onClick={() => setSidebarOpen(prev => !prev)}
        className="p-1"
      >
        <Menu size={26} />
      </button>

      <h1 className="text-xl md:text-2xl font-bold tracking-wide">
        RAJASTHAN TOOLS
      </h1>

      <div className="w-8 h-8 rounded-full border-2 border-black" />
    </header>
  );
}
