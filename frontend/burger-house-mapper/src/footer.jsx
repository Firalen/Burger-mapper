import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-rose-600 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Burger House Mapper is your go-to platform for discovering the best places to visit in Adama, Ethiopia. From cozy cafes to scenic parks, we help you find the perfect spot for any occasion.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About 
                </a>
              </li>
              <li>
                <a href="/places" className="hover:underline">
                  Places to Visit
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">
              Email: <a href="mailto:info@burgerhousemapper.com" className="hover:underline">info@burgerhousemapper.com</a>
            </p>
            <p className="text-sm mt-2">
              Phone: <a href="tel:+251123456789" className="hover:underline">+251 123 456 789</a>
            </p>
            <p className="text-sm mt-2">
              Address: Adama, Ethiopia
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-rose-500 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Burger House Mapper. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ in Adama, Ethiopia.
          </p>
        </div>
      </div>
    </footer>
  );
}