import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Temporary dummy data based on the design
const posts = Array(6).fill({
  slug: "how-to-run-a-successful-business-with-your-partner",
  date: "March 20, 2026",
  title: "How to run a successful business with your partner",
  excerpt: "Lorem ipsum dolor sit amet consectetur. Nulla nunc ornare pellentesque quam. Tincidunt nisl ut lectus commodo semper a condimentum nec.",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pb-24 font-inter text-[#1d1d1d]">
      <Navbar />
      
      <div className="pt-32 px-6 md:px-[80px]">
        <div className="mb-12">
          <h1 className="text-4xl md:text-[60px] font-semibold mb-[10px] tracking-tight">Articles</h1>
          <p className="text-[#1d1d1d] font-normal max-w-[902px] text-base leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Nulla nunc ornare pellentesque quam. Tincidunt nisl ut lectus commodo semper a condimentum nec. Ultricies libero eget et auctor phasellus quam suspendisse nunc. Neque nulla vel tortor posuere faucibus quis a nunc.
          </p>
          
          <div className="inline-block relative">
            <select className="appearance-none bg-transparent border border-zinc-300 py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-zinc-500 hover:border-zinc-400 cursor-pointer w-[200px]">
              <option>All Categories</option>
              <option>Leadership</option>
              <option>Strategy</option>
              <option>Communication</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="group block">
              <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden bg-zinc-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="text-base font-medium text-[#1d1d1d] mb-[10px]">{post.date}</div>
              <h2 className="text-lg font-semibold text-[#1d1d1d] mb-[5px] leading-snug group-hover:text-zinc-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-base font-normal text-zinc-600 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
