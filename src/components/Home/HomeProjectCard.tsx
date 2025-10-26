import Button from "@components/shared/Button";

export interface ProjectCardProps {
  imgSrc: string;
  name: string;
  description: string;
  id: string;
  onClick?: () => void;
}

const HomeProjectCard = ({
  description,
  imgSrc,
  name,
  onClick,
}: ProjectCardProps) => {
  const canRenderViewMore = !!onClick;

  return (
    <div>
      <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-lg shadow-primary border-t-primary border-t-[1px]"
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
        <Button
          style={{ visibility: canRenderViewMore ? "visible" : "hidden" }}
          className="my-4"
          variant="secondary"
          onClick={onClick}
          size="sm"
        >
          More Details
        </Button>
      </div>
    </div>
  );
};
export default HomeProjectCard;
