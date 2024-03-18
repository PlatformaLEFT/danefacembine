import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Volt() {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto">
      <Link
        href="/signatures"
        target="_blank"
        className="sm:hidden block shadow-2xl"
      >
        <Image
          src="/images/volt.jpg"
          alt="Posts"
          className="md:w-1/2 w-full object-cover"
          width={100}
          height={100}
          priority
        />
      </Link>

      <div className="sm:w-2/3 w-full">
        <Link href="/signatures">
          <h2 className="text-4xl font-black text-volt hover:text-gray-500">
            Semnezi pentru Partidul VOLT!
          </h2>
        </Link>

        <h4 className="my-4 text-xl">
          Semnezi pentru societatea civilă autentică și pentru sindicaliștii
          onești, pentru tineri, pentru un viitor demn, sigur, pentru un prim
          proiect de țară, pentru dreptul de a te implica în treburile
          comunității și ale țării, pentru o societate solidară, pentru asanarea
          morală a instituțiilor și autorităților statului.
          <br /> <br />
          <strong className="text-volt">Programul nostru</strong> este direct și
          ferm, vrem să participăm la administrarea problemelor țării împreună
          cu cetățenii, cu comunitățile. Avem idei, soluții, dar ele nu
          valorează nimic fără a fi validate de oameni, de comunitate, de
          societate.
          <br /> <br />
          <strong className="text-volt">Mai presus de toate:</strong> Vrem ca
          nimeni să nu fie lăsat în urmă!
        </h4>
      </div>

      <Link
        href="https://voltromania.org/"
        target="_blank"
        className="sm:flex items-center justify-center sm:w-2/5 h-fit hidden shadow-2xl"
      >
        <Image
          src="/images/volt.jpg"
          alt="Posts"
          width={600}
          height={600}
          className="object-cover"
        />
      </Link>
    </div>
  );
}
