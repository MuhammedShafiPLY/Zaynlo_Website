import React from "react";

const locations = [
  "Kochi", "Trivandrum", "Calicut (Kozhikode)", "Thrissur", "Malappuram", 
  "Kannur", "Kottayam", "Alappuzha", "Palakkad", "Dubai (UAE)"
];

const SEOLocations = () => {
  return (
    <section className="py-16 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-zinc-500">
          Serving Clients Across <span className="text-white">Kerala & Beyond</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {locations.map((loc, index) => (
            <span 
              key={index} 
              className="px-6 py-2 rounded-full border border-zinc-800 text-zinc-400 text-sm hover:border-lime-400 hover:text-lime-400 transition-colors cursor-default"
            >
              {loc}
            </span>
          ))}
        </div>
        
        <p className="mt-8 text-zinc-600 text-xs max-w-2xl mx-auto">
          Zaynlo provides premium digital marketing services to businesses in all 14 districts of Kerala and expanding globally to the Middle East.
        </p>
      </div>
    </section>
  );
};

export default SEOLocations;