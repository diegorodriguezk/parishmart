import { PhotoKind } from "@/components/Photo";

export type ProductCategory =
  | "parish-merch"
  | "religious-gifts"
  | "first-communion"
  | "church-supply"
  | "apparel";

export type Product = {
  id: string;
  name: string;
  src: string;
  price: string;
  meta: string;
  description?: string;
  features?: string[];
  category: ProductCategory;
  label?: string;
  seller: string;
  cause?: string;
  photo: PhotoKind;
};

export const PRODUCTS: Product[] = [
  {
    id: "skd-mens-microfleece-jacket",
    name: "Saint Katharine Drexel Men's Microfleece Jacket",
    src: "/brand/products/jacket-men.png",
    price: "$35.99",
    meta: "Parish merch · Men's microfleece, embroidered SKD seal.",
    description:
      "Stay warm and wear your faith proudly with the official SKD microfleece jacket. Crafted from a soft, mid-weight fleece, it features an embroidered Saint Katharine Drexel seal on the chest — a subtle mark of community and belonging. A portion of every purchase goes directly toward SKD parish ministries and formation initiatives.",
    features: ["Embroidered SKD seal", "Mid-weight microfleece", "Men's regular fit", "Full-zip closure", "Machine washable"],
    category: "parish-merch",
    label: "Supports SKD",
    seller: "skd-parish-store",
    cause: "Saint Katharine Drexel",
    photo: "apparel",
  },
  {
    id: "skd-womens-microfleece-jacket",
    name: "Saint Katharine Drexel Women's Microfleece Jacket",
    src: "/brand/products/jacket-women.png",
    price: "$35.99",
    meta: "Parish merch · Women's microfleece, embroidered SKD seal.",
    category: "parish-merch",
    label: "Supports SKD",
    seller: "skd-parish-store",
    cause: "Saint Katharine Drexel",
    photo: "apparel",
  },
  {
    id: "harps-club-tote",
    name: "Harps Club Cotton Canvas Two-Tone Tote Bag",
    src: "/brand/products/tote-harps.png",
    price: "$14.90",
    meta: "Two-tone cotton canvas tote · Community merch.",
    category: "apparel",
    label: "Community Merch",
    seller: "harps-club",
    photo: "merch",
  },
  {
    id: "harps-club-crewneck",
    name: "Harps Club Unisex Crewneck Sweatshirt",
    src: "/brand/products/crew-harps.png",
    price: "$29.99",
    meta: "Unisex crewneck · Soft cotton blend.",
    category: "apparel",
    label: "Community Merch",
    seller: "harps-club",
    photo: "apparel",
  },
  {
    id: "harps-club-cap",
    name: "Harps Club Brushed Twill Cap",
    src: "/brand/products/cap-harps.png",
    price: "$19.99",
    meta: "Brushed twill cap with embroidered logo.",
    category: "apparel",
    label: "Community Merch",
    seller: "harps-club",
    photo: "apparel",
  },
  {
    id: "rosary",
    name: "Rosary",
    src: "/brand/products/rosary.jpg",
    price: "$47.00",
    meta: "Hand-crafted rosary for daily prayer.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "rosary",
  },
  {
    id: "unity-candleholder",
    name: "Unity Candleholder",
    src: "/brand/products/unity-candleholder.jpg",
    price: "$45.00",
    meta: "Wedding & unity ceremony candleholder.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "chalice",
  },
  {
    id: "saint-benedict-crucifix",
    name: "Saint Benedict Crucifix on Enamel Cross",
    src: "/brand/products/saint-benedict-crucifix.jpg",
    price: "$50.00",
    meta: "Saint Benedict crucifix on enamel cross.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "cross",
  },
  {
    id: "saint-joseph-biography",
    name: 'Saint Joseph "Terror of Demons" Biography Folder and Medal',
    src: "/brand/products/saint-joseph-biography.jpg",
    price: "$19.00",
    meta: "Saint Joseph biography folder and devotional medal.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "bible",
  },
  {
    id: "holy-family-figure",
    name: '7.5"H Gold Holy Family Figure',
    src: "/brand/products/holy-family-figure.jpg",
    price: "$35.00",
    meta: "Gold-tone Holy Family figure for home altars.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "communion",
  },
  {
    id: "communion-candle-boy",
    name: "Candle Communion Boy · Precious Moments",
    src: "/brand/products/communion-candle-boy.png",
    price: "$10.00",
    meta: "Precious Moments first communion candle for boys.",
    category: "first-communion",
    label: "First Communion",
    seller: "ParishMart",
    photo: "communion",
  },
  {
    id: "willow-tree-mother-daughter",
    name: "Mother Daughter by Willow Tree",
    src: "/brand/products/willow-tree-mother-daughter.png",
    price: "$52.00",
    meta: "Willow Tree mother and daughter keepsake figure.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "community",
  },
  {
    id: "virgin-mary-medal",
    name: "14K Gold Medal Virgin Mary (11mm)",
    src: "/brand/products/virgin-mary-medal.png",
    price: "$94.00",
    meta: "14K gold Virgin Mary medal · 11mm.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "rosary",
  },
  {
    id: "keepsake-dish",
    name: "Blessed Artful Cross Keeper · Keepsake Dish",
    src: "/brand/products/keepsake-dish.jpg",
    price: "$20.00",
    meta: "Hand-painted keepsake dish with cross detail.",
    category: "religious-gifts",
    label: "Religious Gift",
    seller: "ParishMart",
    photo: "chalice",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function productsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export type ServiceEntry = {
  name: string;
  description: string;
  price: string;
};

export type Business = {
  id: string;
  kind: "service" | "product-seller";
  name: string;
  initials: string;
  logoSrc: string;
  category: string;
  location: string;
  description: string;
  about?: string;
  parishSupported?: string;
  email?: string;
  phone?: string;
  website?: string;
  services?: ServiceEntry[];
  founderName?: string;
  founderShortDesc?: string;
};

export const BUSINESSES: Business[] = [
  {
    id: "aquatic-adventures-fl",
    kind: "service",
    name: "Aquatic Adventures FL",
    initials: "AA",
    logoSrc: "/brand/businesses/aquatic-adventures.jpg",
    category: "Family & Recreation",
    location: "Fort Lauderdale, FL",
    description:
      "Family swim programs and aquatic adventures supporting local parish families.",
  },
  {
    id: "armando-fit",
    kind: "service",
    name: "Armando Fit",
    initials: "AF",
    logoSrc: "/brand/businesses/armando-fit.jpg",
    category: "Wellness & Fitness",
    location: "Weston, FL",
    description:
      "Personal training and wellness programs serving the SKD community.",
  },
  {
    id: "meraki",
    kind: "service",
    name: "Meraki",
    initials: "MK",
    logoSrc: "/brand/businesses/meraki.jpg",
    category: "Lifestyle & Goods",
    location: "Doral, FL",
    description:
      "Handcrafted goods and lifestyle products from a local supporter.",
  },
  {
    id: "harps-club",
    kind: "product-seller",
    name: "Harps Club",
    initials: "HC",
    logoSrc: "",
    category: "Merch & Apparel",
    location: "South Florida",
    description: "Custom apparel, parish merch and ministry products designed to help causes raise funds and build identity.",
    about: "Harps Club offers thoughtfully curated community products, custom apparel and healthy essentials for everyday parish families. We partner with trusted suppliers to bring clean, effective and reliable products that support better habits and stronger causes. Every purchase helps fund parish programs and family education.",
    parishSupported: "Saint Katharine Drexel",
    website: "harpsclub.com",
    founderName: "Sarah Martinez",
    founderShortDesc: "As a mom, wellness advocate and parish volunteer, Sarah created Harps Club to make meaningful merchandise accessible for families and faith-based causes.",
  },
  {
    id: "maria-studios",
    kind: "service",
    name: "Maria's Studios",
    initials: "MS",
    logoSrc: "",
    category: "Photography",
    location: "Weston, FL",
    description: "Photography services for parish events, retreats and SKD family celebrations.",
    about: "Maria's Studios has been serving the SKD community for over a decade, capturing the moments that matter most — from baptisms and quinceañeras to Emmaus retreats and parish galas.",
    parishSupported: "Saint Katharine Drexel",
    email: "hello@mariastudios.com",
    phone: "(954) 555-0200",
    website: "mariastudios.com",
    services: [
      { name: "Family Photography", description: "Indoor and outdoor family portraits.", price: "From $150" },
      { name: "Emmaus Retreat Coverage", description: "Full event coverage for men's and women's retreats.", price: "From $350" },
      { name: "Parish Event Coverage", description: "Galas, quinceañeras and community events.", price: "Quote" },
      { name: "Baptism / First Communion", description: "Sacramental milestone photography.", price: "From $200" },
      { name: "Quinceañera", description: "Full day coverage packages.", price: "From $300" },
    ],
  },
];

export function getBusiness(id: string): Business | undefined {
  return BUSINESSES.find((b) => b.id === id);
}

export type CauseKey = string;

export type Cause = {
  key: CauseKey;
  name: string;
  logoSrc: string;
  background: "white" | "dark";
  parishSlug?: string;
  tagline?: string;
  description?: string;
};

export const CAUSES: Record<string, Cause> = {
  "christ-care-for-all": {
    key: "christ-care-for-all",
    name: "Christlike Care for All",
    logoSrc: "/brand/causes/christ-care-for-all.jpg",
    background: "white",
  },
  face: {
    key: "face",
    name: "FACE",
    logoSrc: "/brand/causes/face.jpeg",
    background: "white",
  },
  goyito: {
    key: "goyito",
    name: "Goyito Was Here",
    logoSrc: "/brand/causes/goyito.png",
    background: "white",
  },
  cam: {
    key: "cam",
    name: "CAM",
    logoSrc: "/brand/causes/cam.png",
    background: "dark",
  },
  forta: {
    key: "forta",
    name: "FORTA · Fortalecimiento Matrimonial",
    logoSrc: "/brand/causes/forta.png",
    background: "white",
  },
  "marys-hope": {
    key: "marys-hope",
    name: "Mary's Hope Network",
    logoSrc: "/brand/causes/marys-hope.png",
    background: "white",
  },
  "mater-18": {
    key: "mater-18",
    name: "Mater 18",
    logoSrc: "/brand/causes/mater-18.png",
    background: "white",
  },
  "miami-presente": {
    key: "miami-presente",
    name: "Miami Presente",
    logoSrc: "/brand/causes/miami-presente.png",
    background: "white",
  },
  "missionaries-of-hope": {
    key: "missionaries-of-hope",
    name: "Missionaries of Hope",
    logoSrc: "/brand/causes/missionaries-of-hope.png",
    background: "dark",
  },
  "saint-vincent-de-paul": {
    key: "saint-vincent-de-paul",
    name: "St. Vincent de Paul",
    logoSrc: "/brand/causes/saint-vincent-de-paul.jpg",
    background: "white",
  },
  "schoenstatt-miami": {
    key: "schoenstatt-miami",
    name: "Schoenstatt Miami",
    logoSrc: "/brand/causes/schoenstatt-miami.jpeg",
    background: "white",
  },
  emmaus: {
    key: "emmaus",
    name: "Emmaus Retreat",
    logoSrc: "/brand/causes/emmaus.png",
    background: "white",
    parishSlug: "skd",
    tagline: "A journey of faith, renewal, friendship and service.",
    description: "The Emmaus Retreat is an invitation to step away from the noise of everyday life and encounter Jesus in a personal and transformative way. Inspired by the Road to Emmaus, the ministry helps men and women rediscover faith, strengthen community, and return with a renewed desire to serve the parish.",
  },
};

export function getCause(key: string): Cause | undefined {
  return CAUSES[key as CauseKey];
}

export function listCauses(opts?: { parishSlug?: string }): Cause[] {
  const all = Object.values(CAUSES);
  if (opts?.parishSlug) return all.filter((c) => c.parishSlug === opts.parishSlug);
  return all;
}

export type Parish = {
  slug: string;
  name: string;
  shortName: string;
  initials: string;
  location: string;
  address: string;
  pastor: string;
  phone: string;
  founded: string;
  families: number;
  logoSrc: string;
  photoSrc: string;
  bannerSrc: string;
  mission: string;
};

export const PARISHES: Record<string, Parish> = {
  skd: {
    slug: "skd",
    name: "Saint Katharine Drexel Catholic Parish",
    shortName: "Saint Katharine Drexel",
    initials: "SKD",
    location: "Weston, FL",
    address: "2501 South Post Road, Weston, FL 33327",
    pastor: "Fr. Omar Ayubi V.F.",
    phone: "(954) 389-5003",
    founded: "2001-07-01",
    families: 5294,
    logoSrc: "/brand/skd/logo.png",
    photoSrc: "/brand/skd/church.jpg",
    bannerSrc: "/brand/skd/banner.png",
    mission:
      "To love God, to serve our neighbor, and to grow together as one family in Christ.",
  },
};

export function getParish(slug: string): Parish | undefined {
  return PARISHES[slug];
}

export function listParishes(): Parish[] {
  return Object.values(PARISHES);
}

export type Sponsor = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoSrc?: string;
  bannerSrc?: string;
  website?: string;
  category: string;
  location: string;
  offer?: string;
  offerDaysLeft?: string;
  contact: {
    name: string;
    email: string;
    phone?: string;
  };
};

export const SPONSORS: Sponsor[] = [
  {
    id: "cleveland-hospital",
    name: "Cleveland Hospital",
    tagline: "World-class care for your family.",
    description: "Cleveland Hospital provides comprehensive healthcare services to SKD parishioners and the broader South Florida community. As a ParishMart sponsor, they offer a $100 care credit toward your first visit.",
    category: "Healthcare",
    location: "Weston, FL",
    offer: "$100 credit",
    offerDaysLeft: "30d left",
    contact: { name: "Community Relations", email: "community@clevelandhospital.com", phone: "(954) 555-0300" },
  },
  {
    id: "casa-manresa",
    name: "Casa Manresa",
    tagline: "Retreat programs for spiritual formation.",
    description: "Casa Manresa offers retreat programs and spiritual direction connected to the Ignatian tradition. SKD parishioners receive a 15% benefit on retreat registrations.",
    category: "Spiritual Formation",
    location: "Miami, FL",
    offer: "15% retreat benefit",
    offerDaysLeft: "60d left",
    contact: { name: "Retreat Office", email: "retreats@casamanresa.org" },
  },
  {
    id: "community-bank-weston",
    name: "Community Bank Weston",
    tagline: "Banking built around your community.",
    description: "Community Bank Weston is a locally-owned financial institution supporting parish families with personal banking, mortgages and small business services.",
    category: "Finance",
    location: "Weston, FL",
    offer: "$50 cash back",
    offerDaysLeft: "32d left",
    contact: { name: "Branch Manager", email: "weston@communitybank.com", phone: "(954) 555-0400" },
  },
  {
    id: "baires-grill-weston",
    name: "Baires Grill Weston",
    tagline: "Authentic Argentine flavors for the whole family.",
    description: "Baires Grill brings authentic Argentine cuisine to Weston, offering a warm family dining experience with a parishioner discount every Sunday.",
    category: "Food & Beverage",
    location: "Weston, FL",
    offer: "5% cash back",
    offerDaysLeft: "18d left",
    contact: { name: "Front of House", email: "reservations@bairesgrill.com", phone: "(954) 555-0500" },
  },
  {
    id: "simplisafe-weston",
    name: "SimpliSafe Weston",
    tagline: "Home security you can trust.",
    description: "SimpliSafe provides professional home security monitoring for parish families in the Weston area. New subscribers through ParishMart receive $100 cash back on their first year.",
    category: "Home & Security",
    location: "Weston, FL",
    offer: "$100 cash back",
    offerDaysLeft: "24d left",
    contact: { name: "Sales Team", email: "weston@simplisafe.com" },
  },
  {
    id: "pretzelmaker-weston",
    name: "Pretzelmaker",
    tagline: "Fresh-baked pretzels every day.",
    description: "Pretzelmaker at Weston Town Center is a family favorite for fresh hot pretzels and dipping sauces. Show your parish connection for 10% cash back on any order.",
    category: "Food & Beverage",
    location: "Weston, FL",
    offer: "10% cash back",
    offerDaysLeft: "24d left",
    contact: { name: "Store Manager", email: "weston@pretzelmaker.com" },
  },
  {
    id: "family-streaming-co",
    name: "Family Streaming Co.",
    tagline: "Entertainment the whole family can enjoy.",
    description: "Family Streaming Co. curates faith-friendly and family-oriented content, offering 30% off annual subscriptions for ParishMart community members.",
    category: "Entertainment",
    location: "Remote",
    offer: "30% cash back",
    offerDaysLeft: "60d left",
    contact: { name: "Support", email: "support@familystreaming.co" },
  },
  {
    id: "legal-finance-partners",
    name: "Legal & Finance Partners",
    tagline: "Trusted legal and financial guidance.",
    description: "Legal & Finance Partners offers estate planning, family law and financial advisory services with a special 20% discount for SKD parishioners.",
    category: "Professional Services",
    location: "Weston, FL",
    offer: "20% off",
    offerDaysLeft: "45d left",
    contact: { name: "Office", email: "info@legalfinancepartners.com", phone: "(954) 555-0600" },
  },
];

export function listSponsors(): Sponsor[] {
  return SPONSORS;
}

export function getSponsor(id: string): Sponsor | undefined {
  return SPONSORS.find((s) => s.id === id);
}
