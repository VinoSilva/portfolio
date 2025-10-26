// Import libraries
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Import data
import PORTFOLIOS from "@data/portfolios";

// Import constants
import routes from "@constants/route";

// Import component
import IconButton from "@components/shared/IconButton";
import HomeProjectCard from "@components/Home/HomeProjectCard";
import Tag from "@components/shared/Tag";

const Project = () => {
  const params = useParams<{ id: string }>();

  const data = PORTFOLIOS.find((el) => el.id === params.id);

  const navigate = useNavigate();

  if (!data) {
    return <Navigate to={routes.home} />;
  }

  const {
    link,
    thumbnail,
    name,
    description,
    images,
    year,
    client,
    role,
    impact,
    contributions,
    categories,
    techs,
  } = data;

  const moreProjects = (() => {
    const arr = PORTFOLIOS.filter((el) => el.id !== params.id);

    const projects: typeof PORTFOLIOS = [];

    for (let i = 0; i < 2; i++) {
      const num = parseInt("" + Math.random() * arr.length);

      projects.push(arr[num]);
      arr.splice(num, 1);
    }

    return projects;
  })();

  const hasMoreProjects = !!moreProjects.length;

  return (
    <div>
      <h2 className="text-2xl md:text-5xl lg:text-7xl font-extrabold font-poppins">
        {name}
      </h2>
      <div className="flex justify-between items-center gap-10">
        <h3 className="font-montserrat text-base md:text-xl mt-4 text-gray-700 font-semibold">
          {description}
        </h3>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <IconButton className="p-2 border-[1px] border-black hover:bg-white hover:text-primary">
            <FaArrowUpRightFromSquare />
          </IconButton>
        </a>
      </div>
      <div className="flex gap-2 md:gap-4 mt-2 md:mt-5 flex-wrap">
        {[...categories, ...techs].map((val, idx) => (
          <Tag key={`${name}-tag-${idx}`}>{val}</Tag>
        ))}
      </div>
      <div className="w-full mt-5 mb-10 md:mt-10 md:mb-20 shadow-primary border-t-primary border-t-[1px]">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="rounded-md shadow-primary border-t-primary border-t-[1px] p-4 w-full md:min-w-60 flex flex-col gap-5">
          <div>
            <p className="text-sm">Client</p>
            <p className="text-lg font-semibold text-gray-700">{client}</p>
          </div>
          <div>
            <p className="text-sm">Year</p>
            <p className="text-lg font-semibold text-gray-700">{year}</p>
          </div>
          <div>
            <p className="text-sm">My Role</p>
            <p className="text-lg font-semibold text-gray-700">{role}</p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <h4 className="text-2xl md:text-5xl lg:text-7xl font-extrabold font-poppins">
              Contributions
            </h4>
            <h3 className="font-montserrat text-sm md:text-lg mt-4 text-gray-700">
              {contributions}
            </h3>
          </div>
          <div>
            <h4 className="text-2xl md:text-5xl lg:text-7xl font-extrabold font-poppins">
              Measurable Impact
            </h4>
            <h3 className="font-montserrat text-sm md:text-lg mt-4 text-gray-700">
              {impact}
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
        {images.slice(0, 6).map((img, idx) => (
          <img src={img} alt={`${name} image ${idx + 1}`} />
        ))}
      </div>
      {hasMoreProjects ? (
        <div className="mt-20">
          <h2 className="text-2xl md:text-5xl lg:text-7xl font-extrabold font-poppins mb-10">
            More Projects <span className="text-primary">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {moreProjects.map(({ description, id, thumbnail, name }) => (
              <HomeProjectCard
                description={description}
                id={id}
                imgSrc={thumbnail}
                name={name}
                onClick={() => {
                  navigate(routes.project.replace(":id", id));
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Project;
