"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

type Locale = "en" | "sr";

type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  location: string;
  description: string;
  imageSrc: string;
};

type ProjectWithGallery = Project & {
  galleryImages: string[];
};

type SectionLink = {
  href: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
};

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type Content = {
  badge: string;
  studioName: string;
  cta: string;
  nav: SectionLink[];
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  featuredProjectLabel: string;
  featuredProjectCta: string;
  stats: Array<{ value: string; label: string }>;
  note: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutDetails: string[];
  servicesLabel: string;
  servicesTitle: string;
  services: Service[];
  projectsLabel: string;
  seeMoreProjects: string;
  seeLessProjects: string;
  projects: Project[];
  openProjectLabel: string;
  processLabel: string;
  processTitle: string;
  processSteps: ProcessStep[];
  approachLabel: string;
  approachTitle: string;
  principles: string[];
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  contactEmail: string;
  contactPhone: string;
  contactPhoneHref: string;
  contactCityLabel: string;
  contactCity: string;
  availabilityLabel: string;
  availabilityText: string;
  footer: string;
};

type SearchParamMap = Promise<Record<string, string | string[] | undefined>>;

const PROJECT_CARD_IMAGE_QUALITY = 72;
const GALLERY_MAIN_IMAGE_QUALITY = 76;
const GALLERY_THUMBNAIL_IMAGE_QUALITY = 56;

