import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black py-8">
        Semneaza pentru a participa la Europarlamentare!
      </h2>

      <p className="text-xl">
        La nivel european dorim întărirea rolului Parlamentului și al
        cetățenilor în luarea deciziilor, transparență totală. Vrem asigurarea
        unui trai decent, tratament egal pentru toți cetățenii UE, o pensie
        minimă, un salariu minim, indemnizații minime la nivelul uniunii. Vrem
        să eliminăm deciziile proaste luate de Comisie, de exemplu renunțarea la
        liberalizarea pieței de energie si reanalizarea funcționării acestui
        domeniu strategic fără presiunea și implicarea băieților deștepți. Vrem
        o agricultură sănătoasă pentru care să se acorde subvențiile necesare
        producției și funcționării fermelor. Vrem un Green Deal realist, care să
        protejeze natura și oamenii.
      </p>
      <br />
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold">
        Dorim sa participam la EUROPARLAMENTARE 2024. Ajutati-ne sa strangem
        cele 200k semnaturi.
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold">
        Conform legislației românească, procedura de strângere a semnăturilor
        online nu este permisă. Cu toate acestea, există posibilitatea de a
        completa listele de semnături FIZIC.
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold">
        ➤ Descarca formularul de semnaturi 🢂{" "}
        <a
          href="/signatures/Lista_de_semnaturi_la_Europarlamentare_LEFT-VOLT.pdf"
          download
        >
          <button className="inline-flex items-center justify-center rounded-md px-4 py-4 text-xl font-semibold shadow-sm bg-[#532f7f] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-black ml-1 uppercase">
            Formularul de semnaturi europarlamentare
          </button>
        </a>
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold">
        ➤ Daca ai peste 18 ani, poti semna formularul si sa il dai mai departe
        la prieteni, cunostinte, rude.
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold">
        ➤ Dupa care semnaturile pot fi aduse personal la punctele de colectare
        desemnate sau trimite prin Posta Romana la unele din adresele de mai
        jos:
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold ml-6">
        1. București, Strada General Constantin Budișteanu 10, București 030167
        - ARTHUB
      </h2>
      <br />
      <h2 className="sm:text-4xl text-2xl text-volt font-bold ml-6">
        2. București, Str. Tudor Arghezi, nr. 26, sc. B, et. 5, ap. 55, Sector 2
        - Interfon 361
      </h2>
    </main>
  );
}
