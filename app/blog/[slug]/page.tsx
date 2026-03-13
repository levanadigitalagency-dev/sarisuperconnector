"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const relatedPosts = Array(3).fill({
  slug: "how-to-run-a-successful-business-with-your-partner",
  date: "March 20, 2026",
  title: "How to run a successful business with your partner",
  excerpt: "Lorem ipsum dolor sit amet consectetur. Nulla nunc ornare pellentesque quam. Tincidunt nisl ut lectus commodo semper a condimentum nec.",
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
});

export default function ArticleDetailPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Adjust to trigger when section is in the top/middle of reading area
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f5] font-inter text-[#1d1d1d]">
      <Navbar />
      
      {/* Header Section */}
      <article className="pt-32 px-[16px] md:px-[80px]">
        <div className="max-w-[900px] mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-[60px] font-semibold leading-[1.15] mb-[10px] tracking-tight text-center lg:text-left">
            How to run a successful business with your partner
          </h1>
          <p className="text-base font-normal text-zinc-700 leading-relaxed mb-[10px] text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur. Nulla nunc ornare pellentesque quam. Tincidunt nisl ut lectus commodo semper a condimentum nec. Ultricies libero eget et auctor phasellus quam suspendisse nunc. Neque nulla vel tortor posuere faucibus quis a nunc.
          </p>
          <div className="text-base font-medium text-[#1d1d1d] mb-[35px] text-center lg:text-left">
            March 20, 2026
          </div>
        </div>

        {/* Main Banner Image */}
        <div className="relative w-full h-[400px] md:h-[850px] mb-[80px] overflow-hidden bg-zinc-200">
           <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Hero Banner"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[85px] mb-24 relative items-start">
          
          {/* Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-full lg:w-[250px] shrink-0 lg:sticky lg:top-32">
            <div className="flex flex-col gap-y-[10px] text-[18px] font-semibold">
              <Link href="#introduction" 
                className={`flex items-center gap-2 transition-colors ${activeSection === 'introduction' ? 'text-[#1d1d1d]' : 'text-zinc-500 hover:text-[#1d1d1d]'}`}
                onClick={(e) => { e.preventDefault(); document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {activeSection === 'introduction' && <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                Introduction
              </Link>
              <Link href="#conclusion" 
                className={`flex items-center gap-2 transition-colors ${activeSection === 'conclusion' ? 'text-[#1d1d1d]' : 'text-zinc-500 hover:text-[#1d1d1d]'}`}
                onClick={(e) => { e.preventDefault(); document.getElementById('conclusion')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {activeSection === 'conclusion' && <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                Conclusion
              </Link>
              <Link href="#rekomendasion" 
                className={`flex items-center gap-2 transition-colors ${activeSection === 'rekomendasion' ? 'text-[#1d1d1d]' : 'text-zinc-500 hover:text-[#1d1d1d]'}`}
                onClick={(e) => { e.preventDefault(); document.getElementById('rekomendasion')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {activeSection === 'rekomendasion' && <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>}
                Rekomendasion
              </Link>
            </div>
          </aside>

          {/* Prose Content */}
          <div className="flex-1 max-w-[800px] mx-auto lg:mx-0 prose prose-zinc prose-a:text-[#1d1d1d]">
            <section id="introduction" className="mb-[35px] scroll-mt-32">
              <h2 className="text-[44px] font-semibold text-[#1d1d1d] mb-[10px] leading-tight">Introduction</h2>
              <p className="text-zinc-700 leading-relax mb-6">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>
              <p className="text-zinc-700 leading-relax mb-12">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>

              <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden bg-zinc-200">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Content Image"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </section>

            <section id="conclusion" className="mb-[35px] scroll-mt-32">
              <h2 className="text-[44px] font-semibold text-[#1d1d1d] mb-[10px] leading-tight">Conclusion</h2>
              <p className="text-zinc-700 leading-relax mb-6">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>
              <p className="text-zinc-700 leading-relax mb-12">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>
            </section>

            <section id="rekomendasion" className="mb-[35px] scroll-mt-32">
              <h2 className="text-[44px] font-semibold text-[#1d1d1d] mb-[10px] leading-tight">Rekomendasion</h2>
              <p className="text-zinc-700 leading-relax mb-6">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>
              <p className="text-zinc-700 leading-relax mb-12">
                Lorem ipsum dolor sit amet consectetur. Suscipit ullamcorper turpis morbi odio felis pharetra lacus. Facilisi aenean ipsum in massa hendrerit id vel morbi. Non nunc scelerisque in penatibus. Nam hendrerit semper diam nisi lacus. Viverra hendrerit vivamus cras a. In cursus vitae augue pellentesque arcu consectetur ullamcorper. Sed leo tincidunt diam fringilla id aenean amet purus. Est aliquam cras amet ultrices est. Tempus nulla mi elementum egestas non id natoque tellus placerat.
              </p>
            </section>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-24">
          <h2 className="text-[32px] md:text-[44px] font-semibold text-[#1d1d1d] mb-[35px] text-center lg:text-left">
            Recommended Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]">
            {relatedPosts.map((post, index) => (
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
                <h3 className="text-lg font-semibold text-[#1d1d1d] mb-[5px] leading-snug group-hover:text-zinc-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-base font-normal text-zinc-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
