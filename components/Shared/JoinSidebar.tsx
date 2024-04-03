import Link from "next/link";
import Image from "next/image";
import { DocumentData } from "firebase/firestore";
import { GeneralInfo } from "@/utils/types";
import { getInfoGeneral } from "@/utils/firebase";

export default async function JoinSidebar() {
  const general = (await getInfoGeneral()) as
    | DocumentData
    | GeneralInfo
    | undefined;
  const socials = [
    {
      name: general?.buttons.facebook.name,
      url: general?.buttons.facebook.url,
      icon: general?.buttons.facebook.icon,
    },
    {
      name: general?.buttons.instagram.name,
      url: general?.buttons.instagram.url,
      icon: general?.buttons.instagram.icon,
    },
    {
      name: general?.buttons.youtube.name,
      url: general?.buttons.youtube.url,
      icon: general?.buttons.youtube.icon,
    },
    {
      name: general?.buttons.tiktok.name,
      url: general?.buttons.tiktok.url,
      icon: general?.buttons.tiktok.icon,
    },
    {
      name: general?.buttons.discord.name,
      url: general?.buttons.discord.url,
      icon: general?.buttons.discord.icon,
    },
  ];
  return (
    <div className="sticky top-10 sm:w-1/3 w-full flex flex-col gap-10 py-4 h-fit xl:mr-0 lg:mr-4 md:mr-20 sm:mr-32 mr-0">
      {/* <Link href="/">
        <h2 className="font-black text-3xl hover:text-gray-500">
          Abonează-te la newsletter
        </h2>
      </Link> */}

      <h2 className="font-black text-3xl">
        Dorești să ne ajuți în strângerea de semnături?
      </h2>

      <Link href="https://forms.gle/pCP65LkLVfmxKhBR9" target="_blank">
        <h2 className="font-black text-3xl hover:text-gray-500">
          DEVINO VOLUNTAR Demos Buzău!
        </h2>
      </Link>

      <h2 className="font-black text-2xl">Ne facem bine? DA!</h2>

      <div className="flex gap-4 justify-between">
        {socials.map((social) => (
          <Link
            href={social.url}
            key={social.url}
            className="hover:scale-150 transition-all"
            target="_blank"
          >
            <div className="flex items-center gap-2 hover:text-gray-500">
              <Image
                src={social.icon}
                alt={social.name}
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
