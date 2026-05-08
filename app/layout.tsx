import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";
import { MiniCart, CartToast } from "@/components/cart/MiniCart";

export const metadata: Metadata = {
  title: "ParishMart · Shop with Purpose. Give with Love.",
  description:
    "ParishMart connects parish stores, local businesses, sponsors, products, services and causes in one community marketplace.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <MiniCart />
          <CartToast />
        </CartProvider>
      </body>
    </html>
  );
}
