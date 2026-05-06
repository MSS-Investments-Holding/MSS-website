/**
 * One-time migration: pushes all existing static articles into Sanity.
 * Run with: node scripts/sanity-migrate.mjs
 */
import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const client = createClient({
  projectId: "qo567udc",
  dataset:   "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

/* ── helpers ─────────────────────────────────────────────────── */
let _k = 0;
const key = () => `k${++_k}`;

const para = (text) => ({
  _type: "block", _key: key(), style: "normal",
  children: [{ _type: "span", _key: key(), text, marks: [] }],
  markDefs: [],
});

const h3 = (text) => ({
  _type: "block", _key: key(), style: "h3",
  children: [{ _type: "span", _key: key(), text, marks: [] }],
  markDefs: [],
});

const bulletBlock = (label, description) => ({
  _type: "block", _key: key(), style: "normal",
  markDefs: [{ _type: "strong", _key: "b1" }],
  children: [
    { _type: "span", _key: key(), text: label, marks: ["b1"] },
    { _type: "span", _key: key(), text: ` — ${description}`, marks: [] },
  ],
});

async function uploadImage(relPath) {
  const absPath = path.join(ROOT, "public", relPath);
  const buffer = fs.readFileSync(absPath);
  const filename = path.basename(absPath);
  console.log(`  ↑ Uploading ${filename}…`);
  return client.assets.upload("image", buffer, {
    filename,
    contentType: "image/jpeg",
  });
}

function imageRef(asset) {
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

/* ── Full Portable Text body for article 1 ─────────────────── */
const article1Body = [
  para("In a market shaped by rapid technology shifts, changing customer expectations, and increasing pressure for sustainable growth, not every promising venture is strategically relevant. Some businesses may show early traction, strong storytelling, or short-term market excitement, yet still lack the depth required to become meaningful long-term opportunities. For MSS Investments Holding, strategic relevance is not measured by momentum alone. It is found in ventures that solve real problems, operate in markets with room to grow, and have the potential to become part of a wider economic or technological shift. A strategically relevant venture is not only attractive today — it has the structure, timing, and adaptability to remain valuable tomorrow."),
  h3("Beyond the Idea"),
  para("Every strong venture begins with an idea, but an idea on its own is rarely enough. Strategic relevance comes from how that idea is positioned, how clearly it addresses a market need, and how effectively it can be executed. The most compelling opportunities are often built around practical utility. They improve how people transact, how businesses operate, how services are delivered, or how markets become more efficient. They are not created simply to follow a trend. They are built around a meaningful problem with a clear reason to exist. This distinction matters. In today's environment, capital is more selective, customers are more informed, and markets are less forgiving of businesses that cannot demonstrate real value. Ventures that can clearly answer why they matter are better positioned to earn attention, investment, and long-term support."),
  h3("Market Timing and Structural Change"),
  para("A venture becomes strategically relevant when it sits close to a larger market movement. These movements may include the digitization of financial services, the rise of AI-enabled workflows, the growth of cross-border commerce, or the increasing demand for infrastructure that makes digital participation easier and more reliable. Timing is important. A strong opportunity is not always the first idea in a category, nor is it always the loudest. Often, the strongest ventures emerge when the market is finally ready for a better solution. That readiness can appear in different ways: customer behaviour may be changing, regulation may be creating new pathways, technology may have matured, or existing systems may be showing clear limitations. Strategic ventures understand this context and build around it."),
  h3("The Role of Execution"),
  para("A relevant opportunity still needs the ability to execute. Many ventures fail not because the idea is weak, but because the operating structure behind it is not strong enough. Execution means more than speed. It means clear priorities, capable leadership, disciplined decision-making, and the ability to translate strategy into progress. A venture with strong execution can adapt when conditions change, make better use of capital, and move from potential to performance with greater confidence. For investors and strategic partners, this is one of the most important signals. A business does not need to have everything solved, but it should show evidence that the team understands what needs to be built, what risks need to be managed, and what milestones matter next."),
  // inline image placeholder — will be filled after upload
  "__INLINE_IMAGE__",
  h3("Long-Term Value Creation"),
  para("Strategic relevance ultimately depends on whether a venture can create value beyond the immediate moment. Short-term traction can be useful, but long-term value comes from durability. Durable ventures tend to have a few qualities in common. They solve problems that do not disappear quickly. They operate in markets with continuing demand. They are led by teams capable of learning and adapting. They build trust with customers and partners. And they create outcomes that matter beyond financial performance alone. For MSS, this long-term view is central. The strongest ventures are those that can contribute to a more connected, efficient, and opportunity-driven economy while also building meaningful commercial strength."),
  h3("What We Look For"),
  para("A strategically relevant venture usually combines several signals:"),
  bulletBlock("A clear problem", "The business addresses a real need rather than chasing a temporary trend."),
  bulletBlock("A defined market", "The opportunity exists within a market with enough size, demand, or structural change to support growth."),
  bulletBlock("A capable team", "The people behind the venture understand both the ambition and the execution required."),
  bulletBlock("A long-term role", "The venture has the potential to remain relevant as markets, technologies, and customer needs evolve."),
  h3("Conclusion"),
  para("A venture opportunity is strategically relevant when it combines purpose, timing, execution, and long-term fit. It is not enough for a business to look exciting. It must be useful, scalable, and positioned within a market that matters. In today's economy, the strongest ventures are those that can move beyond early promise and become part of the infrastructure, services, and systems people and businesses rely on. These are the opportunities worth studying, supporting, and building with conviction."),
];

/* Simple excerpt body for articles without full content */
const simpleBody = (excerpt) => [para(excerpt)];

/* ── Article definitions ─────────────────────────────────────── */
const ARTICLES = [
  {
    slug: "what-makes-a-venture-opportunity-strategically-relevant-today",
    title: "What Makes a Venture Opportunity Strategically Relevant Today",
    date: "2026-04-12",
    excerpt: "A view on the qualities that define strong early-stage opportunities across technology, infrastructure, and future-facing digital sectors.",
    category: "Ventures",
    imagePath: "/images/news/article-1.jpg",
    inlineImagePath: "/images/news/article-inline.jpg",
    fullBody: true,
  },
  {
    slug: "ais-expanding-role-in-operational-and-financial-systems",
    title: "AI's Expanding Role in Operational and Financial Systems",
    date: "2026-04-12",
    excerpt: "Beyond experimentation, AI is beginning to influence the systems, workflows, and decision-making layers behind scalable digital businesses.",
    category: "AI",
    imagePath: "/images/news/article-2.jpg",
  },
  {
    slug: "why-multi-currency-platforms-are-becoming-strategic-infrastructure",
    title: "Why Multi-Currency Platforms Are Becoming Strategic Infrastructure",
    date: "2026-04-12",
    excerpt: "As global business grows more connected, financial platforms that simplify currency movement and account access are becoming increasingly essential.",
    category: "Fintech",
    imagePath: "/images/news/article-3.jpg",
  },
  {
    slug: "building-for-long-term-value-in-high-growth-markets",
    title: "Building for Long-Term Value in High-Growth Markets",
    date: "2026-04-12",
    excerpt: "How sector focus, market positioning, and disciplined execution come together to create durable value across emerging growth corridors.",
    category: "Investments",
    imagePath: "/images/news/article-4.jpg",
  },
  {
    slug: "the-next-phase-of-cross-border-payments-infrastructure",
    title: "The Next Phase of Cross-Border Payments Infrastructure",
    date: "2026-04-12",
    excerpt: "A closer look at how faster settlement systems, compliance layers, and multi-market connectivity are reshaping global commerce.",
    category: "Fintech",
    imagePath: "/images/news/article-5.jpg",
  },
  {
    slug: "where-finance-technology-and-infrastructure-are-converging",
    title: "Where Finance, Technology, and Infrastructure Are Converging",
    date: "2026-04-12",
    excerpt: "The strongest opportunities increasingly sit at the intersection of regulated finance, digital systems, and the infrastructure behind modern economies.",
    category: "Strategy",
    imagePath: "/images/news/article-6.jpg",
  },
  {
    slug: "digital-assets-and-the-infrastructure-of-trust",
    title: "Digital Assets and the Infrastructure of Trust",
    date: "2026-04-10",
    excerpt: "How tokenization and blockchain-enabled infrastructure are beginning to reshape how ownership, value, and participation are structured across global markets.",
    category: "Digital Assets",
    imagePath: "/images/news/article-1.jpg",
  },
  {
    slug: "venture-capital-and-the-case-for-strategic-patience",
    title: "Venture Capital and the Case for Strategic Patience",
    date: "2026-04-08",
    excerpt: "In a market driven by speed and momentum, the most durable returns often come from backing businesses that are built to last, not just to grow fast.",
    category: "Venture",
    imagePath: "/images/news/article-2.jpg",
  },
  {
    slug: "how-operational-discipline-separates-strong-ventures-from-fragile-ones",
    title: "How Operational Discipline Separates Strong Ventures from Fragile Ones",
    date: "2026-04-06",
    excerpt: "Execution is not just about speed. The ventures that scale with confidence are those built on clear processes, accountable teams, and disciplined decision-making.",
    category: "Strategy",
    imagePath: "/images/news/article-3.jpg",
  },
];

/* ── Main migration ──────────────────────────────────────────── */
async function migrate() {
  console.log(`\n🚀 Starting Sanity migration — ${ARTICLES.length} articles\n`);

  // Check if articles already exist
  const existing = await client.fetch(`*[_type == "article"]{ "slug": slug.current }`);
  const existingSlugs = new Set(existing.map((a) => a.slug));

  for (const article of ARTICLES) {
    if (existingSlugs.has(article.slug)) {
      console.log(`⏭  Skipping (already exists): ${article.title}`);
      continue;
    }

    console.log(`\n📄 ${article.title}`);

    // Upload hero image
    const heroAsset = await uploadImage(article.imagePath);

    // Build body
    let body;
    if (article.fullBody) {
      // Upload inline image for article 1
      const inlineAsset = await uploadImage(article.inlineImagePath);
      body = article1Body.map((block) =>
        block === "__INLINE_IMAGE__"
          ? { _type: "image", _key: key(), ...imageRef(inlineAsset) }
          : block
      );
    } else {
      body = simpleBody(article.excerpt);
    }

    const doc = {
      _type: "article",
      title: article.title,
      slug: { _type: "slug", current: article.slug },
      category: article.category,
      date: article.date,
      excerpt: article.excerpt,
      image: { _type: "image", asset: { _type: "reference", _ref: heroAsset._id } },
      body,
    };

    const result = await client.create(doc);
    console.log(`  ✓ Created: ${result._id}`);
  }

  console.log("\n✅ Migration complete!\n");
}

migrate().catch((err) => {
  console.error("\n❌ Migration failed:", err.message);
  if (err.statusCode === 403) {
    console.error("   Token does not have write permission. Please create an Editor token in Sanity dashboard.");
  }
  process.exit(1);
});
