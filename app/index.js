import Navbar from "./Navbar";
import HeroBanner from "./HeroBanner";
import SearchForm from "./SearchForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />
      <HeroBanner />
      <SearchForm />
      {/* Optionally, add a car image at the bottom left for effect */}
      <div className="absolute left-0 bottom-0 w-1/3 max-w-xs hidden sm:block">
        <img src="/assets/car-side.svg" alt="Car" className="w-full h-auto" />
      </div>
    </div>
  );
}
