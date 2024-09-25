import Link from "next/link";
import { footerLinks } from "../../constants";
import Image from "next/image";
import layerleapLogo from "../app/assets/logo.png";

const isExternal = (url: string) => /^https?:\/\//.test(url);
const isAnchorLink = (url: string) => /^#/.test(url);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-framify-black w-full py-8 sm:py-32 flex justify-start sm:justify-between items-start">
      <div className="kontainer">
        <div className="row flex flex-col sm:flex-row gap-16 sm:gap-0">
          <ul className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-24">
            {footerLinks.map((section, index) => (
              <li key={index} className="flex flex-col">
                <h4 className="text-left text-yellow-500 text-xl font-semibold mb-4">{section.title}</h4>
                <ul className="text-left flex flex-col gap-2 items-start justify-start">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={isAnchorLink(link.href) ? `/${link.href}` : link.href}
                        className="block hover:underline text-white"
                        target={isExternal(link.href) ? "_blank" : "_self"}
                        rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="text-left w-full sm:w-1/3 flex flex-col items-center sm:items-start justify-start">
            <Link
              href="/"
              className="text-3xl flex justify-center items-center gap-4"
            >
              <Image
                src={layerleapLogo}
                alt="LayerLeap logo"
                width={75}
                className="rounded-lg"
              /> 
              <span className="text-5xl font-bold text-yellow-400">LayerLeap</span>
            </Link>
            <span className="text-xs font-medium mt-4 text-white">
              Copyright &copy; {currentYear} Hatem Soliman and the LayerLeap documentation authors.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
