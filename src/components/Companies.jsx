import React from "react";
import { company_logos } from "../assets/assets";

const Companies = () => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center">
      
      <p className="text-gray-500 mb-10 text-lg">
        Trusted by Leading Companies
      </p>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company"
            className="h-8 sm:h-10 object-contain"
          />
        ))}
      </div>

    </section>
  );
};

export default Companies;