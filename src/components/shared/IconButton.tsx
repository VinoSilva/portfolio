const IconButton = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="cursor-pointer bg-primary text-white rounded-full border-[1px] border-primary"
    />
  );
};

export default IconButton;
