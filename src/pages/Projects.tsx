import ProjectsHeroSetion from "@components/Projects/ProjectsHeroSetion";
import ProjectsListSection from "@components/Projects/ProjectsListSection";

const Projects = () => {
  return (
    <div>
      <ProjectsHeroSetion />
      <div className="mt-10 md:mt-20">
        <ProjectsListSection />
      </div>
    </div>
  );
};

export default Projects;
