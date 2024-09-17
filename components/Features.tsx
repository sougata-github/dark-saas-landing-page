import Feature from "./Feature";

import { features } from "@/lib/data";

const Features = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Everything you need</h2>
        <p className="text-center text-lg sm:text-xl text-white/70 max-w-sm sm:max-w-xl mx-auto mt-5">
          Enjoy customisable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
        <div className="mt-16 flex flex-col md:flex-row gap-4">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={<feature.icon className="size-5" />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
