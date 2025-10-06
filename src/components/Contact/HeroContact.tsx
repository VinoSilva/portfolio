import { FaEnvelope } from "react-icons/fa6";

const HeroContact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="p-8 block md:hidden rounded-full border-primary border-[1px] w-1/2 mb-10">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
          alt="Profile Picture"
        />
      </div>
      <div className="font-poppins md:w-3/5">
        <div className="text-4xl md:text-7xl font-extrabold">
          <h2>
            Get In Touch
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className="font-montserrat mt-4 text-xl md:text-3xl text-gray-700">
          Looking to partner or work together? Reach out through the form and
          I'll get back to you within the next 48 hours.
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <FaEnvelope className="text-primary text-lg md:text-2xl" />
            <a href="mailto:VinoshenSilva@gmail.com">
              <p className="font-montserrat">VinoshenSilva@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 hidden md:block rounded-full border-primary border-[1px] w-2/5">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default HeroContact;
