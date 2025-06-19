import Header from "../components/Header";
import Summary from "../components/Summary";
import TechnicalSkills from "../components/TechnicalSkills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import SoftSkills from "../components/SoftSkills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Summary />
        <TechnicalSkills />
        <SoftSkills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
      </main>
    </div>
  );
}
