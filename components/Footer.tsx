import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      {/* Footer content */}
      <div className="flex flex-col items-center z-10 relative">
        <a href="mailto:iamhardikat11@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Social media icons */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center z-10 relative px-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Made with ❤️ by Hardik Soni
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-8">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
