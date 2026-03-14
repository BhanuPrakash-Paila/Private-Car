import React from "react";

export default function PromoBanner({ banners }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-12 py-12">
      {banners.map((banner, idx) => (
        <div key={idx} className="w-[340px] bg-white rounded-lg shadow border overflow-hidden flex flex-col">
          <div className="h-[180px] w-full overflow-hidden">
            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
          </div>
          {banner.ribbon && (
            <div className="bg-yellow-400 text-black font-bold text-center py-1 text-sm tracking-widest">
              {banner.ribbon}
            </div>
          )}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-1">{banner.title}</h3>
            <p className="text-zinc-700 mb-4">{banner.subtitle}</p>
            <button className="bg-black text-white rounded-full px-6 py-2 font-semibold w-fit mb-2 hover:bg-zinc-800 transition">{banner.buttonText}</button>
            <span className="text-xs text-zinc-400 mt-auto">*T&Cs apply.</span>
          </div>
        </div>
      ))}
    </div>
  );
}
