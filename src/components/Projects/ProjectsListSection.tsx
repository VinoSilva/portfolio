// Import libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import data
import PORTFOLIOS from "@data/portfolios";

// Import constants
import { techs } from "@constants/techs";
import routes from "@constants/route";

// Components
import AutocompleteInput from "@components/shared/AutocompleteInput";
import ProjectsCardProject from "./ProjectsCardProject";

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

// 🔹 Main ProjectsListSection
const ProjectsListSection = () => {
  const navigate = useNavigate();

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

      {/* <div className="mb-10 font-semibold text-3xl text-center">
        <span className=" text-primary">{PORTFOLIOS.length}</span>
        {"  "}
        Projects.
      </div> */}

      {/* Project list */}
      <div className="flex flex-col gap-10 md:gap-20">
        {projects.map((project, idx) => (
          <ProjectsCardProject
            key={project.name}
            {...project}
            showDivider={idx !== projects.length - 1}
            onClick={() => {
              navigate(routes.project.replace(":id", project.id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsListSection;
