import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-yellow-400 shadow-sm flex items-center justify-between px-8 py-3">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-black">Bunny</span>
      </div>
      <ul className="flex gap-6 text-base font-medium text-black">
        <li><Link href="#">Reservations</Link></li>
        <li><Link href="#">Special Offers</Link></li>
        <li><Link href="#">Locations</Link></li>
        <li><Link href="#">Vehicles</Link></li>
        <li><Link href="#">Product & Services</Link></li>
        <li><Link href="#">Chauffeur Drive</Link></li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="text-yellow-500 font-bold">EN/IN</button>
        <Link href="#" className="text-black font-semibold">Login/Sign-Up</Link>
      </div>
    </nav>
  );
}
