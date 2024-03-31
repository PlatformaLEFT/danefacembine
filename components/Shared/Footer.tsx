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
    <footer className="w-full bg-red">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5 py-2">
        <div className="lg:block hidden">
          <div className="flex gap-2 items-center">
            {navigation.map((link: any) => (
              <Link
                href={link.id}
                key={link.id}
                className={
                  "text-white border-r-2 border-white px-6 sm:px-2 text-md hover:scale-110" +
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

        <div className="lg:m-0 py-4">
          <div className="flex items-center justify-end gap-4">
            <Link href="https://demos.org.ro/">
              <Image
                src={LogoDemos}
                alt="LogoDemos"
                width={100}
                height={100}
                className="lg:ml-auto md:w-14 w-24 object-contain h-auto"
                priority
              />
            </Link>
            <Link href="https://left.org.ro/">
              <Image
                src={LogoLeft}
                alt="LogoLeft"
                width={100}
                height={100}
                className="lg:ml-auto md:w-14 w-24 object-contain h-auto"
                priority
              />
            </Link>
          </div>
          <p className="text-white font-semibold lg:text-xs text-base py-2">
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
