import Link from "next/link";
import { navLinks } from "../../constants";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Navigation() {
  return (
    <nav>
      <div className="kontainer">
        <div className="w-full row flex justify-between items-center">
          <Link href="/" className="w-1/3 text-3xl text-packship-purple font-bold">
            <figure>
              <span className="text-2xl font-bold text-yellow-400">LayerLeap</span>
              {/* <Image
                src={packshipLogo}
                alt="Packship logo"
                width={150}
              /> */}
            </figure>
          </Link>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                  className={`${link.name === "Try It!" ? "bg-yellow-500 text-white hover:bg-yellow-400" : "text-white hover:text-yellow-500"} font-bold px-8 py-4 rounded-full transition`}
                  target={isExternal(link.href) ? "_blank" : "_self"}
                  rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
