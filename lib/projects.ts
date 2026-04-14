export type Locale = "en" | "sr";

export type ProjectCard = {
  slug: string;
  title: string;
  type: string;
  year: string;
  location: string;
  description: string;
};

export type ProjectDetail = ProjectCard & {
  eyebrow: string;
  heroText: string;
  overviewTitle: string;
  overviewText: string;
  details: Array<{ label: string; value: string }>;
  highlightsTitle: string;
  highlights: string[];
  galleryImages: string[];
  galleryNote: string;
  backLabel: string;
};

const projectDetails: Record<Locale, ProjectDetail[]> = {
  en: [
    {
      slug: "villa-beti",
      title: "Villa Beti",
      type: "Private Residence",
      year: "2024",
      location: "Ohrid, North Macedonia",
      description:
        "A hillside residence organized around panoramic views, filtered sun exposure, and layered outdoor terraces.",
      eyebrow: "Selected Project",
      heroText:
        "Villa Beti is developed as a quiet hillside home that opens progressively toward the landscape while preserving privacy along the approach and neighboring edges.",
      overviewTitle: "Project overview",
      overviewText:
        "The concept uses stepped volumes and deep horizontal lines to reduce visual weight on the terrain. Interior zones are arranged for long views, balanced daylight, and smooth transitions to exterior living areas.",
      details: [
        { label: "Program", value: "Private family residence" },
        { label: "Status", value: "Concept development" },
        { label: "Focus", value: "Views, sunlight control, indoor-outdoor flow" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "The built mass follows the slope, minimizing excavation and preserving the natural profile of the site.",
        "Main openings frame the lake-facing panorama while maintaining controlled privacy from adjacent plots.",
        "Material choices are restrained to keep attention on proportion, light, and spatial sequence.",
      ],
      galleryImages: [
        "/images/kucaPrva/1.jpg",
        "/images/kucaPrva/2.jpg",
        "/images/kucaPrva/3.jpg",
        "/images/kucaPrva/4.jpg",
        "/images/kucaPrva/5.jpg",
        "/images/kucaPrva/6.jpg",
      ],
      galleryNote:
        "A complete presentation can include plans, sections, material boards, and construction-phase imagery in this same structure.",
      backLabel: "Back to homepage",
    },
    {
      slug: "courtyard-house",
      title: "Courtyard House",
      type: "Family Home",
      year: "2023",
      location: "Skopje, North Macedonia",
      description:
        "An urban home centered on an internal courtyard that improves privacy, daylight, and indoor climate comfort.",
      eyebrow: "Selected Project",
      heroText:
        "Courtyard House responds to dense urban surroundings by organizing daily life around a protected open core that brings light and ventilation deep into the plan.",
      overviewTitle: "Project overview",
      overviewText:
        "Instead of opening fully to the street, the layout relies on an internal courtyard as the visual and climatic center. This inward strategy supports privacy, softer daylight, and calmer family circulation.",
      details: [
        { label: "Program", value: "Single-family urban house" },
        { label: "Status", value: "Residential concept" },
        { label: "Focus", value: "Privacy, internal garden, passive comfort" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "The courtyard acts as the main orientation anchor for living and circulation spaces.",
        "Openings are calibrated to capture daylight without overexposure to neighboring views.",
        "Ground-floor and upper-floor circulation are simplified around one spatial center.",
      ],
      galleryImages: [
        "/images/stambenaZgradaUzice/001.jpg",
        "/images/stambenaZgradaUzice/002.jpg",
        "/images/stambenaZgradaUzice/003.jpg",
        "/images/stambenaZgradaUzice/004.jpg",
      ],
      galleryNote:
        "Additional content can include facade options, plan evolution, and environmental strategy diagrams.",
      backLabel: "Back to homepage",
    },
    {
      slug: "studio-terrace",
      title: "Studio Terrace",
      type: "Renovation",
      year: "2022",
      location: "Belgrade, Serbia",
      description:
        "Apartment transformation that opens the main living zone toward a terrace and simplifies circulation.",
      eyebrow: "Selected Project",
      heroText:
        "Studio Terrace reorganizes a compact apartment around one clear daily route, improving light distribution and strengthening the relationship between interior and exterior living.",
      overviewTitle: "Project overview",
      overviewText:
        "The intervention removes unnecessary partitions, clarifies movement paths, and positions key functions toward natural light. Material transitions are simplified to make the space feel more continuous and generous.",
      details: [
        { label: "Program", value: "Apartment renovation" },
        { label: "Status", value: "Interior redesign" },
        { label: "Focus", value: "Circulation clarity, daylight, terrace connection" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "The terrace is treated as an extension of the main living zone rather than a detached outdoor room.",
        "Storage and service areas are consolidated to free up usable central space.",
        "A neutral palette reinforces brightness and spatial continuity.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor/1.jpg",
        "/images/stambenaZgradaZlatibor/2.jpg",
        "/images/stambenaZgradaZlatibor/3.jpg",
        "/images/stambenaZgradaZlatibor/4.jpg",
        "/images/stambenaZgradaZlatibor/5.jpg",
        "/images/stambenaZgradaZlatibor/6.jpg",
      ],
      galleryNote:
        "This section can later include before-and-after diagrams and furniture layout iterations.",
      backLabel: "Back to homepage",
    },
    {
      slug: "stambena-zgrada-zlatibor-1",
      title: "Stambena Zgrada Zlatibor I",
      type: "Residential Building",
      year: "2022",
      location: "Zlatibor, Serbia",
      description:
        "A facade-forward housing proposal exploring measured rhythms, depth, and balanced openings.",
      eyebrow: "Residential Study",
      heroText:
        "The first Zlatibor study explores facade proportion and opening cadence to create a clear residential identity within a compact development footprint.",
      overviewTitle: "Project overview",
      overviewText:
        "The concept focuses on balancing vertical and horizontal elements while keeping apartment layouts efficient and rational. The facade language is contemporary but restrained to match mountain-town context.",
      details: [
        { label: "Program", value: "Multi-family residential building" },
        { label: "Status", value: "Architectural study" },
        { label: "Focus", value: "Facade rhythm, apartment efficiency" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "A repeated facade grid improves visual coherence and supports modular planning.",
        "Balcony depth and opening placement are tuned for mountain climate conditions.",
        "Material contrast is used selectively to emphasize entry points and corners.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor1/001.jpg",
        "/images/stambenaZgradaZlatibor1/002.jpg",
        "/images/stambenaZgradaZlatibor1/003.jpg",
        "/images/stambenaZgradaZlatibor1/004.jpg",
        "/images/stambenaZgradaZlatibor1/005.jpg",
      ],
      galleryNote:
        "Facade studies and apartment diagrams can be layered into this presentation format.",
      backLabel: "Back to homepage",
    },
    {
      slug: "stambena-zgrada-zlatibor-2",
      title: "Stambena Zgrada Zlatibor II",
      type: "Residential Building",
      year: "2022",
      location: "Zlatibor, Serbia",
      description:
        "A stronger urban corner expression paired with compact, efficient apartment organization.",
      eyebrow: "Residential Study",
      heroText:
        "The second Zlatibor iteration reinforces corner identity and street presence while maintaining practical residential layouts.",
      overviewTitle: "Project overview",
      overviewText:
        "This version develops a more assertive facade composition, with clearer base-middle-top articulation. The internal scheme remains compact, prioritizing logical circulation and good daylight access.",
      details: [
        { label: "Program", value: "Multi-family residential building" },
        { label: "Status", value: "Variant development" },
        { label: "Focus", value: "Corner articulation, facade identity" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "Corner geometry is emphasized to strengthen the building's urban reading.",
        "Window groupings establish a more dynamic rhythm without compromising clarity.",
        "Apartment modules remain standardized to support cost-aware implementation.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%282%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%283%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%284%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%285%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%286%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%287%29.jpg",
      ],
      galleryNote:
        "The sequence can be extended with section studies and envelope optimization diagrams.",
      backLabel: "Back to homepage",
    },
    {
      slug: "stambena-zgrada-zlatibor-3",
      title: "Stambena Zgrada Zlatibor III",
      type: "Residential Building",
      year: "2022",
      location: "Zlatibor, Serbia",
      description:
        "An iterative massing study focused on proportional facades, privacy control, and coherent street presence.",
      eyebrow: "Residential Study",
      heroText:
        "The third study refines facade proportion and setback logic to balance openness with privacy across multiple apartment orientations.",
      overviewTitle: "Project overview",
      overviewText:
        "This phase concentrates on visual consistency between different facade sides and unit types. Openings are calibrated to improve interior quality while preserving coherent external composition.",
      details: [
        { label: "Program", value: "Multi-family residential building" },
        { label: "Status", value: "Design refinement" },
        { label: "Focus", value: "Proportion, privacy, facade consistency" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "Facade depth creates shadow lines that improve scale perception.",
        "Private and shared exterior zones are separated through opening hierarchy.",
        "Material and color strategy is simplified for stronger overall coherence.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor3/001.jpg",
        "/images/stambenaZgradaZlatibor3/002.jpg",
        "/images/stambenaZgradaZlatibor3/003.jpg",
        "/images/stambenaZgradaZlatibor3/004.jpg",
        "/images/stambenaZgradaZlatibor3/005.jpg",
      ],
      galleryNote:
        "Further development can add plan typologies and construction detailing snapshots.",
      backLabel: "Back to homepage",
    },
    {
      slug: "stambena-zgrada-zlatibor-4",
      title: "Stambena Zgrada Zlatibor IV",
      type: "Residential Building",
      year: "2022",
      location: "Zlatibor, Serbia",
      description:
        "Contemporary housing concept developed through warmer tones and layered facade articulation.",
      eyebrow: "Residential Study",
      heroText:
        "The fourth variant introduces a warmer architectural expression while preserving disciplined geometry and efficient residential organization.",
      overviewTitle: "Project overview",
      overviewText:
        "This proposal tests a softer material atmosphere and deeper facade layering to respond to local character. The plan system remains rational, enabling flexible apartment combinations.",
      details: [
        { label: "Program", value: "Multi-family residential building" },
        { label: "Status", value: "Design variant" },
        { label: "Focus", value: "Material tone, facade depth, livability" },
      ],
      highlightsTitle: "Key design moves",
      highlights: [
        "Warm facade tones are combined with precise framing elements.",
        "Layered balconies improve visual depth and outdoor usability.",
        "The building envelope is tuned for better scale in pedestrian view.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2001.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2002.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2003.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2004.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2005.png",
      ],
      galleryNote:
        "This layout supports future additions such as material studies and technical facade breakdowns.",
      backLabel: "Back to homepage",
    },
  ],
  sr: [
    {
      slug: "villa-beti",
      title: "Villa Beti",
      type: "Privatna kuca",
      year: "2024",
      location: "Ohrid, Severna Makedonija",
      description:
        "Kuca na padini organizovana oko panoramskih vizura, filtriranog osuncanja i slojevitih terasa.",
      eyebrow: "Odabrani Projekat",
      heroText:
        "Villa Beti je razvijena kao mirna porodicna kuca koja se postepeno otvara ka pejzazu, uz zadrzanu privatnost prema prilazu i susednim parcelama.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Koncept koristi stepenaste volumene i duboke horizontalne linije kako bi smanjio vizuelnu tezinu objekta na terenu. Enterijerske zone su organizovane za duge vizure, kvalitetno dnevno svetlo i prirodnu vezu sa spoljnim prostorima.",
      details: [
        { label: "Program", value: "Privatna porodicna kuca" },
        { label: "Status", value: "Razrada koncepta" },
        { label: "Fokus", value: "Vizure, kontrola svetla, veza enterijera i eksterijera" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Volumen prati pad terena, uz minimalne zemljane radove i ocuvanje prirodnog profila lokacije.",
        "Glavni otvori kadriraju pogled ka jezeru, uz kontrolisanu privatnost prema okruzenju.",
        "Materijali su namerno odmjereni kako bi fokus ostao na proporciji, svetlu i prostornom ritmu.",
      ],
      galleryImages: [
        "/images/kucaPrva/1.jpg",
        "/images/kucaPrva/2.jpg",
        "/images/kucaPrva/3.jpg",
        "/images/kucaPrva/4.jpg",
        "/images/kucaPrva/5.jpg",
        "/images/kucaPrva/6.jpg",
      ],
      galleryNote:
        "U istu strukturu mogu naknadno da se dodaju osnove, preseci, materijalne studije i fotografije realizacije.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "courtyard-house",
      title: "Courtyard House",
      type: "Porodicna kuca",
      year: "2023",
      location: "Skoplje, Severna Makedonija",
      description:
        "Gradska kuca sa centralnim dvoristem koje obezbedjuje privatnost, svetlo i prijatniju mikroklimu.",
      eyebrow: "Odabrani Projekat",
      heroText:
        "Courtyard House odgovara gustom urbanom kontekstu organizacijom svakodnevnog zivota oko zasticenog spoljnog jezgra koje unosi svetlo i ventilaciju duboko u osnovu.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Umesto punog otvaranja ka ulici, dispozicija koristi unutrasnje dvoriste kao vizuelni i klimatski centar. Ovaj pristup omogucava vecu privatnost, meksu osvetljenost i smireniji dnevni ritam porodice.",
      details: [
        { label: "Program", value: "Porodicna gradska kuca" },
        { label: "Status", value: "Stambeni koncept" },
        { label: "Fokus", value: "Privatnost, unutrasnja basta, pasivni komfor" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Dvoriste je glavni orijentacioni centar dnevnih i komunikacionih zona.",
        "Otvorene povrsine su kalibrisane tako da obezbede svetlo bez preterane izlozenosti susedima.",
        "Kretanje kroz prizemlje i sprat je pojednostavljeno oko jednog prostornog fokusa.",
      ],
      galleryImages: [
        "/images/stambenaZgradaUzice/001.jpg",
        "/images/stambenaZgradaUzice/002.jpg",
        "/images/stambenaZgradaUzice/003.jpg",
        "/images/stambenaZgradaUzice/004.jpg",
      ],
      galleryNote:
        "Prezentacija moze kasnije da ukljuci varijante fasade, razvoj osnove i dijagrame komfora.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "studio-terrace",
      title: "Studio Terrace",
      type: "Adaptacija",
      year: "2022",
      location: "Beograd, Srbija",
      description:
        "Transformacija stana koja otvara dnevnu zonu ka terasi i pojednostavljuje svakodnevno kretanje.",
      eyebrow: "Odabrani Projekat",
      heroText:
        "Studio Terrace reorganizuje kompaktan stan oko jedne jasne dnevne putanje, sa boljom raspodelom svetla i jacom vezom izmedju unutrasnjeg i spoljnog prostora.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Intervencija uklanja suvisne pregrade, cisti komunikacione tokove i pomera kljucne funkcije ka prirodnom svetlu. Materijalni prelazi su pojednostavljeni kako bi prostor delovao kontinualnije i prostranije.",
      details: [
        { label: "Program", value: "Adaptacija stana" },
        { label: "Status", value: "Enterijerski redizajn" },
        { label: "Fokus", value: "Jasna cirkulacija, svetlo, veza sa terasom" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Terasa je tretirana kao nastavak glavne dnevne zone, a ne kao odvojen spoljasnji prostor.",
        "Skladisni i servisni segmenti su konsolidovani kako bi se oslobodio centralni korisni prostor.",
        "Neutralna paleta pojacava osvetljenost i prostornu povezanost.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor/1.jpg",
        "/images/stambenaZgradaZlatibor/2.jpg",
        "/images/stambenaZgradaZlatibor/3.jpg",
        "/images/stambenaZgradaZlatibor/4.jpg",
        "/images/stambenaZgradaZlatibor/5.jpg",
        "/images/stambenaZgradaZlatibor/6.jpg",
      ],
      galleryNote:
        "Sekcija moze naknadno da ukljuci dijagrame pre i posle, kao i varijante rasporeda namestaja.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "stambena-zgrada-zlatibor-1",
      title: "Stambena Zgrada Zlatibor I",
      type: "Stambena zgrada",
      year: "2022",
      location: "Zlatibor, Srbija",
      description:
        "Stambeni koncept sa naglaskom na ritam fasade, dubinu elemenata i uravnotezene otvore.",
      eyebrow: "Stambena Studija",
      heroText:
        "Prva studija Zlatibora istrazuje proporciju fasade i ritam otvora kako bi se formirao jasan stambeni identitet u kompaktnom urbanom okviru.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Koncept je fokusiran na balans vertikalnih i horizontalnih elemenata, uz racionalnu organizaciju stanova. Jezik fasade je savremen, ali odmjeren u odnosu na planinski kontekst.",
      details: [
        { label: "Program", value: "Viseporodicni stambeni objekat" },
        { label: "Status", value: "Arhitektonska studija" },
        { label: "Fokus", value: "Ritam fasade, efikasnost stanova" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Ponavljajuca fasadna mreza donosi jasnu vizuelnu koherentnost i modularnu osnovu.",
        "Dubina balkona i raspored otvora prilagodjeni su planinskim klimatskim uslovima.",
        "Kontrast materijala koristi se selektivno, sa akcentom na ulaze i uglove.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor1/001.jpg",
        "/images/stambenaZgradaZlatibor1/002.jpg",
        "/images/stambenaZgradaZlatibor1/003.jpg",
        "/images/stambenaZgradaZlatibor1/004.jpg",
        "/images/stambenaZgradaZlatibor1/005.jpg",
      ],
      galleryNote:
        "U ovaj format mogu da se dodaju fasadne studije i dijagrami tipskih stanova.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "stambena-zgrada-zlatibor-2",
      title: "Stambena Zgrada Zlatibor II",
      type: "Stambena zgrada",
      year: "2022",
      location: "Zlatibor, Srbija",
      description:
        "Koncept sa jacim uglovnim identitetom i efikasnom organizacijom stambenih jedinica.",
      eyebrow: "Stambena Studija",
      heroText:
        "Druga iteracija Zlatibora pojacava identitet uglova i prisustvo objekta u ulicnom potezu, uz zadrzanu funkcionalnu logiku dispozicije.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Ova varijanta razvija izrazeniju kompoziciju fasade sa jasnijom artikulacijom baze, sredine i zavrsnog pojasa. Unutrasnja organizacija ostaje kompaktna i prakticna.",
      details: [
        { label: "Program", value: "Viseporodicni stambeni objekat" },
        { label: "Status", value: "Razrada varijante" },
        { label: "Fokus", value: "Ugaona artikulacija, identitet fasade" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Ugaona geometrija je naglasena kako bi se ojacalo urbano citanje volumena.",
        "Grupisanje prozora donosi dinamicniji ritam bez gubitka kompozicione jasnoce.",
        "Moduli stanova ostaju standardizovani radi racionalnije realizacije.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%281%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%282%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%283%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%284%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%285%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%286%29.jpg",
        "/images/stambenaZgradaZlatibor2/Objekat%20Zlatibor%20%287%29.jpg",
      ],
      galleryNote:
        "Sekvenca moze da se prosiri presecima i dijagramima optimizacije ovojnice.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "stambena-zgrada-zlatibor-3",
      title: "Stambena Zgrada Zlatibor III",
      type: "Stambena zgrada",
      year: "2022",
      location: "Zlatibor, Srbija",
      description:
        "Iteracija volumena sa fokusom na proporcionalnu kompoziciju fasade i kontrolu privatnosti.",
      eyebrow: "Stambena Studija",
      heroText:
        "Treca studija dodatno precizira proporciju fasada i logiku povlacenja ravni kako bi se uspostavio bolji balans izmedju otvorenosti i privatnosti.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Ova faza je usmerena na koherentnost razlicitih fasadnih strana i tipologija stanova. Otvori su kalibrisani za bolji enterijerski komfor uz cistu spoljasnju kompoziciju.",
      details: [
        { label: "Program", value: "Viseporodicni stambeni objekat" },
        { label: "Status", value: "Projektno usavrsavanje" },
        { label: "Fokus", value: "Proporcija, privatnost, konzistentnost fasade" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Dubina fasadnih ravni formira senke koje poboljsavaju percepciju skale.",
        "Privatne i zajednicke spoljne zone razdvojene su hijerarhijom otvora.",
        "Strategija boja i materijala je pojednostavljena radi jaceg ukupnog identiteta.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor3/001.jpg",
        "/images/stambenaZgradaZlatibor3/002.jpg",
        "/images/stambenaZgradaZlatibor3/003.jpg",
        "/images/stambenaZgradaZlatibor3/004.jpg",
        "/images/stambenaZgradaZlatibor3/005.jpg",
      ],
      galleryNote:
        "Dalja razrada moze da ukljuci tipske osnove i konstruktivne detalje fasade.",
      backLabel: "Nazad na pocetnu",
    },
    {
      slug: "stambena-zgrada-zlatibor-4",
      title: "Stambena Zgrada Zlatibor IV",
      type: "Stambena zgrada",
      year: "2022",
      location: "Zlatibor, Srbija",
      description:
        "Savremeni stambeni pristup sa toplijim tonovima i slojevitom artikulacijom fasade.",
      eyebrow: "Stambena Studija",
      heroText:
        "Cetvrta varijanta uvodi topliji arhitektonski izraz, uz zadrzanu disciplinu geometrije i racionalnu organizaciju stambenih jedinica.",
      overviewTitle: "Pregled projekta",
      overviewText:
        "Predlog ispituje mekse materijalne tonove i dublju fasadnu slojevitost kao odgovor na lokalni karakter. Sistem osnova ostaje racionalan i omogucava fleksibilne kombinacije stanova.",
      details: [
        { label: "Program", value: "Viseporodicni stambeni objekat" },
        { label: "Status", value: "Projektna varijanta" },
        { label: "Fokus", value: "Ton materijala, dubina fasade, komfor" },
      ],
      highlightsTitle: "Klucni potezi",
      highlights: [
        "Topliji tonovi fasade upareni su sa preciznim okvirnim elementima.",
        "Slojeviti balkoni unapredjuju prostornu dubinu i upotrebljivost spoljnog prostora.",
        "Oblikovanje ovojnice prilagodjeno je boljem dozivljaju skale iz pesacke perspektive.",
      ],
      galleryImages: [
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2000.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2001.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2002.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2003.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2004.png",
        "/images/stambenaZgradaZlatibor4/ZLATIBOR%2005.png",
      ],
      galleryNote:
        "Format je spreman za dodavanje materijalnih studija i tehnicke razrade fasadnog sistema.",
      backLabel: "Nazad na pocetnu",
    },
  ],
};

export function getProjectCards(locale: Locale): ProjectCard[] {
  return projectDetails[locale].map(
    ({ slug, title, type, year, location, description }) => ({
      slug,
      title,
      type,
      year,
      location,
      description,
    }),
  );
}

export function getProjectDetail(locale: Locale, slug: string) {
  return projectDetails[locale].find((project) => project.slug === slug) ?? null;
}
