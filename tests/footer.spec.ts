import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("social icons are visible in bottom bar", async ({ page }) => {
    for (const label of ["Instagram", "Facebook", "LinkedIn", "YouTube"]) {
      await expect(page.getByRole("link", { name: label })).toBeVisible();
    }
  });

  test("legal links appear in bottom bar not in Information column", async ({ page }) => {
    const privacyLinks = page.getByRole("link", { name: "Privacy Policy" });
    await expect(privacyLinks).toHaveCount(1);
    await expect(privacyLinks).toBeVisible();
  });

  test("Activate Community CTA is visible", async ({ page }) => {
    await expect(page.getByRole("link", { name: "Activate Community" })).toBeVisible();
  });

  test("Information column only has FAQs and Contact Us", async ({ page }) => {
    await expect(page.getByRole("link", { name: "FAQs" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact Us" })).toBeVisible();
  });
});
