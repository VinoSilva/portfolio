// Import libraries
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";

// Import data
import PORTFOLIOS from "@data/portfolios";

// Import components
import ProjectDivider from "./ProjectDivider";

// Import components
import Tag from "@components/shared/Tag";
import Button from "@components/shared/Button";
import AutocompleteInput from "@components/shared/AutocompleteInput";

// Import constants
import { techs } from "@constants/techs";

const ProjectsListSection = () => {
  const [projects, setProjects] = useState(PORTFOLIOS);

  const renderAutocompleteInput = () => {
    const suggestions: string[] = [];

    Object.values(techs).forEach((val) => {
      suggestions.push(val);
    });

    return (
      <AutocompleteInput
        onChange={(searchVal) => {
          const tempProjects = PORTFOLIOS.filter(({ categories, techs }) => {
            if (searchVal.trim()) {
              const searchValues = [...categories, ...techs].map((el) =>
                el.toLowerCase()
              );

              return searchValues.some((val) =>
                val.includes(searchVal.toLowerCase())
              );
            }
            return true;
          });

          setProjects(tempProjects);
        }}
        suggestions={suggestions}
        placeholder="Search"
      />
    );
  };

  return (
    <div>
      <div className="flex justify-center mb-20">
        {renderAutocompleteInput()}
      </div>
      <div className="flex flex-col gap-20">
        {projects.map(
          (
            {
              name,
              thumbnail,
              description,
              link,
              result,
              categories,
              year,
              company,
              techs,
            },
            idx,
            arr
          ) => {
            const showDivider = idx !== arr.length - 1;

            const hasLink = !!link;

            return (
              <div className="flex flex-col gap-20">
                <div className="flex flex-col md:flex-row gap-20">
                  <div className="w-1/2">
                    <h2 className="font-poppins font-bold text-3xl">{name}</h2>
                    <span className="text-primary font-bold">
                      {company} {year}
                    </span>
                    <div className="flex gap-4 mt-5 flex-wrap">
                      {[...categories, ...techs].map((val) => {
                        return <Tag>{val}</Tag>;
                      })}
                    </div>
                    <p className="text-xl mt-3">{description}</p>
                    <p className="text-gray-700 font-montserrat mt-2">
                      {result}
                    </p>
                    {hasLink ? (
                      <div className="mt-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={link}
                        >
                          <Button variant="secondary">
                            View Project <FaArrowUpRightFromSquare />
                          </Button>
                        </a>
                      </div>
                    ) : (
                      <span className="text-red-500 font-semibold text-sm">
                        This is a private dashboard, so no public link is
                        available.{" "}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 flex items-center">
                    <img
                      src={thumbnail}
                      alt={name}
                      className="w-full mx-auto h-auto  shadow-primary"
                    />
                  </div>
                </div>
                {showDivider ? <ProjectDivider /> : <></>}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProjectsListSection;
