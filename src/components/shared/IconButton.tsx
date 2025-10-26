import { twMerge } from "tailwind-merge";

const IconButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={twMerge([
        "cursor-pointer bg-primary text-white rounded-full border-[1px] border-primary",
        className,
      ])}
    />
  );
};

export default IconButton;
