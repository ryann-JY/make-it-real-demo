export type Badge = "Verified Print" | "AI Concept" | "Commercial Use";

export type ProductIdea = {
  id: string;
  title: string;
  kicker: string;
  image: string;
  audience: string;
  difficulty: string;
  time: string;
  cost: string;
  price: string;
  margin: string;
  estimateNote: string;
  badges: Badge[];
  modes: ("sell" | "personalize" | "gift" | "explore")[];
  skillIds: string[];
  materialIds: string[];
  projectIds: string[];
  customer: string;
  valueReason: string;
  differentiation: string;
  testPlan: string;
  risk: string;
  description: string;
};

export type Skill = {
  id: string;
  title: string;
  tagline: string;
  image: string;
  inputImage: string;
  uses: string;
  prints: string;
  credits: number;
  badges: Badge[];
  products: string[];
  projectIds: string[];
  materialIds: string[];
  inputs: string[];
  steps: string[];
  output: string;
  editableFields: string[];
  license: string;
};

export type Material = {
  id: string;
  title: string;
  material: string;
  image: string;
  size: string;
  thickness: string;
  unitCost: string;
  printArea: string;
  surface: string;
  shape: string;
  difficulty: string;
  device: string;
  prep: string;
  fixture: string;
  printSetup: string;
  aftercare: string;
  tests: string[];
  failures: string[];
  rating: number;
  reviews: number;
  projectIds: string[];
};

export type Project = {
  id: string;
  title: string;
  image: string;
  creatorId: string;
  likes: number;
  saves: number;
  prints: number;
  skillId?: string;
  materialId: string;
  badge: Badge;
  time: string;
  ink: string;
  device: string;
  completionRecord?: string;
  parameters: string;
  reusable: boolean;
  license: string;
  ideaIds: string[];
  story: string;
};

export type Creator = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  cover: string;
  bio: string;
  location: string;
  specialties: string[];
  followers: string;
  projects: string[];
  skills: string[];
  materials: string[];
  store: string;
  verified: string;
  roles: string[];
  verifiedPrints: number;
  reuseCount: string;
  rights: string;
};

const imagePath = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

const img = {
  petMagnets: imagePath("pet-magnets.jpg"),
  petMagnets2: imagePath("pet-magnets-2.jpg"),
  acrylic: imagePath("acrylic.webp"),
  mug: imagePath("mug.jpg"),
  art: imagePath("art.jpg"),
  coasters: imagePath("coasters.jpg"),
  dog: imagePath("dog.jpg"),
  city: imagePath("city.jpg"),
  market: imagePath("market.jpg"),
  jewelry: imagePath("jewelry.jpg"),
  sign: imagePath("sign.jpg"),
  cards: imagePath("cards.jpg"),
  sticker: imagePath("sticker.jpg"),
  creator1: imagePath("creator-1.jpg"),
  creator2: imagePath("creator-2.jpg"),
  creator3: imagePath("creator-3.jpg"),
  creator4: imagePath("creator-4.jpg"),
};

