import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-rose-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Adama Date Place. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made with ❤️ in Adama, Ethiopia.
        </p>
        <div className="flex flex-col justify-center space-x-4 mt-4">
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}