import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductImageGallery } from "@/components/shop/ProductImageGallery";
import { ProductColorPicker, ProductSizePicker } from "@/components/shop/ProductOptions";
import { fetchProduct, fetchProducts } from "@/lib/api";

const PRODUCT_ID = "skd-mens-microfleece-jacket";
const RELATED_IDS = [
  "skd-womens-microfleece-jacket",
  "harps-club-crewneck",
  "harps-club-cap",
];

export async function generateMetadata() {
  const product = await fetchProduct(PRODUCT_ID);
  return {
    title: product ? `${product.name} · ParishMart` : "Product",
  };
}

export default async function ProductDetailPage() {
  const [product, related] = await Promise.all([
    fetchProduct(PRODUCT_ID),
    fetchProducts({ ids: RELATED_IDS }),
  ]);

  if (!product) notFound();

  const numericPrice = Number(product.price.replace(/[^0-9.]/g, ""));

  return (
    <>
      <Header />

      <Section width="wide" className="!py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Shop with Purpose", href: "/shop" },
            { label: "Parish Merch", href: "/shop/listing" },
            { label: product.name },
          ]}
        />
      </Section>

      <Section width="wide" className="!pt-2">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-3">
            <ProductImageGallery
              main={{ id: product.id, src: product.src, alt: product.name, photo: product.photo }}
              thumbs={related.map((r) => ({ id: r.id, src: r.src, alt: r.name, photo: r.photo }))}
            />
            <div className="pm-card mt-4 p-5">
              <h3 className="text-base font-bold text-pm-navy">
                Product &amp; cause details
              </h3>
              <p className="mt-1 text-xs text-pm-muted">
                Everything in this product page is connected to{" "}
                {product.cause ?? "the SKD parish community"}.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    l: "Product type",
                    t: "Parish merch",
                    d: product.meta,
                  },
                  {
                    l: "Cause supported",
                    t: product.cause ?? "SKD Parish",
                    d: "Supports ministries, formation and parish initiatives.",
                  },
                  {
                    l: "Impact rule",
                    t: "10% supports SKD",
                    d: "A portion of every purchase contributes to the parish mission.",
                  },
                  {
                    l: "Seller",
                    t: product.seller,
                    d: "Approved seller inside the ParishMart ecosystem.",
                  },
                ].map((b) => (
                  <div
                    key={b.l}
                    className="rounded-2xl border border-pm-border bg-white p-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                      {b.l}
                    </p>
                    <p className="mt-1 text-sm font-bold text-pm-navy">{b.t}</p>
                    <p className="mt-1 text-xs text-pm-muted">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="pm-card p-5 sm:p-6">
              <span className="pm-label">
                Supports {product.cause ?? "SKD Parish"}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-pm-muted">{product.meta}</p>
              <p className="mt-4 text-3xl font-extrabold text-pm-navy">
                {product.price}
              </p>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Color</p>
                <ProductColorPicker />
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Size</p>
                <ProductSizePicker />
              </div>

              <div className="mt-5">
                <AddToCartButton
                  item={{
                    id: product.id,
                    name: product.name,
                    meta: "Black · M",
                    price: numericPrice,
                    cause: product.cause,
                    photo: product.photo,
                  }}
                  fullWidth
                />
              </div>
            </div>

            <div className="pm-card p-5">
              <h3 className="text-base font-bold text-pm-navy">
                Complete your SKD set
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {related.map((r) => {
                  const rPrice = Number(r.price.replace(/[^0-9.]/g, ""));
                  return (
                    <div key={r.id} className="space-y-2">
                      <Photo
                        kind={r.photo}
                        src={r.src}
                        alt={r.name}
                        ratio="1/1"
                        rounded="rounded-xl"
                        fit="contain"
                        overlay="none"
                        className="bg-white"
                      />
                      <p className="line-clamp-2 text-xs font-bold text-pm-navy">
                        {r.name}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] text-pm-muted">+{r.price}</p>
                        <AddToCartButton
                          item={{
                            id: r.id,
                            name: r.name,
                            price: rPrice,
                            cause: r.cause,
                            photo: r.photo,
                          }}
                          size="sm"
                          label="Add"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
