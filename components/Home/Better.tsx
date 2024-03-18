import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function Better() {
  return (
    <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-10 gap-6 lg:mx-auto">
      <Link
        href="https://voltromania.org/"
        target="_blank"
        className="sm:hidden block shadow-2xl"
      >
        <Image
          src="/images/better.jpg"
          alt="Posts"
          className="md:w-1/2 w-full object-cover"
          width={100}
          height={100}
          priority
        />
      </Link>

      <div className="sm:w-2/3 w-full">
        <Link href="/manifest">
          <h2 className="text-4xl font-black hover:text-gray-500">
            Ne mai facem bine? DA!
          </h2>
        </Link>

        <h4 className="my-4 text-xl">
          Auzim tot mai des expresia ”nu ne mai facem bine!”, dar resemnarea nu
          este o soluție, pentru că da, ne putem face bine. Suntem prea ocupați
          de probleme, ca să mai căutăm soluții, dar ele există și încep cu
          câteva momente de reflecție, cu încercarea de a avea încredere că mai
          există oameni onești care acum, în ceasul al 12-lea, pot construi o
          alternativă. Nu e chiar atât de greu, trebuie doar să ne găsim busola,
          iar ea se află chiar lângă noi, în jurul nostru, este familia,
          anturajul, sunt cei pentru care sărim imediat în ajutor la greu și cu
          care împărțim momentele de bucurie. Hai să extindem toate astea la
          nivel de comunitate, de societate, să reclădim încrederea în cel mai
          transparent mod posibil pentru a implementa aceste principii ale
          fraternității în toate aspectele societății.
        </h4>

        <Link href="/manifest">
          <h5 className="text-lg underline hover:text-gray-500">
            -&gt; Manifestul electoral
          </h5>
        </Link>
      </div>

      <Link
        href="https://voltromania.org/"
        target="_blank"
        className="sm:flex items-center justify-center sm:w-2/5 h-fit hidden shadow-2xl"
      >
        <Image
          src={"/images/better.jpg"}
          alt="Posts"
          width={600}
          height={600}
          className="object-cover"
        />
      </Link>
    </div>
  );
}
