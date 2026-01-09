import { Code, Search, Share2, PenTool, Megaphone, ShoppingCart, Target } from "lucide-react";

export const servicesData = [
  // 1. Web Development
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "High-performance digital ecosystems.",
    icon: Code,
    bgImg: "/web_banner.jpg",
    introText: "In today's digital-first world, your website is your 24/7 salesperson. At Zaynlo, we engineer digital experiences that convert visitors into loyal clients. Our philosophy is rooted in performance, scalability, and user-centric design. We build robust platforms that serve as the foundation of your digital identity.",
    introImage: "/web_servi.webp",
    executionText: "Our execution process is transparent and agile. We begin with a deep-dive discovery phase to understand your brand. Next, we move to wireframing and UI/UX design. Once approved, our developers bring the design to life using modern tech stacks (React, Node.js). We rigorously test for bugs and speed before launch.",
    pricing: [
      {
        plan: "Silver",
        price: "₹2,999",
        features: ["Single Page Website", "SEO Friendly Structure", "Mobile Responsive", "Social Media Integration", "WhatsApp Chat Button", "3 Days Support"],
        recommended: false
      },
      {
        plan: "Gold",
        price: "₹7,999",
        features: ["3-5 Page Website", "Dynamic Content", "Basic SEO Setup", "Contact Forms", "Google Maps Integration", "1 Month Support"],
        recommended: true
      },
      {
        plan: "Platinum",
        price: "₹11,999",
        features: ["7-10 Page Website", "CMS Integration", "Advanced SEO Schema", "Blog Section", "Speed Optimization", "3 Months Support"],
        recommended: false
      },
      {
        plan: "Diamond",
        price: "₹15,999",
        features: ["10-15 Pages / Custom", "Full Dynamic System", "Premium Animations", "Security Firewall", "Analytics Setup", "6 Months Support"],
        recommended: false
      }
    ],
    outroText: "Invest in a website that works as hard as you do. Whether you are a startup or an established enterprise, our tiered packages ensure you get exactly what you need to succeed online."
  },

  // 2. Google Ads (New Addition)
  {
    id: "google-ads",
    title: "Google Ads",
    shortDesc: "Reach customers the moment they search.",
    icon: Target,
    bgImg: "/googleads_banner.jpg",
    introText: "Dominate the search results immediately. Google Ads allows you to bypass the wait for organic rankings and place your brand directly in front of high-intent buyers. From Search Ads to YouTube campaigns, we manage your budget to ensure every click has the highest potential for conversion.",
    introImage: "/gog_servi.webp", // Ensure you have an image for this
    executionText: "We focus on 'Quality Score' optimization to lower your costs while increasing visibility. We perform A/B testing on ad copies, set up precise negative keyword lists to avoid wasted spend, and create dedicated landing pages that align with user intent to maximize sales.",
    pricing: [
      {
        plan: "Starter",
        price: "₹3,999",
        features: ["Search Network Only", "5 Ad Groups", "Keyword Research", "Basic Ad Copy", "Monthly Report", "Setup Fee Only"],
        recommended: false
      },
      {
        plan: "Business",
        price: "₹7,999",
        features: ["Search & Display", "Remarketing Setup", "Audience Targeting", "Competitor Analysis", "Bi-Weekly Optimization", "Conversion Tracking"],
        recommended: true
      },
      {
        plan: "Pro",
        price: "₹14,999",
        features: ["All Networks (YouTube)", "Shopping Ads", "Advanced Bidding Strategy", "Landing Page Audit", "Weekly Optimization", "Dedicated Manager"],
        recommended: false
      }
    ],
    outroText: "Stop hoping for traffic and start buying it intelligently. Our Google Ads strategies turn your ad budget into a profit generator."
  },

  // 3. SEM (Search Engine Marketing)
  {
    id: "sem",
    title: "SEM Strategy",
    shortDesc: "Holistic paid search dominance.",
    icon: Megaphone,
    bgImg: "/seo_banner.jpg",
    introText: "SEM is the broader strategy of ensuring visibility across all search engines (Google, Bing, Yahoo). We manage your ad spend with surgical precision, ensuring every rupee contributes to measurable ROI. We look at the big picture of paid acquisition to drive market share.",
    introImage: "/seo_servi.webp",
    executionText: "We don't just 'boost' posts; we engineer campaigns. We start with granular keyword research to find low-cost, high-intent terms. We then design compelling ad copy and landing pages. Once live, we monitor the campaign daily, adjusting bids and negative keywords to lower your Cost Per Acquisition (CPA).",
    pricing: [
      {
        plan: "Basic",
        price: "₹4,999",
        features: ["Single Channel Strategy", "Keyword Research", "Ad Copy Creation", "Basic Bid Management", "Monthly Report", "Setup Fee Only"],
        recommended: false
      },
      {
        plan: "Standard",
        price: "₹9,999",
        features: ["Multi-Channel Strategy", "Competitor Analysis", "A/B Testing", "Audience Retargeting", "Bi-Weekly Reports", "Conversion Tracking"],
        recommended: true
      },
      {
        plan: "Premium",
        price: "₹17,999",
        features: ["Omnichannel (Bing/Google)", "Shopping Ads", "Youtube Ads", "Landing Page Consu.", "Weekly Optimization", "Dedicated Manager"],
        recommended: false
      }
    ],
    outroText: "Paid advertising is a science, not a gamble. Let us handle the complexities of the algorithms while you handle the influx of new leads."
  },

  // 4. SMM (Social Media Marketing)
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDesc: "Spark conversations, build loyalty.",
    icon: Share2,
    bgImg: "/social_banner.jpg",
    introText: "Your customers are scrolling right now—are they seeing you? SMM is about building a brand personality that resonates. We turn passive scrollers into active community members through storytelling, visual excellence, and strategic engagement across Instagram, Facebook, and LinkedIn.",
    introImage: "/soci_servi.webp",
    executionText: "Our strategy begins with defining your 'Brand Voice.' We create a content calendar that mixes educational, entertaining, and promotional content. Our design team creates high-fidelity visuals and Reels, while our community managers engage with comments to foster trust. We analyze metrics monthly to refine our approach.",
    pricing: [
      {
        plan: "Silver",
        price: "₹6,999",
        features: ["2 Platforms (FB/Insta)", "8 Creative Posts/Month", "Basic Captions", "Hashtag Strategy", "Monthly Report", "No Reels"],
        recommended: false
      },
      {
        plan: "Gold",
        price: "₹12,999",
        features: ["3 Platforms", "12 Posts + 4 Reels", "Story Management", "Community Engagement", "Content Calendar", "Ad Boost Setup"],
        recommended: true
      },
      {
        plan: "Platinum",
        price: "₹24,999",
        features: ["All Platforms", "20 Posts + 8 Reels", "Influencer Outreach", "Crisis Management", "Daily Engagement", "Video Editing"],
        recommended: false
      }
    ],
    outroText: "Social media is the modern handshake. Make sure yours is firm, confident, and memorable with our expert management."
  },

  // 5. E-Commerce Solutions
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    shortDesc: "Sell everywhere, 24/7.",
    icon: ShoppingCart,
    bgImg: "/ecom_banner.jpg",
    introText: "Transform your local business into a global store. We build robust, secure, and scalable e-commerce platforms designed to streamline the user journey. From product browsing to secure checkout, our solutions are engineered to maximize Average Order Value (AOV) and reduce cart abandonment.",
    introImage: "/ecom_servi.webp",
    executionText: "We start by selecting the right platform (Shopify, WooCommerce, or Custom MERN). We design a conversion-focused UI, integrate secure payment gateways (Razorpay, Stripe), and set up inventory management systems. Before launch, we stress-test the cart flow and ensure mobile responsiveness for on-the-go shoppers.",
    pricing: [
      {
        plan: "Starter Store",
        price: "₹14,999",
        features: ["WooCommerce Setup", "Up to 20 Products", "Payment Gateway", "Mobile Responsive", "Basic SEO", "1 Month Support"],
        recommended: false
      },
      {
        plan: "Pro Store",
        price: "₹24,999",
        features: ["Custom UI/UX", "Up to 100 Products", "Abandoned Cart Email", "User Wishlist", "Discount System", "3 Months Support"],
        recommended: true
      },
      {
        plan: "Marketplace",
        price: "₹49,999",
        features: ["Multi-Vendor Capable", "Unlimited Products", "Advanced Analytics", "ERP Integration", "Custom App API", "6 Months Support"],
        recommended: false
      }
    ],
    outroText: "Your shop should never close. With our e-commerce solutions, you are making sales while you sleep."
  },

  // 6. SEO (Search Engine Optimization)
  {
    id: "seo",
    title: "SEO Optimization",
    shortDesc: "Rank higher, grow organically.",
    icon: Search,
    bgImg: "/seo_banner.jpg",
    introText: "Ranking on the first page of Google isn't luck; it's engineering. SEO is your long-term asset for sustainable growth. We optimize your entire digital footprint to ensure you are the authority in your niche. By aligning your site with search algorithms, we drive free, consistent, and high-quality traffic to your business.",
    introImage: "/seo_servi.webp",
    executionText: "We start with a comprehensive technical audit to fix broken links and speed issues. Then, we optimize On-Page elements (Meta tags, H1s, Content). Phase three involves Off-Page strategy, building high-quality backlinks to increase domain authority. We provide transparent monthly reports showing your keyword climb.",
    pricing: [
      {
        plan: "Local",
        price: "₹4,999",
        features: ["5 Keywords", "Google My Business", "On-Page Optimization", "Technical Fixes", "Monthly Reporting", "6 Month Contract"],
        recommended: false
      },
      {
        plan: "National",
        price: "₹9,999",
        features: ["15 Keywords", "Content Writing (2 Blogs)", "Backlink Building", "Competitor Analysis", "Speed Optimization", "4 Month Contract"],
        recommended: true
      },
      {
        plan: "Global",
        price: "₹19,999",
        features: ["30+ Keywords", "Authority Link Building", "4 Blog Posts/Month", "Schema Markup", "Voice Search Opt", "Dedicated Expert"],
        recommended: false
      }
    ],
    outroText: "Don't let your competitors steal your customers simply because they appear first. Claim your digital real estate today."
  },

  // 7. Branding
  {
    id: "branding",
    title: "Brand Identity",
    shortDesc: "Define your DNA. Stand out.",
    icon: PenTool,
    bgImg: "/branding_banner.jpg",
    introText: "A logo is not a brand. A brand is a feeling. It’s what people say about you when you're not in the room. We strip your business down to its core values and rebuild it into a visual and narrative identity that connects emotionally with your audience. We ensure consistency across every touchpoint.",
    introImage: "/brnd_servi.webp",
    executionText: "We begin with a 'Brand Discovery Session' to understand your mission. We then move to mood boarding and conceptualization. Our designers craft logos, color palettes, and typography systems. Finally, we deliver a 'Brand Bible' (Style Guide) ensuring you and your team never deviate from the new identity.",
    pricing: [
      {
        plan: "Startup",
        price: "₹3,999",
        features: ["2 Logo Concepts", "Color Palette", "Typography Selection", "Business Card Design", "Letterhead Design", "High-Res Exports"],
        recommended: false
      },
      {
        plan: "Business",
        price: "₹8,999",
        features: ["4 Logo Concepts", "Full Stationery Kit", "Social Media Kit", "Brand Pattern Design", "Email Signature", "3 Revisions"],
        recommended: true
      },
      {
        plan: "Enterprise",
        price: "₹15,999",
        features: ["Premium Logo Suite", "Complete Brand Guidelines", "Packaging Design", "Marketing Collateral", "Copyright Transfer", "Unlimited Revisions"],
        recommended: false
      }
    ],
    outroText: "Your brand is your promise to your customer. Let us help you package that promise into an unforgettable identity."
  }
];