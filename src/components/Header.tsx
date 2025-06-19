import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <header className="text-center text-white">
      <div className="mb-8">
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
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
        <h1 className="text-3xl font-bold mb-2">Riley Nelson</h1>
        <h2 className="text-xl mb-6">
          Senior Software Engineer | Cybersecurity | Software Architecture
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>San Antonio, Texas</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:riley@thedev.com" className="hover:text-blue-200">
              riley@thedev.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>+1(256)-555-1234</span>
          </div>
          <div className="flex items-center gap-2">
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
</div>;

export default Header;
