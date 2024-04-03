import { JoinSidebar } from "@/components/Shared";
import Member from "@/components/Shared/Member";
import { MemberInfo } from "@/utils/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifest - LEFT",
  description:
    " Acestea ne sunt valorile fundamentale, valorile unei platforme civico-politice care se angajează să creeze o societate echitabilă și progresivă. Libertatea, în acest context, înseamnă promovarea drepturilor individuale, respectul pentru autonomia personală și o societate deschisă, în care fiecare individ poate să-și exprime opinia și să-și urmeze aspirațiile. Egalitatea, echitatea reprezintă angajamentul pentru eliminarea inegalităților sociale și economice, asigurând acces egal la oportunități și resurse. Fraternitatea implică solidaritatea între membrii societății, construind legături de sprijin și empatie între indivizi. Toleranța înseamnă acceptarea diversității și promovarea dialogului indiferent de temă pentru cultivarea respectului reciproc și eliminarea urii de orice fel. Aceste valori oferă fundația pentru un proiect politic care caută să construiască un viitor mai echitabil, în care fiecare cetățean are oportunitatea de a-și atinge potențialul și de a trăi în armonie cu ceilalți.",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
  metadataBase: new URL("https://left.org.ro/manifest"),
};

export default function Manifest() {
  const membersArray = [
    {
      description: `<strong>Studii și activitate</strong> <br/>Sunt născut în municipiul Buzău în 1974. Sunt absolvent al liceului B.P. Hașdeu și al Facultății de fizică a Universității din București, iar din  2001 lucrez în cercetare, în prezent sunt, cercetător științific gradul 2 la Măgurele, doctor în fizică din 2007, implicat în cercetări privind procesarea materialelor cu laser. Am efectuat mai multe stagii de specializare în institute din străinătate inclusiv prin burse interguvernamentale, burse ale Comisiei Europene sau contracte directe.<br/><strong>Activitatea civică</strong> <br/>Problemele din societate m-au mobilizat și în zona civică și sindicale. În plan civic, am inițiat și participat la organizarea a numeroase acțiuni începând cu Piața Universității 2012. <br/>Din 2013 am organizat rezistența împotriva fracturării hidraulice  la gazele de șist de la Pungești, unde am reușit să oprim compania Chevron și să apărăm localnicii în 37 de dosare penale inventate de tandemul PSD-PNL. Am organizat Ziua națională de luptă împotriva fracturării hidraulice pe 4 aprilie 2013 în zeci de orașe din țară și străinătate, fapt ce a generat o uriașă dezbatere națională pe tema gazelor de șist. <br/>Am sprijinit din 2011 campania Salvați Roșia Montană și am pus Buzăul pe harta acestor proteste organizând mai multe marșuri în sprijinul campaniei Salvați Roșia Montană la Buzău. Am organizat un front comun al zonei ONG, a proprietarilor de păduri, a activiștilor în 2015 cu ocazia votului pe Codul silvic ce a dus la o puternică opoziție cetățenească și eliminarea prevederilor ce permiteau defrișările. <br/>Am inițiat campania ”București fără ei” pentru strângerea semnăturilor necesare declanșării referendumului pentru demiterea Gabrielei Firea din funcția de primar. Am participat la mișcările de stradă de după 2017.Am participat la acțiunile societății civile privind implementarea directivei privind avertizorii de integritate din 2021-2023 <br/><strong>Sindicalism</strong> <br/>Nici în cercetare viața nu a fost simplă, abuzurile și găștile sprijinite de guvernanți m-au determinat să mă implic în activitatea sindicală unde organizațiile pe care le reprezint au devenit un reper de integritate și profesionalism, ultimele bariere în calea distrugerii sistemului de cercetare de către politicieni perfizi, incompetenți și penibili. <br/>În plan sindical, am activat începând cu 2006 și am participat la numeroase negocieri colective și delegații sindicale în relația cu autoritățile. în 2016 am înființat o nouă federație sindicală în domeniul învățământului superior și al cercetării științifice Federația Sindicală hermes, federație de referință astăzi în demersurile de asanare morală a domeniilor educației și cercetării. Dincolo de eforturile susținute de salvare a mai multor institute naționale de cercetare, federația .i Sindicatul Radiația din Măgurele au devenit un reper al luptei sindicale adevărate, un ultim refugiu pentru mulți colegi în fața abuzurilor conducerilor incompetente și corupte. Anul 2020, în plină pandemie, a fost un an greu pentru cercetarea de pe Platforma Măgurele. Proiectul realizării celui mai mare laser din lume era pe cale să fie distrus, numeroși cercetători și alte persoane incomode pentru conducerea de la acea vreme au fost sancționate, La solicitarea colegilor, cu sprijinul lor am organizat și condus lupta pentru salvarea Marelui Laser de la Măgurele ce fusese adus în colaps de un management defectuos și interese ascunse, ilegitime ale unor grupuri politice. A fost o luptă grea din care, prin unitatea  unui grup inimos, solid, am ieșit învingători, iar proiectul se află pe drumul cel bun. <br/>Întotdeauna m-am implicat sau am fost solicitat să mă implic acolo unde a fost mai greu, acolo unde comunitățile erau asaltate de autoritățile corupte și mari corporații lacome, în salvarea unor institute de cercetare din mâinile mafiei imobiliar-politice și am devenit principala voce a ”opoziției” din cercetarea științifică cu interviuri în cele mai mari reviste, Nature și Science, iar Federația Sindicală Hermes este astăzi un reper de corectitudine, consecventă și integritate pentru orice cercetător sau cadru didactic onest.<br/> <strong>Contact:</strong><br/> <a href="mailto:gepurescu@yahoo.com">Mail: gepurescu@yahoo.com</a> <br/> <a href="tel:0742689126">Telefon: 0742689126</a>`,
      image: "/images/george.jpg",
      index: "1",
      name: "George Epurescu",
    },
    {
      description: `Despre mine pot spune că sunt o persoană activă şi activistă, sunt activistă în protecția animalelor, fac parte dintr-o asociație care deține un adăpost de câini, dar avem şi destule pisicuțe. Iubesc şi oamenii prin logica empatiei față de animale, evident că iubesc şi oamenii pentru că iubirea nu este "alternativă " şi se manifestă asupra fiecărei ființe vii, motiv pentru care de vreo 10 ani am renunțat şi la carne. </br> Iubesc oamenii şi prin firescul meseriei mele, sunt asistentă medicală. Sunt o fire justițiară, altruistă şi demnă şi nu o să-mi pierd niciodată aceste valori. Mă bucur că m am alăturat Demos, simt că avem multe valori comune!`,
      image: "/images/Adriana.jpg",
      index: "2",
      name: "Adriana Ticea",
    },
    {
      description: `Mă bucur să mă alătur Platformei Demos! <br/>Sunt din Buzău, am 43 de ani și activez în domeniul automatizarilor industriale pentru debitarea și sudarea tablelor (echipamente automate și roboți industriali).<br/> Am absolvit Universitatea Politehnica din București Facultatea de Inginerie mecanică și mecatronică cu  specializarea de Inginer mecanic - roboți industriali și apoi masterul cu specializarea Mecatronică avansată.<br/> Sunt IWI (International Welding Inspector) din 2016.<br/> De asemenea președintele Asociației pentru protecția animalelor ”Hăpluț și prietenii”. Lupta pentru drepturile animalelor am dus-o de multe ori în instanță și treptat mi-am dat seama că este nevoie de implicare pentru că soluțiile sunt întotdeauna politice.`,
      image: "/images/Sorin.jpg",
      index: "3",
      name: "Sorin Udrea",
    },
  ];
  return (
    <main className="max-w-screen-xl mx-auto p-3 mb-10">
      <h2 className="text-4xl font-black hover:text-gray-500 py-8">Manifest</h2>

      <div className="flex md:flex-row flex-col gap-8 relative">
        <div className="flex flex-col gap-10 mt-5 sm:w-2/3 w-full">
          {membersArray.map((member: MemberInfo) => (
            <Member member={member} key={member.index} />
          ))}
        </div>

        <JoinSidebar />
      </div>
    </main>
  );
}
