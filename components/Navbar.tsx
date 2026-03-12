"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isLightMode = pathname.startsWith("/blog");

  const textColorClass = isLightMode ? "text-[#1d1d1d]" : "text-white";
  
  const linkColorClass = isLightMode ? "text-zinc-600" : "text-zinc-300";
  const hoverColorClass = isLightMode ? "hover:text-[#1d1d1d]" : "hover:text-white";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-[80px] bg-transparent">
      <div className={`${textColorClass} text-3xl md:text-4xl font-signature w-full md:w-auto text-center md:text-left mb-6 md:mb-0`}>
        <Link href="/">Sari Kusumaningrum</Link>
      </div>
      <div className={`hidden md:flex items-center gap-x-[30px] md:text-lg font-medium text-center font-inter ${linkColorClass}`}>
        <Link href="/#home" className={`transition-colors ${hoverColorClass}`}>Home</Link>
        <Link href="/#about" className={`transition-colors ${hoverColorClass}`}>About</Link>
        <Link href="/#service" className={`transition-colors ${hoverColorClass}`}>Service</Link>
        <Link href="/#leadership-roles" className={`transition-colors ${hoverColorClass}`}>Leadership roles</Link>
        <Link href="/#speaking-advisory" className={`transition-colors ${hoverColorClass}`}>Speaking & advisory</Link>
        <Link href="/blog" className={`transition-colors ${hoverColorClass}`}>Blog</Link>
        <Link href="/#connect" className={`transition-colors ${hoverColorClass}`}>Connect</Link>
      </div>
      {/* Mobile menu could be added here */}
    </nav>
  );
}
