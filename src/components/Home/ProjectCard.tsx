export interface ProjectCardProps {
  imgSrc: string;
  name: string;
  description: string;
}

const ProjectCard = ({ description, imgSrc, name }: ProjectCardProps) => {
  return (
    <div>
      <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-lg"
          alt={name}
        />
      </div>
      <div>
        <h3 className="font-bold font-poppins text-2xl mt-4 text-primary">
          {name}
        </h3>
        <p className="font-montserrat font-semibold text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};
export default ProjectCard;