const content: Record<Locale, Content> = {
  en: {
    badge: "EN",
    studioName: "Milan Milojevic Architecture",
    cta: "Book a consultation",
    nav: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
    ],
    heroEyebrow: "Residential architecture studio",
    heroTitle: "Architecture defined by light, proportion, and everyday comfort.",
    heroText:
      "Milan Milojevic designs private residences and residential concepts across the region, balancing contemporary expression with practical, long-term livability.",
    featuredProjectLabel: "Featured project",
    featuredProjectCta: "Open gallery",
    stats: [
      { value: "15+", label: "residential concepts and design studies" },
      { value: "7", label: "years of architectural design and delivery" },
    ],
    note:
      "Each commission is handled personally, from the first brief to final documentation, ensuring continuity, precision, and clear communication.",
    aboutLabel: "About",
    aboutTitle: "A personal practice with rigorous design standards.",
    aboutText:
      "Milan Milojevic works at the intersection of architecture and daily life. Projects are shaped through careful site analysis, realistic planning, and a restrained material palette that stays relevant over time.",
    aboutDetails: [
      "Every project starts with orientation, terrain, neighboring context, and the client's daily routines.",
      "Design decisions are tested through plan clarity, daylight behavior, and circulation logic.",
      "The final language stays calm and contemporary, prioritizing quality over visual noise.",
    ],
    servicesLabel: "Services",
    servicesTitle: "From first concept to a ready-to-build design package.",
    services: [
      {
        title: "Concept & Strategy",
        description:
          "Feasibility, volumetric studies, and clear spatial direction for new private commissions.",
      },
      {
        title: "Residential Design",
        description:
          "Architectural design for houses and boutique multi-family buildings with a focus on function and atmosphere.",
      },
      {
        title: "Interiors & Renovation",
        description:
          "Targeted redesign of existing homes and apartments through better flow, light, and material consistency.",
      },
    ],
    projectsLabel: "Selected work",
    seeMoreProjects: "Show more projects",
    seeLessProjects: "Show fewer projects",
    projects: [
      {
        slug: "villa-beti",
        title: "Private house",
        type: "Private Residence",
        year: "2024",
        location: "Cacak, Serbia",
        description:
          "A hillside residence organized around panoramic views, filtered sun exposure, and layered outdoor terraces.",
        imageSrc: "/images/kucaPrva/1.jpg",
      },
      {
        slug: "courtyard-house",
        title: "Residential Complex",
        type: "Residential Complex",
        year: "2024",
        location: "Zlatibor, Serbia",
        description:
          "An urban home centered on an internal courtyard that improves privacy, daylight, and indoor climate comfort.",
        imageSrc: "/images/stambenaZgradaUzice/001.jpg",
      },
      {
        slug: "studio-terrace",
        title: "Residential Complex",
        type: "Residential Complex",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "A residential apartment designed to extend the main living space toward the terrace and streamline circulation.",
        imageSrc: "/images/stambenaZgradaZlatibor/1.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-1",
        title: "Residential Complex",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "A facade-forward housing proposal exploring measured rhythms, depth, and balanced openings.",
        imageSrc: "/images/stambenaZgradaZlatibor1/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-2",
        title: "Residential Complex",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "A stronger urban corner expression paired with compact, efficient apartment organization.",
        imageSrc: "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-3",
        title: "Residential Complex",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "An iterative massing study focused on proportional facades, privacy control, and coherent street presence.",
        imageSrc: "/images/stambenaZgradaZlatibor3/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-4",
        title: "Residential Complex",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "Contemporary housing concept developed through warmer tones and layered facade articulation.",
        imageSrc: "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
      },
      {
        slug: "stambena-zgrada-zlatibor-5",
        title: "Residential Complex",
        type: "Residential Building",
        year: "2025",
        location: "Zlatibor, Serbia",
        description:
          "A fresh facade study exploring rhythm, texture, and larger glazed openings for contemporary mountain housing.",
        imageSrc: "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_81at2m81at2m81at.png",
      },
      {
        slug: "vila-zlatibor",
        title: "Private Villa",
        type: "Villa Concept",
        year: "2025",
        location: "Zlatibor, Serbia",
        description:
          "A villa concept shaped around expanded outdoor living zones and stronger visual connection to the landscape.",
        imageSrc: "/images/vilaZlatibor/Gemini_Generated_Image_865ny1865ny1865n.png",
      },
      {
        slug: "stambeni-objekt-gorni-milanovac",
        title: "Private House",
        type: "Private Residence",
        year: "2025",
        location: "Gornji Milanovac, Serbia",
        description:
          "A multi-family concept focused on practical apartment layouts, daylight, and balanced facade articulation.",
        imageSrc: "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_2bl1y22bl1y22bl1.png",
      },
      {
        slug: "stambena-zgrada-cacak",
        title: "Private House",
        type: "Private Residence",
        year: "2025",
        location: "Cacak, Serbia",
        description:
          "An urban residential scheme with clear floorplate logic and a facade system tuned to neighborhood scale.",
        imageSrc: "/images/stambenaZgradaCacak/ANTI%C4%86%2001.png",
      },
      {
        slug: "stambena-kuca-cacak",
        title: "Private House",
        type: "Private Residence",
        year: "2025",
        location: "Cacak, Serbia",
        description:
          "A contemporary house proposal combining compact planning, generous openings, and layered outdoor thresholds.",
        imageSrc: "/images/stambenaKucaCacak/Gemini_Generated_Image_9hmmdn9hmmdn9hmm.png",
      },
      {
        slug: "rekonstrukcija-bazena-lucani",
        title: "Reconstruction of an Open-Air Pool",
        type: "Public Renovation",
        year: "2024",
        location: "Lucani, Serbia",
        description:
          "Renovation and upgrade proposal for a pool complex with improved circulation, usability, and visual identity.",
        imageSrc:
          "/images/rekonstrukcijaBazenaLucani/0-02-05-1811798fd8d5d069dd70f877e60c7ec9fa6c2f011c273f47229f10a90ffd936f_51e1b7a5ced5fcb9.jpg",
      },
    ],
    openProjectLabel: "Open gallery",
    processLabel: "Process",
    processTitle: "A disciplined workflow from briefing to documentation.",
    processSteps: [
      {
        number: "01",
        title: "Brief & Context",
        description:
          "Aligning program requirements with site conditions, regulations, and budget priorities.",
      },
      {
        number: "02",
        title: "Concept & Development",
        description:
          "Testing spatial options through plans, massing logic, and material direction until the core idea is clear.",
      },
      {
        number: "03",
        title: "Documentation & Coordination",
        description:
          "Preparing precise technical drawings and supporting communication through the execution phase.",
      },
    ],
    approachLabel: "Approach",
    approachTitle: "Clear decisions, minimal noise, durable results.",
    principles: [
      "Context first: orientation, terrain, views, and the rhythms of everyday use define the design framework.",
      "Form and material remain restrained so architecture stays timeless rather than trend-driven.",
      "Client communication is direct and continuous, reducing uncertainty at every stage of the project.",
    ],
    contactLabel: "Contact",
    contactTitle: "Planning a new home, renovation, or residential concept?",
    contactText:
      "Share your location, project scope, and timeline. Initial consultations help define priorities, expected deliverables, and next steps.",
    contactEmail: "milanmilojevic982@gmail.com",
    contactPhone: "+381 60 446 12 15",
    contactPhoneHref: "+381604461215",
    contactCityLabel: "Studio base",
    contactCity: "Cacak / Belgrade",
    availabilityLabel: "Availability",
    availabilityText: "Open for new projects and early-stage consultations.",
    footer: "Milan Milojevic Architecture. Residential design and interior architecture.",
  },
  sr: {
    badge: "SR",
    studioName: "Milan Milojevic Arhitektura",
    cta: "Zakazi konsultacije",
    nav: [
      { href: "#about", label: "O studiju" },
      { href: "#services", label: "Usluge" },
      { href: "#projects", label: "Projekti" },
      { href: "#contact", label: "Kontakt" },
    ],
    heroEyebrow: "Stambena arhitektura",
    heroTitle: "Arhitektura definisana svetlom, proporcijom i komforom svakodnevnog zivota.",
    heroText:
      "Milan Milojevic projektuje privatne kuce i stambene koncepte u regionu, povezujuci savremen izraz sa funkcionalnim i dugorocno kvalitetnim prostorom.",
    featuredProjectLabel: "Izdvojeni projekat",
    featuredProjectCta: "Otvori galeriju",
    stats: [
      { value: "15+", label: "stambenih koncepata i projektnih studija" },
      { value: "7", label: "godina rada na projektovanju i realizaciji" },
    ],
    note:
      "Svaki projekat vodi licno Milan, od prvog razgovora do finalne dokumentacije, uz jasnu komunikaciju i preciznu kontrolu kvaliteta.",
    aboutLabel: "O studiju",
    aboutTitle: "Licna praksa sa visokim profesionalnim standardima.",
    aboutText:
      "Milan Milojevic radi na spoju arhitekture i svakodnevnog zivota. Projekti se razvijaju kroz pazljivu analizu lokacije, realno planiranje i odmjerenu materijalizaciju koja ostaje relevantna kroz vreme.",
    aboutDetails: [
      "Polazna tacka su uvek orijentacija, teren, susedni kontekst i navike korisnika prostora.",
      "Odluke se proveravaju kroz jasnocu osnove, kvalitet dnevnog svetla i logicnu cirkulaciju.",
      "Krajnji izraz ostaje miran i savremen, sa fokusom na kvalitet umesto vizuelnog preopterecenja.",
    ],
    servicesLabel: "Usluge",
    servicesTitle: "Od prvog koncepta do dokumentacije spremne za realizaciju.",
    services: [
      {
        title: "Koncept i Strategija",
        description:
          "Analiza potencijala parcele, volumetrijske studije i jasan prostorni pravac za privatne projekte.",
      },
      {
        title: "Stambeno Projektovanje",
        description:
          "Projektovanje kuca i manjih stambenih objekata sa fokusom na funkciju, atmosferu i dugotrajnu vrednost.",
      },
      {
        title: "Enterijeri i Adaptacije",
        description:
          "Precizno unapredjenje postojecih prostora kroz bolju organizaciju, vise svetla i uskladjene materijale.",
      },
    ],
    projectsLabel: "Odabrani radovi",
    seeMoreProjects: "Prikazi jos projekata",
    seeLessProjects: "Prikazi manje projekata",
    projects: [
      {
        slug: "villa-beti",
        title: "Privatna kuća",
        type: "Porodična kuća",
        year: "2024",
        location: "Cacak, Srbija",
        description:
          "Kuca na padini organizovana oko panoramskih vizura, kontrolisanog osuncanja i slojevitih terasa.",
        imageSrc: "/images/kucaPrva/1.jpg",
      },
      {
        slug: "courtyard-house",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2023",
        location: "Zlatibor, Srbija",
        description:
          "Gradska kuca sa centralnim dvoristem koje donosi vise privatnosti, prirodnog svetla i prijatniju mikroklimu.",
        imageSrc: "/images/stambenaZgradaUzice/001.jpg",
      },
      {
        slug: "studio-terrace",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2025",
        location: "Zlatibor, Srbija",
        description:
          "Adaptacija stana koja otvara dnevnu zonu prema terasi i cini svakodnevno kretanje jednostavnijim.",
        imageSrc: "/images/stambenaZgradaZlatibor/1.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-1",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2024",
        location: "Zlatibor, Srbija",
        description:
          "Stambeni koncept sa naglaskom na ritam fasade, dubinu elemenata i uravnotezen raspored otvora.",
        imageSrc: "/images/stambenaZgradaZlatibor1/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-2",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2023",
        location: "Zlatibor, Srbija",
        description:
          "Koncept sa izrazajnijim uglom i efikasno organizovanim stambenim jedinicama.",
        imageSrc: "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-3",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2024",
        location: "Zlatibor, Srbija",
        description:
          "Razrada volumena sa fokusom na proporcionalnu kompoziciju fasade i bolju kontrolu privatnosti.",
        imageSrc: "/images/stambenaZgradaZlatibor3/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-4",
        title: "Stambeni kompleks",
        type: "Višeporodično stanovanje",
        year: "2025",
        location: "Zlatibor, Srbija",
        description:
          "Savremeni stambeni pristup sa toplijim tonovima i slojevitije oblikovanom fasadom.",
        imageSrc: "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
      },
      {
        slug: "stambena-zgrada-zlatibor-5",
        title: "Privatna kuća",
        type: "Porodična kuća",
        year: "2025",
        location: "Zlatibor, Srbija",
        description:
          "Nova studija fasade sa jacim ritmom, izrazajnijom teksturom i vecim otvorima za savremeni planinski kontekst.",
        imageSrc: "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_81at2m81at2m81at.png",
      },
      {
        slug: "vila-zlatibor",
        title: "Vila Zlatibor",
        type: "Privatna Vila",
        year: "2025",
        location: "Zlatibor, Srbija",
        description:
          "Koncept vile oblikovan kroz prostranije spoljne zone i snazniju vezu enterijera sa pejzazom.",
        imageSrc: "/images/vilaZlatibor/Gemini_Generated_Image_865ny1865ny1865n.png",
      },
      {
        slug: "stambeni-objekt-gorni-milanovac",
        title: "Privatna kuća",
        type: "Porodična kuća",
        year: "2025",
        location: "Gornji Milanovac, Srbija",
        description:
          "Viseporodicni koncept sa racionalnom organizacijom stanova, kvalitetnim osvetljenjem i uravnotezenim fasadnim izrazom.",
        imageSrc: "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_2bl1y22bl1y22bl1.png",
      },
      {
        slug: "stambena-zgrada-cacak",
        title: "Privatna kuća",
        type: "Porodična kuća",
        year: "2025",
        location: "Cacak, Srbija",
        description:
          "Urbani stambeni koncept sa jasnom logikom osnove i fasadnim sistemom prilagodjenim merilu okoline.",
        imageSrc: "/images/stambenaZgradaCacak/ANTI%C4%86%2001.png",
      },
      {
        slug: "stambena-kuca-cacak",
        title: "Privatna kuća",
        type: "Porodična kuća",
        year: "2025",
        location: "Cacak, Srbija",
        description:
          "Savremeni predlog kuce koji spaja kompaktnu organizaciju, velike otvore i slojevito oblikovane spoljne prelaze.",
        imageSrc: "/images/stambenaKucaCacak/Gemini_Generated_Image_9hmmdn9hmmdn9hmm.png",
      },
      {
        slug: "rekonstrukcija-bazena-lucani",
        title: "Rekonstrukcija bazena Lucani",
        type: "Javna rekonstrukcija",
        year: "2024",
        location: "Lucani, Srbija",
        description:
          "Predlog rekonstrukcije bazenskog kompleksa sa unapredjenom funkcijom, jasnijim kretanjem i osvezenim vizuelnim identitetom.",
        imageSrc:
          "/images/rekonstrukcijaBazenaLucani/0-02-05-1811798fd8d5d069dd70f877e60c7ec9fa6c2f011c273f47229f10a90ffd936f_51e1b7a5ced5fcb9.jpg",
      },
    ],
    openProjectLabel: "Otvori galeriju",
    processLabel: "Proces",
    processTitle: "Disciplinisan tok rada od zadatka do tehnicke dokumentacije.",
    processSteps: [
      {
        number: "01",
        title: "Program i Kontekst",
        description:
          "Uskladjivanje funkcionalnih zahteva sa lokacijom, regulativom i budzetskim okvirima.",
      },
      {
        number: "02",
        title: "Koncept i Razrada",
        description:
          "Ispitivanje prostornih varijanti kroz osnove, volumene i materijalni pravac do jasne glavne ideje.",
      },
      {
        number: "03",
        title: "Dokumentacija i Koordinacija",
        description:
          "Izrada preciznih tehnickih crteza i podrska komunikaciji tokom pripreme i realizacije projekta.",
      },
    ],
    approachLabel: "Pristup",
    approachTitle: "Jasne odluke, bez suvisnih elemenata, sa trajnim kvalitetom.",
    principles: [
      "Kontekst je osnova: orijentacija, teren, pogledi i svakodnevni ritam korisnika definisu okvir projekta.",
      "Forma i materijalizacija ostaju odmjerene kako bi arhitektura trajala i van trendova.",
      "Komunikacija sa klijentom je direktna i kontinualna, uz manje neizvesnosti u svakoj fazi rada.",
    ],
    contactLabel: "Kontakt",
    contactTitle: "Planirate novu kucu, adaptaciju ili stambeni koncept?",
    contactText:
      "Posaljite lokaciju, obim projekta i planirani rok. Uvodne konsultacije sluze da se definisu prioriteti, obim dokumentacije i sledeci koraci.",
    contactEmail: "@milanmilojevic982@gmail.com",
    contactPhone: "+381 60 446 12 15",
    contactPhoneHref: "+381604461215",
    contactCityLabel: "Baza studija",
    contactCity: "Cacak / Beograd",
    availabilityLabel: "Dostupnost",
    availabilityText: "Otvoren za nove projekte i koncept konsultacije.",
    footer: "Milan Milojevic Arhitektura. Stambeni projekti i enterijerska arhitektura.",
  },
};

