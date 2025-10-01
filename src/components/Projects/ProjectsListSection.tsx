// Import libraries
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";

// Import data
import PORTFOLIOS from "@data/portfolios";

// Import constants
import { techs } from "@constants/techs";

// Components
import ProjectDivider from "./ProjectDivider";
import Tag from "@components/shared/Tag";
import Button from "@components/shared/Button";
import AutocompleteInput from "@components/shared/AutocompleteInput";

// 🔹 SearchBar Component
const SearchBar = ({ onSearch }: { onSearch: (val: string) => void }) => {
  const suggestions = Object.values(techs);

  return (
    <AutocompleteInput
      suggestions={suggestions}
      placeholder="Search"
      onChange={onSearch}
    />
  );
};

// 🔹 ProjectCard Component
interface ProjectCardProps {
  name: string;
  thumbnail: string;
  description: string;
  link?: string;
  result: string;
  categories: string[];
  year: string;
  company: string;
  techs: string[];
  showDivider: boolean;
}

const ProjectCard = ({
  name,
  thumbnail,
  description,
  link,
  result,
  categories,
  year,
  company,
  techs,
  showDivider,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 px-4 md:p-0">
      <div className="flex flex-col justify-center items-center md:flex-row gap-5 md:gap-20">
        {/* Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="font-poppins font-bold text-lg md:text-3xl">{name}</h2>
          <span className="text-primary font-bold text-sm md:text-base">
            {company} {year}
          </span>

          {/* Tags */}
          <div className="flex gap-2 md:gap-4 mt-2 md:mt-5 flex-wrap">
            {[...categories, ...techs].map((val, idx) => (
              <Tag key={`${name}-tag-${idx}`}>{val}</Tag>
            ))}
          </div>

          {/* Description */}
          <p className="text-base md:text-xl mt-2 md:mt-3">{description}</p>
          <p className="text-gray-700 text-sm md:text-base font-montserrat mt-2">
            {result}
          </p>

          {/* Link / fallback */}
          {link ? (
            <div className="mt-4">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <Button variant="secondary" size="sm">
                  View Project <FaArrowUpRightFromSquare />
                </Button>
              </a>
            </div>
          ) : (
            <span className="text-red-500 font-semibold text-xs md:text-sm">
              This is a private dashboard, so no public link is available.
            </span>
          )}
        </div>

        {/* Thumbnail */}
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src={thumbnail}
            alt={name}
            className="w-full mx-auto h-auto shadow-primary"
          />
        </div>
      </div>

      {/* Divider */}
      {showDivider && <ProjectDivider />}
    </div>
  );
};

// 🔹 Main ProjectsListSection
const ProjectsListSection = () => {
  const [projects, setProjects] = useState(PORTFOLIOS);

  const handleSearch = (searchVal: string) => {
    const normalized = searchVal.toLowerCase();

    const filtered = PORTFOLIOS.filter(({ categories, techs }) => {
      if (!normalized.trim()) return true;

      const values = [...categories, ...techs].map((v) => v.toLowerCase());
      return values.some((val) => val.includes(normalized));
    });

    setProjects(filtered);
  };

  return (
    <div>
      {/* Search */}
      <div className="flex justify-center mb-20 max-w-md mx-auto">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-10 md:gap-20">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.name}
            {...project}
            showDivider={idx !== projects.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListSection;
