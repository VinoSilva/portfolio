// Import types
import type { ProjectCardProps } from "./ProjectCard";

// Import components
import ProjectCard from "./ProjectCard";

const portfolios: ProjectCardProps[] = [
  {
    imgSrc: "/images/portfolios/kodecrew/main-dashboard-page.webp",
    name: "KodeCrew",
    description:
      "Worked as a frontend developer for Kodecrew, building a custom dashboard to track real-time team performance and feedback.",
  },
  {
    imgSrc: "/images/portfolios/drakkar/Drakkar.webp",
    name: "Drivalia",
    description:
      "Built a vehicle management platform for Drivalia, enabling streamlined handling of quotations, fleet equipment, and overall vehicle operations.",
  },
  {
    imgSrc: "/images/portfolios/kodecure/kodecure.webp",
    name: "KodeCure",
    description:
      "Developed the Kodecure platform, implementing a responsive frontend and integrating APIs to deliver personalized supplement recommendations for improved health and longevity.",
  },
  {
    imgSrc: "/images/portfolios/aarsleff/Aarsleff.webp",
    name: "Aarsleff",
    description:
      "Developed a frontend dashboard for Aarsleff, enabling construction project scheduling, resource allocation, and streamlined management.",
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Projects<span className="text-primary">.</span>
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {portfolios.map((props) => {
            return (
              <div key={props.name}>
                <ProjectCard {...props} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
