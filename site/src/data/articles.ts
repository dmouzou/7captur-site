// Resource articles. Content is plain HTML strings so the layout can render
// the table of contents, FAQ schema and related links from one source.
export interface Section { id: string; h: string; html: string }
export interface Article {
  slug: string;
  title: string;          // H1
  seoTitle: string;       // <title>
  description: string;
  topic: string;
  keywords: string[];
  published: string;
  modified: string;
  minutes: number;
  answer: string;         // one-paragraph direct answer shown first (also used for snippets)
  takeaways: string[];
  sections: Section[];
  faq: { q: string; a: string }[];
  related: string[];
  cta: { h: string; p: string };
}

const M = "2026-11-27";

export const ARTICLES: Article[] = [
  {
    slug: "roas-vs-profit-break-even-roas",
    title: "ROAS vs Profit: How to Calculate Break-Even ROAS",
    seoTitle: "ROAS vs Profit: How to Calculate Break-Even ROAS (With Examples)",
    description: "A good-looking ROAS can still lose money. Learn the break-even ROAS formula, why margin, returns and fees change the answer, and how to check whether your ads make a profit.",
    topic: "Profit and ROAS",
    keywords: ["break-even ROAS", "ROAS vs profit", "how to calculate break-even ROAS", "true ROAS", "is my ROAS good", "ROAS and profit margin"],
    published: "2026-10-31", modified: M, minutes: 8,
    answer: "Break-even ROAS equals 1 divided by your gross margin. With a 40% margin, break-even ROAS is 2.5. Any ROAS below that loses money on the product, even when the ad platform shows a healthy-looking number.",
    takeaways: [
      "Break-even ROAS = 1 ÷ gross margin (as a decimal).",
      "ROAS counts revenue. Profit needs costs, returns and fees as well.",
      "Returns often arrive weeks later, so early ROAS can look better than the final result.",
      "If you do not know your costs, you cannot know if ROAS is good. Missing costs are not zero.",
    ],
    sections: [
      { id: "roas", h: "What ROAS measures, and what it does not", html: `
<p>ROAS is return on ad spend: revenue attributed to ads divided by ad spend. If you spend $100 and the platform reports $250 in sales, ROAS is 2.5.</p>
<p>That number says nothing about what the products cost, how many were returned, or what you paid in fees. It is a revenue ratio, not a profit measure. Both matter, but only one pays the bills.</p>` },
      { id: "formula", h: "The break-even ROAS formula", html: `
<div class="article-callout"><span class="callout-label">Formula</span><p><strong>Break-even ROAS = 1 ÷ gross margin</strong></p></div>
<p>Gross margin is the share of each sale left after the cost of the product (and anything else that comes with each order). A 40% margin is 0.40, so break-even ROAS is 1 ÷ 0.40 = 2.5.</p>
<table class="art-table"><thead><tr><th>Gross margin</th><th>Break-even ROAS</th></tr></thead><tbody>
<tr><td>30%</td><td>3.33</td></tr>
<tr><td>40%</td><td>2.50</td></tr>
<tr><td>50%</td><td>2.00</td></tr>
<tr><td>60%</td><td>1.67</td></tr>
<tr><td>70%</td><td>1.43</td></tr>
</tbody></table>
<p>The thinner your margin, the higher the ROAS you need just to break even. And that is why the same ROAS can be great for one store and a loss for another. A rule of thumb borrowed from another brand tends to mislead.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>Your campaign spends $20,000 in a month and the platform reports $40,000 in sales. ROAS is 2.0. Your products have a 40% margin.</p>
<table class="art-table"><thead><tr><th>Step</th><th>Amount</th></tr></thead><tbody>
<tr><td>Revenue reported</td><td>$40,000</td></tr>
<tr><td>Gross profit at 40%</td><td>$16,000</td></tr>
<tr><td>Ad spend</td><td>$20,000</td></tr>
<tr><td>Result before other costs</td><td>-$4,000</td></tr>
</tbody></table>
<p>A 2.0 ROAS looks healthy, yet the campaign lost money. Break-even was 2.5, and you were below it.</p>` },
      { id: "returns", h: "Returns, fees and the delay problem", html: `
<p>Gross margin is only the starting point. Three more things move the real answer:</p>
<ul>
<li><strong>Returns.</strong> A refunded order removes the revenue and sometimes the shipping cost too.</li>
<li><strong>Payment and platform fees.</strong> They are billed separately from ads, so they are easy to forget.</li>
<li><strong>Delivery of data.</strong> Returns often show up weeks after the sale. A campaign can look profitable on day 7 and not on day 40.</li>
</ul>
<p>So, treat early ROAS as provisional. Re-check older campaigns once the return window has passed. And if you do not know a cost yet, leave it marked as unknown. Do not enter zero, because that makes the result look better than it is.</p>` },
      { id: "decide", h: "How to use break-even ROAS to decide", html: `
<ol>
<li>Work out your gross margin per product or product group.</li>
<li>Calculate break-even ROAS for each.</li>
<li>Compare each campaign's ROAS with its break-even.</li>
<li>Above break-even with enough data: consider spending more, a bit at a time.</li>
<li>Below break-even: fix the offer, the audience or the price, or stop.</li>
<li>Near break-even or little data: wait and collect more.</li>
</ol>
<p>Note that break-even is not the goal. It is the floor. Most brands want a buffer above it to cover overheads and growth.</p>` },
      { id: "weekly", h: "From break-even to a weekly call", html: `
<p>A break-even figure is only useful if someone checks campaigns against it, on a schedule, with refunds and product costs up to date. That said, the comparison tends to be harder than the formula, because the data sits in a store admin, two ad platforms and a cost sheet.</p>
<p>7Captur's <a href="/sample-memo/">Monday memo</a> does that reconciliation each week and says plainly when a cost or a refund window is still unknown.</p>` },
    ],
    faq: [
      { q: "What is a good ROAS?", a: "It depends on your margin. A good ROAS is one above your break-even ROAS, which is 1 divided by your gross margin." },
      { q: "How do I calculate break-even ROAS?", a: "Divide 1 by your gross margin as a decimal. With a 40% margin, 1 ÷ 0.40 = 2.5." },
      { q: "Is a ROAS of 2 profitable?", a: "Only if your gross margin is above 50%. With a 40% margin, a ROAS of 2 loses money before other costs." },
      { q: "What is the difference between ROAS and profit?", a: "ROAS is revenue divided by ad spend. Profit also subtracts product costs, returns, fees and ad spend." },
      { q: "Why does my ROAS drop over time?", a: "Returns, cancellations and late-arriving data can reduce the final figure. Early ROAS is often higher than final ROAS." },
      { q: "What if I do not know my costs?", a: "Treat the result as unknown. Do not use zero for missing costs, because that overstates profit." },
    ],
    related: ["true-roas-explained", "advertising-budget-optimization", "ad-performance-tracking"],
    cta: { h: "Find out which campaigns clear break-even.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "true-roas-explained",
    title: "True ROAS Explained: What It Is and How to Calculate It",
    seoTitle: "True ROAS Explained: Definition, Formula and Example",
    description: "True ROAS is return on ad spend after costs, returns and fees. Learn the formula, see a worked example, and understand why it differs from the ROAS your ad platform reports.",
    topic: "Profit and ROAS",
    keywords: ["true ROAS", "return on ad spend", "ROAS calculator", "ROAS formula", "how to calculate ROAS"],
    published: "2026-11-01", modified: M, minutes: 7,
    answer: "Return on ad spend (ROAS) is revenue divided by ad spend. True ROAS adjusts that revenue for what you actually keep: it removes returned orders and subtracts product costs and fees, so the result reflects profit rather than sales.",
    takeaways: [
      "ROAS = revenue ÷ ad spend. It ignores costs.",
      "True ROAS accounts for returns, product costs and fees.",
      "Compare it to break-even ROAS (1 ÷ gross margin) to see if ads pay off.",
      "If a cost is unknown, say so. Zero is not the same as unknown.",
    ],
    sections: [
      { id: "roas", h: "ROAS in one line", html: `
<p>ROAS equals revenue from ads divided by ad spend. Spend $20,000, earn $60,000 in attributed sales, and ROAS is 3.0.</p>
<p>It is a quick health check, and a fair one for comparing campaigns with similar margins. It does not tell you whether you made money.</p>` },
      { id: "true", h: "What makes ROAS true", html: `
<p>True ROAS starts with the same revenue, then removes what you did not keep:</p>
<ol>
<li>Returned or cancelled orders.</li>
<li>Product cost for the orders that stayed.</li>
<li>Payment and delivery fees you pay per order.</li>
</ol>
<p>Some people then divide the remaining amount by ad spend. Others prefer to show profit in plain currency. Either way, the point is to compare it with what the ads cost.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<table class="art-table"><thead><tr><th>Line</th><th>Amount</th></tr></thead><tbody>
<tr><td>Ad spend</td><td>$20,000</td></tr>
<tr><td>Revenue reported by the platform</td><td>$60,000</td></tr>
<tr><td>Returns (10% of revenue)</td><td>-$6,000</td></tr>
<tr><td>Product cost (50% of kept revenue)</td><td>-$27,000</td></tr>
<tr><td>Fees (3% of kept revenue)</td><td>-$1,620</td></tr>
<tr><td>Left to cover ad spend</td><td>$25,380</td></tr>
</tbody></table>
<p>Reported ROAS is 3.0. After costs, $25,380 remains against $20,000 of spend, a true ROAS of about 1.27. So the campaign appears profitable, but by $5,380, not by the comfortable margin 3.0 suggests.</p>` },
      { id: "calc", h: "A quick ROAS calculator in your head", html: `
<ul>
<li>ROAS = revenue ÷ spend.</li>
<li>Break-even ROAS = 1 ÷ gross margin.</li>
<li>If ROAS is above break-even, the ads cover their own cost on the product. Overheads still come out of the rest.</li>
</ul>
<p>The full walk-through is in <a href="/articles/roas-vs-profit-break-even-roas/">ROAS vs profit</a>.</p>` },
      { id: "why-differ", h: "Why platform ROAS differs from true ROAS", html: `
<p>Ad platforms report the revenue they attribute to ads. They do not know your product costs. They may also count a sale that other channels helped create. And returns can arrive weeks later. So the platform number is a useful input, not the final answer.</p>` },
    ],
    faq: [
      { q: "What is ROAS?", a: "Return on ad spend: revenue from ads divided by the amount spent on them." },
      { q: "What is true ROAS?", a: "ROAS adjusted for returns, product costs and fees, so it reflects what you keep." },
      { q: "How do I calculate ROAS?", a: "Divide ad-attributed revenue by ad spend." },
      { q: "What is a good ROAS?", a: "One above your break-even ROAS, which is 1 divided by your gross margin." },
      { q: "Is there a ROAS calculator?", a: "The formula is simple enough to use in a spreadsheet: revenue divided by spend, then compare with 1 divided by margin." },
    ],
    related: ["roas-vs-profit-break-even-roas", "ecommerce-analytics-metrics-that-matter", "ad-performance-tracking"],
    cta: { h: "See your true ROAS on real spend.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "advertising-budget-optimization",
    title: "Advertising Budget Optimization: A Practical Guide for E-commerce",
    seoTitle: "Advertising Budget Optimization: A Practical Guide (5 Steps)",
    description: "Advertising budget optimization means moving money to the campaigns that return the most margin. A five-step process for e-commerce brands running Meta and Google Ads.",
    topic: "Budgeting",
    keywords: ["advertising budget optimization", "marketing budget optimization", "how to optimize ad budget", "e-commerce ad budget"],
    published: "2026-11-01", modified: M, minutes: 8,
    answer: "Advertising budget optimization is the habit of moving money toward the campaigns, audiences and channels that return the most profit, and away from the ones that do not. The process is simple: know your break-even point, measure results by sales, test in small steps, and review on a fixed schedule.",
    takeaways: [
      "Optimize for profit, not for clicks or reported revenue.",
      "Start by knowing your break-even point, or you cannot tell good from bad.",
      "Change one thing at a time and wait for enough data before judging it.",
      "Keep a small test budget separate from your proven budget.",
    ],
    sections: [
      { id: "meaning", h: "What budget optimization actually means", html: `
<p>It does not mean spending less. It means spending better. A bigger budget on a campaign that loses money on every sale is just a faster way to lose money.</p>
<p>The goal is the highest profit for the money you have, which sometimes means cutting a campaign that looks busy and funding one that looks quiet.</p>` },
      { id: "steps", h: "The five-step process", html: `
<h3>1. Know your break-even point</h3>
<p>Work out how much you can pay for one sale before you lose money. In ratio terms, that is <a href="/articles/roas-vs-profit-break-even-roas/">break-even ROAS</a>.</p>
<h3>2. Measure margin, not clicks</h3>
<p>Connect each campaign group to the orders it brought, then subtract product cost, shipping, payment fees and refunds. This is contribution margin: what is left to pay for the ads and everything else.</p>
<h3>3. Split the budget into two pots</h3>
<p>Keep most of the money on what already works. Reserve a smaller part for tests. A common starting split is the bulk on proven campaigns and the rest on experiments, though the right ratio depends on how much you can afford to lose.</p>
<h3>4. Change one thing at a time</h3>
<p>New audience, new creative, new offer. Pick one. If you change three things, you will not know which one mattered.</p>
<h3>5. Review on a schedule</h3>
<p>Weekly is frequently enough. Daily checks tempt you into reacting to noise.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>You spend $50,000 a month. Two campaign groups ran last month:</p>
<table class="art-table"><thead><tr><th>Campaign</th><th>Spend</th><th>Revenue</th><th>Margin before ads</th><th>Result</th></tr></thead><tbody>
<tr><td>A: retargeting</td><td>$15,000</td><td>$60,000</td><td>$24,000</td><td>+$9,000</td></tr>
<tr><td>B: broad audience</td><td>$35,000</td><td>$70,000</td><td>$28,000</td><td>-$7,000</td></tr>
</tbody></table>
<p>Campaign B brought more revenue but lost money. Moving some of its budget to A, while testing a fixed amount on something new, is the optimization. Keep in mind that retargeting depends on someone seeing you first, so cutting B too hard can starve A. That is why you move budget in steps.</p>` },
      { id: "mistakes", h: "Mistakes that waste budget", html: `
<ul>
<li>Judging a campaign after one or two days.</li>
<li>Scaling a winner too quickly, which often changes who sees the ads.</li>
<li>Ignoring returns, fees and delivery costs.</li>
<li>Treating missing costs as zero.</li>
</ul>` },
      { id: "tools", h: "Where help fits", html: `
<p>A spreadsheet is enough to start. A <a href="/how-it-works/">weekly decision desk</a> helps when the numbers come from several places and you want the call spelled out, with the strength of the evidence behind it.</p>` },
    ],
    faq: [
      { q: "How do I optimize my advertising budget?", a: "Know your break-even point, measure results by sales, split money between proven campaigns and tests, change one thing at a time, and review weekly." },
      { q: "How much of my budget should go to testing?", a: "There is no fixed rule. Many brands keep a minority share for tests so that a failed experiment cannot hurt the whole month." },
      { q: "How long should I wait before judging an ad?", a: "Wait for enough orders, and for refunds to arrive, not just a fixed number of days. A few days is rarely enough." },
      { q: "Should I spend more on my best campaign?", a: "Often yes, but in steps. Large jumps can change who sees the ad and reduce results." },
      { q: "Is marketing budget optimization different from advertising budget optimization?", a: "Marketing budget covers everything including content and tools. Advertising budget covers paid placements. The same profit-first logic applies to both." },
    ],
    related: ["ad-spend-management", "advertising-budget-allocation", "roas-vs-profit-break-even-roas"],
    cta: { h: "Know where your next dollar should go.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "ad-spend-management",
    title: "Ad Spend Management: How to Set, Split and Review Your Budget",
    seoTitle: "Ad Spend Management: How to Set, Split and Review Your Budget",
    description: "Ad spend management is how you decide how much to spend, where, and when to change it. A routine for e-commerce brands, with a monthly review checklist.",
    topic: "Budgeting",
    keywords: ["ad spend management", "how to manage ad spend", "ad spend tracking", "set advertising budget"],
    published: "2026-11-01", modified: M, minutes: 7,
    answer: "Ad spend management is the routine of setting a budget, dividing it across campaigns, tracking what it returns, and adjusting on a schedule. A good routine has three parts: a ceiling you can afford, a record of spend against margin, and a regular review.",
    takeaways: [
      "Set the budget from what you can afford to lose, then adjust from evidence.",
      "Record spend, orders and refunds in the same place, with the same dates.",
      "Review weekly, and revisit the ceiling monthly.",
      "Write down the rule before you spend: when you will increase, hold or stop.",
    ],
    sections: [
      { id: "set", h: "Step 1: set the ceiling", html: `
<p>Start from affordability. Decide the most you could spend in a month without hurting inventory, payroll or cash flow. Treat that as the ceiling, not the target.</p>
<p>Then decide a starting amount well under it while you learn what works.</p>` },
      { id: "split", h: "Step 2: divide it up", html: `
<p>Split the budget by campaign or goal, for example new customers versus returning ones. Keep a small reserve for tests. See <a href="/articles/advertising-budget-allocation/">how to allocate your advertising budget</a>.</p>` },
      { id: "record", h: "Step 3: record spend against results", html: `
<p>For each campaign group, log the dates, the spend, the orders and what was left after product cost, shipping, fees and refunds. Match them by time window so you compare like with like. These figures are hypothetical:</p>
<table class="art-table"><thead><tr><th>Campaign group</th><th>Week</th><th>Spend</th><th>Revenue</th><th>Margin before ads</th><th>After ads</th></tr></thead><tbody>
<tr><td>Prospecting</td><td>1</td><td>$4,000</td><td>$12,000</td><td>$4,600</td><td>+$600</td></tr>
<tr><td>Prospecting</td><td>2</td><td>$4,000</td><td>$10,500</td><td>$3,800</td><td>-$200</td></tr>
</tbody></table>
<p>It is worth noting, though, that week 2 may still change as refunds settle.</p>` },
      { id: "rules", h: "Step 4: write decision rules in advance", html: `
<p>Before spending, write three lines:</p>
<ul>
<li>If cost per order is below my limit for two weeks, raise spend a little.</li>
<li>If it is around my limit, hold and keep collecting data.</li>
<li>If it is above my limit for two weeks, cut or change one thing.</li>
</ul>
<p>Rules protect you from decisions made in a good or bad mood.</p>` },
      { id: "review", h: "A monthly review checklist", html: `
<ol>
<li>Total spend versus ceiling.</li>
<li>Margin after ad spend, not just revenue.</li>
<li>Best and worst campaign, and why you think so.</li>
<li>Missing product costs, kept as unknown.</li>
<li>One change to try next month.</li>
</ol>` },
    ],
    faq: [
      { q: "How much should a store spend on ads?", a: "It depends on your margins, cash and goals. Start from an amount you can afford to lose, then increase only when results beat your break-even point." },
      { q: "How often should I check ad spend?", a: "Weekly checks tend to work well, with a monthly review of the overall ceiling." },
      { q: "What should I track besides spend?", a: "Orders, revenue, refunds, product cost, shipping and fees. Spend alone says little about results." },
      { q: "What is the difference between ad spend management and ad management?", a: "Ad management covers running the ads. Ad spend management is about the money: how much, where and when to change it." },
      { q: "Can a spreadsheet manage ad spend?", a: "Yes, to begin with. It tends to strain once data comes from several sources and refunds keep changing past weeks." },
    ],
    related: ["advertising-budget-optimization", "advertising-budget-allocation", "ad-performance-tracking"],
    cta: { h: "Put your last 60 days under review.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "advertising-budget-allocation",
    title: "How to Allocate Your Advertising Budget Across Channels",
    seoTitle: "Advertising Budget Allocation: How to Split Spend Across Channels",
    description: "How to divide an e-commerce ad budget between Meta, Google and other channels, using cost per order against break-even, with an example split and review rules.",
    topic: "Budgeting",
    keywords: ["advertising budget allocation", "how to allocate ad budget", "marketing budget allocation", "split ad budget between channels"],
    published: "2026-11-01", modified: M, minutes: 7,
    answer: "Allocate your advertising budget by starting with the one or two channels where your customers already buy, putting most money on the one with the best evidence, and keeping a small test share for new ones. Reallocate every few weeks using cost per order against break-even, not clicks.",
    takeaways: [
      "Fewer channels done well beats many channels done thinly.",
      "Allocate by evidence: cost per order, compared to your break-even.",
      "Keep a small test share, and set it before you start.",
      "Move money in steps, and review on a fixed schedule.",
    ],
    sections: [
      { id: "start", h: "Start with where your orders come from", html: `
<p>Look at which channels already produce orders that survive refunds. For many stores that is Meta and Google. Begin there, rather than spreading the budget thinly over five channels.</p>` },
      { id: "method", h: "A simple allocation method", html: `
<ol>
<li>Choose one or two main channels.</li>
<li>Put the large majority of the budget on the one with the best evidence so far.</li>
<li>Reserve a small share for one new test.</li>
<li>After a few weeks, compare cost per order across channels, against what you can afford to pay.</li>
<li>Move a slice of budget from the weaker to the stronger. Repeat.</li>
</ol>` },
      { id: "example", h: "An example split (hypothetical)", html: `
<table class="art-table"><thead><tr><th>Channel</th><th>Month 1 share</th><th>Cost per order</th><th>Month 2 share</th></tr></thead><tbody>
<tr><td>Meta ads</td><td>60%</td><td>$24</td><td>65%</td></tr>
<tr><td>Google search</td><td>30%</td><td>$27</td><td>20%</td></tr>
<tr><td>TikTok test</td><td>10%</td><td>$22</td><td>15%</td></tr>
</tbody></table>
<p>The test channel looked best, but on a small sample. Treat that as a reason to give it a little more room, not to move everything. Small numbers can mislead.</p>` },
      { id: "compare", h: "Compare channels fairly", html: `
<ul>
<li>Use the same time window.</li>
<li>Use the same definition of an order, net of refunds.</li>
<li>Include only costs you can measure, and mark the rest unknown.</li>
<li>Remember that different channels do different jobs. Some start a customer's journey and others finish it.</li>
</ul>` },
    ],
    faq: [
      { q: "How should I split my advertising budget?", a: "Put most of it on the channel with the best evidence, keep a small share for testing, and adjust every few weeks." },
      { q: "How many channels should a store use?", a: "One or two until results are clear, then add one at a time." },
      { q: "How do I know a channel is working?", a: "Compare its cost per order with your break-even point over several weeks, after refunds." },
      { q: "Should I include organic social in the allocation?", a: "Track it, although it has no ad spend. Count the time cost if you want a fair comparison." },
      { q: "How often should I reallocate?", a: "Every few weeks, and in small steps." },
    ],
    related: ["advertising-budget-optimization", "ad-spend-management", "roas-vs-profit-break-even-roas"],
    cta: { h: "Test your current split against margin.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "ecommerce-analytics-metrics-that-matter",
    title: "E-commerce Analytics: The Few Numbers Worth Tracking",
    seoTitle: "E-commerce Analytics: The Metrics That Matter",
    description: "E-commerce analytics can drown you in dashboards. These are the handful of metrics a store should track, what each one means, and how often to check it.",
    topic: "Analytics",
    keywords: ["e-commerce analytics", "ecommerce metrics", "ecommerce KPIs", "e-commerce profitability", "online store analytics"],
    published: "2026-11-01", modified: M, minutes: 7,
    answer: "E-commerce analytics means tracking the numbers that explain how a store earns money. For most stores that is a short list: revenue, orders, average order value, conversion rate, customer acquisition cost, return rate and profit. Everything else is optional.",
    takeaways: [
      "Track fewer metrics, more consistently.",
      "Profit and return rate are often missing from dashboards, yet they decide the outcome.",
      "Every metric should connect to a decision you can make.",
      "Check weekly and compare against your own history.",
    ],
    sections: [
      { id: "list", h: "The metrics worth tracking", html: `
<table class="art-table"><thead><tr><th>Metric</th><th>How to calculate</th><th>Decision it supports</th></tr></thead><tbody>
<tr><td>Revenue</td><td>Total sales</td><td>Overall direction</td></tr>
<tr><td>Orders</td><td>Count of orders</td><td>Demand</td></tr>
<tr><td>Average order value</td><td>Revenue ÷ orders</td><td>Pricing, bundles</td></tr>
<tr><td>Conversion rate</td><td>Orders ÷ visits</td><td>Site and offer quality</td></tr>
<tr><td>Customer acquisition cost</td><td>Marketing spend ÷ new customers</td><td>How much to spend</td></tr>
<tr><td>Return rate</td><td>Returned orders ÷ orders</td><td>Product and listing quality</td></tr>
<tr><td>Gross profit</td><td>Revenue minus product costs</td><td>Whether you make money</td></tr>
</tbody></table>` },
      { id: "profit", h: "Why profit belongs on the list", html: `
<p>Revenue is the number everyone watches, and it can climb while profit falls. Discounts, returns and ad spend all eat margin. If you only see revenue, you can grow your way into a loss.</p>
<p>That is why <a href="/articles/roas-vs-profit-break-even-roas/">break-even ROAS</a> matters more than ROAS alone.</p>` },
      { id: "sources", h: "Where each number comes from", html: `
<ul>
<li>Your store admin for orders, revenue and returns.</li>
<li>Ad platforms for spend. Treat their reported revenue with some caution.</li>
<li>Your own costs sheet for product costs and fees.</li>
</ul>` },
      { id: "routine", h: "A simple weekly routine", html: `
<ol>
<li>Update the seven numbers above.</li>
<li>Compare with the previous four weeks.</li>
<li>Pick the one number that moved most and ask why.</li>
<li>Choose one small action for the coming week.</li>
</ol>` },
      { id: "avoid", h: "What to ignore for now", html: `
<p>Vanity numbers such as page views and follower counts are fine as clues, but they should not drive spending.</p>` },
    ],
    faq: [
      { q: "What are the most important e-commerce metrics?", a: "Revenue, orders, average order value, conversion rate, customer acquisition cost, return rate and gross profit." },
      { q: "How do I measure e-commerce profitability?", a: "Subtract product costs, returns, fees and ad spend from revenue. Do not treat unknown costs as zero." },
      { q: "How often should I look at analytics?", a: "Weekly is enough for most stores." },
      { q: "Do I need a paid analytics tool?", a: "Not at first. Your store admin and a spreadsheet cover the basics." },
      { q: "What is customer acquisition cost?", a: "Marketing spend divided by the number of new customers it brought in over the same period." },
    ],
    related: ["roas-vs-profit-break-even-roas", "true-roas-explained", "ad-performance-tracking"],
    cta: { h: "See margin, not only revenue.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },

  {
    slug: "ad-performance-tracking",
    title: "Ad Performance Tracking: A Simple Checklist for Meta and Google Ads",
    seoTitle: "Ad Performance Tracking: A Simple Checklist for Meta and Google Ads",
    description: "How to track ad performance without drowning in reports. A short checklist for Meta (Facebook and Instagram) and Google Ads: what to export, what to record and what to compare.",
    topic: "Analytics",
    keywords: ["ad performance tracking", "Meta ads reporting", "Facebook ads reporting", "Google Ads reporting", "e-commerce ad reporting"],
    published: "2026-11-01", modified: M, minutes: 7,
    answer: "To track ad performance, export spend and results from each ad platform on a fixed schedule, add the sales and costs that the platforms cannot see, and compare cost per order against your break-even point. Do it weekly, in the same layout every time.",
    takeaways: [
      "Platform reports show what the platform saw. Add your own sales and costs.",
      "Use the same date range and layout every week.",
      "Track a few numbers per campaign: spend, results, cost per result, orders.",
      "Write down what you changed, so you can link changes to outcomes.",
    ],
    sections: [
      { id: "export", h: "Step 1: export the basics", html: `
<p>From Meta Ads Manager and Google Ads, export a report with these columns per campaign: dates, spend, impressions, clicks, and the purchases and purchase value the platform counts. Save it as a file each week.</p>` },
      { id: "add", h: "Step 2: add what the platforms cannot see", html: `
<ul>
<li>Orders as your store recorded them, which often differ from platform counts.</li>
<li>Product costs, shipping and payment fees.</li>
<li>Returns and cancellations.</li>
</ul>` },
      { id: "compare", h: "Step 3: compare against your limit", html: `
<table class="art-table"><thead><tr><th>Check</th><th>Question</th></tr></thead><tbody>
<tr><td>Cost per result</td><td>Is it below the most I can pay?</td></tr>
<tr><td>Sales</td><td>Did platform results match orders in your store?</td></tr>
<tr><td>Trend</td><td>Is it improving, flat or falling over four weeks?</td></tr>
<tr><td>Sample size</td><td>Are there enough results to trust it?</td></tr>
</tbody></table>` },
      { id: "log", h: "Step 4: keep a change log", html: `
<p>A single line per change is enough: date, campaign, what changed. When results shift, you can look back and see why.</p>` },
      { id: "pitfalls", h: "Pitfalls", html: `
<ul>
<li>Comparing different date ranges.</li>
<li>Trusting platform revenue without checking your own orders.</li>
<li>Changing many settings at once.</li>
<li>Reading too much into a few days of data.</li>
</ul>` },
    ],
    faq: [
      { q: "What should I track for Meta ads?", a: "Spend, results, cost per result and the sales you can tie to those ads. Add your own costs and returns." },
      { q: "How often should I run an ad report?", a: "Weekly, in the same layout each time." },
      { q: "Why do platform numbers differ from my sales?", a: "Platforms count what they attribute to ads. Two platforms may claim the same order, and neither usually nets off every refund." },
      { q: "Can I track Google Ads and Meta together?", a: "Yes. Export both, use the same columns and date range, and compare cost per order side by side." },
      { q: "What is the simplest way to start?", a: "A spreadsheet with one row per campaign per week." },
    ],
    related: ["ad-spend-management", "true-roas-explained", "advertising-budget-allocation"],
    cta: { h: "Have your ad reports reconciled.", p: "We look back at your past 60 days of ad spend, settled refunds and product costs, and show where margin leaked. Delivered in 48 hours." },
  },
];

export const bySlug = (s: string) => ARTICLES.find((a) => a.slug === s)!;
