
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-5xl px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-zinc-50 mb-4">Find Your Perfect Ride</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl">
            Rent a car for any occasion. Choose from a wide range of vehicles at affordable prices. Easy booking, flexible pick-up, and 24/7 support.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
            <input
              type="text"
              placeholder="Pick-up Location"
              className="flex-1 rounded-lg border border-zinc-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="rounded-lg border border-zinc-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="rounded-lg border border-zinc-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Search Cars
            </button>
          </form>
        </section>

        {/* Featured Cars Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-8 text-center">Featured Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
              <Image src="/car1.jpg" alt="Sedan" width={220} height={120} className="rounded-lg mb-4 object-cover" />
              <h3 className="text-lg font-bold mb-2 text-black dark:text-zinc-50">Toyota Camry</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-2">Sedan • Automatic • 2023</p>
              <span className="text-blue-600 font-semibold text-xl">$45/day</span>
            </div>
            {/* Car 2 */}
            <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
              <Image src="/car2.jpg" alt="SUV" width={220} height={120} className="rounded-lg mb-4 object-cover" />
              <h3 className="text-lg font-bold mb-2 text-black dark:text-zinc-50">Honda CR-V</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-2">SUV • Automatic • 2022</p>
              <span className="text-blue-600 font-semibold text-xl">$60/day</span>
            </div>
            {/* Car 3 */}
            <div className="rounded-xl bg-white dark:bg-zinc-900 shadow p-6 flex flex-col items-center">
              <Image src="/car3.jpg" alt="Convertible" width={220} height={120} className="rounded-lg mb-4 object-cover" />
              <h3 className="text-lg font-bold mb-2 text-black dark:text-zinc-50">Mazda MX-5</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-2">Convertible • Manual • 2021</p>
              <span className="text-blue-600 font-semibold text-xl">$80/day</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
