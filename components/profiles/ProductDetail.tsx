import { Photo } from "@/components/Photo";
import { Section } from "@/components/Sections";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductImageGallery } from "@/components/shop/ProductImageGallery";
import { ProductColorPicker, ProductSizePicker } from "@/components/shop/ProductOptions";
import { ProductAddRow } from "@/components/shop/ProductAddRow";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import type { Product } from "@/lib/catalog";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const numericPrice = Number(product.price.replace(/[^0-9.]/g, ""));

  return (
    <>
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

              {(product.description ?? product.meta) && (
                <div className="mt-5 border-t border-pm-border pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pm-blue">
                    About this product
                  </p>
                  <div className="relative mt-3 pl-4">
                    <span className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-pm-blue/30" />
                    <p className="text-sm leading-relaxed text-pm-ink">
                      {product.description ?? product.meta}
                    </p>
                  </div>
                  {product.features && product.features.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center rounded-full border border-pm-border bg-white px-3 py-1 text-[11px] font-medium text-pm-navy"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
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
                <ProductAddRow
                  item={{
                    id: product.id,
                    name: product.name,
                    meta: "Black · M",
                    price: numericPrice,
                    cause: product.cause,
                    photo: product.photo,
                  }}
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
    </>
  );
}
