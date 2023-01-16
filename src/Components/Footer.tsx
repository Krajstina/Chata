import React from "react";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <div className="Footer w-full min-h-[40vh]  flex flex-col p-8 bg-green-100/50 border-t-2 ">
      <div
        className="w-full flex justify-center items-center
"
      >
        <img src="/assets/images/logoChataBlack.png" className="lg:h-full h-16" />
      </div>
      <div className="flex flex-col w-full h-full justify-center ">
        <span className=" lg:text-lg font-light ">
          Chata pod Ostrým vrchom <br />
          Soblahov 921{" "}
        </span>
        <span className="lg:text-lg text-md font-normal mt-6 pb-4">
          Rezervácie na čísle:
          <br />
          0917 564 633
        </span>
      </div>

      <div className="icons flex flex-row  w-full justify-center">
        <a href="https://www.facebook.com/ChataOstryVrch/">
          <img src="/assets/icons/facebookiconn.png" className="lg:h-14 h-10" />
        </a>
        <a href="mailto:info@chatapodostrymvrchom.sk">
          <img src="/assets/icons/mailiconn.png" className="lg:h-14 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
