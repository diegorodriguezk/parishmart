"use client";

import Link from "next/link";
import { useState } from "react";
import { SellerStepShell } from "@/components/onboarding/SellerStepShell";
import { ProductSellerLivePreview } from "@/components/onboarding/ProductSellerLivePreview";
import { useProductSeller } from "@/components/onboarding/ProductSellerContext";
import type { ProductItem } from "@/components/onboarding/ProductSellerContext";
import {
  createProductCsvTemplate,
  MAX_PRODUCT_IMAGES,
  MAX_PRODUCTS,
  parseProductCsv,
} from "@/components/onboarding/productCsv";

const STEP_TITLES = ["Profile", "Story", "Products", "Media", "Launch"];

const PRODUCT_CATEGORIES = [
  "Apparel",
  "Accessories",
  "Health & Wellness",
  "Home & Garden",
  "Books & Education",
  "Food & Beverage",
  "Gifts & Collectibles",
  "Arts & Crafts",
  "Electronics",
  "Sports & Outdoors",
  "Other",
];

function ProductCard({
  product,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: {
  product: ProductItem;
  index: number;
  onUpdate: (patch: Partial<ProductItem>) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  async function handleImageUpload(files: FileList | null) {
    if (!files?.length) return;
    const selected = Array.from(files).slice(0, MAX_PRODUCT_IMAGES - product.images.length);
    const images = await Promise.all(selected.map(readFileAsDataUrl));
    onUpdate({ images: [...product.images, ...images].slice(0, MAX_PRODUCT_IMAGES) });
  }

  return (
    <div className="rounded-[20px] border border-pm-border bg-white p-5 shadow-pm-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-pm-soft px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-pm-blue">
          Product {index + 1}
        </span>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-[11px] font-bold text-pm-muted transition hover:text-red-500"
          >
            Remove
          </button>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {/* Title */}
        <label className="block sm:col-span-2">
          <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
            Product Title
            <span className="font-normal text-pm-muted">{product.title.length}/30</span>
          </span>
          <input
            maxLength={30}
            value={product.title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Details */}
        <label className="block sm:col-span-2">
          <span className="flex items-center justify-between text-xs font-extrabold text-pm-navy">
            Product Details
            <span className="font-normal text-pm-muted">{product.details.length}/100</span>
          </span>
          <textarea
            rows={2}
            maxLength={100}
            value={product.details}
            onChange={(e) => onUpdate({ details: e.target.value })}
            className="mt-1.5 w-full resize-none rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm leading-relaxed text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Price */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">Price</span>
          <input
            value={product.price}
            onChange={(e) => onUpdate({ price: e.target.value })}
            placeholder="$0.00"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Discount Price */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">
            Discount Price <span className="font-normal text-pm-muted">(optional)</span>
          </span>
          <input
            value={product.discountPrice}
            onChange={(e) => onUpdate({ discountPrice: e.target.value })}
            placeholder="$0.00"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Category */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">Category</span>
          <select
            value={product.category}
            onChange={(e) => onUpdate({ category: e.target.value })}
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          >
            <option value="">Select category</option>
            {PRODUCT_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>

        {/* Product Type */}
        <div>
          <p className="text-xs font-extrabold text-pm-navy">Product Type</p>
          <div className="mt-1.5 flex gap-2">
            {(["Physical", "Digital"] as const).map((t) => (
              <label
                key={t}
                className="flex flex-1 cursor-pointer items-center gap-2 rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm font-medium text-pm-navy has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
              >
                <input
                  type="radio"
                  name={`type-${index}`}
                  value={t}
                  checked={product.type === t}
                  onChange={() => onUpdate({ type: t })}
                  className="accent-pm-blue"
                />
                {t}
              </label>
            ))}
          </div>
        </div>

        {/* Variations */}
        <div className="sm:col-span-2">
          <p className="text-xs font-extrabold text-pm-navy">Variations</p>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {(["color", "size"] as const).map((v) => (
              <label
                key={v}
                className="flex cursor-pointer items-center gap-2 rounded-full border border-pm-border bg-white px-3.5 py-2 text-xs font-medium text-pm-navy capitalize has-[:checked]:border-pm-blue has-[:checked]:bg-pm-soft"
              >
                <input
                  type="checkbox"
                  checked={product.variations[v]}
                  onChange={(e) =>
                    onUpdate({ variations: { ...product.variations, [v]: e.target.checked } })
                  }
                  className="accent-pm-blue"
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        {/* Images upload */}
        <div className="sm:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-extrabold text-pm-navy">Product Images</p>
            <span className="text-[11px] font-medium text-pm-muted">
              {product.images.length}/{MAX_PRODUCT_IMAGES}
            </span>
          </div>
          <div className="mt-1.5 grid grid-cols-5 gap-2">
            {Array.from({ length: MAX_PRODUCT_IMAGES }).map((_, i) => {
              const image = product.images[i];
              return (
                <div
                  key={i}
                  className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/50 text-center"
                >
                  {image ? (
                    <>
                      <img src={image} alt={`${product.title || "Product"} ${i + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => onUpdate({ images: product.images.filter((_, imageIndex) => imageIndex !== i) })}
                        className="absolute right-1 top-1 rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-bold text-red-500 shadow"
                      >
                        Remove
                      </button>
                    </>
                  ) : (
                    <div>
                      <p className="text-[10px] font-bold text-pm-navy">Photo {i + 1}</p>
                      <p className="mt-0.5 text-[9px] text-pm-muted">PNG, JPG</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <label className="mt-3 inline-flex cursor-pointer items-center rounded-2xl border border-pm-border bg-white px-4 py-2 text-xs font-bold text-pm-blue transition hover:border-pm-blue hover:bg-pm-soft">
            Upload images
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              multiple
              className="sr-only"
              onChange={(e) => {
                void handleImageUpload(e.target.files);
                e.currentTarget.value = "";
              }}
              disabled={product.images.length >= MAX_PRODUCT_IMAGES}
            />
          </label>
        </div>

        {/* Inventory */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">Inventory</span>
          <input
            value={product.inventory}
            onChange={(e) => onUpdate({ inventory: e.target.value })}
            placeholder="Units available"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Dimensions */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">Dimensions</span>
          <input
            value={product.dimensions}
            onChange={(e) => onUpdate({ dimensions: e.target.value })}
            placeholder='e.g. 10" × 8" × 2"'
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>

        {/* Weight */}
        <label className="block">
          <span className="block text-xs font-extrabold text-pm-navy">Weight</span>
          <input
            value={product.weight}
            onChange={(e) => onUpdate({ weight: e.target.value })}
            placeholder="e.g. 0.5 lbs"
            className="mt-1.5 w-full rounded-2xl border border-pm-border bg-white px-4 py-3 text-sm text-pm-ink outline-none focus:border-pm-blue"
          />
        </label>
      </div>
    </div>
  );
}

export default function SellerStep3() {
  const { profile, updateProduct, addProduct, removeProduct, replaceProducts } = useProductSeller();
  const [csvMessage, setCsvMessage] = useState("");
  const canAddProduct = profile.products.length < MAX_PRODUCTS;

  function downloadTemplate() {
    const blob = new Blob([createProductCsvTemplate()], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "parishmart-product-template.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function handleCsvUpload(file: File | undefined) {
    if (!file) return;
    const text = await file.text();
    const products = parseProductCsv(text);
    if (!products.length) {
      setCsvMessage("No products found. Check the template columns and try again.");
      return;
    }
    replaceProducts(products);
    setCsvMessage(`Imported ${products.length} product${products.length === 1 ? "" : "s"}. You can edit them below.`);
  }

  return (
    <SellerStepShell
      step={3}
      totalSteps={5}
      allStepTitles={STEP_TITLES}
      badge="Required"
      eyebrow="Step 3 of 5 · Products"
      title={<>Add your <span className="pm-gradient-text">products</span>.</>}
      description="List the products you sell. Add photos, pricing and variations for each item."
      preview={<ProductSellerLivePreview />}
    >
      <div className="rounded-[28px] border border-pm-border bg-white/90 p-6 shadow-pm-card backdrop-blur sm:p-7">
        <div className="mb-5 flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-pm-border bg-pm-soft text-sm font-extrabold text-pm-blue">AI</span>
          <div>
            <p className="text-xs font-extrabold text-pm-blue">ParishMart Concierge</p>
            <p className="mt-1 text-sm text-pm-muted">Add up to {MAX_PRODUCTS} products manually or import them with a CSV. The preview updates live as you fill in each one.</p>
          </div>
        </div>

        <div className="mb-5 rounded-[22px] border border-pm-border bg-pm-soft/40 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-extrabold text-pm-navy">Import products by CSV</p>
              <p className="mt-1 text-xs text-pm-muted">
                Use the template columns for title, details, pricing, category, type, color, size, inventory, dimensions and weight.
              </p>
            </div>
            <button type="button" onClick={downloadTemplate} className="pm-btn pm-btn-secondary shrink-0">
              Download CSV Template
            </button>
          </div>
          <label className="mt-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-pm-blue/40 bg-white px-4 py-5 text-center transition hover:border-pm-blue hover:bg-white/80">
            <span className="text-sm font-bold text-pm-blue">Upload CSV</span>
            <span className="mt-1 text-xs text-pm-muted">The upload will save all products but only preview the first {MAX_PRODUCTS} products.</span>
            <input
              type="file"
              accept=".csv,text/csv"
              className="sr-only"
              onChange={(e) => {
                void handleCsvUpload(e.target.files?.[0]);
                e.currentTarget.value = "";
              }}
            />
          </label>
          {csvMessage && <p className="mt-2 text-xs font-semibold text-pm-blue">{csvMessage}</p>}
        </div>

        <div className="grid gap-4">
          {profile.products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              index={i}
              onUpdate={(patch) => updateProduct(i, patch)}
              onRemove={() => removeProduct(i)}
              canRemove={profile.products.length > 1}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={addProduct}
          disabled={!canAddProduct}
          className="mt-4 w-full rounded-2xl border border-dashed border-pm-blue/40 bg-pm-soft/30 py-4 text-sm font-bold text-pm-blue transition hover:border-pm-blue hover:bg-pm-soft/60 disabled:cursor-not-allowed disabled:border-pm-border disabled:text-pm-muted"
        >
          {canAddProduct ? "+ Add Another Product" : `Maximum of ${MAX_PRODUCTS} products reached`}
        </button>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-pm-border pt-5">
          <Link href="/onboarding/seller/step-2" className="pm-btn pm-btn-secondary">Back</Link>
          <Link href="/onboarding/seller/step-4" className="pm-btn pm-btn-primary">Continue</Link>
        </div>
      </div>
    </SellerStepShell>
  );
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
