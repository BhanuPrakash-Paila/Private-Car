export default function HeroBanner() {
  return (
    <div className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/assets/city-street.svg")' }}>
      <div className="absolute inset-0 bg-black/30" />
      <h1 className="relative z-10 text-4xl sm:text-5xl font-bold text-white drop-shadow-lg text-center">Bunny Rental Car. Let’s Go!</h1>
    </div>
  );
}
