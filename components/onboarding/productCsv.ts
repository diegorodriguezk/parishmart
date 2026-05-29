import type { ProductItem } from "./ProductSellerContext";

export const MAX_PRODUCTS = 5;
export const MAX_PRODUCT_IMAGES = 5;

export const CSV_TEMPLATE_HEADERS = [
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
] as const;

export function createEmptyProduct(): ProductItem {
  return {
    title: "",
    details: "",
    price: "",
    discountPrice: "",
    category: "",
    type: "Physical",
    variations: { color: false, size: false },
    inventory: "",
    dimensions: "",
    weight: "",
    images: [],
  };
}

export function normalizeProduct(product: Partial<ProductItem>): ProductItem {
  const base = createEmptyProduct();
  return {
    ...base,
    ...product,
    type: product.type === "Digital" ? "Digital" : product.type === "" ? "" : "Physical",
    variations: {
      color: Boolean(product.variations?.color),
      size: Boolean(product.variations?.size),
    },
    images: Array.isArray(product.images)
      ? product.images.filter(Boolean).slice(0, MAX_PRODUCT_IMAGES)
      : [],
  };
}

export function createProductCsvTemplate(): string {
  const example = [
    "Harps Club Tote",
    "Canvas tote with parish logo",
    "$28",
    "",
    "Accessories",
    "Physical",
    "true",
    "false",
    "50",
    "10 x 8 x 2",
    "0.5 lbs",
  ];

  return `${CSV_TEMPLATE_HEADERS.join(",")}\n${example.map(escapeCsvValue).join(",")}\n`;
}

export function parseProductCsv(csv: string): ProductItem[] {
  const rows = parseCsvRows(csv);
  const [headers, ...dataRows] = rows;
  if (!headers?.length) return [];

  const headerIndex = new Map(headers.map((header, index) => [header.trim(), index]));

  return dataRows
    .filter((row) => row.some((cell) => cell.trim()))
    .slice(0, MAX_PRODUCTS)
    .map((row) => normalizeProduct({
      title: cell(row, headerIndex, "title"),
      details: cell(row, headerIndex, "details"),
      price: cell(row, headerIndex, "price"),
      discountPrice: cell(row, headerIndex, "discountPrice"),
      category: cell(row, headerIndex, "category"),
      type: normalizeType(cell(row, headerIndex, "type")),
      variations: {
        color: parseBoolean(cell(row, headerIndex, "color")),
        size: parseBoolean(cell(row, headerIndex, "size")),
      },
      inventory: cell(row, headerIndex, "inventory"),
      dimensions: cell(row, headerIndex, "dimensions"),
      weight: cell(row, headerIndex, "weight"),
    }));
}

function cell(row: string[], headerIndex: Map<string, number>, header: string): string {
  const index = headerIndex.get(header);
  return index === undefined ? "" : (row[index] ?? "").trim();
}

function normalizeType(type: string): ProductItem["type"] {
  if (/^digital$/i.test(type)) return "Digital";
  if (/^physical$/i.test(type)) return "Physical";
  return "";
}

function parseBoolean(value: string): boolean {
  return /^(true|yes|y|1)$/i.test(value.trim());
}

function escapeCsvValue(value: string): string {
  if (!/[",\n\r]/.test(value)) return value;
  return `"${value.replace(/"/g, '""')}"`;
}

function parseCsvRows(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let inQuotes = false;

  for (let i = 0; i < csv.length; i += 1) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"' && inQuotes && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  row.push(value);
  rows.push(row);

  return rows.filter((csvRow) => csvRow.some((entry) => entry.trim()));
}
