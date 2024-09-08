import { features } from "@/lib/data";
import Ecosystem from "@/assets/icons/Ecosystem";

const Features = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Everything you need</h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
          Enjoy customisable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white text-black items-center justify-center rounded-lg">
                <Ecosystem />
              </div>
              <h3 className="text-white mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70 max-w-md mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
