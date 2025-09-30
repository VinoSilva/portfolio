const Tag = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="px-2 py-1 max-h-6 font-semibold rounded-md text-xs bg-primary text-white flex justify-center items-center">
      {children}
    </div>
  );
};

export default Tag;
