const books: {
  name: string;
  opinion: string;
  thumbnail: string;
  author: string;
}[] = [
  {
    name: "Clean Code",
    author: "Robert Cecil Martin",
    opinion:
      "Taught me the discipline of writing code that’s not just functional but readable, elegant, and built for others to maintain. It completely changed how I think about naming, structure, and refactoring.",
    thumbnail: "/images/books/Clean Code.webp",
  },
  {
    name: "Software Engineering at Google",
    author: "Hyrum Wright, Titus Winters, and Tom Manshreck",
    opinion:
      "Showed me what engineering at scale really means — the balance between clean code, team collaboration, and long-term maintainability. It reshaped how I think about code reviews and documentation.",
    thumbnail: "/images/books/Software Engineering At Google.webp",
  },
  {
    name: "The Pragmatic Programmer",
    author: "Andy Hunt and Dave Thomas",
    opinion:
      "Reminded me that good engineering is as much about mindset as it is about syntax. It taught me to think critically, automate wisely, and continuously refine my craft.",
    thumbnail: "/images/books/The Pragmatic Programmer.webp",
  },
  {
    name: "Full Stack JavaScript Strategies",
    author: "Milecia McGregor",
    opinion:
      "Helped me connect the dots between frontend and backend. It made me appreciate the importance of consistency across the stack and improved how I structure full-stack applications.",
    thumbnail: "/images/books/Full Stack JavaScript Strategies.webp",
  },
  {
    name: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    opinion:
      "Deepened my understanding of how real-world systems handle scale, reliability, and performance. It made me appreciate the art behind database design, distributed systems, and trade-offs in architecture.",
    thumbnail: "/images/books/Designing Data-Intensive Applications.webp",
  },
];

const FavouriteBooks = () => {
  const renderBooks = () => {
    return books.map(({ author, name, opinion, thumbnail }) => {
      return (
        <div className="flex flex-col md:flex-row gap-5" key={name}>
          <img
            src={thumbnail}
            className="h-auto w-1/2 mx-auto md:w-auto md:h-64 shadow-primary-lg"
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
      <div className="text-7xl font-extrabold">
        <h2>
          Favourite Books
          <span className="text-primary">.</span>
        </h2>
      </div>
      <div className="font-montserrat mt-4 text-3xl text-gray-700">
        Books that shaped how I write and think about code.
      </div>
      <div className="grid grid-cols-1 gap-10 mt-10">{renderBooks()}</div>
    </div>
  );
};

export default FavouriteBooks;
