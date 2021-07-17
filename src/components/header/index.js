import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <header className="relative w-full h-screen">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
          {title}
          <span className="block lowercase text-2xl md:text-3xl mt-4 text-gray-500">
            {subtitle}
          </span>
          <a
            href="mailto:thomas_frey@tutanota.com"
            title="Contact Me"
            className="text-2xl hover:underline"
          >
            Contact Me
          </a>
        </h1>
        <a
          href="#what"
          title="See more"
          className="absolute bottom-12 w-max left-0 right-0 mx-auto block text-2xl 
              text-gray-500 transform hover:scale-110 duration-200 transition-all"
        >
          See more
        </a>
      </header>
    </>
  );
};

export default Header;
