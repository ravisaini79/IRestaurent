import React from "react";
import { useParams } from "react-router-dom";
import DemoForm from "./DemoForm";

export default function RestaurantTypePage() {
  const { type } = useParams(); // get URL type

  const types = {
    bar: {
      title: "Bar Management Software",
      desc: "iRestaurant helps bars manage billing, inventory, menu engineering, liquor tracking, waiter orders, and reports — all in real time.",
      features: [
        "Fast POS for bar counters",
        "Liquor stock & bottle-level tracking",
        "Happy hour pricing automation",
        "Waiter ordering app",
        "KOT & table-wise management",
        "Reports: sales, pour cost, wastage"
      ],
      img: "/types/bar.png"
    },

    cafe: {
      title: "Cafe Management Software",
      desc: "Perfect for cafés with fast billing, recipe costing, quick menu updates, customer loyalty, and online order integration.",
      features: [
        "Super-fast POS for peak hours",
        "Add-ons & customization options",
        "Recipe & inventory management",
        "Auto-sync Zomato/Swiggy orders",
        "Customer loyalty program",
        "Live daily business dashboard"
      ],
      img: "/types/Cafe.png"
    },

    "cloud-kitchen": {
      title: "Cloud Kitchen Management Software",
      desc: "Centralized software for cloud kitchens with automated order processing and complete kitchen workflow optimization.",
      features: [
        "Auto-accept online orders",
        "Kitchen Display System (KDS)",
        "Multiple virtual brand management",
        "Food costing & recipe control",
        "Inventory alerts & purchase ordering",
        "Live order tracking panel"
      ],
      img: "/types/cloudKit.png"
    },

    enterprise: {
      title: "Enterprise & Multi-Outlet Software",
      desc: "Built for large chains with centralized control, multi-outlet inventory, real-time reporting, and unified recipe management.",
      features: [
        "Outlet-to-outlet stock transfer",
        "Central kitchen operations",
        "Master recipe & menu management",
        "Role-based user permissions",
        "Real-time outlet performance",
        "CEO dashboard (Mobile view)"
      ],
      img: "/types/enterpngse.jpg"
    },

    "dine-in": {
      title: "Dine-In Restaurant Software",
      desc: "Manage tables, captain orders, KOT routing, customer experience, and billing effortlessly in dine-in restaurants.",
      features: [
        "Interactive table & floor layout",
        "Captain ordering app (Offline mode)",
        "Multi-zone KOT routing",
        "Split/merge bills",
        "Advanced CRM & loyalty",
        "Menu customization & combo offers"
      ],
      img: "/types/dinein.png"
    },

    qsr: {
      title: "QSR (Quick Service Restaurant) Software",
      desc: "Lightning-fast POS designed for quick service restaurants with token display, combos, and online order automation.",
      features: [
        "3-click fastest POS billing",
        "Token & queue display system",
        "Combo meals & upsell suggestions",
        "Swiggy/Zomato auto-sync",
        "Inventory & wastage control",
        "Detailed daily reports & analytics"
      ],
      img: "/types/qsr.jpng"
    }
  };

  const data = types[type];

  // If wrong type
  if (!data)
    return <h1 className="text-center text-3xl p-20">Invalid Restaurant Type</h1>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">

      {/* TOP DYNAMIC HERO SECTION */}
      <section className="backg text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="text-green-900">{data.title}</span>
            </h1>

            <p className="text-white/90 mt-4 text-lg bg-gray-600/50 p-4 rounded-lg max-w-3xl mx-auto">
              {data.desc}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 md:px-0 mt-16">
        
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            {data.desc}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={data.img}
            className="rounded-xl shadow-lg w-full max-w-md"
            alt={data.title}
          />
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-5xl mx-auto mt-14 px-6 md:px-0 mb-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Key Features Designed For {data.title}
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.features.map((item, index) => (
            <li key={index} className="flex items-start space-x-3 text-gray-700">
              <span className="text-green-600 text-xl">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
<DemoForm/>
    </div>
  );
}
