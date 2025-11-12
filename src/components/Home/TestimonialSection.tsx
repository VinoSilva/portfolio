const testimonials: {
  content: string;
  name: string;
  position: string;
  img_src: string;
}[] = [
  {
    content:
      "Working with Vino was a fantastic experience. He combines strong technical expertise with a clear sense of design and usability. Our frontend codebase has never been cleaner or more maintainable.",
    name: "Sarah Lee",
    position: "Product Manager at Horizon Labs",
    img_src: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    content:
      "Vino’s attention to detail and deep understanding of React and TypeScript helped us ship complex features faster than expected. He’s reliable, communicative, and a pleasure to collaborate with.",
    name: "James Rodriguez",
    position: "Senior Developer at NovaTech",
    img_src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    content:
      "Vino brought structure and clarity to our frontend architecture. His use of best practices and clean component patterns improved our scalability and developer experience significantly.",
    name: "Aisha Khan",
    position: "Engineering Lead at PixelWave",
    img_src: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Testimonials<span className="text-primary">.</span>
      </h2>
      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-10">
          {testimonials.map(({ name, content, position, img_src }) => (
            <div
              key={name}
              className="flex flex-col w-60 shadow-primary-xl border-t-primary border-t-[1px] items-center gap-4 p-4 rounded-xl"
            >
              <img src={img_src} alt={name} className="rounded-full w-1/2" />
              <p className="font-semibold font-montserrat text-md">{name}</p>
              <p className="font-semibold font-montserrat text-sm">
                {position}
              </p>
              <p className="font-semibold font-montserrat text-xs text-gray-700">
                {content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
