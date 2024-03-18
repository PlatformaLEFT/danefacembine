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
    <>
      {/* <Link href="/">
        <h2 className="font-black text-3xl hover:text-gray-500">
          Abonează-te la newsletter
        </h2>
      </Link> */}

      <Link href={general?.donate} target="_blank">
        <h2 className="font-black text-3xl hover:text-gray-500">Donează</h2>
      </Link>

      <Link href="https://forms.gle/pCP65LkLVfmxKhBR9" target="_blank">
        <h2 className="font-black text-3xl hover:text-gray-500">
          Devino Voluntar!
        </h2>
      </Link>

      <h2 className="font-black text-2xl">
        Ia legătura cu coordonatorii platformei LEFT
      </h2>

      <Link href="mailto:contact@danefacembine.ro" target="_blank">
        <h2 className="font-black text-2xl hover:text-gray-500">
          e-mail: <br /> contact@danefacembine.ro
        </h2>
      </Link>

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
    </>
  );
}
