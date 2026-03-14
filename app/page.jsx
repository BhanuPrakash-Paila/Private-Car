
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import BookingForm from "./components/BookingForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import banners from "./promoBanners.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />
      {/* Hero Banner */}
      <div
        className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/mountain-road.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-4xl sm:text-5xl font-bold text-white drop-shadow-lg text-center">
          Bunny Rental Car. Let’s Go!
        </h1>
      </div>

      {/* Booking Form */}
      <BookingForm />


      {/* Promo Banners Section */}
      <PromoBanner banners={banners} />

      {/* Sign Up Form Section */}
      <SignUpForm />

      {/* Optionally, add a car image at the bottom left for effect */}
      <div className="absolute left-0 bottom-0 w-1/3 max-w-xs hidden sm:block">
        <img src="/car-side.png" alt="Car" className="w-full h-auto" />
      </div>
      <Footer />
    </div>
  );
}
