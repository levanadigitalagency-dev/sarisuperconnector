import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f5f5f5] pt-16 pb-12 px-6 md:px-[80px]">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Left Side: Branding and Contact */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <div className="text-[32px] md:text-[40px] text-[#1d1d1d] font-signature">
            Sari Kusumaningrum
          </div>
          
          <div className="flex items-center gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">IG</div>
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">FB</div>
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold">IN</div>
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">GM</div>
          </div>
          
          <div className="text-[15px] text-[#1d1d1d] max-w-[400px] leading-relaxed font-medium">
            For strategic advisory, speaking invitations, and institutional collaborations:
            <br />
            <a href="mailto:contact@sarisuperconnector.com" className="underline hover:text-zinc-600 transition-colors mt-1 block">
              contact@sarisuperconnector.com
            </a>
          </div>
          
          <div className="text-sm text-[#1d1d1d] font-medium mt-4">
            Sari Kusumaningrum &copy; 2026
          </div>
        </div>

        {/* Right Side: Newsletter */}
        <div className="w-full lg:w-3/5 flex flex-col items-start lg:items-end gap-6 pt-16 md:pt-0">
          <div className="w-full max-w-[650px] flex flex-col items-start">
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#1d1d1d] tracking-tight mb-4">
              Join Me on the journey
            </h2>
            
            <form className="w-full flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-transparent border border-zinc-300 px-4 py-2.5 text-[14px] focus:outline-none focus:border-zinc-500 placeholder:text-zinc-400"
                />
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-transparent border border-zinc-300 px-4 py-2.5 text-[14px] focus:outline-none focus:border-zinc-500 placeholder:text-zinc-400"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border border-zinc-300 px-4 py-2.5 text-[14px] focus:outline-none focus:border-zinc-500 placeholder:text-zinc-400"
                />
                
                {/* Empty columns for spacing on desktop */}
                <div className="hidden sm:block sm:col-span-2"></div>
                
                {/* Button aligned under Email field */}
                <button 
                  type="submit" 
                  className="w-full bg-[#333333] hover:bg-black text-white px-8 py-2.5 text-[15px] font-medium transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </footer>
  );
}
