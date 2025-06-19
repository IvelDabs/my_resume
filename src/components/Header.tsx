import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <header className="text-center py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
          <div className="mb-6 md:mb-0">
            <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white/10 border-4 border-white/20">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Daberechi Levi Nwachukwu
            </h1>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="daberelvi@gmail.com" className="hover:text-blue-200">
                  daberelvi@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">☎️</span>
                <span>+2348152445691</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6 mt-4 text-sm">
              <a
                href="https://github.com/IvelDabs"
                className="hover:text-blue-200 flex items-center"
              >
                <span className="mr-2">🔗</span>GitHub
              </a>
              <a
                href="https://my-portfolio-website-eight-fawn.vercel.app/"
                className="hover:text-blue-200 flex items-center"
              >
                <span className="mr-2">🔗</span>Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/nd-levi/"
                className="hover:text-blue-200 flex items-center"
              >
                <span className="mr-2">🔗</span>LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
