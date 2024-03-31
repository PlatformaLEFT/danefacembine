"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "../../utils/constants";
import { GeneralInfo } from "@/utils/types";
import { DocumentData } from "firebase/firestore";

export default function Header({
  general,
}: {
  general: DocumentData | GeneralInfo | undefined;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const nav = useRef<any>();
  const navsMobile = () => {
    nav.current.classList.add("closing-animation");
    setTimeout(() => {
      return setIsMenuOpen(!isMenuOpen);
    }, 500);
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.addEventListener("scroll", () => {
        setTimeout(() => {
          return setIsMenuOpen(false);
        }, 500);
      });
    }
  }, [isMenuOpen, setIsMenuOpen]);

  const Logo = "/images/logo-demos.png";

  return (
    <header className="w-full bg-red">
      <div className="bg-red flex mx-auto max-w-screen-xl justify-between items-center px-3 sm:pb-6 sm:pt-2 py-2 sm:gap-8">
        <button
          type="button"
          className="relative inline-flex sm:hidden items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="flex flex-col justify-between">
          <h1 className="lg:text-2xl text-xl text-white py-6 sm:block hidden">
            Ai cu cine vota în 2024? <br /> Dacă nu ai cu cine vota, află că
            societatea se trezește și se implică. <br />
            Ne-am pus și noi această întrebare
            <br /> și am decis să ne implicăm, să construim alternativa.
          </h1>

          {/* gap-2 */}
          <nav className="sm:flex hidden justify-between items-center gap-2">
            {navigation.map((nav) => (
              <Link
                href={nav.id}
                key={nav.id}
                className={
                  "hover:scale-110" +
                  (pathname === nav.id || pathname.startsWith(nav.id + "/")
                    ? " scale-110 font-bold"
                    : "")
                }
                target={nav.target}
              >
                <p className="text-white text-lg m-0">{nav.name}</p>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={300}
            height={300}
            className="object-contain md:w-60 sm:w-36 w-12 h-auto"
            priority
          />
        </Link>
      </div>

      <Link href="/" className="sm:hidden block">
        <h1 className="text-base text-white text-left px-4 pb-4">
          Dacă nu ai cu cine vota, află că societatea se trezește și se implică.
          Ne-am pus și noi această întrebare și am decis să ne implicăm, să
          construim alternativa.
        </h1>
      </Link>

      {isMenuOpen && (
        <nav
          className="sm:hidden flex flex-col fixed top-0 w-3/4 h-fit px-5 py-10 justify-start gap-3 bg-red animation-nav transition-all z-20 rounded-ee-[150px]"
          ref={nav}
        >
          <button
            title="Close menu"
            type="button"
            className="absolute top-4 left-3 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10 animate-spin-fast"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => navsMobile()}
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="mt-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="pb-4 object-contain h-auto"
              priority
            />
          </Link>

          {navigation.map((nav) => (
            <Link
              href={nav.id}
              key={nav.id}
              target={nav.target}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={
                pathname === nav.id || pathname.startsWith(nav.id + "/")
                  ? " font-bold"
                  : ""
              }
            >
              <p className="text-white text-md">{nav.name}</p>
            </Link>
          ))}

          <Link href={general?.donate}>
            <p className="text-white text-md">Donează</p>
          </Link>
        </nav>
      )}
    </header>
  );
}
