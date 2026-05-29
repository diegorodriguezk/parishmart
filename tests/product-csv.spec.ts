import { expect, test } from "@playwright/test";

import {
  CSV_TEMPLATE_HEADERS,
  createProductCsvTemplate,
  parseProductCsv,
} from "../components/onboarding/productCsv";

test("creates a CSV template from manual product fields without material", () => {
  expect(CSV_TEMPLATE_HEADERS).toEqual([
    "title",
    "details",
    "price",
    "discountPrice",
    "category",
    "type",
    "color",
    "size",
    "inventory",
    "dimensions",
    "weight",
  ]);
  expect(createProductCsvTemplate()).toContain(CSV_TEMPLATE_HEADERS.join(","));
  expect(createProductCsvTemplate()).not.toContain("material");
});

test("parses CSV products and limits imports to five rows", () => {
  const csv = [
    CSV_TEMPLATE_HEADERS.join(","),
    "Tote,Canvas bag,$28,,Accessories,Physical,true,false,50,10 x 8 x 2,0.5 lbs",
    "Crewneck,Soft fleece,$55,$45,Apparel,Physical,true,true,30,,",
    "Mug,Ceramic mug,$18,,Gifts & Collectibles,Physical,false,false,20,,",
    "Guide,PDF devotional,$9,,Books & Education,Digital,false,false,Unlimited,,",
    "Rosary,Hand-crafted,$47,,Gifts & Collectibles,Physical,false,false,12,,",
    "Ignored,Too many,$1,,Other,Physical,false,false,1,,",
  ].join("\n");

  const products = parseProductCsv(csv);

  expect(products).toHaveLength(5);
  expect(products[0]).toMatchObject({
    title: "Tote",
    variations: { color: true, size: false },
  });
  expect(products[1]).toMatchObject({
    discountPrice: "$45",
    variations: { color: true, size: true },
  });
  expect(products[4].title).toBe("Rosary");
});