export const productIdeas: ProductIdea[] = [
  {
    id: "pet-magnet",
    title: "Personalized Pet Keepsakes",
    kicker: "Turn one meaningful photo into a family of giftable products",
    image: img.petMagnets,
    audience: "Pet owners · gift shops · Etsy",
    difficulty: "Easy",
    time: "12 min",
    cost: "$1–5",
    price: "$12–36",
    margin: "~78%",
    estimateNote: "Reference ranges vary by format; excludes labor, shipping, platform fees, packaging, and failed prints.",
    badges: ["Verified Print", "Commercial Use"],
    modes: ["sell", "personalize", "gift"],
    skillIds: ["pet-portrait"],
    materialIds: ["wood-acrylic-magnet", "ceramic-coaster"],
    projectIds: ["milo-magnet", "cat-magnet", "holiday-pet-set"],
    customer: "Pet owners looking for a personal keepsake, memorial, or small gift.",
    valueReason: "The customer recognizes their own pet immediately, so the emotional value is much higher than the material itself.",
    differentiation: "Change the pet photo, name, illustration mood, shape, and gift packaging without rebuilding the production method.",
    testPlan: "Start with 10–20 samples across two visual styles and test them with an existing pet-shop or social audience.",
    risk: "Low-quality customer photos and unclear approval expectations can create rework. Set an input-photo standard before taking orders.",
    description:
      "Turn a customer photo into a warm illustrated keepsake. The compact material, short print time, and high personalization value make this a direction worth testing with pet owners or gift shoppers.",
  },
  {
    id: "city-magnet",
    title: "Layered Local Souvenirs",
    kicker: "Build one recognizable place into a repeatable product family",
    image: img.city,
    audience: "Tourist shops · museums · local markets",
    difficulty: "Medium",
    time: "18 min",
    cost: "$1.40–5",
    price: "$12–32",
    margin: "~72%",
    estimateNote: "Reference ranges cover small magnets and display panels; excludes licensing, retail commission, shipping, and design labor.",
    badges: ["Verified Print", "Commercial Use"],
    modes: ["sell", "personalize"],
    skillIds: ["city-poster"],
    materialIds: ["acrylic-magnet", "a5-acrylic-panel"],
    projectIds: ["brooklyn-magnet", "paris-magnet"],
    customer: "Visitors, local residents, museums, and neighborhood retailers buying a recognizable piece of place.",
    valueReason: "A specific landmark or neighborhood creates stronger identity value than a generic travel souvenir.",
    differentiation: "Reuse one visual system across different landmarks, districts, colorways, languages, and product formats.",
    testPlan: "Test 12–24 units around one highly recognizable local landmark before expanding into a full city series.",
    risk: "Generic city art is easy to ignore. The design needs a specific local story and must avoid protected logos or artwork.",
    description:
      "Test a recognizable local souvenir around one skyline, landmark, or neighborhood. If the first small batch performs, the reusable system can expand into more places or colorways.",
  },
  {
    id: "artist-coaster",
    title: "Tactile Mini Art Collection",
    kicker: "Translate owned artwork into collectible objects with physical texture",
    image: img.art,
    audience: "Artists · museum stores · home gifting",
    difficulty: "Medium",
    time: "16 min",
    cost: "$4–8",
    price: "$24–48",
    margin: "~75%",
    estimateNote: "Reference ranges vary by coaster set or display format; excludes artwork licensing, packaging, labor, shipping, and sales fees.",
    badges: ["Verified Print"],
    modes: ["sell", "gift", "explore"],
    skillIds: ["textured-art"],
    materialIds: ["ceramic-coaster", "a5-acrylic-panel"],
    projectIds: ["van-gogh-coaster", "botanical-coaster"],
    customer: "Art buyers and gift shoppers who want a useful object that still carries an artist’s visual identity.",
    valueReason: "Texture and a coordinated set make the work feel more tactile and collectible than a flat reproduction.",
    differentiation: "Use original artwork, vary texture depth and color, and release coordinated small collections.",
    testPlan: "Produce three small four-piece sets and compare one bold art direction with one quieter home-decor direction.",
    risk: "Only use artwork you own or are licensed to commercialize. Heavy texture also needs adhesion and scratch testing.",
    description:
      "Translate owned or licensed artwork into raised, tactile coaster sets. The format may work as artist merchandise, a gift, or a satisfying material experiment.",
  },
  {
    id: "team-tumbler",
    title: "Personalized Local Team Gear",
    kicker: "A configurable identity system for clubs, schools, and events",
    image: img.mug,
    audience: "Sports clubs · schools · event sellers",
    difficulty: "Medium",
    time: "21 min",
    cost: "~$8.20",
    price: "$28–42",
    margin: "~69%",
    estimateNote: "Early concept estimate only; excludes customer acquisition, licensing, labor, shipping, and failed rotary setup.",
    badges: ["AI Concept", "Commercial Use"],
    modes: ["sell", "personalize"],
    skillIds: ["team-badge"],
    materialIds: ["steel-tumbler"],
    projectIds: ["tigers-tumbler"],
    customer: "Local clubs, school teams, and event groups ordering coordinated names and numbers.",
    valueReason: "A shared team identity plus personal name and number creates both belonging and individual ownership.",
    differentiation: "Keep the team system fixed while swapping names, numbers, mascot variants, and event dates.",
    testPlan: "Validate one physical sample first, then offer a limited 8–12 unit pilot to a single local team.",
    risk: "This is not yet verified by a real print. Rotary alignment, trademark rights, and batch approvals remain unresolved.",
    description:
      "Explore coordinated name, number, and mascot variations without rebuilding the layout. The concept still needs a verified rotary print before it can support real small-batch orders.",
  },
];

