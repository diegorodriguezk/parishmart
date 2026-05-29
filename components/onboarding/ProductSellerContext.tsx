"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ProductItem = {
  title: string;
  details: string;
  price: string;
  discountPrice: string;
  category: string;
  type: "Physical" | "Digital" | "";
  variations: { color: boolean; size: boolean; material: boolean };
  inventory: string;
  dimensions: string;
  weight: string;
};

export type ProductSellerProfile = {
  // step 1
  businessName: string;
  contactFullName: string;
  productCategory: string;
  phone: string;
  email: string;
  websiteOrSocial: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  shortDescription: string;
  // step 2
  longDescription: string;
  founderName: string;
  parishSupported: string;
  whySupport: string;
  founderShortDesc: string;
  // step 3
  products: ProductItem[];
  // step 5
  deliveryMethods: string[];
  selectedPlan: string;
};

const DEFAULT_PRODUCT: ProductItem = {
  title: "",
  details: "",
  price: "",
  discountPrice: "",
  category: "",
  type: "Physical",
  variations: { color: false, size: false, material: false },
  inventory: "",
  dimensions: "",
  weight: "",
};

export const DEFAULT_PRODUCT_SELLER: ProductSellerProfile = {
  businessName: "Harps Club",
  contactFullName: "Sarah Martinez",
  productCategory: "Merch & Apparel",
  phone: "(954) 555-0100",
  email: "hello@harpsclub.com",
  websiteOrSocial: "harpsclub.com",
  address: "2501 South Post Road",
  city: "Weston",
  state: "FL",
  zipCode: "33327",
  country: "United States",
  shortDescription:
    "Custom apparel, parish merch and ministry products designed to help causes raise funds and build identity.",
  longDescription:
    "Harps Club offers thoughtfully curated community products, custom apparel and healthy essentials for everyday parish families. We partner with trusted suppliers to bring clean, effective and reliable products that support better habits and stronger causes. Every purchase helps fund parish programs and family education.",
  founderName: "Sarah Martinez",
  parishSupported: "Saint Katharine Drexel",
  whySupport:
    "We want to serve families in our area and contribute to the parish community through meaningful products.",
  founderShortDesc:
    "As a mom, wellness advocate and parish volunteer, Sarah created Harps Club to make meaningful merchandise accessible for families and faith-based causes.",
  products: [
    { title: "Harps Club Tote", details: "Canvas tote with parish logo", price: "$28", discountPrice: "", category: "Accessories", type: "Physical", variations: { color: true, size: false, material: false }, inventory: "50", dimensions: "", weight: "" },
    { title: "Parish Crewneck", details: "Soft fleece crewneck sweatshirt", price: "$55", discountPrice: "$45", category: "Apparel", type: "Physical", variations: { color: true, size: true, material: false }, inventory: "30", dimensions: "", weight: "" },
  ],
  deliveryMethods: ["Local Delivery", "Pickup"],
  selectedPlan: "seller",
};

type ProductSellerCtx = {
  profile: ProductSellerProfile;
  update: (patch: Partial<ProductSellerProfile>) => void;
  updateProduct: (index: number, patch: Partial<ProductItem>) => void;
  addProduct: () => void;
  removeProduct: (index: number) => void;
};

const Ctx = createContext<ProductSellerCtx | null>(null);
const STORAGE_KEY = "pm.product-seller-onboarding";

export function ProductSellerProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProductSellerProfile>(DEFAULT_PRODUCT_SELLER);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProfile({ ...DEFAULT_PRODUCT_SELLER, ...JSON.parse(stored) });
    } catch { /* ignore */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(profile)); } catch { /* ignore */ }
  }, [profile, hydrated]);

  const value = useMemo<ProductSellerCtx>(() => ({
    profile,
    update: (patch) => setProfile((p) => ({ ...p, ...patch })),
    updateProduct: (index, patch) =>
      setProfile((p) => ({
        ...p,
        products: p.products.map((item, i) => i === index ? { ...item, ...patch } : item),
      })),
    addProduct: () =>
      setProfile((p) => ({ ...p, products: [...p.products, { ...DEFAULT_PRODUCT }] })),
    removeProduct: (index) =>
      setProfile((p) => ({ ...p, products: p.products.filter((_, i) => i !== index) })),
  }), [profile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProductSeller() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useProductSeller must be used within <ProductSellerProvider>");
  return v;
}
