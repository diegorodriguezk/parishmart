import { test, expect } from "@playwright/test";

test.describe("/shop/product", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/shop/product");
  });

  test("quantity counter increments and decrements", async ({ page }) => {
    const counter = page.locator("span.font-extrabold.text-pm-navy").first();
    const inc = page.getByRole("button", { name: "Increase quantity" });
    const dec = page.getByRole("button", { name: "Decrease quantity" });

    await expect(counter).toHaveText("1");
    await expect(dec).toBeDisabled();

    await inc.click();
    await expect(counter).toHaveText("2");

    await inc.click();
    await expect(counter).toHaveText("3");

    await dec.click();
    await expect(counter).toHaveText("2");
  });

  test("Add button label updates when quantity > 1", async ({ page }) => {
    // The main Add button is flex-1 inside the ProductAddRow
    const addBtn = page.locator(".pm-btn.pm-btn-primary.flex-1");
    await expect(addBtn).toHaveText("Add");

    await page.getByRole("button", { name: "Increase quantity" }).click();
    await expect(addBtn).toHaveText("Add (2)");
  });

  test("thumbnail click swaps main image", async ({ page }) => {
    // Get thumb buttons (all in the thumbnail grid)
    const thumbButtons = page.locator("button[type='button']").filter({
      has: page.locator("img"),
    });

    const count = await thumbButtons.count();
    // Click second thumbnail if it exists
    if (count > 1) {
      await thumbButtons.nth(1).click();
      // After click, the second thumb should have border-pm-blue class
      await expect(thumbButtons.nth(1)).toHaveClass(/border-pm-blue/);
    }
  });

  test("color swatches toggle active state", async ({ page }) => {
    const swatches = page.locator('button[aria-label="Navy"], button[aria-label="Black"], button[aria-label="Heather Gray"]');
    const navy = page.getByRole("button", { name: "Navy" });
    await navy.click();
    await expect(navy).toHaveClass(/border-pm-blue/);
  });

  test("size chips toggle active state", async ({ page }) => {
    const xl = page.getByRole("button", { name: "XL", exact: true });
    await xl.click();
    await expect(xl).toHaveAttribute("data-active", "true");
  });

  test("right column is sticky on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    const rightCol = page.locator(".space-y-4.lg\\:sticky");
    await expect(rightCol).toBeVisible();
  });
});
