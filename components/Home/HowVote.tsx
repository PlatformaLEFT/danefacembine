import Link from "next/link";

import { TemplateList } from "../Shared";
import { getAnalysis } from "@/utils/firebase";

export default async function Analysis() {
  const analysis = await getAnalysis();
  const firstAnalysis = analysis.sort((a, b) => {
    return parseInt(b.index) - parseInt(a.index);
  })[0];

  return (
    <div>
      <Link href="/applications" className="shadow-2xl">
        <h2 className="text-4xl font-black hover:text-gray-500">
          Ai cu cine vota în 2024?
        </h2>
      </Link>

      <h4 className="my-4 text-xl">
        Dacă nu ai cu cine vota, află că societatea se trezește și se implică.
        Ne-am pus și noi această întrebare și am decis să ne implicăm, să
        construim alternativa. Ne interesează ce lăsăm moștenire generațiilor
        viitoare, iar acum România se află în pericol și are nevoie de ajutorul
        oamenilor cinstiți, normali să le apere.
        <br /> <br />
        Platforma civico-sindicalo-cetățenescă Libertate, Egalitate,
        Fraternitate, Toleranță (L.E.F.T.) a început de aproape un an discuții
        despre coalizarea forțelor democrate și independente din societate
        pentru a genera o masă critică de oameni activi, militanți și
        profesioniști, care vor să se implice direct și indirect în consolidarea
        unei alternative politice reale, venite din rândul oamenilor. Ca în
        orice construcție, lucrurile încep prin exemplul personal, prin
        implicare acolo unde există potențial uman. Momentul alegerilor a venit,
        iar sindicaliștii și ONG-iștii independenți, alături de cetățeni și-au
        unit eforturile cu un partid tânăr. Un singur partid am găsit în final,
        care îmbină și profesionalismul și onestitatea și are o viziune despre
        viitor apropiată de oameni, de mișcarea sindicală cu preocupări serioase
        pentru viitorul nostru ca oameni. Este vorba despre{" "}
        <Link
          href="https://demos.org.ro/"
          target="_blank"
          className="text-demos font-bold"
        >
          Demos – Partidul Democrației și Solidarității
        </Link>
        , un partid înființat în 2018 din energia mișcărilor sociale și de
        stradă de după 2012, partid care a intenționat să candideze în 2020 la
        alegeri, dar barierele impuse prin cea mai restrictivă lege electorală
        din Europa nu au putut fi depășite doar prin eforturi proprii. Astăzi ne
        întâlnim pe acest drum al democratizării societății românești și
        colaborăm pentru a construi cu adevărat o alternativă în beneficiul
        oamenilor, cu gândul la viitorul urmașilor noștri.
        <br /> <br />
        Este un drum greu, îngreunat de legile electorale restrictive și, de
        aceea este nevoie de implicarea fiecăruia dintre noi pentru a ajuta
        partide mici cu care se poate colabora în mod deschis și real, partide
        care să fie aduse pe buletinele de vot. Demos dorește să contribuie la
        susținerea electorală a celor mai implicați militanți ai ultimului
        deceniu, atât în zona societății civile, cât și în cea sindicală
        independentă. Experiența în lupta cu sistemul pentru dreptate socială și
        echitate, pentru justiție independentă, reprezintă garanția morală a
        acestei construcții civico-sindicalo-politice.
      </h4>

      <Link href="/applications">
        <h5 className="text-lg font-bold hover:text-gray-500">
          Citește mai departe...
        </h5>
      </Link>
    </div>
  );
}
