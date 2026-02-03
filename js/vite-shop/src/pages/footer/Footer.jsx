import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-center">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyLogo. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;