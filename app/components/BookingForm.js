import React from "react";

export default function BookingForm() {
  return (
    <div className="relative max-w-7xl mx-auto -mt-24 z-20 w-full px-4">
      <form className="bg-white rounded-xl shadow-lg px-8 py-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-yellow-400 w-full">
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">&nbsp;</label>
          <select className="rounded border px-3 py-2 text-base text-zinc-700 bg-white w-full">
            <option>Same Drop-off Location</option>
            <option>Different Drop-off Location</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">Pick-up Location</label>
          <input type="text" placeholder="Pick-up Location" className="rounded border px-3 py-2 text-base font-medium bg-zinc-50 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">Pick-up Date</label>
          <input type="date" className="rounded border px-3 py-2 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">Pick-up Time</label>
          <input type="time" className="rounded border px-3 py-2 w-full" defaultValue="00:00" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">Drop-off Date</label>
          <input type="date" className="rounded border px-3 py-2 w-full" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px]">
          <label className="font-semibold text-zinc-700 mb-1">Drop-off Time</label>
          <input type="time" className="rounded border px-3 py-2 w-full" defaultValue="00:00" />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/5 min-w-[200px] items-center justify-end">
          <label className="font-semibold text-zinc-700 mb-1">&nbsp;</label>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-3 rounded transition-colors text-lg w-full md:w-auto">View Vehicles</button>
        </div>
      </form>
      <div className="flex justify-between mt-2 px-2 text-base font-medium">
        <div>
          <a href="#" className="text-blue-700 font-semibold mr-4">Add a Discount Code</a>
          <span className="inline-block align-middle text-zinc-400 cursor-pointer" title="Enter your discount code if you have one.">i</span>
        </div>
        <a href="#" className="text-blue-700 font-semibold">View / Edit / Cancel</a>
      </div>
    </div>
  );
}
