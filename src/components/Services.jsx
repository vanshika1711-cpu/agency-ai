import React from "react";
import assets from "../assets/assets";

const Services = () => {
  const servicesData = [
    { icon: assets.ads_icon, title: "Advertising", desc: "We turn bold ideas into powerful digital solutions that connect and engage." },
    { icon: assets.content_icon, title: "Content marketing", desc: "We help you execute your plan and deliver results." },
    { icon: assets.marketing_icon, title: "Content writing", desc: "We help you create a marketing strategy that drives results." },
    { icon: assets.social_icon, title: "Social media", desc: "We help you build a strong social media presence and engage with your audience." }
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 sm:px-12 lg:px-24 xl:px-40 text-center
      bg-gradient-to-b from-white to-purple-50
      dark:from-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-black dark:text-white">
        How can we help?
      </h2>

      <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-16">
        From strategy to execution, we craft digital solutions that move your business forward.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="
            group p-8 rounded-2xl
            border border-gray-200 dark:border-slate-700
            bg-white dark:bg-slate-800
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-xl
            cursor-pointer text-left
            "
          >
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-slate-700 transition">
                <img src={service.icon} className="w-8" alt="" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white group-hover:text-[#5044E5] transition">
                  {service.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;