import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:bg-amber-500 focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300"
    >
      Skip to Main Content
    </a>
  );
};
