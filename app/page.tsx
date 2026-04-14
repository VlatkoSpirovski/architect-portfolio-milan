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
  studioLine: string;
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

const content: Record<Locale, Content> = {
  en: {
    badge: "EN",
    studioName: "Milan Milojevic Architecture",
    studioLine:
      "Independent architectural practice for refined homes, boutique residential buildings, and interior transformations.",
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
    featuredProjectCta: "View case study",
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
        title: "Villa Beti",
        type: "Private Residence",
        year: "2024",
        location: "Ohrid, North Macedonia",
        description:
          "A hillside residence organized around panoramic views, filtered sun exposure, and layered outdoor terraces.",
        imageSrc: "/images/kucaPrva/1.jpg",
      },
      {
        slug: "courtyard-house",
        title: "Courtyard House",
        type: "Family Home",
        year: "2023",
        location: "Skopje, North Macedonia",
        description:
          "An urban home centered on an internal courtyard that improves privacy, daylight, and indoor climate comfort.",
        imageSrc: "/images/stambenaZgradaUzice/001.jpg",
      },
      {
        slug: "studio-terrace",
        title: "Studio Terrace",
        type: "Renovation",
        year: "2022",
        location: "Belgrade, Serbia",
        description:
          "Apartment transformation that opens the main living zone toward a terrace and simplifies circulation.",
        imageSrc: "/images/stambenaZgradaZlatibor/1.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-1",
        title: "Stambena Zgrada Zlatibor I",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "A facade-forward housing proposal exploring measured rhythms, depth, and balanced openings.",
        imageSrc: "/images/stambenaZgradaZlatibor1/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-2",
        title: "Stambena Zgrada Zlatibor II",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "A stronger urban corner expression paired with compact, efficient apartment organization.",
        imageSrc: "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-3",
        title: "Stambena Zgrada Zlatibor III",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "An iterative massing study focused on proportional facades, privacy control, and coherent street presence.",
        imageSrc: "/images/stambenaZgradaZlatibor3/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-4",
        title: "Stambena Zgrada Zlatibor IV",
        type: "Residential Building",
        year: "2022",
        location: "Zlatibor, Serbia",
        description:
          "Contemporary housing concept developed through warmer tones and layered facade articulation.",
        imageSrc: "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
      },
    ],
    openProjectLabel: "Open case study",
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
    contactEmail: "hello@milanmilojevic.com",
    contactPhone: "+381 60 111 222",
    contactPhoneHref: "+38160111222",
    contactCityLabel: "Studio base",
    contactCity: "Skopje / Belgrade",
    availabilityLabel: "Availability",
    availabilityText: "Open for new projects and early-stage consultations.",
    footer: "Milan Milojevic Architecture. Residential design and interior architecture.",
  },
  sr: {
    badge: "SR",
    studioName: "Milan Milojevic Arhitektura",
    studioLine:
      "Samostalna arhitektonska praksa za savremene kuce, manje stambene objekte i promisljenje adaptacije.",
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
    featuredProjectCta: "Otvori case study",
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
    seeLessProjects: "Prikazi manje",
    projects: [
      {
        slug: "villa-beti",
        title: "Villa Beti",
        type: "Privatna kuca",
        year: "2024",
        location: "Ohrid, Severna Makedonija",
        description:
          "Kuca na padini organizovana oko panoramskih vizura, filtriranog osuncanja i slojevitih terasa.",
        imageSrc: "/images/kucaPrva/1.jpg",
      },
      {
        slug: "courtyard-house",
        title: "Courtyard House",
        type: "Porodicna kuca",
        year: "2023",
        location: "Skoplje, Severna Makedonija",
        description:
          "Gradska kuca sa centralnim dvoristem koje obezbedjuje privatnost, svetlo i prijatniju mikroklimu.",
        imageSrc: "/images/stambenaZgradaUzice/001.jpg",
      },
      {
        slug: "studio-terrace",
        title: "Studio Terrace",
        type: "Adaptacija",
        year: "2022",
        location: "Beograd, Srbija",
        description:
          "Transformacija stana koja otvara dnevnu zonu ka terasi i pojednostavljuje svakodnevno kretanje.",
        imageSrc: "/images/stambenaZgradaZlatibor/1.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-1",
        title: "Stambena Zgrada Zlatibor I",
        type: "Stambena zgrada",
        year: "2022",
        location: "Zlatibor, Srbija",
        description:
          "Stambeni koncept sa naglaskom na ritam fasade, dubinu elemenata i uravnotezene otvore.",
        imageSrc: "/images/stambenaZgradaZlatibor1/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-2",
        title: "Stambena Zgrada Zlatibor II",
        type: "Stambena zgrada",
        year: "2022",
        location: "Zlatibor, Srbija",
        description:
          "Koncept sa jacim uglovnim identitetom i efikasnom organizacijom stambenih jedinica.",
        imageSrc: "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-3",
        title: "Stambena Zgrada Zlatibor III",
        type: "Stambena zgrada",
        year: "2022",
        location: "Zlatibor, Srbija",
        description:
          "Iteracija volumena sa fokusom na proporcionalnu kompoziciju fasade i kontrolu privatnosti.",
        imageSrc: "/images/stambenaZgradaZlatibor3/001.jpg",
      },
      {
        slug: "stambena-zgrada-zlatibor-4",
        title: "Stambena Zgrada Zlatibor IV",
        type: "Stambena zgrada",
        year: "2022",
        location: "Zlatibor, Srbija",
        description:
          "Savremeni stambeni pristup sa toplijim tonovima i slojevitom artikulacijom fasade.",
        imageSrc: "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
      },
    ],
    openProjectLabel: "Otvori case study",
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
    contactEmail: "hello@milanmilojevic.com",
    contactPhone: "+381 60 111 222",
    contactPhoneHref: "+38160111222",
    contactCityLabel: "Baza studija",
    contactCity: "Skoplje / Beograd",
    availabilityLabel: "Dostupnost",
    availabilityText: "Otvoren za nove projekte i koncept konsultacije.",
    footer: "Milan Milojevic Arhitektura. Stambeni projekti i enterijerska arhitektura.",
  },
};

