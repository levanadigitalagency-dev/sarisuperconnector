import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    alt: "Instagram",
    src: "/skill-icons_instagram.png",
  },
  {
    href: "https://www.facebook.com/",
    alt: "Facebook",
    src: "/logos_facebook.png",
  },
  {
    href: "https://www.linkedin.com/",
    alt: "LinkedIn",
    src: "/skill-icons_linkedin.png",
  },
  {
    href: "mailto:contact@sarisuperconnector.com",
    alt: "Email",
    src: "/logos_google-gmail.png",
  },
];

const Footer = () => {
  return (
    <footer id="connect" className="bg-[#f5f5f5] pt-16 pb-12 px-[16px] md:px-[80px] border-t border-zinc-200">
      <div className="flex flex-col gap-12 md:flex-row md:items-start justify-between">
        <div className="space-y-6 md:w-[45%]">
          <div className="flex flex-col gap-4">
            <p className="text-3xl md:text-4xl font-signature text-[#1d1d1d]">Sari Kusumaningrum</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.alt}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-base leading-relaxed text-zinc-600">
              For strategic advisory, speaking invitations, and institutional collaborations:
            </p>
            <a
              href="mailto:contact@sarisuperconnector.com"
              className="inline-block text-base font-semibold text-[#1d1d1d] underline"
            >
              contact@sarisuperconnector.com
            </a>
          </div>

          <p className="text-sm text-zinc-500">Sari Kusumaningrum © 2026</p>
        </div>

        <div className="md:w-[45%]">
          <div>
            <h2 className="text-3xl font-bold text-[#1d1d1d]">Join Me on the journey</h2>
            <form className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <label className="sr-only" htmlFor="firstName">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="h-12 border border-zinc-200 bg-white px-4 text-sm placeholder:text-zinc-400 focus:border-[#1d1d1d] focus:outline-none"
              />

              <label className="sr-only" htmlFor="lastName">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="h-12 border border-zinc-200 bg-white px-4 text-sm placeholder:text-zinc-400 focus:border-[#1d1d1d] focus:outline-none"
              />

              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className="col-span-1 md:col-span-2 lg:col-span-1 h-12 border border-zinc-200 bg-white px-4 text-sm placeholder:text-zinc-400 focus:border-[#1d1d1d] focus:outline-none"
              />

              <button
                type="submit"
                className="col-span-full mt-2 w-full bg-[#1d1d1d] px-6 py-3 text-lg font-medium text-white transition hover:bg-zinc-800"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
