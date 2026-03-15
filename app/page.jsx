import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import BookingForm from "./components/BookingForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import banners from "./promoBanners.json";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundImage:
          'url("https://images.hertz.com/content/Intl/1920x900_Hero_Banner/Homepage_asia_33.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/10 min-h-screen">
        <Navbar />
        {/* Hero Banner */}
        <section className="relative w-full h-[120vh]">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center ">
            <p className="text-sm uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Car rental made easy
            </p>
            <h1 className="text-2xl sm:text-5xl text-white drop-shadow-lg max-w-3xl">
              Bunny Rental Car. Let’s Go!
            </h1>
            <div className="max-w-7xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Promo Banners Section */}
        <div className="bg-white py-10">
          <div className="max-w-7xl mx-auto px-4">
            <PromoBanner banners={banners} />
          </div>
        </div>

        {/* Sign Up Form Section */}
        <SignUpForm />

        {/* Optionally, add a car image at the bottom left for effect */}
        {/* <div className="absolute left-0 bottom-0 w-1/3 max-w-xs hidden sm:block">
        <img src="/assets/car-side.svg" alt="Car" className="w-full h-auto" />
      </div> */}
        <Footer />
      </div>
    </div>
  );
}