export const skills: Skill[] = [
  {
    id: "pet-portrait",
    title: "Pet Portrait Keepsake",
    tagline: "Turn any pet photo into a warm, print-ready illustration",
    image: img.petMagnets2,
    inputImage: img.dog,
    uses: "8.4K",
    prints: "2.1K",
    credits: 4,
    badges: ["Verified Print", "Commercial Use"],
    products: ["Magnets", "Coasters", "Ornaments"],
    projectIds: ["milo-magnet", "cat-magnet", "holiday-pet-set"],
    materialIds: ["wood-acrylic-magnet", "ceramic-coaster"],
    inputs: ["One clear pet photo", "Pet name or short message", "Preferred illustration mood"],
    steps: ["Isolate the subject and clean the silhouette", "Generate a consistent portrait treatment", "Fit the result to the selected product shape"],
    output: "An editable, print-ready portrait composition sized for the selected material.",
    editableFields: ["Photo", "Name", "Background color", "Illustration mood", "Product shape"],
    license: "Commercial use allowed for your own customer orders; source workflow may not be resold.",
  },
  {
    id: "city-poster",
    title: "City Memory Poster",
    tagline: "Build bold souvenir art from a city, landmark, and color mood",
    image: img.city,
    inputImage: img.sign,
    uses: "4.9K",
    prints: "860",
    credits: 5,
    badges: ["Verified Print", "Commercial Use"],
    products: ["Magnets", "Wall Art", "Postcards"],
    projectIds: ["brooklyn-magnet", "paris-magnet"],
    materialIds: ["acrylic-magnet", "a5-acrylic-panel"],
    inputs: ["City or neighborhood", "Landmark reference", "Color mood"],
    steps: ["Build the landmark silhouette", "Apply a reusable poster composition", "Adapt typography and crop to the selected material"],
    output: "A layered city artwork with editable landmark, place name, colors, and format.",
    editableFields: ["Location", "Landmark", "Title", "Palette", "Language", "Product format"],
    license: "Commercial use allowed when you own the reference imagery and avoid protected marks.",
  },
  {
    id: "textured-art",
    title: "Tactile Art Remix",
    tagline: "Transform flat artwork into layered 3D texture",
    image: img.art,
    inputImage: img.cards,
    uses: "6.2K",
    prints: "1.7K",
    credits: 6,
    badges: ["Verified Print"],
    products: ["Coasters", "Wall Art", "Gift Tiles"],
    projectIds: ["van-gogh-coaster", "botanical-coaster"],
    materialIds: ["ceramic-coaster", "a5-acrylic-panel"],
    inputs: ["Owned or licensed artwork", "Texture direction", "Target material"],
    steps: ["Analyze depth and focal areas", "Build printable texture layers", "Tune relief to the material and product use"],
    output: "A layered color-and-varnish file prepared for tactile UV printing.",
    editableFields: ["Artwork", "Relief depth", "Gloss areas", "Crop", "Color balance"],
    license: "The workflow is reusable; commercial rights depend on the artwork supplied by the user.",
  },
  {
    id: "team-badge",
    title: "Team Badge Builder",
    tagline: "Mix mascots, names, numbers, and club colors",
    image: img.mug,
    inputImage: img.sticker,
    uses: "2.8K",
    prints: "340",
    credits: 4,
    badges: ["AI Concept", "Commercial Use"],
    products: ["Tumblers", "Badges", "Stickers"],
    projectIds: ["tigers-tumbler"],
    materialIds: ["steel-tumbler"],
    inputs: ["Team name", "Player name and number", "Owned mascot or symbol", "Team colors"],
    steps: ["Create the badge system", "Generate player variations", "Fit the artwork to a rotary wrap layout"],
    output: "An editable team design system with batch-ready name and number variations.",
    editableFields: ["Team name", "Player name", "Number", "Colors", "Mascot", "Event date"],
    license: "Commercial use allowed only for original or properly licensed team identities.",
  },
];

