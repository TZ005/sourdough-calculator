import { test, expect } from "@playwright/test";

// Smoke tests: hit the real static export, assert the critical
// things render. Keep this list small + boring.

test.describe("homepage", () => {
  test("loads with the main heading", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      /Sourdough Hydration Calculator/
    );
  });

  test("shows the FTC affiliate disclosure once", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText(/As an Amazon Associate, we earn from qualifying purchases/i)
    ).toBeVisible();
  });

  test("renders 6 product cards with Amazon search links", async ({ page }) => {
    await page.goto("/");
    const affiliateLinks = page.locator("a[href*='amazon.com/s?k=']");
    await expect(affiliateLinks).toHaveCount(7); // 6 cards + 1 wide-search CTA
    for (const link of await affiliateLinks.all()) {
      const href = await link.getAttribute("href");
      expect(href).toContain("tag=sourdoughca0a-20");
    }
  });
});

test.describe("blog post", () => {
  test("bakers-percentage loads with JSON-LD Article schema", async ({ page }) => {
    await page.goto("/blog/bakers-percentage/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      /Baker/
    );
    // JSON-LD present and parses to an Article
    const json = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(json).toBeTruthy();
    const parsed = JSON.parse(json!);
    expect(parsed["@type"]).toBe("Article");
    expect(parsed.headline).toContain("Baker");
    expect(parsed.publisher.logo.url).toContain("sourdough-baking-tools.png");
  });
});

test.describe("navigation", () => {
  test("header marks the current section", async ({ page }) => {
    await page.goto("/blog/");
    // The Blog link in the header should be the active one
    const blogLink = page.getByRole("navigation").getByRole("link", { name: "Blog" });
    await expect(blogLink).toHaveClass(/text-brand-brown/);
  });
});