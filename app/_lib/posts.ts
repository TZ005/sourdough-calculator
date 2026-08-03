// Shared blog post data for pagination and navigation.
import type { Post, AdjacentPosts } from "@/types/post";

const emoji = "📖";
const apostrophe = "\u2019";

const POSTS: Post[] = [
  { slug: "best-sourdough-proofing-box", title: "Best Sourdough Proofing Box: When You Need One and How to Choose", excerpt: "A proofing box controls dough temperature for predictable fermentation. Here is when you actually need one, your DIY alternatives, and the best picks at every price point.", readTime: "7 min" },
  { slug: "how-to-score-sourdough-bread", title: "How to Score Sourdough Bread: Patterns, Tools, and When to Cut", excerpt: "Scoring is the final artistic step in sourdough. Here is when to cut, what tools you need, the classic patterns, and the common mistakes that ruin a good loaf.", readTime: "7 min" },
  { slug: "best-sourdough-banneton", title: "Sourdough Banneton: What It Does, Why It Matters, and How to Choose Yours", excerpt: "Every artisan sourdough loaf has the distinctive ridges and shape from a banneton. Here is what it does, the three materials compared, and how to pick one for your style.", readTime: "7 min" },
  { slug: "sourdough-hydration-chart", title: "Sourdough Hydration Chart: 50% to 100% Explained", excerpt: "What 50%, 70%, 80%, and 100% hydration actually look like in the bowl and in the crumb, with a full chart and beginner guidance.", readTime: "8 min" },
  { slug: "how-much-starter-to-use", title: "How Much Sourdough Starter Should You Use?", excerpt: "The starter amount changes rise speed, flavor, and structure. Learn what 10%, 15%, 20%, and 25% look like and how to choose.", readTime: "7 min" },
  { slug: "why-is-my-sourdough-sticky", title: "Why Is My Sourdough Sticky? 7 Causes and Fixes", excerpt: "Sticky dough is normal at first, but it can also signal too much water, weak gluten, or over-fermentation. Here is how to tell and what to do.", readTime: "8 min" },
  { slug: "best-sourdough-bread-recipe", title: "Best Sourdough Bread Recipe for Beginners", excerpt: "A simple 75% hydration loaf with clear timing, shaping, and baking steps. No fancy equipment required beyond a Dutch oven and a scale.", readTime: "10 min" },
  { slug: "sourdough-beginners-timeline", title: "Sourdough for Beginners: Week-by-Week Timeline", excerpt: "What to do in week one, two, and three when you are new to sourdough: starter, first loaves, and the skills that matter most.", readTime: "9 min" },
  { slug: "didnt-rise", title: "Why Your Sourdough Did Not Rise: 12 Common Causes and How to Fix Each", excerpt: "Troubleshooting guide for flat, dense, or sunken sourdough. 12 common causes with specific fixes, from weak starter to oven temperature mistakes.", readTime: "10 min" },
  { slug: "rye-sourdough", title: "Rye Sourdough: A Beginner\u2019s Guide to Dark, Flavorful, Traditional Bread", excerpt: "Rye sourdough is a different beast from wheat. Here\u2019s how to work with rye\u2019s unique properties for dark, moist, intensely flavored bread.", readTime: "8 min" },
  { slug: "shaping-boule", title: "How to Shape a Sourdough Boule: 3 Methods for Beginners", excerpt: "Step-by-step instructions for shaping a tight, round boule. Three methods from simple to advanced, with troubleshooting.", readTime: "7 min" },
  { slug: "bulk-fermentation", title: "Sourdough Bulk Fermentation: A Complete Guide to Timing and Temperature", excerpt: "When to end bulk fermentation: visual cues, temperature effects, and timing guidelines. Stop guessing and start baking by feel.", readTime: "9 min" },
  { slug: "crispy-crust", title: "Sourdough Crust: 7 Tips for a Crispy, Crackling, Bakery-Style Crust", excerpt: "Want that signature crackling sourdough crust? Seven proven tips for oven spring, steam, and the perfect crackle every time.", readTime: "7 min" },
  { slug: "vs-regular-bread", title: "Sourdough vs Regular Bread: Nutrition, Digestibility, and Taste Compared", excerpt: "Is sourdough actually healthier than regular bread? A science-backed comparison of nutrition, glycemic index, digestibility, and flavor.", readTime: "8 min" },
  { slug: "best-flour", title: "Best Flour for Sourdough: A Complete Guide for Home Bakers", excerpt: "Bread flour, all-purpose, whole wheat, rye: which flour makes the best sourdough. Practical guide to choosing flour by skill level and style.", readTime: "9 min" },
  { slug: "sourdough-discard", title: "Sourdough Discard: 10 Easy Recipes That Don\u2019t Taste Sour", excerpt: "Don\u2019t throw away your sourdough discard! 10 delicious recipes including pancakes, crackers, waffles, pizza dough and more. Zero waste, full flavor.", readTime: "8 min" },
  { slug: "sourdough-starter", title: "Sourdough Starter: A 7-Day Guide from Scratch", excerpt: "Day-by-day guide to creating your own starter from just flour + water. Includes feeding schedules and troubleshooting.", readTime: "10 min" },
  { slug: "bakers-percentage", title: "Baker\u2019s Percentage: Convert Any Recipe (With Calculator)", excerpt: "Master baker\u2019s percentage in 8 minutes. Convert any bread recipe, scale to your loaf size, never guess hydration again.", readTime: "8 min" },
  { slug: "sourdough-schedule", title: "Sourdough Schedule: A 24-Hour Timeline for Your First Loaf", excerpt: "Hour-by-hour timeline from starter feed to slicing. Perfect for first-time bakers.", readTime: "9 min" },
  { slug: "common-mistakes", title: "5 Common Sourdough Mistakes (and How to Fix Them)", excerpt: "Dense crumb, flat loaf, gummy texture? The 5 most common sourdough mistakes and exactly how to fix each one.", readTime: "12 min" },
  { slug: "hydration-guide", title: "Sourdough Hydration: The Complete Beginner\u2019s Guide (2026)", excerpt: "Everything you need to know about sourdough hydration, from 70% beginner loaves to 100% ciabatta. Includes flour absorption tips and a free calculator.", readTime: "15 min" },
  { slug: "best-sourdough-calculators", title: "Best 10 Free Sourdough Hydration Calculators (2026)", excerpt: "I tested 10 popular sourdough hydration calculators. Here is which one is best for beginners, mobile users, and serious bakers.", readTime: "12 min" },
  { slug: "what-is-hydration", title: "What is Sourdough Hydration? A Complete Guide", excerpt: "Understand hydration, how it affects your dough, and how to choose the right percentage for your bread.", readTime: "8 min" },
  { slug: "sourdough-pizza-dough", title: "Sourdough Pizza Dough: Crispy & Chewy", excerpt: "Use your starter for incredible pizza. Better flavor, easier digestibility, and that crackly crust. With a 65% hydration recipe that makes 4 pizzas.", readTime: "5 min" },
  { slug: "store-sourdough-bread", title: "How to Store Sourdough Bread: Keep It Fresh for Days", excerpt: "Room temperature, frozen, or as dough. The right way to store sourdough at every stage so it stays fresh and crusty for days, not hours.", readTime: "8 min" },
  { slug: "whole-wheat-sourdough", title: "Whole Wheat Sourdough: A Complete Guide to 100% Whole Grain Bread", excerpt: "100% whole wheat sourdough is doable. Higher hydration, shorter ferment, and a few simple adjustments for an open, chewy, flavor-packed loaf.", readTime: "10 min" },
  { slug: "levain-vs-starter", title: "Sourdough Levain vs Starter: What Is the Difference?", excerpt: "Starter is what you keep. Levain is what you build. Learn the difference, when to use each, and how to build a levain that peaks exactly when you need it.", readTime: "6 min" },
  { slug: "sourdough-for-beginners", title: "Sourdough for Beginners: The Complete First-Time Guide", excerpt: "Want to make your first sourdough loaf? Step-by-step from building a starter to baking your first crusty boule. No experience required.", readTime: "12 min" },
  { slug: "sourdough-focaccia", title: "Sourdough Focaccia: The Easiest Sourdough Bread You Will Ever Bake", excerpt: "Sourdough focaccia is the easiest sourdough bread to make. No shaping, no scoring, no Dutch oven. Mix, rise, dimple, bake. Restaurant-quality at home.", readTime: "7 min" },
  { slug: "sourdough-bagels", title: "Sourdough Bagels: Chewy, Shiny, and Easier Than You Think", excerpt: "Real New York bagels at home with sourdough. Chewy, shiny crust, deeper flavor than commercial bagels. The boiling method is the secret.", readTime: "8 min" }
];

const PAGE_SIZE = 10;
const TOTAL_PAGES = Math.ceil(POSTS.length / PAGE_SIZE);

function getPostsForPage(page: number): Post[] {
  const start = (page - 1) * PAGE_SIZE;
  return POSTS.slice(start, start + PAGE_SIZE);
}

function getPostIndex(slug: string): number {
  return POSTS.findIndex((p) => p.slug === slug);
}

function getAdjacentPosts(slug: string): AdjacentPosts {
  const idx = getPostIndex(slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? POSTS[idx - 1] : null,
    next: idx < POSTS.length - 1 ? POSTS[idx + 1] : null,
  };
}

export { POSTS, PAGE_SIZE, TOTAL_PAGES, getPostsForPage, getPostIndex, getAdjacentPosts, emoji, apostrophe };
export type { Post, AdjacentPosts };
