import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-6 py-8 md:px-[80px]">
      <div className="text-white text-3xl md:text-4xl font-signature w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
        <Link href="/">Sari Kusumaningrum</Link>
      </div>
      <div className="hidden md:flex items-center gap-x-[30px] md:text-lg font-medium text-center font-inter text-zinc-300">
        <Link href="#home" className="hover:text-white transition-colors">Home</Link>
        <Link href="#about" className="hover:text-white transition-colors">About</Link>
        <Link href="#service" className="hover:text-white transition-colors">Service</Link>
        <Link href="#leadership-roles" className="hover:text-white transition-colors">Leadership roles</Link>
        <Link href="#speaking-advisory" className="hover:text-white transition-colors">Speaking & advisory</Link>
        <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
        <Link href="#connect" className="hover:text-white transition-colors">Connect</Link>
      </div>
      {/* Mobile menu could be added here */}
    </nav>
  );
}