export const materials: Material[] = [
  {
    id: "wood-acrylic-magnet",
    title: "3.5” Wood + Acrylic Magnet",
    material: "Birch plywood + clear acrylic",
    image: img.petMagnets,
    size: "89 × 89 mm",
    thickness: "3 + 3 mm",
    unitCost: "$1.10–1.65",
    printArea: "85 × 85 mm",
    surface: "Clear gloss acrylic over birch plywood",
    shape: "Flat square · layered assembly",
    difficulty: "Easy",
    device: "eufyMake E1 flatbed",
    prep: "Peel film, wipe acrylic, print reverse on clear layer",
    fixture: "4-up magnet jig",
    printSetup: "Reverse print on acrylic: color + white + varnish, 600 × 900 dpi, 2.5 mm fixture height.",
    aftercare: "Cool for 3 minutes, inspect white coverage, then align and bond the acrylic layer to the wood base.",
    tests: ["Reverse-print color remains vivid after assembly", "Passed 24-hour room-temperature adhesion check", "Four-up jig repeated within ±0.5 mm"],
    failures: ["Dust trapped under the clear layer", "Artwork not mirrored before reverse printing", "Magnet hardware attached before the ink cools"],
    rating: 4.8,
    reviews: 46,
    projectIds: ["milo-magnet", "cat-magnet", "holiday-pet-set"],
  },
  {
    id: "ceramic-coaster",
    title: "3.9” Glazed Ceramic Coaster",
    material: "Glazed ceramic",
    image: img.coasters,
    size: "100 × 100 mm",
    thickness: "6 mm",
    unitCost: "$0.85–1.20",
    printArea: "96 × 96 mm",
    surface: "Glazed, non-porous ceramic",
    shape: "Flat square with rounded corners",
    difficulty: "Medium",
    device: "eufyMake E1 flatbed",
    prep: "Clean with lint-free cloth; primer recommended",
    fixture: "3 × 4 coaster jig",
    printSetup: "Primer-assisted color + white + selective varnish, 600 × 1200 dpi, low carriage speed.",
    aftercare: "Rest for 12 hours before abrasion or water testing; add cork backing only after the surface passes inspection.",
    tests: ["Passed dry rub test after 12-hour cure", "Light splash resistance verified", "Primer improved edge adhesion in community tests"],
    failures: ["Skipping primer causes edge flaking", "Printing over moisture or cleaner residue", "High varnish coverage makes drinkware unstable"],
    rating: 4.7,
    reviews: 82,
    projectIds: ["van-gogh-coaster", "botanical-coaster"],
  },
  {
    id: "acrylic-magnet",
    title: "Layered Clear Acrylic Magnet",
    material: "Cast acrylic",
    image: img.acrylic,
    size: "75 × 55 mm",
    thickness: "3 mm",
    unitCost: "$1.40–2.10",
    printArea: "Full bleed",
    surface: "Clear cast acrylic",
    shape: "Flat custom-cut small part",
    difficulty: "Medium",
    device: "eufyMake E1 flatbed",
    prep: "Remove protective film; anti-static wipe",
    fixture: "Universal small-parts jig",
    printSetup: "Mirror artwork for reverse print, color + white backing, 600 × 900 dpi, anti-static mode enabled.",
    aftercare: "Cool fully before installing magnet hardware; protect the printed side with the supplied backing layer.",
    tests: ["Reverse-print color verified on two acrylic suppliers", "Universal jig supports repeat batches", "No haze after anti-static preparation"],
    failures: ["Static attracts dust and creates white specks", "Laser-cut edges can distort full-bleed alignment", "Supplier acrylic tint changes final color"],
    rating: 4.6,
    reviews: 31,
    projectIds: ["brooklyn-magnet", "paris-magnet"],
  },
  {
    id: "steel-tumbler",
    title: "20 oz Straight Stainless Tumbler",
    material: "Powder-coated stainless steel",
    image: img.mug,
    size: "Ø 74 × 205 mm",
    thickness: "—",
    unitCost: "$5.20–7.60",
    printArea: "225 × 190 mm wrap",
    surface: "Powder-coated stainless steel",
    shape: "Straight cylinder",
    difficulty: "Advanced",
    device: "eufyMake E1 + rotary attachment",
    prep: "Degrease surface; rotary auto-level",
    fixture: "Rotary printing attachment",
    printSetup: "Early reference only: rotary alignment test, white underbase, 600 × 900 dpi, seam-safe wrap area.",
    aftercare: "Allow the coating to cool, inspect the seam and top edge, then run a hand-wash durability test.",
    tests: ["Fixture fit confirmed", "Full design workflow prepared for first physical validation"],
    failures: ["Not yet verified by a completed community print", "Rotary seam drift", "Artwork placed into tapered shoulder area"],
    rating: 4.5,
    reviews: 59,
    projectIds: ["tigers-tumbler"],
  },
  {
    id: "a5-acrylic-panel",
    title: "A5 Clear Acrylic Display Panel",
    material: "Cast acrylic",
    image: img.sign,
    size: "148 × 210 mm",
    thickness: "5 mm",
    unitCost: "$3.60–5.00",
    printArea: "144 × 206 mm",
    surface: "Clear cast acrylic",
    shape: "Flat A5 panel",
    difficulty: "Easy",
    device: "eufyMake E1 flatbed",
    prep: "Anti-static clean; mirror artwork for reverse print",
    fixture: "Large flatbed alignment guide",
    printSetup: "Reverse print with color + white backing, 600 × 900 dpi, 2 mm safe margin around polished edges.",
    aftercare: "Cool, remove remaining film, inspect from the viewing side, then mount in the display base.",
    tests: ["Reverse-print signage remains readable under store lighting", "Alignment guide supports repeat weekly sign changes", "Passed dry surface cleaning test"],
    failures: ["Forgetting to mirror text", "White backing too thin for bright backgrounds", "Fingerprints visible beneath reverse print"],
    rating: 4.8,
    reviews: 24,
    projectIds: ["paris-magnet"],
  },
];

