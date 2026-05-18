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
    category: "parish-merch",
    label: "Supports SKD",
    seller: "SKD Parish Store",
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
    seller: "SKD Parish Store",
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
    seller: "Harps Club",
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
    seller: "Harps Club",
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
    seller: "Harps Club",
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

export type Business = {
  id: string;
  name: string;
  initials: string;
  logoSrc: string;
  category: string;
  location: string;
  description: string;
  href: string;
};

export const BUSINESSES: Business[] = [
  {
    id: "aquatic-adventures-fl",
    name: "Aquatic Adventures FL",
    initials: "AA",
    logoSrc: "/brand/businesses/aquatic-adventures.jpg",
    category: "Family & Recreation",
    location: "Fort Lauderdale, FL",
    description:
      "Family swim programs and aquatic adventures supporting local parish families.",
    href: "/local-businesses/profile",
  },
  {
    id: "armando-fit",
    name: "Armando Fit",
    initials: "AF",
    logoSrc: "/brand/businesses/armando-fit.jpg",
    category: "Wellness & Fitness",
    location: "Weston, FL",
    description:
      "Personal training and wellness programs serving the SKD community.",
    href: "/local-businesses/profile",
  },
  {
    id: "meraki",
    name: "Meraki",
    initials: "MK",
    logoSrc: "/brand/businesses/meraki.jpg",
    category: "Lifestyle & Goods",
    location: "Doral, FL",
    description:
      "Handcrafted goods and lifestyle products from a local supporter.",
    href: "/local-businesses/profile",
  },
];

export function getBusiness(id: string): Business | undefined {
  return BUSINESSES.find((b) => b.id === id);
}

export type CauseKey =
  | "christ-care-for-all"
  | "face"
  | "goyito"
  | "cam"
  | "forta"
  | "marys-hope"
  | "mater-18"
  | "miami-presente"
  | "missionaries-of-hope"
  | "saint-vincent-de-paul"
  | "schoenstatt-miami";

export type Cause = {
  key: CauseKey;
  name: string;
  logoSrc: string;
  background: "white" | "dark";
};

export const CAUSES: Record<CauseKey, Cause> = {
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
};

export function getCause(key: string): Cause | undefined {
  return CAUSES[key as CauseKey];
}

export function listCauses(): Cause[] {
  return Object.values(CAUSES);
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
