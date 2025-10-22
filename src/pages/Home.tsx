// Import components
// import CertificatesSection from "@components/Home/CertificatesSection";
import ExperiencesSection from "@components/Home/ExperiencesSection";
import Hero from "@components/Home/Hero";
import ProjectsSection from "@components/Home/ProjectsSection";
import SkillsSection from "@components/Home/SkillsSection";
import StorySection from "@components/Home/StorySection";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <ProjectsSection />
      <ExperiencesSection />
      <SkillsSection />
      {/* <CertificatesSection /> */}
      <StorySection />
    </div>
  );
};

export default Home;
