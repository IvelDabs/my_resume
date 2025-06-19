import React from "react";
import Image from "next/image";
import "../app/header-bio.css";

const taglines = [
  "Innovating Secure, Scalable Solutions for the Modern Web",
  "Full Stack Developer | Cloud & DevOps Enthusiast | Cybersecurity Advocate",
  "Transforming Ideas into Robust Digital Experiences",
];

const Header = () => {
  return (
    <header className="header-bio">
      <div className="header-bio-inner">
        <div className="header-bio-img-wrap">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="header-bio-img"
            priority
          />
        </div>
        <div className="header-bio-info">
          <h1 className="header-bio-name">Daberechi Levi Nwachukwu</h1>
          <div className="header-bio-title">
            Senior Software Engineer | Cybersecurity | Software Architecture
          </div>
          <ul className="header-bio-taglines">
            {taglines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <div className="header-bio-contacts">
            <span>📍 Lagos State, Nigeria</span>
            <span>•</span>
            <a href="mailto:daberelvi@gmail.com">📧 daberelvi@gmail.com</a>
            <span>•</span>
            <span>☎️ +2348152445691</span>
          </div>
          <div className="header-bio-links">
            <a href="https://github.com/IvelDabs">GitHub</a>
            <a href="https://my-portfolio-website-eight-fawn.vercel.app/">
              Portfolio
            </a>
            <a href="https://www.linkedin.com/in/nd-levi/">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
