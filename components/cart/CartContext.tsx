"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  meta?: string;
  price: number;
  qty: number;
  cause?: string;
  parish?: string;
  photo?: string;
};

export type DonationItem = {
  cause: string;
  amount: number;
  parish?: string;
};

type CartState = {
  items: CartItem[];
  donations: DonationItem[];
  supportPct: number;
  isOpen: boolean;
  toast: string | null;
};

type CartActions = {
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  addDonation: (d: DonationItem) => void;
  removeDonation: (cause: string) => void;
  setSupportPct: (pct: number) => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  showToast: (msg: string) => void;
  clear: () => void;
  totals: {
    subtotal: number;
    donations: number;
    support: number;
    total: number;
    itemCount: number;
  };
};

const CartContext = createContext<(CartState & CartActions) | null>(null);

const STORAGE_KEY = "parishmart-cart-v1";


export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [donations, setDonations] = useState<DonationItem[]>([]);
  const [supportPct, setSupportPct] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setItems(parsed.items ?? []);
        setDonations(parsed.donations ?? []);
        setSupportPct(parsed.supportPct ?? 0);
      }
    } catch {
      // start with empty cart on error
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ items, donations, supportPct }),
    );
  }, [items, donations, supportPct, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2400);
  }, []);

  const addItem: CartActions["addItem"] = useCallback(
    (item) => {
      setItems((prev) => {
        const existing = prev.find((p) => p.id === item.id);
        if (existing) {
          return prev.map((p) =>
            p.id === item.id ? { ...p, qty: p.qty + (item.qty ?? 1) } : p,
          );
        }
        return [...prev, { ...item, qty: item.qty ?? 1 }];
      });
      showToast(`Added ${item.name} to cart`);
    },
    [showToast],
  );

  const removeItem = useCallback(
    (id: string) => setItems((prev) => prev.filter((p) => p.id !== id)),
    [],
  );

  const updateQty = useCallback(
    (id: string, qty: number) =>
      setItems((prev) =>
        prev
          .map((p) => (p.id === id ? { ...p, qty: Math.max(0, qty) } : p))
          .filter((p) => p.qty > 0),
      ),
    [],
  );

  const addDonation = useCallback((d: DonationItem) => {
    setDonations((prev) => {
      const existing = prev.find((x) => x.cause === d.cause);
      if (existing) {
        return prev.map((x) => (x.cause === d.cause ? d : x));
      }
      return [...prev, d];
    });
  }, []);

  const removeDonation = useCallback(
    (cause: string) =>
      setDonations((prev) => prev.filter((x) => x.cause !== cause)),
    [],
  );

  const totals = useMemo(() => {
    const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
    const donationTotal = donations.reduce((s, d) => s + d.amount, 0);
    const support = ((subtotal + donationTotal) * supportPct) / 100;
    const itemCount = items.reduce((s, it) => s + it.qty, 0);
    return {
      subtotal: Math.round(subtotal * 100) / 100,
      donations: Math.round(donationTotal * 100) / 100,
      support: Math.round(support * 100) / 100,
      total:
        Math.round((subtotal + donationTotal + support) * 100) / 100,
      itemCount,
    };
  }, [items, donations, supportPct]);

  const value: CartState & CartActions = {
    items,
    donations,
    supportPct,
    isOpen,
    toast,
    addItem,
    removeItem,
    updateQty,
    addDonation,
    removeDonation,
    setSupportPct,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((v) => !v),
    showToast,
    clear: () => {
      setItems([]);
      setDonations([]);
    },
    totals,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