export const projects: Project[] = [
  {
    id: "milo-magnet",
    title: "Milo’s Kitchen Magnet",
    image: img.petMagnets,
    creatorId: "suz",
    likes: 128,
    saves: 74,
    prints: 35,
    skillId: "pet-portrait",
    materialId: "wood-acrylic-magnet",
    badge: "Verified Print",
    time: "11 min",
    ink: "0.72 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0714-2048 · completed",
    parameters: "600 × 900 dpi · color + white · reverse acrylic print",
    reusable: true,
    license: "Personal and commercial remix allowed through the linked Skill.",
    ideaIds: ["pet-magnet"],
    story: "A customer photo turned into a layered keepsake with the name integrated into the illustration.",
  },
  {
    id: "cat-magnet",
    title: "Hannah in Hearts",
    image: img.petMagnets2,
    creatorId: "mia",
    likes: 94,
    saves: 62,
    prints: 19,
    skillId: "pet-portrait",
    materialId: "wood-acrylic-magnet",
    badge: "Verified Print",
    time: "12 min",
    ink: "0.76 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0712-1186 · completed",
    parameters: "600 × 900 dpi · color + white · low gloss",
    reusable: true,
    license: "Personal and commercial remix allowed through the linked Skill.",
    ideaIds: ["pet-magnet"],
    story: "A soft pink portrait variation designed as a small memorial gift.",
  },
  {
    id: "holiday-pet-set",
    title: "Holiday Pet Gift Set",
    image: img.dog,
    creatorId: "suz",
    likes: 166,
    saves: 113,
    prints: 42,
    skillId: "pet-portrait",
    materialId: "wood-acrylic-magnet",
    badge: "Verified Print",
    time: "34 min / 4",
    ink: "2.48 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0709-0932 · completed",
    parameters: "4-up jig · 600 × 900 dpi · color + white",
    reusable: true,
    license: "Commercial remix allowed; original customer photos remain private.",
    ideaIds: ["pet-magnet"],
    story: "Four coordinated pet portraits produced as a batch-friendly holiday set.",
  },
  {
    id: "brooklyn-magnet",
    title: "Brooklyn Night Market Magnet",
    image: img.city,
    creatorId: "leo",
    likes: 211,
    saves: 142,
    prints: 67,
    skillId: "city-poster",
    materialId: "acrylic-magnet",
    badge: "Verified Print",
    time: "17 min",
    ink: "0.84 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0710-1722 · completed",
    parameters: "600 × 900 dpi · reverse acrylic · full white backing",
    reusable: true,
    license: "Commercial remix allowed with original or licensed landmark references.",
    ideaIds: ["city-magnet"],
    story: "A bold skyline souvenir built for a neighborhood weekend market.",
  },
  {
    id: "paris-magnet",
    title: "Paris in Poppy Red",
    image: img.sign,
    creatorId: "mia",
    likes: 173,
    saves: 97,
    prints: 54,
    skillId: "city-poster",
    materialId: "acrylic-magnet",
    badge: "Verified Print",
    time: "19 min",
    ink: "0.93 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0708-1450 · completed",
    parameters: "600 × 900 dpi · reverse acrylic · satin varnish",
    reusable: true,
    license: "Commercial remix allowed with original or licensed landmark references.",
    ideaIds: ["city-magnet"],
    story: "A high-contrast city edition adapted across magnet and wall display formats.",
  },
  {
    id: "van-gogh-coaster",
    title: "Midnight Texture Coasters",
    image: img.art,
    creatorId: "noah",
    likes: 302,
    saves: 188,
    prints: 81,
    skillId: "textured-art",
    materialId: "ceramic-coaster",
    badge: "Verified Print",
    time: "16 min",
    ink: "1.08 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0705-0824 · completed",
    parameters: "600 × 1200 dpi · primer · color + white + relief varnish",
    reusable: false,
    license: "Process notes are public; the artwork itself is not licensed for reuse.",
    ideaIds: ["artist-coaster"],
    story: "Raised brushstroke details make each coaster feel like a miniature canvas.",
  },
  {
    id: "botanical-coaster",
    title: "Pressed Botanical Tile Set",
    image: img.coasters,
    creatorId: "noah",
    likes: 139,
    saves: 91,
    prints: 33,
    skillId: "textured-art",
    materialId: "ceramic-coaster",
    badge: "Verified Print",
    time: "15 min",
    ink: "0.96 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0706-1103 · completed",
    parameters: "600 × 1200 dpi · primer · selective relief varnish",
    reusable: true,
    license: "Personal remix allowed; commercial use requires your own botanical artwork.",
    ideaIds: ["artist-coaster"],
    story: "A quiet, natural coaster series with restrained texture and muted color.",
  },
  {
    id: "tigers-tumbler",
    title: "Tigers #12 Team Tumbler",
    image: img.mug,
    creatorId: "leo",
    likes: 88,
    saves: 48,
    prints: 7,
    skillId: "team-badge",
    materialId: "steel-tumbler",
    badge: "AI Concept",
    time: "21 min est.",
    ink: "1.8 ml est.",
    device: "eufyMake E1 + rotary attachment",
    parameters: "Unverified estimate · rotary color + white wrap",
    reusable: true,
    license: "Workflow can be reused with original or licensed team identities.",
    ideaIds: ["team-tumbler"],
    story: "A configurable team concept ready for its first community print validation.",
  },
  {
    id: "market-sign",
    title: "Saturday Flower Bar Sign",
    image: img.market,
    creatorId: "mia",
    likes: 124,
    saves: 73,
    prints: 28,
    materialId: "a5-acrylic-panel",
    badge: "Verified Print",
    time: "23 min",
    ink: "2.10 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0707-1618 · completed",
    parameters: "600 × 900 dpi · reverse acrylic · full white backing",
    reusable: false,
    license: "Process notes are public; original layout remains creator-owned.",
    ideaIds: [],
    story: "A reusable countertop sign for market sellers who change their offer every week.",
  },
  {
    id: "cat-earrings",
    title: "Midnight Cat Earrings",
    image: img.jewelry,
    creatorId: "suz",
    likes: 247,
    saves: 171,
    prints: 63,
    materialId: "acrylic-magnet",
    badge: "Verified Print",
    time: "9 min / pair",
    ink: "0.31 ml",
    device: "eufyMake E1",
    completionRecord: "E1 job #E1-0704-1905 · completed",
    parameters: "Small-parts jig · 600 × 900 dpi · color + white",
    reusable: false,
    license: "Inspiration and process may be referenced; artwork is not licensed for reproduction.",
    ideaIds: [],
    story: "Small acrylic shapes printed in batches, then assembled with simple findings.",
  },
];

