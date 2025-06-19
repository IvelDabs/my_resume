import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-white w-full">
      <div className="mb-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mx-auto">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-1 tracking-tight">
          Riley Nelson
        </h1>
        <h2 className="text-lg md:text-xl mb-4 font-medium opacity-90">
          Senior Software Engineer | Cybersecurity | Software Architecture
        </h2>
        <div className="space-y-2 text-sm opacity-90">
          <div className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span>San Antonio, Texas</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📧</span>
            <a href="mailto:riley@thedev.com" className="hover:text-blue-200">
              riley@thedev.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📱</span>
            <span>+1(256)-555-1234</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🔗</span>
            <a href="https://linkedin.com" className="hover:text-blue-200">
              linkedin.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
