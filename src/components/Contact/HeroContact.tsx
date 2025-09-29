import { FaEnvelope } from "react-icons/fa6";

const HeroContact = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-poppins w-3/5">
        <div className="text-7xl font-extrabold">
          <h2>
            Get In Touch
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className="font-montserrat mt-4 text-3xl text-gray-700">
          Looking to partner or work together? Reach out through the form and
          I'll get back to you in the next 48 hours.
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <FaEnvelope className="text-primary text-2xl" />
            <a href="mailto:VinoshenSilva@gmail.com">
              <p className="font-montserrat">VinoshenSilva@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 rounded-full border-primary border-[1px] w-2/5">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroContact;