export const creators: Creator[] = [
  {
    id: "suz",
    name: "Suz Atelier",
    handle: "@suzmakes",
    avatar: img.creator1,
    cover: img.petMagnets,
    bio: "Personalized gifts, layered acrylic, and small products that feel genuinely personal.",
    location: "Portland, US",
    specialties: ["Pet gifts", "Acrylic", "Batch making"],
    followers: "12.8K",
    projects: ["milo-magnet", "holiday-pet-set", "cat-earrings"],
    skills: ["pet-portrait"],
    materials: ["wood-acrylic-magnet", "acrylic-magnet"],
    store: "suzatelier.example",
    verified: "Official Creator",
    roles: ["Official Creator", "Verified Print Maker", "Batch Making"],
    verifiedPrints: 3,
    reuseCount: "1.8K",
    rights: "Owns original project photography; linked Skills define separate remix rights.",
  },
  {
    id: "leo",
    name: "Leo Makes Local",
    handle: "@leomakeslocal",
    avatar: img.creator2,
    cover: img.city,
    bio: "Souvenir systems and local-market products built to change with every city.",
    location: "New York, US",
    specialties: ["Souvenirs", "Markets", "Drinkware"],
    followers: "8.6K",
    projects: ["brooklyn-magnet", "tigers-tumbler"],
    skills: ["city-poster", "team-badge"],
    materials: ["acrylic-magnet", "steel-tumbler"],
    store: "leomakeslocal.example",
    verified: "Verified Seller",
    roles: ["Verified Seller", "Workflow Creator", "Local Products"],
    verifiedPrints: 1,
    reuseCount: "940",
    rights: "Commercial workflows are reusable when users supply original or licensed local references.",
  },
  {
    id: "mia",
    name: "Mia Form Studio",
    handle: "@miaform",
    avatar: img.creator3,
    cover: img.sign,
    bio: "Graphic objects, joyful color systems, and useful art for everyday spaces.",
    location: "Berlin, DE",
    specialties: ["Graphic art", "Signage", "Gift design"],
    followers: "6.3K",
    projects: ["cat-magnet", "paris-magnet", "market-sign"],
    skills: [],
    materials: ["a5-acrylic-panel", "wood-acrylic-magnet"],
    store: "miaform.example",
    verified: "Verified Print Maker",
    roles: ["Verified Print Maker", "Graphic Creator"],
    verifiedPrints: 3,
    reuseCount: "420",
    rights: "Project visuals remain creator-owned unless a linked workflow explicitly grants remix rights.",
  },
  {
    id: "noah",
    name: "Noah Texture Lab",
    handle: "@noahtexture",
    avatar: img.creator4,
    cover: img.art,
    bio: "Exploring what color feels like through textured UV art and ceramic surfaces.",
    location: "Toronto, CA",
    specialties: ["3D texture", "Fine art", "Ceramic"],
    followers: "10.1K",
    projects: ["van-gogh-coaster", "botanical-coaster"],
    skills: ["textured-art"],
    materials: ["ceramic-coaster"],
    store: "noahtexture.example",
    verified: "Material Expert",
    roles: ["Material Expert", "Workflow Creator", "Community Contributor"],
    verifiedPrints: 2,
    reuseCount: "1.2K",
    rights: "Material tests and process notes are public; original artworks require separate permission.",
  },
];

export const campaigns = [
  {
    title: "Local Icons Challenge",
    date: "Jul 20 — Aug 18",
    image: img.city,
    description: "Turn a neighborhood landmark into a product people want to take home.",
    reward: "$3,000 in prizes",
  },
  {
    title: "Pet Shop Shelf",
    date: "Aug 1 — Aug 31",
    image: img.petMagnets,
    description: "Build a personalized pet product collection and share your best real print.",
    reward: "Ink + creator feature",
  },
  {
    title: "Texture You Can Feel",
    date: "Always open",
    image: img.art,
    description: "Show how 3D texture transforms a familiar image into a tactile object.",
    reward: "500 MIR Points",
  },
];

export const academy = [
  {
    title: "From idea to first sellable product",
    level: "Getting started",
    time: "8 min",
    image: img.market,
  },
  {
    title: "Acrylic reverse printing without haze",
    level: "Process guide",
    time: "6 min",
    image: img.acrylic,
  },
  {
    title: "Build a repeatable coaster jig",
    level: "Batch production",
    time: "11 min",
    image: img.coasters,
  },
];

export function findById<T extends { id: string }>(list: T[], id?: string) {
  return list.find((item) => item.id === id);
}
