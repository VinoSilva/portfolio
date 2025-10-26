// Import libraries
import { useNavigate } from "react-router-dom";

// Import types
import type { ProjectCardProps } from "./HomeProjectCard";

// Import components
import HomeProjectCard from "./HomeProjectCard";

// Import constants
import routes from "@constants/route";

const portfolios: ProjectCardProps[] = [
  {
    imgSrc: "/images/portfolios/kodecrew/main-dashboard-page.webp",
    name: "KodeCrew",
    description:
      "Worked as a frontend developer for Kodecrew, building a custom dashboard to track real-time team performance and feedback.",
    id: "12",
  },
  {
    imgSrc: "/images/portfolios/drakkar/Drakkar.webp",
    name: "Drivalia",
    description:
      "Built a vehicle management platform for Drivalia, enabling streamlined handling of quotations, fleet equipment, and overall vehicle operations.",
    id: "13",
  },
  {
    imgSrc: "/images/portfolios/kodecure/kodecure.webp",
    name: "KodeCure",
    description:
      "Developed the Kodecure platform, implementing a responsive frontend and integrating APIs to deliver personalized supplement recommendations for improved health and longevity.",
    id: "20",
  },
  {
    imgSrc: "/images/portfolios/aarsleff/Aarsleff.webp",
    name: "Aarsleff",
    description:
      "Developed a frontend dashboard for Aarsleff, enabling construction project scheduling, resource allocation, and streamlined management.",
    id: "11",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Projects<span className="text-primary">.</span>
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {portfolios.map((props) => {
            const { id } = props;

            return (
              <div key={id}>
                <HomeProjectCard
                  onClick={() => {
                    navigate(routes.project.replace(":id", id));
                  }}
                  {...props}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
