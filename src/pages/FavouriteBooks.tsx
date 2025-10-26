import books from "@data/book";

const FavouriteBooks = () => {
  const renderBooks = () => {
    return books.map(({ author, name, opinion, thumbnail }) => {
      return (
        <div className="flex flex-col md:flex-row gap-5" key={name}>
          <img
            src={thumbnail}
            className="h-auto w-1/2 mx-auto md:w-auto md:h-64 shadow-primary-lg border-t-primary border-t-[1px]"
            alt={name}
          />
          <div>
            <div className="text-lg font-bold font-poppins">{name}</div>
            <div className="font-poppins  text-gray-700 text-sm">{author}</div>
            <div className="text-gray-700 font-semibold font-montserrat">
              {opinion}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="items-center">
      <div className="text-4xl md:text-7xl font-extrabold">
        <h2>
          Favourite Books
          <span className="text-primary">.</span>
        </h2>
      </div>
      <div className="font-montserrat mt-4 text-xl md:text-3xl text-gray-700">
        Books that shaped how I write and think about code.
      </div>
      <div className="grid grid-cols-1 gap-10 mt-10">{renderBooks()}</div>
    </div>
  );
};

export default FavouriteBooks;
