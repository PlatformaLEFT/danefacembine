"use client";
import { GeneralInfo } from "@/utils/types";
import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/utils/constants"; // Import the missing module

export default function Footer() {
  const pathname = usePathname();
  const LogoLeft = "/images/logoLeft.svg";
  const LogoDemos = "/images/demos.png";

  return (
    <footer className="w-full bg-gradient-demos">
      <div className="flex justify-between items-end mx-auto max-w-screen-xl p-5">
        <div className="lg:block hidden">
          <p className="text-white font-semibold text-xl py-2">
            Sediul de campanie: Strada Alexandru Marghiloman 29, Buzău
          </p>
          <div className="flex items-center">
            {navigation.map((link: any) => (
              <Link
                href={link.id}
                key={link.id}
                className={
                  "text-white font-semibold text-lg border-r-2 border-white px-6 sm:px-3 first:pl-0 text-md hover:scale-110" +
                  (pathname === link.id || pathname.startsWith(link.id + "/")
                    ? " font-bold"
                    : "")
                }
                target={link.target}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:m-0">
          <p className="text-white font-semibold lg:text-xs text-lg py-2">
            © {new Date().getFullYear()} Da, ne facem bine. Toate drepturile
            rezervate. <br className="sm:hidden block" /> Site realizat de
            &nbsp;
            <a
              href="https://linktr.ee/danielcorbix"
              className="border-b-[1px] border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Corbix.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
