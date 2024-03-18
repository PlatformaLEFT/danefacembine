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
      <Link href="/analysis" className="shadow-2xl">
        <h2 className="text-4xl font-black hover:text-gray-500">
          Ai cu cine vota în 2024?
        </h2>
      </Link>

      <h4 className="my-4 text-xl">
        Dacă nu ai cu cine vota, află că societatea se trezește și se implică.
        Ne-am pus și noi această întrebare și am decis să ne implicăm, să
        construim alternativa. Ne interesează ce lăsăm moștenire generațiilor
        viitoare, iar acum{" "}
        <strong className="text-red">România și Europa</strong> se află în
        pericol și au nevoie de ajutorul oamenilor cinstiți, normali să le
        apere.
        <br /> <br />
        <strong className="text-red">
          Platforma Libertate, Egalitate, Fraternitate, Toleranță (L.E.F.T.){" "}
        </strong>
        a început de aproape un an discuții despre coalizarea forțelor democrate
        și independente din societate pentru a genera o masă critică de oameni
        activi, militanți și profesioniști, care vor să se implice direct și
        indirect în consolidarea unei alternative politice reale, venite din
        rândul oamenilor. Momentul alegerilor a venit, iar sindicaliștii și
        ONG-iștii independenți, alături de cetățeni și-au unit eforturile cu un
        partid tânăr, pan-european,{" "}
        <Link
          href="https://voltromania.org/"
          target="_blank"
          className="text-volt font-bold"
        >
          Partidul VOLT
        </Link>
        , care să transforme în realitate participarea în alegeri a celor mai
        implicați militanți ai ultimului deceniu, atât în zona societății
        civile, cât și în cea sindicală independentă. Experiența în lupta cu
        sistemul pentru justiție socială și echitate, pentru justiție
        independentă reprezintă garanția morală a acestei construcții
        civico-sindicalo-politice.
      </h4>

      <Link href="/signatures">
        <h5 className="text-lg font-bold hover:text-gray-500">
          Citește mai departe...
        </h5>
      </Link>
    </div>
  );
}
