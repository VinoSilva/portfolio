// Import components
import Tag from "@components/shared/Tag";
import Button from "@components/shared/Button";
import ProjectDivider from "./ProjectDivider";

// Import libraries
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { type JSX } from "react";

interface ProjectsCardProjectProps {
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
  source?: string;
  backend?: boolean;
  onClick?: () => void;
}

const ProjectsCardProject = ({
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
  source,
  backend,
  onClick,
}: ProjectsCardProjectProps) => {
  const renderLinks = () => {
    const canRenderViewMore = !!onClick;

    const arr: JSX.Element[] = [];

    if (link) {
      arr.push(
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <Button variant="secondary" size="sm">
            View Project <FaArrowUpRightFromSquare />
          </Button>
        </a>
      );
    }

    if (source) {
      arr.push(
        <a target="_blank" rel="noopener noferrer" href={source}>
          <Button variant="secondary" size="sm">
            View Source Code
            <FaArrowUpRightFromSquare />
          </Button>
        </a>
      );
    }

    return (
      <>
        <div className="mt-4 flex gap-4">
          {arr}
          {
            <Button
              style={{ display: canRenderViewMore ? "initial" : "none" }}
              variant="secondary"
              onClick={onClick}
              size="sm"
            >
              More Details
            </Button>
          }
        </div>
        {!link && !backend ? (
          <div className="mt-2">
            <span className="text-red-500 font-semibold text-xs md:text-sm ">
              This is a private dashboard, so no public link is available.
            </span>
          </div>
        ) : (
          <></>
        )}
        {!link && backend ? (
          <div className="mt-2">
            <span className="text-red-500 font-semibold text-xs md:text-sm ">
              This is a backend only project, so no public link or image is
              available.
            </span>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

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

          {renderLinks()}
        </div>

        {/* Thumbnail */}
        <div className="w-full md:w-1/2 flex items-center">
          <img
            src={thumbnail}
            alt={name}
            className="w-full mx-auto h-auto shadow-primary border-t-primary border-t-[1px]"
          />
        </div>
      </div>

      {/* Divider */}
      {showDivider && <ProjectDivider />}
    </div>
  );
};

export default ProjectsCardProject;
