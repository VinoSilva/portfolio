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

export default books;
