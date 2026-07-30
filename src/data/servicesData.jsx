import React from "react";
import {
  Code,
  Search,
  Share2,
  PenTool,
  Megaphone,
  ShoppingCart,
  Target,
} from "lucide-react";

export const servicesData = [
  // 1. Web Development
  {
    id: "web-development",
    title: "Web Development",
    metaTitle: "Web Development Services in Kerala | Zaynlo Agency",
    metaDescription: "Upgrade your digital presence with Zaynlo's expert web development services in Kerala. We build fast, secure, and high-converting websites.",
    shortDesc: "High-performance digital ecosystems.",
    icon: Code,
    bgImg: "/web_banner.jpg",
    introText:
      "In today's digital-first world, your website is your 24/7 salesperson. At Zaynlo, we engineer digital experiences that convert visitors into loyal clients. Our philosophy is rooted in performance, scalability, and user-centric design. We build robust platforms that serve as the foundation of your digital identity.",
    introImage: "/web_servi.webp",
    executionText:
      "Our execution process is transparent and agile. We begin with a deep-dive discovery phase to understand your brand. Next, we move to wireframing and UI/UX design. Once approved, our developers bring the design to life using modern tech stacks (React, Node.js). We rigorously test for bugs and speed before launch.",
    pricing: [
      {
        plan: "Silver",
        price: "₹2,999",
        features: [
          "Single Page Website",
          "SEO Friendly Structure",
          "Mobile Responsive",
          "Contact Forms",
          "Google Maps Integration",
          "Social Media Integration",
          "WhatsApp Chat Button",
          "3 Days Support",
        ],
        recommended: false,
      },
      {
        plan: "Gold",
        price: "₹7,999",
        features: [
          "3-5 Pages Website",
          "Responsive Design",
          "Dynamic Content",
          "Basic SEO Setup",
          "Contact Forms",
          "Google Maps Integration",
          "Social Media Integration",
          "WhatsApp Integration",
          "10 Days Support",
        ],
        recommended: true,
      },
      {
        plan: "Platinum",
        price: "₹11,999",
        features: [
          "7-10 Pages Website",
          "Responsive Design",
          "Dynamic Content",
          "Basic SEO Setup",
          "Contact Forms",
          "Google Maps Integration",
          "Social Media Integration",
          "WhatsApp Integration",
          "30 Days Support",
        ],
        recommended: false,
      },
      {
        plan: "Diamond",
        price: "₹15,999",
        features: [
          "10-15 Pages Website",
          "Responsive Design",
          "Dynamic Content",
          "Basic SEO Setup",
          "Contact Forms",
          "Google Maps Integration",
          "Social Media Integration",
          "WhatsApp Integration",
          "30 Days Support",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Invest in a website that works as hard as you do. Whether you are a startup or an established enterprise, our tiered packages ensure you get exactly what you need to succeed online.",
    nb: (
      <span className="text-zinc-400 text-sm">
        Additional pages beyond the package limit will be charged at{" "}
        <span className="text-[#dbe11d] font-bold">₹1,000/- per page</span>.
        <br />
        <span className="text-[#dbe11d] font-bold">
          Domain registration and web hosting
        </span>{" "}
        services are{" "}
        <span className="text-[#dbe11d] font-bold">not included</span> in the
        above package prices.
      </span>
    ),
    // ✅ NEW: Terms & Privacy Section based on your image
    termsAndConditions: (
      <div className="mt-12 space-y-8 bg-zinc-900/50 p-6 md:p-10 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-black text-[#dbe11d] mb-6">
          Terms of Service & Privacy
        </h3>

        {/* Jurisdiction */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Jurisdiction
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                All services and legal agreements are governed by the laws
                applicable in the state of Kerala, India.
              </span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Payment Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Initial Deposit:</strong>{" "}
                <span className="text-[#dbe11d] font-bold">50%</span> of the
                total project value is required to commence work.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Final Settlement:</strong>{" "}
                Remaining <span className="text-[#dbe11d] font-bold">50%</span>{" "}
                must be cleared before the website goes live or is handed over
                to the client.
              </span>
            </li>
          </ul>
        </div>

        {/* Project Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Project Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Content:</strong> The client is
                responsible for providing{" "}
                <strong className="text-[#dbe11d]">
                  all text, images, and logos.
                </strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Scope:</strong> Any features
                requested outside the selected package will be billed
                separately.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Timeline:</strong> Delivery dates
                depend on the timely receipt of feedback and content from the
                client.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Privacy Policy
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Confidentiality:</strong> Zaynlo
                ensures that all client data and credentials remain strictly
                confidential.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Data Use:</strong> Information
                collected is used solely for project development and will not be
                shared with third parties.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // 2. Google Ads (New Addition)
  {
    id: "google-ads",
    title: "Google Ads",
    metaTitle: "Google Ads Management Services in Kerala | Zaynlo",
    metaDescription: "Maximize your ROI with Zaynlo's expert Google Ads management services in Kerala. We drive high-intent traffic and generate qualified leads.",
    shortDesc: "Reach customers the moment they search.",
    icon: Target,
    bgImg: "/googleads_banner.jpg",
    introText:
      "Dominate the search results immediately. Google Ads allows you to bypass the wait for organic rankings and place your brand directly in front of high-intent buyers. From Search Ads to YouTube campaigns, we manage your budget to ensure every click has the highest potential for conversion.",
    introImage: "/gog_servi.webp", // Ensure you have an image for this
    executionText:
      "We focus on 'Quality Score' optimization to lower your costs while increasing visibility. We perform A/B testing on ad copies, set up precise negative keyword lists to avoid wasted spend, and create dedicated landing pages that align with user intent to maximize sales.",
    pricing: [
      {
        plan: "Starter",
        price: "₹3,999",
        features: [
          "Search Network Only",
          "5 Ad Groups",
          "Keyword Research",
          "Basic Ad Copy",
          "Monthly Report",
          "Setup Fee Only",
        ],
        recommended: false,
      },
      {
        plan: "Business",
        price: "₹7,999",
        features: [
          "Search & Display",
          "Remarketing Setup",
          "Audience Targeting",
          "Competitor Analysis",
          "Bi-Weekly Optimization",
          "Conversion Tracking",
        ],
        recommended: true,
      },
      {
        plan: "Pro",
        price: "₹14,999",
        features: [
          "All Networks (YouTube)",
          "Shopping Ads",
          "Advanced Bidding Strategy",
          "Landing Page Audit",
          "Weekly Optimization",
          "Dedicated Manager",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Stop hoping for traffic and start buying it intelligently. Our Google Ads strategies turn your ad budget into a profit generator.",
  },

  // 3. SEM (Search Engine Marketing)
  {
    id: "sem",
    title: "SEM Strategy",
    metaTitle: "SEM & Paid Search Strategy Agency in Kerala | Zaynlo",
    metaDescription: "Dominate search engines with Zaynlo's Search Engine Marketing (SEM) strategy. We manage your paid ad spend across Google and Bing for maximum ROI.",
    shortDesc: "Holistic paid search dominance.",
    icon: Megaphone,
    bgImg: "/seo_banner.jpg",
    introText:
      "SEM is the broader strategy of ensuring visibility across all search engines (Google, Bing, Yahoo). We manage your ad spend with surgical precision, ensuring every rupee contributes to measurable ROI. We look at the big picture of paid acquisition to drive market share.",
    introImage: "/seo_servi.webp",
    executionText:
      "We don't just 'boost' posts; we engineer campaigns. We start with granular keyword research to find low-cost, high-intent terms. We then design compelling ad copy and landing pages. Once live, we monitor the campaign daily, adjusting bids and negative keywords to lower your Cost Per Acquisition (CPA).",
    pricing: [
      {
        plan: "Basic",
        price: "₹4,999",
        features: [
          "Single Channel Strategy",
          "Keyword Research",
          "Ad Copy Creation",
          "Basic Bid Management",
          "Monthly Report",
          "Setup Fee Only",
        ],
        recommended: false,
      },
      {
        plan: "Standard",
        price: "₹9,999",
        features: [
          "Multi-Channel Strategy",
          "Competitor Analysis",
          "A/B Testing",
          "Audience Retargeting",
          "Bi-Weekly Reports",
          "Conversion Tracking",
        ],
        recommended: true,
      },
      {
        plan: "Premium",
        price: "₹17,999",
        features: [
          "Omnichannel (Bing/Google)",
          "Shopping Ads",
          "Youtube Ads",
          "Landing Page Consu.",
          "Weekly Optimization",
          "Dedicated Manager",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Paid advertising is a science, not a gamble. Let us handle the complexities of the algorithms while you handle the influx of new leads.",
  },

  // 4. SMM (Social Media Marketing)
  {
    id: "social-media",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing Services in Kerala | Zaynlo",
    metaDescription: "Spark conversations and build brand loyalty with Zaynlo's social media marketing services in Kerala. Expert management for Instagram, Facebook & LinkedIn.",
    shortDesc: "Spark conversations, build loyalty.",
    icon: Share2,
    bgImg: "/social_banner.jpg",
    introText:
      "In a world where everyone is scrolling, being seen is only half the battle; being remembered is what drives business. We turn passive scrollers into active community members. We don't just manage profiles; we craft a visual and conversational identity that turns followers into loyal brand advocates.",
    introImage: "/soci_servi.webp",
    executionText:
      "Our strategy begins with defining your 'Brand Voice.' We create a content calendar that mixes educational, entertaining, and promotional content. Our design team creates high-fidelity visuals and Reels, while our community managers engage with comments to foster trust. We analyze metrics monthly to refine our approach.",
    pricing: [
      {
        plan: "Silver",
        price: "₹5,999",
        features: [
          "2 Platforms (FB, Insta)",
          "10 Posts / Month",
          "Typography System",
          "Profile Optimization",
          "Basic Insights Report",
          "Content Strategy",
        ],
        recommended: false,
      },
      {
        plan: "Gold",
        price: "₹10,999",
        features: [
          "3 Platforms (FB, Insta, LinkedIn)",
          "15 Posts / Month",
          "Typography System",
          "Profile Optimization",
          "Basic Insights Report",
          "Content Caption + Hashtags",
        ],
        recommended: true,
      },
    ],
    outroText:
      "Social media is the modern handshake. Make sure yours is firm, confident, and memorable with our expert management.",

    // ✅ NEW: SMM Terms & Privacy Section based on your PDF
    termsAndConditions: (
      <div className="mt-12 space-y-8 bg-zinc-900/50 p-6 md:p-10 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-black text-[#dbe11d] mb-6">
          Terms of Service & Privacy
        </h3>

        {/* Jurisdiction */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Jurisdiction
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                All social media services and contracts are governed by the laws
                of the state of Kerala, India.
              </span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Payment Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Service Fee:</strong> Monthly
                management fees must be paid in advance at the start of each
                billing cycle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Late Payment:</strong> Services
                will be paused if payment is not received within 3 days of the
                due date.
              </span>
            </li>
          </ul>
        </div>

        {/* Project Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Project Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Access:</strong> The client must
                provide "Editor" or "Admin" access to the necessary social media
                business suites.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Approval:</strong> All post
                designs and captions will be sent for approval 3 days before the
                scheduled posting date.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Contract:</strong> Minimum
                commitment of 3 months is recommended for best organic growth
                results.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Privacy Policy
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Account Security:</strong> Zaynlo
                ensures all login credentials and business data are handled
                through secure official partner portals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Content Rights:</strong> All
                creative assets produced during the contract belong to the
                client upon receipt of payment.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // 5. E-Commerce Solutions
  {
    id: "ecommerce",
    title: "Shopify E-Commerce",
    metaTitle: "Shopify E-Commerce Development in Kerala | Zaynlo",
    metaDescription: "Launch a high-converting digital storefront with Zaynlo's Shopify e-commerce development services in Kerala. Drive online retail sales and growth.",
    shortDesc: "High-converting digital storefronts.",
    icon: ShoppingCart,
    bgImg: "/ecom_banner.jpg",
    introText:
      "In the competitive world of online retail, your store is your most valuable salesperson. Our approach to Shopify Development goes beyond basic setup; we focus on building a high-converting digital storefront designed to turn casual visitors into loyal customers. We combine stunning aesthetics with strategic functionality to create a powerful engine for sales, retention, and business growth.",
    introImage: "/ecom_servi.webp",
    executionText:
      "We start by selecting the right Shopify theme for your brand. We design a conversion-focused UI, upload your products, and integrate secure payment gateways. Before launch, we stress-test the cart flow and ensure flawless mobile responsiveness so your shop is ready to generate sales from day one.",
    pricing: [
      {
        plan: "Silver",
        price: "₹6,999",
        features: [
          "Standard Free Theme",
          "Responsive Design",
          "Home, Contact, About",
          "Upload up to 25 products",
          "Connect Domain & Payments",
          "Deliver by 5-7 Days",
          "10 Days Support",
        ],
        recommended: false,
      },
      {
        plan: "Gold",
        price: "₹12,999",
        features: [
          "Standard Free Theme + Customization",
          "Responsive Design",
          "Home, Contact, About",
          "Upload up to 75 products",
          "Connect Domain & Payments",
          "Deliver by 10-12 Days",
          "15 Days Support",
        ],
        recommended: true,
      },
      {
        plan: "Platinum",
        price: "₹19,999",
        features: [
          "Premium Theme (Theme Cost Extra)",
          "Full Store Setup",
          "Upload up to 200 products",
          "Advanced App Integration",
          "Connect Domain & Payments",
          "Deliver by 15-20 Days",
          "30 Days Support",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Your shop should never close. With our high-converting Shopify solutions, you are making sales while you sleep.",

    // ✅ NEW: E-Commerce NB Section based on the PDF
    nb: (
      <span className="text-zinc-400 text-sm">
        <strong className="text-white">Extra Product Billing:</strong>{" "}
        Additional product uploads beyond the package limit are billed at{" "}
        <span className="text-[#dbe11d] font-bold">₹80/item</span>.<br />
        <strong className="text-white">Extra Page Billing:</strong> Additional
        pages beyond the package limit will be charged at{" "}
        <span className="text-[#dbe11d] font-bold">₹1,000/- per page</span>.
      </span>
    ),

    // ✅ NEW: Shopify Terms & Privacy Section
    termsAndConditions: (
      <div className="mt-12 space-y-8 bg-zinc-900/50 p-6 md:p-10 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-black text-[#dbe11d] mb-6">
          Terms of Service & Privacy
        </h3>

        {/* Jurisdiction */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Jurisdiction
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                All Shopify development services are governed by the laws of the
                state of Kerala, India.
              </span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Payment Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Advance Payment:</strong>{" "}
                <span className="text-[#dbe11d] font-bold">50%</span> upfront to
                begin the store configuration.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Final Settlement:</strong>{" "}
                Remaining <span className="text-[#dbe11d] font-bold">50%</span>{" "}
                due upon project completion and before store transfer.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Exclusions:</strong> Domain, and
                Payment Gateway setup are not included. The client is
                responsible for purchasing these and providing the necessary
                credentials. All third-party subscription fees (Shopify plans or
                premium themes) must be paid directly by the client.
              </span>
            </li>
          </ul>
        </div>

        {/* Project Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Project Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Premium Templates:</strong> If a
                Premium Theme is chosen, the client is responsible for the theme
                purchase cost.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Content:</strong> Client must
                provide all product images, descriptions, and prices.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Privacy Policy
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Account Security:</strong> Zaynlo
                maintains strict confidentiality of Shopify collaborator access
                and client data.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Data Privacy:</strong> Client
                customer data collected during testing is never shared or used
                by Zaynlo for any other purpose.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  // 6. SEO (Search Engine Optimization)
  {
    id: "seo",
    title: "SEO Optimization",
    metaTitle: "SEO Optimization Services in Kerala | Zaynlo Agency",
    metaDescription: "Rank higher and grow organically with Zaynlo's expert SEO optimization services in Kerala. We specialize in technical SEO and local maps ranking.",
    shortDesc: "Rank higher, grow organically.",
    icon: Search,
    bgImg: "/seo_banner.jpg",
    introText:
      "In the ever-evolving search landscape, being visible is the difference between being found and being forgotten. Our approach to SEO and Local SEO goes beyond simple keyword placement; we focus on building a sustainable digital presence that acts as a powerful engine for organic growth, local authority, and high-quality lead generation. We don't just optimize for search engines; we optimize for the human experience, turning searchers into loyal customers.",
    introImage: "/seo_servi.webp",
    executionText:
      "We start with a comprehensive technical audit to fix broken links and speed issues. Then, we optimize On-Page elements (Meta tags, H1s, Content). Phase three involves Off-Page strategy, building high-quality backlinks to increase domain authority. We provide transparent monthly reports showing your keyword climb.",
    pricing: [
      {
        plan: "Starter SEO",
        price: "₹5,999",
        features: [
          "5 Keywords",
          "Complete Website Audit",
          "Competitor Analysis",
          "Keyword Research",
          "On-Page SEO",
          "OFF-Page SEO",
          "Technical SEO",
          "Monthly Ranking Report",
        ],
        recommended: false,
      },
      {
        plan: "Growth SEO",
        price: "₹9,999",
        features: [
          "10 Keywords",
          "Complete Website Audit",
          "Competitor Analysis",
          "Keyword Research",
          "On-Page SEO",
          "OFF-Page SEO",
          "Technical SEO",
          "Local SEO",
          "Monthly Ranking Report",
        ],
        recommended: true,
      },
      {
        plan: "Business SEO",
        price: "₹16,999",
        features: [
          "15 Keywords",
          "Complete Website Audit",
          "Competitor Analysis",
          "Keyword Research",
          "On-Page SEO",
          "OFF-Page SEO",
          "Technical SEO",
          "Local SEO",
          "Monthly Ranking Report",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Don't let your competitors steal your customers simply because they appear first. Claim your digital real estate today.",

    // ✅ NEW: SEO NB Section based on the PDF
    nb: (
      <span className="text-zinc-400 text-sm">
        <strong className="text-white">Additional Keywords:</strong> Keywords
        beyond the package limit will be charged at{" "}
        <span className="text-[#dbe11d] font-bold">₹900/- per keyword</span>.
      </span>
    ),

    // ✅ NEW: SEO Terms & Privacy Section
    termsAndConditions: (
      <div className="mt-12 space-y-8 bg-zinc-900/50 p-6 md:p-10 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-black text-[#dbe11d] mb-6">
          Terms of Service & Privacy
        </h3>

        {/* Jurisdiction */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Jurisdiction
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                All SEO services and agreements are governed by the laws of the
                state of Kerala, India.
              </span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Payment Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Monthly Fee:</strong> Payments
                are due in advance at the start of each service month.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Non-Refundable:</strong> Due to
                the nature of search engine work, service fees are
                non-refundable.
              </span>
            </li>
          </ul>
        </div>

        {/* Project Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Project Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Access Requirements:</strong> The
                client must provide access to Website Admin (WordPress/Panel),
                Google Search Console, and Google Analytics.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Ranking Timeline:</strong> SEO is
                a long-term process; significant ranking improvements typically
                take 4 to 6 months of consistent work.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Google Updates:</strong> Zaynlo
                is not responsible for ranking fluctuations caused by official
                Google algorithm updates.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Privacy Policy
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Data Protection:</strong> Zaynlo
                ensures that all website login credentials and business traffic
                data are kept strictly confidential.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Ethical SEO:</strong> We use only
                "White Hat" SEO techniques to ensure your website remains safe
                from search engine penalties.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // 7. Branding
  {
    id: "branding",
    title: "Brand Identity",
    metaTitle: "Premium Brand Identity & Logo Design in Kerala | Zaynlo",
    metaDescription: "Define your DNA and stand out. Zaynlo crafts premium brand identities, logo designs, and visual guidelines for ambitious businesses in Kerala.",
    shortDesc: "Define your DNA. Stand out.",
    icon: PenTool,
    bgImg: "/branding_banner.jpg",
    introText:
      "Brands aren't just seen; they are experienced. At Zaynlo, we bridge the gap between aesthetic beauty and digital functionality. We don't just design logos; we build visual identities that speak to your audience before you even say a word. Whether you are a startup looking for a voice or an established company looking for a revival, we craft the visual language that turns viewers into customers.",
    introImage: "/brnd_servi.webp",
    executionText:
      "We begin with a 'Brand Discovery Session' to understand your mission. We then move to mood boarding and conceptualization. Our designers craft logos, color palettes, and typography systems. Finally, we deliver a 'Brand Bible' (Style Guide) ensuring you and your team never deviate from the new identity.",
    pricing: [
      {
        plan: "Low",
        price: "₹4,999",
        features: [
          "Primary Logo Design (2 Concepts)",
          "Color Palette Selection",
          "Typography System",
          "Files: PNG, JPG, SVG/AI",
          "Logo Mockup",
          "Timeline: 1-3 Days",
        ],
        recommended: false,
      },
      {
        plan: "Medium",
        price: "₹9,999",
        features: [
          "Primary Logo Design (3 Concepts)",
          "Color Palette Selection",
          "Stationery Suite (Card, Letterhead)",
          "Typography System",
          "Files: PNG, JPG, SVG/AI",
          "Logo Mockups",
          "Timeline: 4-6 Days",
        ],
        recommended: true,
      },
      {
        plan: "Premium",
        price: "₹14,999",
        features: [
          "Primary Logo Design (3 Concepts)",
          "Color Palette Selection",
          "Stationery Suite",
          "Typography System",
          "Logo Animation (Basic)",
          "Brand Guidelines (Rulebook)",
          "Files: PNG, JPG, SVG/AI",
          "Timeline: 7-10 Days",
        ],
        recommended: false,
      },
    ],
    outroText:
      "Your brand is your promise to your customer. Let us help you package that promise into an unforgettable identity.",

    // ✅ NEW: Branding NB Section based on the PDF
    nb: (
      <span className="text-zinc-400 text-sm">
        <strong className="text-white">Note:</strong> The starting price for the
        Logo & Color Palette package is{" "}
        <span className="text-[#dbe11d] font-bold">₹2,499/-</span>. This fee
        covers the design only.
      </span>
    ),

    // ✅ NEW: Branding Terms & Privacy Section
    termsAndConditions: (
      <div className="mt-12 space-y-8 bg-zinc-900/50 p-6 md:p-10 rounded-2xl border border-white/5">
        <h3 className="text-3xl font-black text-[#dbe11d] mb-6">
          Terms of Service & Privacy
        </h3>

        {/* Jurisdiction */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Jurisdiction
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                All branding services and agreements are governed by the laws of
                the state of Kerala, India.
              </span>
            </li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Payment Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Advance Payment:</strong> 50% of
                the package price is required to start the design process.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Final Payment:</strong> The
                remaining 50% must be paid before the final high-resolution and
                vector files are delivered.
              </span>
            </li>
          </ul>
        </div>

        {/* Project Terms */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Project Terms
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Ownership:</strong> Full
                copyright ownership of the final chosen logo is transferred to
                the client only after full payment.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Revisions:</strong> Each package
                includes up to 3 rounds of minor revisions. Major concept
                changes after approval will be billed extra.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Client Input:</strong> Design
                timelines start once the client provides the completed brand
                questionnaire or brief.
              </span>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <span className="inline-block bg-white text-black font-semibold px-4 py-1.5 mb-3 text-sm">
            Privacy Policy
          </span>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Confidentiality:</strong> Zaynlo
                protects all client business ideas and internal documents shared
                during the branding process.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#dbe11d] mt-1">✔</span>
              <span className="text-zinc-300">
                <strong className="text-white">Data Security:</strong> Your
                contact information and project files are stored securely and
                will never be shared with third parties.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];
