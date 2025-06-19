import Header from "../components/Header";
import Summary from "../components/Summary";
import SoftSkills from "../components/SoftSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        <main>
          <Summary />
          <SoftSkills />
          <Experience />
          <Education />
        </main>
        <Sidebar />
      </div>
    </div>
  );
}
