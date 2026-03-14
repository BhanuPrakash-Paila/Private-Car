export default function SearchForm() {
  return (
    <div className="relative max-w-5xl mx-auto -mt-20 z-20">
      <form className="bg-white rounded-xl shadow-lg px-6 py-6 flex flex-col sm:flex-row items-center gap-4 border-t-4 border-yellow-400">
        <select className="rounded border px-3 py-2 text-base text-zinc-700 bg-white">
          <option>Same Drop-off Location</option>
          <option>Different Drop-off Location</option>
        </select>
        <a href="#" className="text-blue-700 font-medium ml-2">Add a Discount Code</a>
        <input type="text" placeholder="Pick-up Location" className="flex-1 rounded border px-3 py-2 text-base font-medium bg-zinc-50" />
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-zinc-500 mb-1">Pick-up Date</label>
          <input type="date" className="rounded border px-2 py-1" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-zinc-500 mb-1">Pick-up Time</label>
          <input type="time" className="rounded border px-2 py-1" defaultValue="00:00" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-zinc-500 mb-1">Drop-off Date</label>
          <input type="date" className="rounded border px-2 py-1" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-semibold text-zinc-500 mb-1">Drop-off Time</label>
          <input type="time" className="rounded border px-2 py-1" defaultValue="00:00" />
        </div>
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded transition-colors text-lg ml-2">View Vehicles</button>
      </form>
      <div className="flex justify-end mt-2 pr-2">
        <a href="#" className="text-blue-700 font-medium">View / Edit / Cancel</a>
      </div>
    </div>
  );
}
