import Header from "../components/Header";
import Summary from "../components/Summary";
import TechnicalSkills from "../components/TechnicalSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import SoftSkills from "../components/SoftSkills";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Main Content */}
      <main className="w-2/3 p-8 bg-white">
        <Summary />
        <Experience />
        <Education />
        <TechnicalSkills />
        {/* <Projects /> */}
        <Certifications />
      </main>

      {/* Right Section - Profile and Contact */}
      <aside className="w-1/3 bg-[#1e3a5f] text-white p-8">
        <Header />
        <SoftSkills />
      </aside>
    </div>
  );
}
