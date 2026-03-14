import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 pt-8 pb-4 mt-12 border-t border-zinc-200 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* Social Icons */}
          <div className="flex gap-4 items-start w-full md:w-auto mb-4 md:mb-0">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-3xl text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl text-black" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-3xl text-black" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-3xl text-black" />
            </a>
          </div>
          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full text-black">
            <div>
              <h3 className="font-bold mb-2 text-black">Hertz.com</h3>
              <ul className="space-y-1 text-sm">
                <li>Reservations</li>
                <li>Special Offers</li>
                <li>Locations</li>
                <li>Vehicle Guide</li>
                <li>Products & Services</li>
                  <li>Bunny Gold Plus Rewards</li>
                <li>Site Map</li>
              </ul>
              <h4 className="font-bold mt-4 mb-1 text-black">
                Online Check In
              </h4>
              <ul className="space-y-1 text-sm">
                <li>Online Check In</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">About Hertz</h3>
              <ul className="space-y-1 text-sm">
                <li>Investor Relations</li>
                <li>Careers</li>
                <li>Press Room</li>
                <li>Terms of Use</li>
                </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">
                Car Rental Services in India
              </h3>
              <ul className="space-y-1 text-sm">
                <li>Chauffeur Drive</li>
                <li>Leasing</li>
                <li>Special Events</li>
              </ul>
              <h4 className="font-bold mt-4 mb-1 text-black">Partners</h4>
              <ul className="space-y-1 text-sm">
                <li>Air Partners</li>
                <li>Rail Partners</li>
                <li>Hotel Partners</li>
                <li>Travel Partners</li>
                <li>Service Partners</li>
                <li>Auto Collision Rental Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Driving Guides</h3>
              <ul className="space-y-1 text-sm">
                <li>Driving guide videos for Australia and New Zealand</li>
                <li>Safe Driving in Australia</li>
                <li>Driving tips videos for Europe and USA</li>
                <li>Left & Right Hand Driving Matrix</li>
                <li>General Self-drive Tips & Itineraries</li>
                <li>Asia Driving Guide</li>
                <li>Australia Driving Guide</li>
                <li>Car Pickup at Perth Airport</li>
                <li>New Zealand Self-drive Tips</li>
                <li>Switzerland Driving Guide</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Featured Products</h3>
              <ul className="space-y-1 text-sm">
                <li>Hertz Collections</li>
                  <li>Bunny Collections</li>
                  <li>Bunny Connect</li>
              </ul>
              <h4 className="font-bold mt-4 mb-1 text-black">
                Business to Business
              </h4>
              <ul className="space-y-1 text-sm">
                <li>Franchise Opportunities</li>
              </ul>
              <h4 className="font-bold mt-4 mb-1 text-black">Travel Agents</h4>
              <ul className="space-y-1 text-sm">
                <li>Login</li>
                <li>GDS Tools</li>
                <li>Travel Agent Contacts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Customer Support</h3>
              <ul className="space-y-1 text-sm">
                <li>Contact Us</li>
                <li>Car Rental Locations</li>
                <li>Rental Cars</li>
                <li>Frequent Traveler Credit</li>
                <li>Request a Receipt</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-black mt-8">
          <div className="mb-2">© 2026 The Hertz Corporation.</div>
          <div>
              Bunny is committed to your privacy. For details, please read our {" "}
            <a href="#" className="text-blue-700 underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-blue-700 underline">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
