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

const D = "2026-10-31";

const BASE: Article[] = [
  {
    slug: "track-sales-from-social-media-posts",
    title: "How to Track Sales From Social Media Posts",
    seoTitle: "How to Track Sales From Social Media Posts (4 Simple Methods)",
    description: "Learn how to track which social media posts bring in sales, even when customers order by DM or WhatsApp. Four simple methods, a worked example and what to do with the results.",
    topic: "Attribution",
    keywords: ["track sales from social media", "social media sales tracking", "which post made a sale", "social media attribution for small business"],
    published: D, modified: D, minutes: 7,
    answer: "To track sales from social media posts, give every post a way to be recognised at the moment of sale: a unique link, a promo code, a pre-filled message, or a simple \"how did you find us?\" question. Then log each sale against the post it came from and compare posts by sales and revenue, not by likes.",
    takeaways: [
      "Likes and views do not show which post made money. Only a recorded sale does.",
      "You do not need a website or a tracking pixel. A code, a link or one question at checkout is enough.",
      "Match every sale to a post where you can, and label the rest \"unknown source\" instead of guessing.",
      "Compare posts after at least a few weeks, so one lucky day does not decide your strategy.",
    ],
    sections: [
      { id: "why-hard", h: "Why social media sales are hard to track", html: `
<p>Most small sellers do not sell through a checkout page. Customers see a post, send a DM, ask a question on WhatsApp and pay a day later. Platform dashboards only see the first step, and often not even that.</p>
<p>So the sale happens, but nothing connects it back to the post. That is the gap. And it is why so many sellers end up judging posts by likes, which feels reasonable but is not the same as revenue.</p>` },
      { id: "methods", h: "Four ways to connect a sale to a post", html: `
<p>Pick the method that fits how your customers already buy. Most businesses use two together.</p>
<table class="art-table"><thead><tr><th>Method</th><th>Best for</th><th>Weak spot</th></tr></thead><tbody>
<tr><td><strong>Ask at the point of sale</strong></td><td>DMs, WhatsApp, in-person, services</td><td>Customers forget or say "Instagram" without naming the post</td></tr>
<tr><td><strong>Post-specific promo code</strong></td><td>Anything with a checkout or an invoice</td><td>Codes get shared, and not everyone uses them</td></tr>
<tr><td><strong>Tagged link (UTM)</strong></td><td>Sellers with a website or link page</td><td>Does not work if the customer switches to DM</td></tr>
<tr><td><strong>Pre-filled message</strong></td><td>WhatsApp and DM-led sales</td><td>Customers can edit or delete the text</td></tr>
</tbody></table>
<h3>1. Ask at the point of sale</h3>
<p>The cheapest method. When someone orders, ask one question: "Which post or story brought you here?" Write the answer down. It is imperfect, but it is the only method that works for every channel.</p>
<h3>2. Use a promo code per post</h3>
<p>Mention a code in the caption or the video, such as <em>SPRING10</em>. When the code shows up on an order, you know where it came from. Keep codes short and tied to one post or one promotion.</p>
<h3>3. Add a tagged link</h3>
<p>If you send people to a website, add UTM parameters to the link so your analytics can name the source, medium and campaign. Keep the naming consistent, or the reports turn into a mess.</p>
<h3>4. Pre-fill the message</h3>
<p>For WhatsApp and DM-led sales, use a link that opens a chat with text already typed, such as "Hi, I saw the blue jacket post". The first message then tells you the source. See <a href="/articles/track-whatsapp-and-dm-sales/">how to track WhatsApp and DM sales</a> for the full setup.</p>` },
      { id: "log", h: "What to record for every sale", html: `
<p>Keep it small. Five fields are enough:</p>
<ul>
<li>Date of the sale</li>
<li>Amount, in your own currency</li>
<li>The post or promotion it came from (or "unknown")</li>
<li>The channel, such as Instagram, TikTok, WhatsApp or in person</li>
<li>Whether it was a new or returning customer</li>
</ul>
<p>That is a spreadsheet, a notebook or a tool like 7Captur. The tool matters less than the habit.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>Say you post three times in a week. Post A gets 900 likes, Post B gets 150 and Post C gets 300. By likes, Post A wins.</p>
<table class="art-table"><thead><tr><th>Post</th><th>Likes</th><th>Sales logged</th><th>Revenue</th></tr></thead><tbody>
<tr><td>A: trend video</td><td>900</td><td>1</td><td>$30</td></tr>
<tr><td>B: customer photo</td><td>150</td><td>4</td><td>$160</td></tr>
<tr><td>C: product demo</td><td>300</td><td>3</td><td>$120</td></tr>
</tbody></table>
<p>The numbers are made up, but the pattern is common. The post that people enjoy is not always the post that people buy from. Once sales are tied to posts, the next one to make is obvious.</p>` },
      { id: "unknown", h: "Handle the sales you cannot trace", html: `
<p>Some sales will always have no clear source. A friend tells a friend. A customer saw three posts and bought on the fourth. Do not force a guess.</p>
<p>Count these sales in your business total and label them "unknown source". That keeps your post comparison honest. It also shows how much of your revenue you can and cannot explain, which is useful on its own.</p>` },
      { id: "timing", h: "How long before you trust the results", html: `
<p>One week of data is mostly noise. A few weeks is better, and a few dozen sales is better still. With small numbers, treat the result as a hint, not a verdict. Try more of what seems to work, then check again.</p>
<p>That is how <a href="/product/">7Captur</a> labels its evidence: early signals are marked as early, and stronger claims only appear when there is enough data behind them.</p>` },
    ],
    faq: [
      { q: "How do I track sales from Instagram without a website?", a: "Use a promo code in the caption, a pre-filled WhatsApp or DM message, or ask every buyer which post brought them. Then record each sale against that post. No website or pixel is required." },
      { q: "Can I track sales from TikTok or Instagram if customers order by DM?", a: "Yes. Ask at the point of sale, or use a pre-filled message link so the first DM names the post. Log the sale by hand and tag the source." },
      { q: "What is the easiest way to know which post made a sale?", a: "A post-specific promo code. It works with or without a website, and it shows up in the order itself." },
      { q: "What should I do with sales that have no known source?", a: "Keep them in your totals and label them as unknown source. Do not assign them to a post by guessing." },
      { q: "How many sales do I need before I can trust the pattern?", a: "More is better. A few weeks of data and a few dozen sales gives a reasonable signal. Under that, treat the result as an early hint." },
    ],
    related: ["track-whatsapp-and-dm-sales", "likes-vs-sales-engagement-metrics", "cost-per-enquiry-how-to-calculate"],
    cta: { h: "See which posts actually bring in sales.", p: "Log posts, enquiries and sales in one place and get a clear next step. Start on the free plan with the data you have." },
  },

  {
    slug: "cost-per-enquiry-how-to-calculate",
    title: "Cost Per Enquiry: How to Calculate It and Why It Matters",
    seoTitle: "Cost Per Enquiry: How to Calculate It (Formula and Examples)",
    description: "Cost per enquiry is your ad spend divided by the messages, calls or leads it brought in. Learn the formula, how it differs from cost per click and cost per sale, and how to use it.",
    topic: "Ads and Spend",
    keywords: ["cost per enquiry", "cost per lead formula", "cost per enquiry vs cost per sale", "how to calculate cost per enquiry"],
    published: D, modified: D, minutes: 6,
    answer: "Cost per enquiry equals the money you spent on a campaign divided by the number of enquiries it produced. If you spend $60 on a boosted post and get 12 messages, your cost per enquiry is $5. It is most useful for businesses that sell through DMs, WhatsApp, calls or quotes.",
    takeaways: [
      "Cost per enquiry = ad spend ÷ number of enquiries.",
      "Cost per sale = ad spend ÷ number of sales. It needs the enquiry-to-sale rate to be useful.",
      "A cheap enquiry is not a good enquiry. Always check how many turn into paying customers.",
      "Compare campaigns over the same time window and with the same definition of \"enquiry\".",
    ],
    sections: [
      { id: "formula", h: "The cost per enquiry formula", html: `
<p>The formula is short:</p>
<div class="article-callout"><span class="callout-label">Formula</span><p><strong>Cost per enquiry = total spend ÷ total enquiries</strong></p></div>
<p>An enquiry is any real buying conversation: a DM asking for a price, a WhatsApp message, a form submission, a phone call. Decide once what counts, and write it down. Otherwise you will compare apples to oranges next month.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>You run two boosted posts for a week.</p>
<table class="art-table"><thead><tr><th></th><th>Post 1</th><th>Post 2</th></tr></thead><tbody>
<tr><td>Spend</td><td>$60</td><td>$60</td></tr>
<tr><td>Enquiries</td><td>12</td><td>5</td></tr>
<tr><td>Cost per enquiry</td><td>$5.00</td><td>$12.00</td></tr>
<tr><td>Sales from those enquiries</td><td>1</td><td>3</td></tr>
<tr><td>Cost per sale</td><td>$60.00</td><td>$20.00</td></tr>
</tbody></table>
<p>Post 1 looked cheaper per enquiry. But Post 2 brought buyers, not browsers. If you only watched cost per enquiry, you would back the wrong post.</p>` },
      { id: "vs", h: "Cost per enquiry vs cost per click vs cost per sale", html: `
<table class="art-table"><thead><tr><th>Metric</th><th>Counts</th><th>Use it when</th></tr></thead><tbody>
<tr><td>Cost per click</td><td>Visits to a link</td><td>You send people to a page</td></tr>
<tr><td>Cost per enquiry</td><td>Real conversations started</td><td>Orders happen in DMs, calls or quotes</td></tr>
<tr><td>Cost per sale</td><td>Paying customers</td><td>You can tie sales to a campaign</td></tr>
</tbody></table>
<p>Clicks are the furthest from money. Sales are the closest. Enquiries sit in the middle, which makes them a good early signal when sales are slow or take days to close.</p>` },
      { id: "rate", h: "Add the enquiry-to-sale rate", html: `
<p>Divide sales by enquiries. If 12 enquiries produce 1 sale, the rate is about 8%. If 5 produce 3, it is 60%.</p>
<p>Now cost per sale becomes predictable: <strong>cost per sale = cost per enquiry ÷ enquiry-to-sale rate</strong>. If you know your usual rate, you can estimate whether an ad is worth running before the sales arrive. Just keep in mind that small samples swing a lot, so treat early numbers as a guide.</p>` },
      { id: "good", h: "What is a good cost per enquiry?", html: `
<p>There is no universal number. A good cost per enquiry depends on your price, your margin and how many enquiries become sales.</p>
<p>A simple test: take your profit per sale, multiply by your enquiry-to-sale rate, and you get the most you can afford to pay per enquiry. Spend above that and you lose money on average. Spend below it and you make money on average.</p>
<p>That uses profit, not revenue. If you do not know your costs yet, read about <a href="/articles/roas-vs-profit-break-even-roas/">break-even ROAS</a> first.</p>` },
      { id: "mistakes", h: "Common mistakes", html: `
<ul>
<li><strong>Counting every like or comment as an enquiry.</strong> It inflates the numbers.</li>
<li><strong>Comparing different time windows.</strong> A weekend and a full week are not comparable.</li>
<li><strong>Ignoring quality.</strong> Cheap enquiries from the wrong audience waste your time.</li>
<li><strong>Forgetting to log outcomes.</strong> Without sales data, cost per enquiry is only half the story.</li>
</ul>` },
    ],
    faq: [
      { q: "What is cost per enquiry?", a: "It is the amount you spend to receive one enquiry, such as a message, call or form submission. Divide total spend by the number of enquiries." },
      { q: "Is cost per enquiry the same as cost per lead?", a: "They are very close. Cost per lead is the common term in lead-generation. Cost per enquiry is the same idea, often used by businesses that sell through messages and calls." },
      { q: "What is the difference between cost per enquiry and cost per sale?", a: "Cost per enquiry counts conversations started. Cost per sale counts paying customers. Cost per sale equals cost per enquiry divided by the enquiry-to-sale rate." },
      { q: "How do I track enquiries from DMs or WhatsApp?", a: "Log each one by hand with its source, or use a pre-filled message so the first message names the post or ad. See the guide on tracking WhatsApp and DM sales." },
      { q: "What is a good cost per enquiry?", a: "It depends on your profit per sale and how many enquiries turn into sales. Multiply the two to find the most you can afford per enquiry." },
    ],
    related: ["track-whatsapp-and-dm-sales", "roas-vs-profit-break-even-roas", "track-sales-from-social-media-posts"],
    cta: { h: "Know what each enquiry really costs you.", p: "Add your spend, enquiries and sales and see cost per enquiry and cost per sale side by side. Start free." },
  },

  {
    slug: "likes-vs-sales-engagement-metrics",
    title: "Likes vs Sales: Which Social Media Metrics Actually Matter",
    seoTitle: "Likes vs Sales: Which Social Media Metrics Actually Matter",
    description: "Likes, views and followers are easy to count but do not pay the bills. See which social media metrics predict sales, which are vanity, and how to track the ones that matter.",
    topic: "Metrics",
    keywords: ["social media metrics that matter", "likes vs sales", "vanity metrics", "engagement rate vs conversion", "social media ROI small business"],
    published: D, modified: D, minutes: 6,
    answer: "Likes, views and followers measure attention, not revenue. The metrics that matter for a business are enquiries, sales, revenue and profit per post or campaign. Track attention metrics as clues, but judge posts by what they sold.",
    takeaways: [
      "Attention metrics (likes, views, followers) are clues. Outcome metrics (enquiries, sales, profit) are the result.",
      "A post can win on engagement and lose on sales. Check both before copying it.",
      "Track a short list of metrics consistently instead of a long list occasionally.",
      "Use engagement to decide what to test, and sales to decide what to keep.",
    ],
    sections: [
      { id: "two-kinds", h: "Two kinds of social media metrics", html: `
<p>Every metric falls into one of two groups.</p>
<table class="art-table"><thead><tr><th>Group</th><th>Examples</th><th>What it tells you</th></tr></thead><tbody>
<tr><td><strong>Attention</strong></td><td>Views, likes, shares, saves, followers, reach</td><td>People noticed and reacted</td></tr>
<tr><td><strong>Outcome</strong></td><td>Enquiries, sales, revenue, profit</td><td>People bought</td></tr>
</tbody></table>
<p>Attention comes first and outcomes come later. The trap is stopping at attention because it is easy to see and feels like progress.</p>` },
      { id: "why-mislead", h: "Why likes can mislead you", html: `
<p>People like what entertains them. They buy what solves a problem they have right now. Those overlap sometimes, but not always.</p>
<p>A funny trend video can reach a huge audience that never becomes a customer. A plain photo of a product in use can reach a small audience that is ready to buy. Both are fine, as long as you know which one is doing which job.</p>` },
      { id: "keep", h: "The short list worth tracking", html: `
<ol>
<li><strong>Enquiries per post.</strong> Messages and calls that mention or follow the post.</li>
<li><strong>Sales per post.</strong> Orders you can connect to it.</li>
<li><strong>Revenue per post.</strong> Sales times price.</li>
<li><strong>Cost per enquiry and cost per sale</strong> for anything you pay to promote. See <a href="/articles/cost-per-enquiry-how-to-calculate/">how to calculate cost per enquiry</a>.</li>
<li><strong>Saves and shares.</strong> Among attention metrics, these usually signal more intent than likes. Treat them as a clue, not proof.</li>
</ol>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<table class="art-table"><thead><tr><th>Post</th><th>Likes</th><th>Saves</th><th>Enquiries</th><th>Sales</th></tr></thead><tbody>
<tr><td>Trend video</td><td>1,200</td><td>20</td><td>2</td><td>0</td></tr>
<tr><td>How to choose a size</td><td>180</td><td>65</td><td>9</td><td>4</td></tr>
</tbody></table>
<p>By likes, the trend video is a clear winner. By enquiries and sales, the sizing post is. The saves also hinted at it. This is why reading attention and outcome together beats reading either alone.</p>` },
      { id: "how", h: "How to make the switch", html: `
<ul>
<li>Log every sale with the post it came from. <a href="/articles/track-sales-from-social-media-posts/">Here is how</a>.</li>
<li>Review once a week, not every hour. Daily swings are mostly noise.</li>
<li>Pick one question per review, such as "Which post type brought the most enquiries?"</li>
<li>Change one thing at a time, so you can tell what caused the difference.</li>
</ul>` },
      { id: "when", h: "When attention metrics still matter", html: `
<p>They matter when you are new and have no sales history yet. They matter for brand awareness goals. And they matter as early warnings, because a post that nobody sees cannot sell. Just do not stop there.</p>` },
    ],
    faq: [
      { q: "Do likes lead to sales?", a: "Sometimes, but not reliably. Likes show that people enjoyed a post. Sales show that people bought. Track both and compare." },
      { q: "What are vanity metrics?", a: "Numbers that look good but do not clearly connect to revenue, such as follower counts, likes and views on their own." },
      { q: "What social media metrics should a small business track?", a: "Enquiries, sales and revenue per post, plus cost per enquiry or sale for paid promotion. Saves and shares are useful extra clues." },
      { q: "Is engagement rate useful?", a: "It is useful as a signal of content quality and for deciding what to test. It does not replace sales data." },
      { q: "How often should I review my metrics?", a: "Weekly is enough for most small businesses. Daily numbers swing too much to act on." },
    ],
    related: ["track-sales-from-social-media-posts", "cost-per-enquiry-how-to-calculate", "roas-vs-profit-break-even-roas"],
    cta: { h: "Judge your posts by what they sold.", p: "7Captur connects posts, enquiries and sales so the next move is clear. Start free." },
  },

  {
    slug: "track-whatsapp-and-dm-sales",
    title: "How to Track WhatsApp and DM Sales From Ads and Posts",
    seoTitle: "How to Track WhatsApp and DM Sales From Ads and Posts",
    description: "Customers who order by WhatsApp or DM are invisible to most analytics. Here is a simple way to tag, log and attribute those sales to the post or ad that started them.",
    topic: "Attribution",
    keywords: ["track WhatsApp sales", "track DM sales", "click to WhatsApp ads tracking", "Instagram DM sales tracking", "WhatsApp attribution"],
    published: D, modified: D, minutes: 7,
    answer: "To track WhatsApp and DM sales, tag the first message with its source (a pre-filled message or a code), log each enquiry when it arrives, mark it as sold or lost when it closes, and review sales by source. No website or pixel is needed.",
    takeaways: [
      "Messaging sales are invisible to website analytics, so you have to record them yourself.",
      "A pre-filled first message names the source before the customer types anything.",
      "Log the enquiry first and the sale later. The gap between them is useful data.",
      "Label untraceable sales as unknown source rather than guessing.",
    ],
    sections: [
      { id: "problem", h: "Why messaging sales go untracked", html: `
<p>A customer taps a post, opens a chat and asks a question. A day later they send a payment. Nothing on a website was visited, so most analytics tools saw nothing.</p>
<p>Yet for many small sellers, services and local businesses, this is the main way sales happen. So the tracking has to follow the conversation, not the page.</p>` },
      { id: "steps", h: "A five-step setup", html: `
<h3>1. Give each source its own entry point</h3>
<p>Use a chat link with pre-filled text, for example "Hi, I saw the linen shirt post". Use a different line for each post, ad or promotion. Paid ads that open WhatsApp or DMs can do the same.</p>
<h3>2. Log each enquiry</h3>
<p>When a message arrives, record the date, the source (from the first message) and the product asked about. One line per enquiry is enough.</p>
<h3>3. Update the outcome</h3>
<p>When the customer pays or drops off, mark it sold or lost. Add the amount for sales.</p>
<h3>4. Handle missing sources</h3>
<p>If the customer wrote their own first message, ask once: "Where did you see us?" If they cannot say, record unknown source.</p>
<h3>5. Review weekly</h3>
<p>Group enquiries and sales by source. Work out the enquiry-to-sale rate for each. Then compare the cost per enquiry for anything you paid to promote. See <a href="/articles/cost-per-enquiry-how-to-calculate/">how to calculate it</a>.</p>` },
      { id: "example", h: "What your log might look like (hypothetical)", html: `
<table class="art-table"><thead><tr><th>Source</th><th>Enquiries</th><th>Sales</th><th>Rate</th></tr></thead><tbody>
<tr><td>Linen shirt reel</td><td>14</td><td>4</td><td>29%</td></tr>
<tr><td>Boosted story</td><td>22</td><td>2</td><td>9%</td></tr>
<tr><td>Unknown</td><td>6</td><td>3</td><td>50%</td></tr>
</tbody></table>
<p>The boosted story brought the most conversations and the fewest buyers per conversation. That is worth knowing before you spend more on it.</p>` },
      { id: "tips", h: "Tips that save time", html: `
<ul>
<li>Use saved replies for the "where did you see us?" question.</li>
<li>Keep source names short and consistent, such as <em>reel-linen</em> or <em>story-promo</em>.</li>
<li>Record the sale the same day. Memory fades fast.</li>
<li>Do not chase perfect accuracy. A mostly complete log beats a perfect one you stop keeping.</li>
</ul>` },
      { id: "tools", h: "Where to keep the log", html: `
<p>A spreadsheet works. So does a notes app. The downside is the weekly summing and comparing. <a href="/product/">7Captur</a> takes manual enquiries and sales, ties them to posts and ads, and shows what to do next, with each number labelled by where it came from.</p>` },
    ],
    faq: [
      { q: "Can I track WhatsApp sales from Facebook or Instagram ads?", a: "Yes. Use ads that open a chat with pre-filled text, then log each enquiry and sale with that source. Match the log against your ad spend to work out cost per enquiry and cost per sale." },
      { q: "How do I know which post a DM came from?", a: "Use a pre-filled message per post, or ask the customer one question. If neither works, record the source as unknown." },
      { q: "Do I need the WhatsApp Business API to track sales?", a: "No. A manual log works with any version of WhatsApp. The API adds automation but is not required." },
      { q: "What if a customer messages days after seeing the post?", a: "Record the enquiry date and the source as best you can. If you cannot trace it, mark it unknown source and include it in your totals." },
      { q: "How do I track phone call sales too?", a: "Use the same log. Add \"call\" as the channel and ask the caller how they found you." },
    ],
    related: ["track-sales-from-social-media-posts", "cost-per-enquiry-how-to-calculate", "likes-vs-sales-engagement-metrics"],
    cta: { h: "Turn messages into a clear sales picture.", p: "Log enquiries and sales by source and see what is working. Start on the free plan." },
  },

  {
    slug: "roas-vs-profit-break-even-roas",
    title: "ROAS vs Profit: How to Calculate Break-Even ROAS",
    seoTitle: "ROAS vs Profit: How to Calculate Break-Even ROAS (With Examples)",
    description: "A good-looking ROAS can still lose money. Learn the break-even ROAS formula, why margin, returns and fees change the answer, and how to check whether your ads make a profit.",
    topic: "Profit and ROAS",
    keywords: ["break-even ROAS", "ROAS vs profit", "how to calculate break-even ROAS", "true ROAS", "is my ROAS good", "ROAS and profit margin"],
    published: D, modified: D, minutes: 8,
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
<p>The thinner your margin, the higher the ROAS you need just to break even. That is why the same ROAS can be great for one business and a loss for another.</p>` },
      { id: "example", h: "A worked example (hypothetical numbers)", html: `
<p>Your campaign spends $1,000 and the platform reports $2,000 in sales. ROAS is 2.0. Your products have a 40% margin.</p>
<table class="art-table"><thead><tr><th>Step</th><th>Amount</th></tr></thead><tbody>
<tr><td>Revenue reported</td><td>$2,000</td></tr>
<tr><td>Gross profit at 40%</td><td>$800</td></tr>
<tr><td>Ad spend</td><td>$1,000</td></tr>
<tr><td>Result before other costs</td><td>-$200</td></tr>
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
<p>Note that break-even is not the goal. It is the floor. Most businesses want a buffer above it to cover overheads and growth.</p>` },
      { id: "no-ads", h: "What if you do not use ad platforms for sales?", html: `
<p>The same logic applies to boosted posts that bring messages. Replace revenue with the sales you can trace, and compare against your margin. See <a href="/articles/cost-per-enquiry-how-to-calculate/">cost per enquiry</a> and <a href="/articles/track-whatsapp-and-dm-sales/">tracking WhatsApp and DM sales</a> for that setup.</p>
<p><a href="/product/">7Captur</a> works this out from your costs and returns and says plainly when it cannot, instead of guessing.</p>` },
    ],
    faq: [
      { q: "What is a good ROAS?", a: "It depends on your margin. A good ROAS is one above your break-even ROAS, which is 1 divided by your gross margin." },
      { q: "How do I calculate break-even ROAS?", a: "Divide 1 by your gross margin as a decimal. With a 40% margin, 1 ÷ 0.40 = 2.5." },
      { q: "Is a ROAS of 2 profitable?", a: "Only if your gross margin is above 50%. With a 40% margin, a ROAS of 2 loses money before other costs." },
      { q: "What is the difference between ROAS and profit?", a: "ROAS is revenue divided by ad spend. Profit also subtracts product costs, returns, fees and ad spend." },
      { q: "Why does my ROAS drop over time?", a: "Returns, cancellations and late-arriving data can reduce the final figure. Early ROAS is often higher than final ROAS." },
      { q: "What if I do not know my costs?", a: "Treat the result as unknown. Do not use zero for missing costs, because that overstates profit." },
    ],
    related: ["cost-per-enquiry-how-to-calculate", "likes-vs-sales-engagement-metrics", "track-sales-from-social-media-posts"],
    cta: { h: "Find out if your ads make a profit.", p: "Add your costs and 7Captur shows what your numbers can and cannot prove. Start free." },
  },
];

import { MORE } from "./articles2";
export const ARTICLES: Article[] = [...BASE, ...MORE];
export const bySlug = (s: string) => ARTICLES.find((a) => a.slug === s)!;
