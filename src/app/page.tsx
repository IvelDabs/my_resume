import Header from "../components/Header";
import Summary from "../components/Summary";
import TechnicalSkills from "../components/TechnicalSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import SoftSkills from "../components/SoftSkills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Main Content */}
      <main className="w-full md:w-2/3 p-6 md:p-10 bg-white min-h-screen">
        <Summary />
        <Experience />
        <Education />
        <TechnicalSkills />
        <Certifications />
      </main>

      {/* Right Section - Profile and Contact */}
      <aside className="w-full md:w-1/3 bg-[#1e3a5f] text-white p-6 md:p-10 flex flex-col items-center min-h-screen">
        <Header />
        <div className="w-full max-w-xs mt-8">
          <SoftSkills />
        </div>
      </aside>
    </div>
  );
}
