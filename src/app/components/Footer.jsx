import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-6 flex justify-between">
        <Image
          src="https://cdn.mos.cms.futurecdn.net/P92PFVFm8vaDwFP77uasKQ.jpg"
          alt="hero image"
          width={50}
          height={50}
        />
        <p className="text-slate-600">QAUNTUM TECHS</p>
      </div>
    </footer>
  );
};

export default Footer;
