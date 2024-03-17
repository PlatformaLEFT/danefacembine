import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black py-8">Ai cu cine vota în 2024?</h2>
      <div className="flex lg:flex-row flex-col-reverse justify-between gap-4 relative">
        <p className="text-xl lg:w-3/5">
          Dacă nu ai cu cine vota, află că societatea se trezește și se implică.
          Ne-am pus și noi această întrebare și am decis să ne implicăm, să
          construim alternativa. Ne interesează ce lăsăm moștenire generațiilor
          viitoare, iar acum{" "}
          <strong className="text-red">România și Europa </strong>se afl ă în
          pericol și are nevoie de ajutorul oamenilor cinstiți, normali să le
          apere.
          <br /> <br />
          <strong className="text-red">
            Platforma Libertate, Egalitate, Fraternitate, Toleranță (L.E.F.T.){" "}
          </strong>
          a început de aproape un an discuții despre coalizarea forțelor
          democrate și independente din societate pentru a genera o masă critică
          de oameni activi, militanți și profesioniști, care vor să se implice
          direct și indirect în consolidarea unei alternative politice reale,
          venite din rândul oamenilor. Momentul alegerilor a venit și
          sindicaliștii și ONG-iști independenți, alături de cetățeni și-au unit
          eforturile cu un partid tânăr, al tinerilor, pan-european,{" "}
          <Link
            href="https://voltromania.org/"
            target="_blank"
            className="text-volt font-bold"
          >
            Partidul VOLT
          </Link>
          , care să transforme în realitate participarea în alegeri a celor mai
          implicați militanți ai ultimului deceniu atât în zona societății
          civile cât și în cea sindicală independentă. Experiența în lupta cu
          sistemul pentru justiție socială și echitate, pentru justiție
          independentă reprezintă garanția morală a acestei construcții
          civico-sindicalo-politice.
          <br /> <br />
          <strong className="text-volt">Semnezi pentru Partidul VOLT</strong>,
          semnezi pentru societatea civilă autentică și pentru sindicaliștii
          onești, pentru tineri, pentru un viitor demn, sigur, pentru un prim
          proiect de țară, pentru dreptul de a te implica în trebuirile
          comunității și ale țării, pentru o societate solidară, pentru asanarea
          morală a instituțiilor și autorităților statului.
          <br /> <br />
          <strong className="text-volt">Programul nostru</strong> este direct și
          ferm, vrem să participăm la administrarea problemelor țării împreună
          cu cetățenii, cu comunitățile. Avem idei, soluții, dar ele nu
          valorează nimic fără a fi validate de oameni, de comunitate, de
          societate.
          <br /> <br />
          La nivel european dorim întărirea rolului Parlamentului și al
          cetățenilor în luarea deciziilor, transparență totală. Vrem asigurarea
          unui trai decent, tratament egal pentru toți cetățenii UE, o pensie
          minimă, un salariu minim, indemnizații minime la nivelul uniunii. Vrem
          să eliminăm deciziile proaste luate de Comisie, de exemplu renunțarea
          la liberalizarea pieței de energie si reanalizarea funcționării
          acestui domeniu strategic fără presiunea și implicarea băieților
          deștepți. Vrem o agricultură sănătoasă pentru care să se acorde
          subvențiile necesare producției și funcționării fermelor. Vrem un
          Green Deal realist, care să protejeze natura și oamenii.
          <br /> <br />
          La nivel național, local, vrem să aducem în discuție un prim proiect
          de țară. Vrem să reformăm drastic instituții, autorități și să le
          punem sub control cetățenesc, vrem transparență totală, toate
          documentele instituției să fi e afi șate obligatoriu pe site. Vrem ca
          cetățenii să poată participa la luarea deciziilor. Vrem să avem
          servicii publice de încredere. Vrem echitate și egalitate de șanse.
          Vrem multe, dar nu mai avem loc aici....
          <br /> <br />
          <strong className="text-volt">Mai presus de toate:</strong> Vrem ca
          nimeni să nu fie lăsat în urmă!
          <br /> <br />
          <strong className="text-2xl text-volt">
            Semnează pentru asta! Vino alături de noi!
          </strong>
          <br /> <br />
        </p>

        <div className="lg:sticky top-0 flex lg:flex-col sm:flex-row flex-col lg:justify-start justify-between gap-10 py-4 lg:h-screen lg:border-l-2 lg:border-b-0 border-b-2 border-[#532f7f] lg:pl-8 lg:w-2/5">
          <div className="flex flex-col justify-between gap-10">
            <h2 className="lg:text-5xl text-2xl font-bold">
              Doresti sa ne ajuti in strangerea de semnaturi?
            </h2>
            <Link href="https://forms.gle/pCP65LkLVfmxKhBR9" target="_blank">
              <button className="inline-flex items-center justify-center rounded-md px-4 py-4 lg:text-4xl text-xl w-full font-semibold shadow-sm bg-red text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-black ml-1">
                DEVINO VOLUNTAR LEFT!
              </button>
            </Link>
          </div>

          <div className="flex flex-col justify-between gap-10">
            <h2 className="lg:text-5xl text-2xl font-bold">
              Ne facem bine? DA!
            </h2>
            <Link href="/signatures/euro">
              <button className="inline-flex items-center justify-center rounded-md px-4 py-4 lg:text-4xl text-xl w-full font-semibold shadow-sm bg-[#532f7f] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-black ml-1 uppercase">
                Semneaza pentru europarlamentare!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
