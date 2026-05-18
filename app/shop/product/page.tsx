import Link from "next/link";
import { notFound } from "next/navigation";
import { SubStoreHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustBadge, StarRating } from "@/components/TrustBadge";
import { ImpactBreakdown } from "@/components/ImpactBreakdown";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
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
    title: product ? `${product.name} · SKD Parish Store` : "Product",
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
      <SubStoreHeader />

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
            <Photo
              kind={product.photo}
              src={product.src}
              alt={product.name}
              ratio="1/1"
              rounded="rounded-3xl"
              fit="contain"
              overlay="none"
              className="bg-white"
            />
            <div className="grid grid-cols-3 gap-2">
              {related.map((r) => (
                <Photo
                  key={r.id}
                  kind={r.photo}
                  src={r.src}
                  alt={r.name}
                  ratio="1/1"
                  rounded="rounded-xl"
                  fit="contain"
                  overlay="none"
                  className="bg-white"
                />
              ))}
            </div>
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
              <div className="flex flex-wrap items-center gap-2">
                <span className="pm-label">
                  Supports {product.cause ?? "SKD Parish"}
                </span>
                <TrustBadge variant="approved" label="Approved seller" />
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-pm-navy md:text-4xl">
                {product.name}
              </h1>
              <div className="mt-2">
                <StarRating value={4.8} count={42} />
              </div>
              <p className="mt-2 text-sm text-pm-muted">{product.meta}</p>
              <p className="mt-4 text-3xl font-extrabold text-pm-navy">
                {product.price}
              </p>

              <div className="mt-4">
                <ImpactBreakdown
                  amount={numericPrice}
                  causePct={10}
                  platformPct={4}
                  causeName={product.cause ?? "SKD Parish"}
                />
              </div>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Color</p>
                <div className="flex flex-wrap gap-2">
                  {["Black", "Navy", "Heather Gray"].map((c, i) => (
                    <span
                      key={c}
                      className="pm-chip"
                      data-active={i === 0 ? "true" : undefined}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-xs font-bold text-pm-navy">Size</p>
                <div className="flex flex-wrap gap-2">
                  {["S", "M", "L", "XL", "2XL"].map((s, i) => (
                    <span
                      key={s}
                      className="pm-chip min-w-[44px] !justify-center"
                      data-active={i === 1 ? "true" : undefined}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
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
                <Link
                  href="/shop/cart"
                  className="pm-btn pm-btn-secondary w-full"
                >
                  Buy Now
                </Link>
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