const languageLabels: Record<Locale, string> = {
  en: "English",
  sr: "Srpski",
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
  const [showAllProjects, setShowAllProjects] = useState(false);

  const t = content[locale];
  const hasHiddenProjects = t.projects.length > 4;
  const visibleProjects = showAllProjects ? t.projects : t.projects.slice(0, 4);
  const featuredProject = t.projects[0];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-8rem] top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(199,162,125,0.24),_transparent_65%)]" />
        <div className="absolute right-[-10rem] top-16 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(72,94,81,0.14),_transparent_70%)]" />
        <div className="absolute left-[35%] top-[32rem] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_transparent_72%)]" />
      </div>

      <section className="mx-auto flex w-full max-w-[1800px] flex-col px-4 pb-20 pt-6 sm:px-6 lg:px-10 2xl:px-12">
        <header className="sticky top-0 z-30 -mx-4 mb-4 border-b border-black/8 bg-[rgba(246,241,234,0.78)] px-4 py-5 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 2xl:-mx-12 2xl:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                {t.studioName}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
                {t.studioLine}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
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
                      className={`lang-toggle rounded-full px-4 py-2 text-sm font-semibold ${
                        active
                          ? "bg-stone-900 text-stone-50 shadow-[0_8px_18px_rgba(31,28,24,0.18)]"
                          : "text-stone-600"
                      }`}
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
        </header>

        <section className="grid min-h-[78vh] gap-10 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-stone-500">
              {t.heroEyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-[3.2rem] leading-[0.98] tracking-[-0.03em] text-stone-900 sm:text-[4.4rem] lg:text-[5.3rem]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-7 text-stone-650">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

          <aside className="card-surface overflow-hidden rounded-[2rem] p-5 shadow-[0_26px_70px_rgba(44,36,28,0.08)] sm:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
              {t.featuredProjectLabel}
            </p>
            <Link
              href={`/projects/${featuredProject.slug}?lang=${locale}`}
              className="group mt-4 block"
            >
              <div className="card-media relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={featuredProject.imageSrc}
                  alt={featuredProject.title}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-stone-500">
                <span>{featuredProject.type}</span>
                <span>{featuredProject.year}</span>
              </div>
              <h2 className="mt-3 font-display text-[2.15rem] leading-none text-stone-900">
                {featuredProject.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-650">
                {featuredProject.location}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-stone-500">
                {t.featuredProjectCta}
              </p>
            </Link>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-stone-600">
              {t.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-white/70 bg-white/78 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]"
                >
                  <p className="text-2xl font-semibold text-stone-900">{stat.value}</p>
                  <p className="mt-2 leading-6 text-stone-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-dashed border-stone-300/90 bg-[#f7f2eb] p-4 text-sm leading-6 text-stone-600">
              {t.note}
            </div>
          </aside>
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
              <Link
                key={`${locale}-${project.title}`}
                href={`/projects/${project.slug}?lang=${locale}`}
                className="card-surface card-hover rounded-[2rem] p-5 sm:p-6"
              >
                <div className="card-media relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
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
              </Link>
            ))}
          </div>

          {hasHiddenProjects ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="button-secondary rounded-full px-5 py-2.5 text-sm font-semibold"
              >
                {showAllProjects ? t.seeLessProjects : t.seeMoreProjects}
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

          <div className="card-surface flex min-w-[300px] flex-col gap-3 rounded-[1.9rem] p-4 text-sm font-semibold sm:p-5">
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
    </main>
  );
}
