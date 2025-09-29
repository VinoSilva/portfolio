// Import components
import ExperiencesSection from "@components/Home/ExperiencesSection";
import Hero from "@components/Home/Hero";
import ProjectsSection from "@components/Home/ProjectsSection";
import SkillsSection from "@components/Home/SkillsSection";
import StorySection from "@components/Home/StorySection";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-40" />
      <ProjectsSection />
      <div className="mt-40" />
      <ExperiencesSection />
      <div className="mt-40" />
      <SkillsSection />
      <div className="mt-40" />
      <StorySection />
    </div>
  );
};

export default Home;