const languageLabels: Record<Locale, string> = {
  en: "English",
  sr: "Srpski",
};

const projectGalleryBySlug: Record<string, string[]> = {
  "villa-beti": [
    "/images/kucaPrva/1.jpg",
    "/images/kucaPrva/2.jpg",
    "/images/kucaPrva/3.jpg",
    "/images/kucaPrva/4.jpg",
    "/images/kucaPrva/5.jpg",
    "/images/kucaPrva/6.jpg",
    "/images/kucaPrva/STTGU1gX.jpg",
  ],
  "courtyard-house": [
    "/images/stambenaZgradaUzice/001.jpg",
    "/images/stambenaZgradaUzice/002.jpg",
    "/images/stambenaZgradaUzice/003.jpg",
    "/images/stambenaZgradaUzice/004.jpg",
  ],
  "studio-terrace": [
    "/images/stambenaZgradaZlatibor/1.jpg",
    "/images/stambenaZgradaZlatibor/2.jpg",
    "/images/stambenaZgradaZlatibor/3.jpg",
    "/images/stambenaZgradaZlatibor/4.jpg",
    "/images/stambenaZgradaZlatibor/5.jpg",
    "/images/stambenaZgradaZlatibor/6.jpg",
  ],
  "stambena-zgrada-zlatibor-1": [
    "/images/stambenaZgradaZlatibor1/001.jpg",
    "/images/stambenaZgradaZlatibor1/002.jpg",
    "/images/stambenaZgradaZlatibor1/003.jpg",
    "/images/stambenaZgradaZlatibor1/004.jpg",
    "/images/stambenaZgradaZlatibor1/005.jpg",
  ],
  "stambena-zgrada-zlatibor-2": [
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%282%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%283%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%284%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%285%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%286%29.jpg",
    "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%287%29.jpg",
  ],
  "stambena-zgrada-zlatibor-3": [
    "/images/stambenaZgradaZlatibor3/001.jpg",
    "/images/stambenaZgradaZlatibor3/002.jpg",
    "/images/stambenaZgradaZlatibor3/003.jpg",
    "/images/stambenaZgradaZlatibor3/004.jpg",
    "/images/stambenaZgradaZlatibor3/005.jpg",
  ],
  "stambena-zgrada-zlatibor-4": [
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2001.png",
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2002.png",
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2003.png",
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2004.png",
    "/images/stambenaZgradaZlatibor4/ZLATIBOR%2005.png",
  ],
  "stambena-zgrada-zlatibor-5": [
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_pxxmr3pxxmr3pxxm.png",
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_81at2m81at2m81at.png",
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_8c0wwj8c0wwj8c0w.png",
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_edsbcvedsbcvedsb.png",
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_he8xsahe8xsahe8x.png",
    "/images/StambenaZgradaZlatibor5/Gemini_Generated_Image_kpcaqkkpcaqkkpca.png",

  ],
  "vila-zlatibor": [
    "/images/vilaZlatibor/Gemini_Generated_Image_865ny1865ny1865n.png",
    "/images/vilaZlatibor/Gemini_Generated_Image_cef2glcef2glcef2.png",
    "/images/vilaZlatibor/Gemini_Generated_Image_o8mfewo8mfewo8mf.png",
    "/images/vilaZlatibor/Gemini_Generated_Image_pt81x4pt81x4pt81.png",
    "/images/vilaZlatibor/Gemini_Generated_Image_q950nzq950nzq950.png",
  ],
  "stambeni-objekt-gorni-milanovac": [
    "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_2bl1y22bl1y22bl1.png",
    "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_fivifjfivifjfivi.png",
    "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_ozrwfmozrwfmozrw.png",
    "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_v535q1v535q1v535.png",
    "/images/stambeniObjektGorniMilanovac/Gemini_Generated_Image_y8wdpqy8wdpqy8wd.png",
  ],
  "stambena-zgrada-cacak": [
    "/images/stambenaZgradaCacak/ANTI%C4%86%2001.png",
    "/images/stambenaZgradaCacak/ANTI%C4%86%2002.png",
    "/images/stambenaZgradaCacak/ANTI%C4%86%2003.png",
    "/images/stambenaZgradaCacak/ANTI%C4%86%2004.png",
    "/images/stambenaZgradaCacak/Untitled.jpg",
  ],
  "stambena-kuca-cacak": [
    "/images/stambenaKucaCacak/Gemini_Generated_Image_9hmmdn9hmmdn9hmm.png",
    "/images/stambenaKucaCacak/Gemini_Generated_Image_bxd98rbxd98rbxd9.png",
    "/images/stambenaKucaCacak/Gemini_Generated_Image_bynd1nbynd1nbynd.png",
    "/images/stambenaKucaCacak/Gemini_Generated_Image_zh5i3ozh5i3ozh5i.png",
    "/images/stambenaKucaCacak/ulazna%20fasada%201.png",
  ],
  "rekonstrukcija-bazena-lucani": [
    "/images/rekonstrukcijaBazenaLucani/0-02-05-1811798fd8d5d069dd70f877e60c7ec9fa6c2f011c273f47229f10a90ffd936f_51e1b7a5ced5fcb9.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-3bfb1e8d6b608168354fdb60a6b22c3438adfd371b15805a64a8bb10871c5063_26a7e6478e1403f2.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-568385f0e589cb593034d8eb1e0c7f0ebccf4b39312ffbdad34046c2162c3067_48e6b9703826c4bd.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-67406253450b62f53d3c6e2d360f6433d13a4be221d582e1714730066777ac96_dc4d2a2366b6fa0b.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-758d15b0e59c81baee0e93985f490f1870dbcb29b3c0d865295d085912441722_8348f7368c585ffd.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-b8fa1fbd9820ee51fa357406d59284d74d04ff6983f27cb85f180e1272c6a580_bd2a9e6ba89794fb.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-d555b14e1d2815eaabb244d694aca1708a9c516414bac2f9d3c6aadef81b2837_d6bf6d75e7bd33eb.jpg",
    "/images/rekonstrukcijaBazenaLucani/0-02-05-d5d9e24f6091367847b69e0ed6323c68e3dff272310a582e70eb250488959185_8aa482e8e6e94311.jpg",
    "/images/rekonstrukcijaBazenaLucani/10.jpg",
    "/images/rekonstrukcijaBazenaLucani/11.jpg",
    "/images/rekonstrukcijaBazenaLucani/12.jpg",
  ],
};

