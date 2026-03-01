import React from "react";
import { teamData } from "../assets/assets";

const Team = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 text-center bg-gray-50">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium mb-4">
        Meet the team
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-16">
        A passionate team of digital experts dedicated to your brand's success.
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {teamData.map((member, index) => (
          <div
            key={index}
            className="
            group
            bg-white
            p-6
            rounded-2xl
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all
            duration-500
            cursor-pointer
            "
          >
            <div className="flex items-center gap-4">

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-14 h-14 rounded-full object-cover"
              />

              {/* Text */}
              <div className="text-left">
                <h3 className="font-semibold group-hover:text-[#5044E5] transition duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {member.title}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Team;