import type { Article } from "./articles";
const D = "2026-11-01";

export const MORE: Article[] = [
  {
    slug: "advertising-budget-optimization",
    title: "Advertising Budget Optimization: A Practical Guide for Small Sellers",
    seoTitle: "Advertising Budget Optimization: A Practical Guide (5 Steps)",
    description: "Advertising budget optimization means putting each dollar where it returns the most profit. Learn a five-step process any small business can follow, with no special software.",
    topic: "Budgeting",
    keywords: ["advertising budget optimization", "marketing budget optimization", "how to optimize ad budget", "ad budget small business"],
    published: D, modified: D, minutes: 8,
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
<p>Work out how much you can pay for one sale before you lose money. For e-commerce that is <a href="/articles/roas-vs-profit-break-even-roas/">break-even ROAS</a>. For messaging-led sales it is the most you can pay per enquiry. See <a href="/articles/cost-per-enquiry-how-to-calculate/">cost per enquiry</a>.</p>
<h3>2. Measure by sales, not by clicks</h3>
<p>Connect each campaign to the sales it brought. If you sell in DMs, <a href="/articles/track-whatsapp-and-dm-sales/">log them by source</a>.</p>
<h3>3. Split the budget into two pots</h3>
<p>Keep most of the money on what already works. Reserve a smaller part for tests. A common starting split is the bulk on proven campaigns and the rest on experiments, though the right ratio depends on how much you can afford to lose.</p>
<h3>4. Change one thing at a time</h3>
<p>New audience, new image, new offer. Pick one. If you change three things, you will not know which one mattered.</p>
<h3>5. Review on a schedule</h3>
<p>Weekly is enough for most small budgets. Daily checks tempt you into reacting to noise.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>You have $500 a month. Two campaigns ran last month:</p>
<table class="art-table"><thead><tr><th>Campaign</th><th>Spend</th><th>Sales</th><th>Profit before ads</th><th>Result</th></tr></thead><tbody>
<tr><td>A: retargeting</td><td>$150</td><td>$600</td><td>$240</td><td>+$90</td></tr>
<tr><td>B: broad audience</td><td>$350</td><td>$700</td><td>$280</td><td>-$70</td></tr>
</tbody></table>
<p>Campaign B brought more revenue but lost money. Moving some of its budget to A, while testing a fixed amount on something new, is the optimization. Keep in mind that retargeting depends on someone seeing you first, so cutting B too hard can starve A. That is why you move budget in steps.</p>` },
      { id: "mistakes", h: "Mistakes that waste budget", html: `
<ul>
<li>Judging a campaign after one or two days.</li>
<li>Scaling a winner too quickly, which often changes who sees the ads.</li>
<li>Ignoring returns, fees and delivery costs.</li>
<li>Treating missing costs as zero.</li>
</ul>` },
      { id: "tools", h: "Where tools help", html: `
<p>A spreadsheet is enough to start. A tool like <a href="/product/">7Captur</a> helps when the numbers come from several places and you want the next step spelled out, along with how strong the evidence behind it is.</p>` },
    ],
    faq: [
      { q: "How do I optimize my advertising budget?", a: "Know your break-even point, measure results by sales, split money between proven campaigns and tests, change one thing at a time, and review weekly." },
      { q: "How much of my budget should go to testing?", a: "There is no fixed rule. Many sellers keep a minority share for tests so that a failed experiment cannot hurt the whole month." },
      { q: "How long should I wait before judging an ad?", a: "Wait for enough sales or enquiries, not a fixed number of days. A few days is rarely enough with small budgets." },
      { q: "Should I spend more on my best campaign?", a: "Often yes, but in steps. Large jumps can change who sees the ad and reduce results." },
      { q: "Is marketing budget optimization different from advertising budget optimization?", a: "Marketing budget covers everything including content and tools. Advertising budget covers paid placements. The same profit-first logic applies to both." },
    ],
    related: ["ad-spend-management", "advertising-budget-allocation", "roas-vs-profit-break-even-roas"],
    cta: { h: "Know where your next dollar should go.", p: "Add your spend and sales and get a clear next step with the evidence behind it. Start your free trial." },
  },

  {
    slug: "ad-spend-management",
    title: "Ad Spend Management: How to Set, Split and Review Your Budget",
    seoTitle: "Ad Spend Management: How to Set, Split and Review Your Budget",
    description: "Ad spend management is how you decide how much to spend, where, and when to change it. A simple routine for small businesses, with a monthly review checklist.",
    topic: "Budgeting",
    keywords: ["ad spend management", "how to manage ad spend", "ad spend tracking", "set advertising budget"],
    published: D, modified: D, minutes: 7,
    answer: "Ad spend management is the routine of setting a budget, dividing it across campaigns, tracking what it returns, and adjusting on a schedule. A good routine has three parts: a ceiling you can afford, a record of spend against sales, and a regular review.",
    takeaways: [
      "Set the budget from what you can afford to lose, then adjust from evidence.",
      "Record spend and sales in the same place, with the same dates.",
      "Review weekly and decide monthly.",
      "Write down the rule before you spend: when you will increase, hold or stop.",
    ],
    sections: [
      { id: "set", h: "Step 1: set the ceiling", html: `
<p>Start from affordability. Decide the most you could spend in a month without hurting rent, stock or payroll. Treat that as the ceiling, not the target.</p>
<p>Then decide a starting amount well under it while you learn what works.</p>` },
      { id: "split", h: "Step 2: divide it up", html: `
<p>Split the budget by campaign or goal, for example new customers versus returning ones. Keep a small reserve for tests. See <a href="/articles/advertising-budget-allocation/">how to allocate your advertising budget</a>.</p>` },
      { id: "record", h: "Step 3: record spend against results", html: `
<p>For each campaign, log the dates, the spend, the enquiries and the sales. Match them by time window so you compare like with like.</p>
<table class="art-table"><thead><tr><th>Campaign</th><th>Week</th><th>Spend</th><th>Enquiries</th><th>Sales</th></tr></thead><tbody>
<tr><td>Spring reel boost</td><td>1</td><td>$40</td><td>9</td><td>2</td></tr>
<tr><td>Spring reel boost</td><td>2</td><td>$40</td><td>7</td><td>3</td></tr>
</tbody></table>` },
      { id: "rules", h: "Step 4: write decision rules in advance", html: `
<p>Before spending, write three lines:</p>
<ul>
<li>If cost per sale is below my limit for two weeks, raise spend a little.</li>
<li>If it is around my limit, hold and keep collecting data.</li>
<li>If it is above my limit for two weeks, pause or change one thing.</li>
</ul>
<p>Rules protect you from decisions made in a good or bad mood.</p>` },
      { id: "review", h: "A monthly review checklist", html: `
<ol>
<li>Total spend versus ceiling.</li>
<li>Profit after ad spend, not just revenue.</li>
<li>Best and worst campaign, and why you think so.</li>
<li>Sales you could not trace, kept as unknown source.</li>
<li>One change to try next month.</li>
</ol>` },
    ],
    faq: [
      { q: "How much should a small business spend on ads?", a: "It depends on your margins, cash and goals. Start from an amount you can afford to lose, then increase only when results beat your break-even point." },
      { q: "How often should I check ad spend?", a: "Weekly checks and monthly decisions suit most small budgets." },
      { q: "What should I track besides spend?", a: "Enquiries, sales, revenue and costs. Spend alone says nothing about results." },
      { q: "What is the difference between ad spend management and ad management?", a: "Ad management covers running the ads. Ad spend management is about the money: how much, where and when to change it." },
      { q: "Can a spreadsheet manage ad spend?", a: "Yes, for small budgets. A tool becomes useful when data comes from several sources." },
    ],
    related: ["advertising-budget-optimization", "cost-per-enquiry-how-to-calculate", "ad-performance-tracking"],
    cta: { h: "Keep spend and sales in one place.", p: "7Captur turns your records into a clear next step. Start your free trial." },
  },

  {
    slug: "ecommerce-analytics-metrics-that-matter",
    title: "E-commerce Analytics: The Few Numbers Worth Tracking",
    seoTitle: "E-commerce Analytics: The Metrics That Matter for Small Stores",
    description: "E-commerce analytics can drown you in dashboards. These are the handful of metrics small stores should track, what each one means, and how often to check it.",
    topic: "Analytics",
    keywords: ["e-commerce analytics", "ecommerce metrics", "ecommerce KPIs", "e-commerce profitability", "online store analytics"],
    published: D, modified: D, minutes: 7,
    answer: "E-commerce analytics means tracking the numbers that explain how a store earns money. For most small stores that is a short list: revenue, orders, average order value, conversion rate, customer acquisition cost, return rate and profit. Everything else is optional.",
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
<li>A manual log for messaging sales. See <a href="/articles/track-whatsapp-and-dm-sales/">tracking WhatsApp and DM sales</a>.</li>
</ul>` },
      { id: "routine", h: "A simple weekly routine", html: `
<ol>
<li>Update the seven numbers above.</li>
<li>Compare with the previous four weeks.</li>
<li>Pick the one number that moved most and ask why.</li>
<li>Choose one small action for the coming week.</li>
</ol>` },
      { id: "avoid", h: "What to ignore for now", html: `
<p>Vanity numbers such as page views and follower counts are fine as clues, but they should not drive spending. See <a href="/articles/likes-vs-sales-engagement-metrics/">likes vs sales</a>.</p>` },
    ],
    faq: [
      { q: "What are the most important e-commerce metrics?", a: "Revenue, orders, average order value, conversion rate, customer acquisition cost, return rate and gross profit." },
      { q: "How do I measure e-commerce profitability?", a: "Subtract product costs, returns, fees and ad spend from revenue. Do not treat unknown costs as zero." },
      { q: "How often should I look at analytics?", a: "Weekly is enough for most small stores." },
      { q: "Do I need a paid analytics tool?", a: "Not at first. Your store admin and a spreadsheet cover the basics." },
      { q: "What is customer acquisition cost?", a: "Marketing spend divided by the number of new customers it brought in over the same period." },
    ],
    related: ["roas-vs-profit-break-even-roas", "true-roas-explained", "ad-performance-tracking"],
    cta: { h: "See profit, not only revenue.", p: "Add your costs and get a clear read on what your numbers prove. Start your free trial." },
  },

  {
    slug: "advertising-budget-allocation",
    title: "How to Allocate Your Advertising Budget Across Channels",
    seoTitle: "Advertising Budget Allocation: How to Split Spend Across Channels",
    description: "Not sure how to divide your ad budget between Meta, Google, TikTok and organic? A simple allocation method for small businesses, with an example split and review rules.",
    topic: "Budgeting",
    keywords: ["advertising budget allocation", "how to allocate ad budget", "marketing budget allocation", "split ad budget between channels"],
    published: D, modified: D, minutes: 7,
    answer: "Allocate your advertising budget by starting with one or two channels where your customers already are, putting most money on the one with the best evidence, and keeping a small test share for new ones. Reallocate every few weeks using cost per sale, not clicks.",
    takeaways: [
      "Fewer channels done well beats many channels done thinly.",
      "Allocate by evidence: cost per sale or enquiry, compared to your break-even.",
      "Keep a small test share, and set it before you start.",
      "Move money in steps, and review on a fixed schedule.",
    ],
    sections: [
      { id: "start", h: "Start with where your customers are", html: `
<p>Think about where people already find you. A fashion reseller may live on Instagram and TikTok. A local service may do best on Google search. Begin there, rather than spreading a small budget over five channels.</p>` },
      { id: "method", h: "A simple allocation method", html: `
<ol>
<li>Choose one or two main channels.</li>
<li>Put the large majority of the budget on the one with the best evidence so far.</li>
<li>Reserve a small share for one new test.</li>
<li>After a few weeks, compare cost per sale or cost per enquiry across channels.</li>
<li>Move a slice of budget from the weaker to the stronger. Repeat.</li>
</ol>` },
      { id: "example", h: "An example split (hypothetical)", html: `
<table class="art-table"><thead><tr><th>Channel</th><th>Month 1 share</th><th>Cost per sale</th><th>Month 2 share</th></tr></thead><tbody>
<tr><td>Meta ads</td><td>60%</td><td>$14</td><td>65%</td></tr>
<tr><td>Google search</td><td>30%</td><td>$22</td><td>20%</td></tr>
<tr><td>TikTok test</td><td>10%</td><td>$11</td><td>15%</td></tr>
</tbody></table>
<p>The test channel looked best, but on a small sample. Treat that as a reason to give it a little more room, not to move everything. Small numbers can mislead.</p>` },
      { id: "compare", h: "Compare channels fairly", html: `
<ul>
<li>Use the same time window.</li>
<li>Use the same definition of a sale or enquiry.</li>
<li>Include only costs you can measure, and mark the rest unknown.</li>
<li>Remember that different channels do different jobs. Some start a customer's journey and others finish it.</li>
</ul>` },
      { id: "first-500", h: "If you only have a small budget", html: `
<p>Pick one channel. Our guide on <a href="/articles/meta-vs-google-ads-first-500/">where to put your first $500</a> walks through the choice.</p>` },
    ],
    faq: [
      { q: "How should I split my advertising budget?", a: "Put most of it on the channel with the best evidence, keep a small share for testing, and adjust every few weeks." },
      { q: "How many channels should a small business use?", a: "One or two, until results are clear." },
      { q: "How do I know a channel is working?", a: "Compare its cost per sale or cost per enquiry with your break-even point over several weeks." },
      { q: "Should I include organic social in the allocation?", a: "Track it, but it has no ad spend. Count the time cost if you want a fair comparison." },
      { q: "How often should I reallocate?", a: "Every few weeks, and in small steps." },
    ],
    related: ["advertising-budget-optimization", "meta-vs-google-ads-first-500", "ad-spend-management"],
    cta: { h: "Decide where the next dollar goes.", p: "Compare your channels on sales and profit, not clicks. Start your free trial." },
  },

  {
    slug: "true-roas-explained",
    title: "True ROAS Explained: What It Is and How to Calculate It",
    seoTitle: "True ROAS Explained: Definition, Formula and Example",
    description: "True ROAS is return on ad spend after costs, returns and fees. Learn the formula, see a worked example, and understand why it differs from the ROAS your ad platform reports.",
    topic: "Profit and ROAS",
    keywords: ["true ROAS", "return on ad spend", "ROAS calculator", "ROAS formula", "how to calculate ROAS"],
    published: D, modified: D, minutes: 7,
    answer: "Return on ad spend (ROAS) is revenue divided by ad spend. True ROAS adjusts that revenue for what you actually keep: it removes returned orders and subtracts product costs and fees, so the result reflects profit rather than sales.",
    takeaways: [
      "ROAS = revenue ÷ ad spend. It ignores costs.",
      "True ROAS accounts for returns, product costs and fees.",
      "Compare it to break-even ROAS (1 ÷ gross margin) to see if ads pay off.",
      "If a cost is unknown, say so. Zero is not the same as unknown.",
    ],
    sections: [
      { id: "roas", h: "ROAS in one line", html: `
<p>ROAS equals revenue from ads divided by ad spend. Spend $200, earn $600 in attributed sales, and ROAS is 3.0.</p>
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
<tr><td>Ad spend</td><td>$200</td></tr>
<tr><td>Revenue reported by the platform</td><td>$600</td></tr>
<tr><td>Returns (10% of revenue)</td><td>-$60</td></tr>
<tr><td>Product cost (50% of kept revenue)</td><td>-$270</td></tr>
<tr><td>Fees (3% of kept revenue)</td><td>-$16</td></tr>
<tr><td>Left to cover ad spend</td><td>$254</td></tr>
</tbody></table>
<p>Reported ROAS is 3.0. After costs, $254 remains against $200 of spend. So the campaign is profitable, but by a thin margin, not the comfortable one 3.0 suggests.</p>` },
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
    cta: { h: "See your true ROAS.", p: "Add your costs and get a result that says what your numbers can and cannot prove. Start your free trial." },
  },

  {
    slug: "ad-performance-tracking",
    title: "Ad Performance Tracking: A Simple Checklist for Meta and Google Ads",
    seoTitle: "Ad Performance Tracking: A Simple Checklist for Meta and Google Ads",
    description: "How to track ad performance without drowning in reports. A short checklist for Meta (Facebook and Instagram) and Google Ads: what to export, what to record and what to compare.",
    topic: "Analytics",
    keywords: ["ad performance tracking", "Meta ads reporting", "Facebook ads reporting", "Google Ads reporting", "ad reporting for small business"],
    published: D, modified: D, minutes: 7,
    answer: "To track ad performance, export spend and results from each ad platform on a fixed schedule, add the sales and costs that the platforms cannot see, and compare cost per sale or enquiry against your break-even point. Do it weekly, in the same layout every time.",
    takeaways: [
      "Platform reports show what the platform saw. Add your own sales and costs.",
      "Use the same date range and layout every week.",
      "Track a few numbers per campaign: spend, results, cost per result, sales.",
      "Write down what you changed, so you can link changes to outcomes.",
    ],
    sections: [
      { id: "export", h: "Step 1: export the basics", html: `
<p>From Meta Ads Manager and Google Ads, export a report with these columns per campaign: dates, spend, impressions, clicks, and the results the platform counts (purchases, messages or leads). Save it as a file each week.</p>` },
      { id: "add", h: "Step 2: add what the platforms cannot see", html: `
<ul>
<li>Sales that happened by DM, WhatsApp or phone. See <a href="/articles/track-sales-from-social-media-posts/">how to track sales from social posts</a>.</li>
<li>Product costs and fees.</li>
<li>Returns and cancellations.</li>
</ul>` },
      { id: "compare", h: "Step 3: compare against your limit", html: `
<table class="art-table"><thead><tr><th>Check</th><th>Question</th></tr></thead><tbody>
<tr><td>Cost per result</td><td>Is it below the most I can pay?</td></tr>
<tr><td>Sales</td><td>Did results turn into paying customers?</td></tr>
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
      { q: "How often should I run an ad report?", a: "Weekly for most small budgets." },
      { q: "Why do platform numbers differ from my sales?", a: "Platforms count what they attribute to ads, and some sales happen outside their view, such as in DMs." },
      { q: "Can I track Google Ads and Meta together?", a: "Yes. Export both, use the same columns and date range, and compare cost per sale side by side." },
      { q: "What is the simplest way to start?", a: "A spreadsheet with one row per campaign per week." },
    ],
    related: ["ad-spend-management", "true-roas-explained", "meta-vs-google-ads-first-500"],
    cta: { h: "Bring your ad reports together.", p: "Import your exports and see what to do next. Start your free trial." },
  },

  {
    slug: "meta-vs-google-ads-first-500",
    title: "Meta Ads vs Google Ads: Where to Put Your First $500",
    seoTitle: "Meta Ads vs Google Ads: Where to Put Your First $500",
    description: "Choosing between Facebook and Instagram ads and Google Ads with a small budget? A plain comparison, a decision guide by business type, and how to test with $500.",
    topic: "Ads and Spend",
    keywords: ["Facebook ads optimization", "Google Ads optimization", "Meta ads vs Google ads", "small budget ads", "$500 ad budget"],
    published: D, modified: D, minutes: 8,
    answer: "Choose Google Ads when people already search for what you sell, and Meta ads (Facebook and Instagram) when your product is visual and people do not yet know they want it. With $500, pick one, run it in small tests, and judge it by cost per sale.",
    takeaways: [
      "Google tends to catch existing demand. Meta tends to create new interest.",
      "With a small budget, use one platform first.",
      "Test in small steps, and judge by sales or enquiries, not clicks.",
      "Decide in advance what result would make you spend more or stop.",
    ],
    sections: [
      { id: "difference", h: "The core difference", html: `
<table class="art-table"><thead><tr><th></th><th>Google Ads</th><th>Meta ads</th></tr></thead><tbody>
<tr><td>Customer mindset</td><td>Searching for something</td><td>Scrolling, not looking</td></tr>
<tr><td>Strength</td><td>Capturing existing demand</td><td>Showing products to new people</td></tr>
<tr><td>Best for</td><td>Services, specific products, local needs</td><td>Visual, impulse or new products</td></tr>
<tr><td>Watch out for</td><td>Competitive keywords</td><td>Creative fatigue, vague audiences</td></tr>
</tbody></table>
<p>These are tendencies, not rules. Plenty of businesses do well with the opposite choice.</p>` },
      { id: "decide", h: "Which one fits your business", html: `
<ul>
<li><strong>Service or local business:</strong> start with Google search, since people look for you by need.</li>
<li><strong>Social-first seller or reseller:</strong> start with Meta, where your posts already live.</li>
<li><strong>Known product with clear search terms:</strong> Google can work well.</li>
<li><strong>New, visual product:</strong> Meta is usually the better test.</li>
</ul>` },
      { id: "plan", h: "How to test with $500", html: `
<ol>
<li>Work out your break-even point first. See <a href="/articles/roas-vs-profit-break-even-roas/">break-even ROAS</a>.</li>
<li>Pick one platform and one clear offer.</li>
<li>Split the money over several weeks rather than spending it in days.</li>
<li>Log spend, enquiries and sales weekly.</li>
<li>At the end, compare cost per sale to your limit.</li>
</ol>` },
      { id: "decision", h: "What to decide afterward", html: `
<p>If cost per sale is under your limit, add budget in steps. If it is close, change one thing and run again. If it is well above, stop and rethink the offer or the audience. And if there are too few sales to judge, say so and extend the test rather than guessing.</p>` },
      { id: "both", h: "When to add the second platform", html: `
<p>Once the first one has a clear, repeatable result. See <a href="/articles/advertising-budget-allocation/">how to allocate your advertising budget</a>.</p>` },
    ],
    faq: [
      { q: "Is Google Ads or Facebook Ads better for a small business?", a: "It depends on whether customers search for what you sell. Search-driven needs suit Google. Visual or new products often suit Meta." },
      { q: "Can I get results with $500?", a: "You can learn a lot, but results are limited by sample size. Treat the outcome as a test, not a verdict." },
      { q: "How long should I run the test?", a: "Several weeks, so one good or bad day does not decide the result." },
      { q: "Should I run both at once?", a: "Not with a small budget. Start with one." },
      { q: "How do I know if the test worked?", a: "Compare cost per sale or cost per enquiry with the most you can afford to pay." },
    ],
    related: ["advertising-budget-allocation", "advertising-budget-optimization", "ad-performance-tracking"],
    cta: { h: "Test your first budget with a plan.", p: "Log spend and sales and see whether it paid off. Start your free trial." },
  },
];
