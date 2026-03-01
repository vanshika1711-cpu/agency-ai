import React from "react";
import assets from "../assets/assets";

const Work = () => {
  const projects = [
    {
      image: assets.work_mobile_app,
      title: "Mobile App Design"
    },
    {
      image: assets.work_fitness_app,
      title: "Fitness App UI"
    },
    {
      image: assets.work_dashboard_management,
      title: "Dashboard Management"
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 text-center bg-white" id="work">

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium mb-4">
        Our latest work
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-16">
        From strategy to execution, we craft digital solutions that move your business forward.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={project.image}
              alt=""
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Work;