function parseLocale(value: string | string[] | undefined): Locale {
  const normalized = Array.isArray(value) ? value[0] : value;
  return normalized === "sr" ? "sr" : "en";
}

export default function Home({
  searchParams,
}: {
  searchParams: SearchParamMap;
}) {
  const params = use(searchParams);
  const locale = parseLocale(params.lang);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryMainImageLoaded, setIsGalleryMainImageLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[locale];
  const projectsWithGallery: ProjectWithGallery[] = t.projects.map((project) => ({
    ...project,
    galleryImages: projectGalleryBySlug[project.slug] ?? [project.imageSrc],
  }));
  const selectedProject =
    selectedProjectSlug === null
      ? null
      : projectsWithGallery.find((project) => project.slug === selectedProjectSlug) ?? null;
  const visibleProjects = showAllProjects ? projectsWithGallery : projectsWithGallery.slice(0, 3);
  const galleryCount = selectedProject?.galleryImages.length ?? 0;
  const safeActiveImageIndex =
    galleryCount > 0 ? ((activeImageIndex % galleryCount) + galleryCount) % galleryCount : 0;
  const activeImageSrc = selectedProject?.galleryImages[safeActiveImageIndex];

  function openGallery(project: ProjectWithGallery) {
    setMobileMenuOpen(false);
    setSelectedProjectSlug(project.slug);
    setActiveImageIndex(0);
    setIsGalleryMainImageLoaded(false);
  }

  function closeGallery() {
    setSelectedProjectSlug(null);
    setActiveImageIndex(0);
    setIsGalleryMainImageLoaded(false);
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-8rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(199,162,125,0.24),_transparent_65%)]" />
        <div className="absolute right-[-10rem] top-16 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(72,94,81,0.14),_transparent_70%)]" />
        <div className="absolute left-[35%] top-[32rem] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_transparent_72%)]" />
      </div>

      <section className="mx-auto flex w-full max-w-[1800px] flex-col px-4 pb-20 sm:px-6 lg:px-10 2xl:px-12">
        <header className="sticky top-3 z-30 mb-6 rounded-[1.75rem] border border-white/70 bg-[rgba(246,241,234,0.86)] px-4 py-4 shadow-[0_20px_50px_rgba(33,27,20,0.08)] backdrop-blur-xl sm:top-0 sm:-mx-6 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:border-b sm:px-6 sm:py-5 sm:shadow-none lg:-mx-10 lg:px-10 2xl:-mx-12 2xl:px-12">
          <div className="flex items-center justify-between gap-4 lg:flex-row lg:items-center">
            <div className="flex min-w-0 self-center items-center gap-3">
              <div className="relative h-20 w-30 shrink-0 overflow-visible">
                <Image
                  src="/logoMMNew.png"
                  alt="Milan Milojevic Architecture logo"
                  fill
                  sizes="160px"
                  quality={100}
                  className="object-contain scale-[2.0]"
                  priority
                />
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                {t.studioName}
              </p>
            </div>

            <button
              type="button"
              className="mobile-menu-button rounded-full text-sm font-semibold lg:hidden"
              style={{ padding: "10px" }}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {mobileMenuOpen ? (locale === "sr" ? "Zatvori" : "Close") : locale === "sr" ? "Meni" : "Menu"}
            </button>

            <div className="hidden flex-wrap items-center gap-3 lg:flex">
              <nav className="hidden items-center gap-6 rounded-full border border-white/70 bg-white/75 px-6 py-3 text-sm text-stone-600 shadow-[0_10px_30px_rgba(33,27,20,0.06)] backdrop-blur lg:flex">
                {t.nav.map((item) => (
                  <a
                    key={`${locale}-${item.href}`}
                    href={item.href}
                    className="interactive-link"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="inline-flex rounded-full border border-white/70 bg-white/80 p-1 shadow-[0_10px_30px_rgba(33,27,20,0.06)] backdrop-blur">
                {(["en", "sr"] as const).map((item) => {
                  const active = item === locale;

                  return (
                    <Link
                      key={item}
                      href={item === "en" ? "/" : "/?lang=sr"}
                      className="lang-toggle rounded-full px-4 py-2 text-sm font-semibold"
                      data-active={active ? "true" : "false"}
                      aria-current={active ? "true" : undefined}
                    >
                      {languageLabels[item]}
                    </Link>
                  );
                })}
              </div>

              <a
                href={`mailto:${t.contactEmail}`}
                className="button-primary rounded-full px-5 py-2 text-sm font-semibold"
              >
                {t.cta}
              </a>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div
              id="mobile-menu-panel"
              className="mt-4 grid gap-3 border-t border-black/8 pt-4 lg:hidden"
            >
              <nav className="grid grid-cols-2 gap-2">
                {t.nav.map((item) => (
                  <a
                    key={`${locale}-mobile-${item.href}`}
                    href={item.href}
                    className="button-secondary rounded-full px-4 py-3 text-center text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="flex w-full rounded-full bg-white p-1 shadow-sm">
                  {(["en", "sr"] as const).map((item) => {
                    const active = item === locale;

                    return (
                        <Link
                            key={`mobile-${item}`}
                            href={item === "en" ? "/" : "/?lang=sr"}
                            className={`flex-1 text-center rounded-full py-2 text-sm font-medium transition-all duration-200 ${
                                active
                                    ? "bg-stone-900 text-white"
                                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                            }`}
                            aria-current={active ? "true" : undefined}
                        >
                          {languageLabels[item]}
                        </Link>
                    );
                  })}
                </div>                <a
                  href={`mailto:${t.contactEmail}`}
                  className="button-primary rounded-full px-5 py-3 text-center text-sm font-semibold sm:min-w-[13rem]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.cta}
                </a>
              </div>
            </div>
          ) : null}
        </header>

        <section className="grid min-h-[78vh] gap-8 py-6 sm:py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-stone-500">
              {t.heroEyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-[2.95rem] leading-[0.94] tracking-[-0.03em] text-stone-900 sm:text-[4.4rem] sm:leading-[0.98] lg:text-[5.3rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-7 text-stone-650">
              {t.heroText}
            </p>

            <div className="mt-8 hidden flex-wrap gap-3 sm:flex">
              {t.nav.map((item) => (
                <a
                  key={`${locale}-hero-${item.href}`}
                  href={item.href}
                  className="button-secondary rounded-full px-4 py-2.5 text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

        </section>

        <section
          id="about"
          className="section-divider grid gap-8 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:py-18"
        >
          <div>
            <p className="section-kicker">{t.aboutLabel}</p>
            <h2 className="section-title mt-4 max-w-xl">{t.aboutTitle}</h2>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-[1fr_0.9fr] lg:gap-6">
            <div className="card-surface rounded-[1.85rem] p-5 text-[1rem] leading-7 text-stone-650 sm:p-6">
              <div className="max-w-[42rem]">{t.aboutText}</div>
            </div>

            <div className="grid gap-4">
              {t.aboutDetails.map((item) => (
                <div
                  key={`${locale}-${item}`}
                  className="card-surface rounded-[1.5rem] p-5 text-[0.98rem] leading-7 text-stone-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="section-divider grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:py-18"
        >
          <div>
            <p className="section-kicker">{t.servicesLabel}</p>
            <h2 className="section-title mt-4 max-w-lg">{t.servicesTitle}</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 xl:gap-6">
            {t.services.map((service, index) => (
              <article
                key={`${locale}-${service.title}`}
                className="card-surface card-hover rounded-[1.9rem] p-5 sm:p-6"
              >
                <div className="mb-7 inline-flex rounded-full border border-stone-300/60 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-stone-600">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                  {t.servicesLabel}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-stone-650">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-divider py-14 lg:py-18">
          <div className="mb-8">
            <p className="section-kicker">{t.projectsLabel}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 xl:gap-6">
            {visibleProjects.map((project) => (
              <button
                type="button"
                key={`${locale}-${project.slug}`}
                onClick={() => openGallery(project)}
                className="card-surface card-hover project-card rounded-[2rem] p-5 text-left sm:p-6"
              >
                <div className="card-media project-card-media relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, 100vw"
                    quality={PROJECT_CARD_IMAGE_QUALITY}
                    className="project-media-image"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-stone-500">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-4 font-display text-4xl leading-none text-stone-900">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {project.location}
                </p>
                <p className="mt-5 text-base leading-7 text-stone-650">
                  {project.description}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-stone-500">
                  {t.openProjectLabel}
                </p>
              </button>
            ))}
          </div>

          {projectsWithGallery.length > 3 ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="projects-toggle-button"
              >
                <span className="projects-toggle-count">
                  {showAllProjects
                    ? `${String(projectsWithGallery.length).padStart(2, "0")} / ${String(
                        projectsWithGallery.length,
                      ).padStart(2, "0")}`
                    : `${String(visibleProjects.length).padStart(2, "0")} / ${String(
                        projectsWithGallery.length,
                      ).padStart(2, "0")}`}
                </span>
                <span className="projects-toggle-action">
                  <span className="projects-toggle-label">
                    {showAllProjects ? t.seeLessProjects : t.seeMoreProjects}
                  </span>
                  <span className="projects-toggle-icon" aria-hidden="true">
                    {showAllProjects ? "-" : "+"}
                  </span>
                </span>
              </button>
            </div>
          ) : null}
        </section>

        <section className="section-divider grid gap-8 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:py-18">
          <div>
            <p className="section-kicker">{t.processLabel}</p>
            <h2 className="section-title mt-4 max-w-lg">{t.processTitle}</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {t.processSteps.map((step) => (
              <div
                key={`${locale}-${step.number}`}
                className="card-surface rounded-[1.9rem] p-5 sm:p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-stone-900">
                  {step.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-stone-650">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-divider grid gap-8 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:py-18">
          <div>
            <p className="section-kicker">{t.approachLabel}</p>
            <h2 className="section-title mt-4 max-w-lg">{t.approachTitle}</h2>
          </div>
          <div className="grid gap-5">
            {t.principles.map((principle) => (
              <div
                key={`${locale}-${principle}`}
                className="card-surface rounded-[1.8rem] p-5 text-[1.02rem] leading-7 text-stone-700 sm:p-6"
              >
                {principle}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section-divider grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-18"
        >
          <div>
            <p className="section-kicker">{t.contactLabel}</p>
            <h2 className="section-title mt-4 max-w-2xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-650">{t.contactText}</p>
          </div>

          <div className="card-surface flex min-w-0 flex-col gap-3 rounded-[1.9rem] p-4 text-sm font-semibold sm:min-w-[300px] sm:p-5">
            <div className="rounded-[1.4rem] border border-white/60 bg-white/55 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                {t.contactCityLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-800">{t.contactCity}</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/60 bg-white/55 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                {t.availabilityLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-800">{t.availabilityText}</p>
            </div>
            <a
              href={`mailto:${t.contactEmail}`}
              className="button-primary rounded-full px-6 py-3 text-center"
            >
              {t.contactEmail}
            </a>
            <a
              href={`tel:${t.contactPhoneHref}`}
              className="button-secondary rounded-full px-6 py-3 text-center"
            >
              {t.contactPhone}
            </a>
          </div>
        </section>

        <footer className="section-divider py-8 text-sm text-stone-500">{t.footer}</footer>
      </section>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(23,19,15,0.6)] p-4 sm:p-6"
          onClick={closeGallery}
        >
          <div
            className="gallery-dialog w-full max-w-[1120px] rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-dialog-header flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                  {selectedProject.type}
                </p>
                <h3 className="mt-2 font-display text-[2rem] leading-none text-stone-900 sm:text-[2.4rem]">
                  {selectedProject.title}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {selectedProject.location}
                </p>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="gallery-close-button rounded-full px-4 py-2 text-sm font-semibold"
              >
                <span>{locale === "sr" ? "Zatvori" : "Close"}</span>
              </button>
            </div>

            <div className="gallery-dialog-body">
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-4">
                <div className="gallery-main-media relative aspect-[16/10] overflow-hidden">
                  {activeImageSrc ? (
                    <Image
                      key={activeImageSrc}
                      src={activeImageSrc}
                      alt={`${selectedProject.title} ${safeActiveImageIndex + 1}`}
                      fill
                      sizes="(min-width: 1280px) 896px, (min-width: 1024px) calc(100vw - 320px), calc(100vw - 2rem)"
                      quality={GALLERY_MAIN_IMAGE_QUALITY}
                      loading="eager"
                      decoding="async"
                      preload
                      onLoad={() => setIsGalleryMainImageLoaded(true)}
                      style={{ objectFit: "contain" }}
                      className="gallery-main-image"
                    />
                  ) : null}
                </div>

                {isGalleryMainImageLoaded ? (
                  <div className="gallery-thumbnail-grid grid max-h-[620px] grid-cols-4 gap-3 overflow-y-auto lg:grid-cols-1">
                    {selectedProject.galleryImages.map((imageSrc, index) => {
                      const isActive = index === safeActiveImageIndex;
                      return (
                        <button
                          key={`${selectedProject.slug}-gallery-thumb-${index}`}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          className="gallery-thumbnail relative min-h-[76px] overflow-hidden rounded-xl"
                          data-active={isActive ? "true" : "false"}
                          aria-label={`${locale === "sr" ? "Prikazi sliku" : "Show image"} ${index + 1}`}
                        >
                          <Image
                            src={imageSrc}
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            fill
                            sizes="160px"
                            quality={GALLERY_THUMBNAIL_IMAGE_QUALITY}
                            loading="lazy"
                            decoding="async"
                            style={{ objectFit: "contain" }}
                            className="gallery-thumbnail-image"
                          />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="gallery-thumbnail-grid hidden max-h-[620px] lg:block" aria-hidden="true" />
                )}
              </div>

              <div className="gallery-dialog-footer flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((prev) => prev - 1)}
                  className="gallery-nav-button rounded-full text-sm font-semibold"
                >
                  <span>{locale === "sr" ? "Prethodna" : "Previous"}</span>
                </button>
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                  {safeActiveImageIndex + 1} / {galleryCount}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveImageIndex((prev) => prev + 1)}
                  className="gallery-nav-button rounded-full px-7 py-3 text-sm font-semibold"
                >
                  <span>{locale === "sr" ? "Sledeca" : "Next"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
