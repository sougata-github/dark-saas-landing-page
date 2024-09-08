import Ecosystem from "@/assets/icons/Ecosystem";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Features = () => {
  return (
    <section className="py-[72px] sm:py-24">
      <div className="section-container">
        <h2 className="text-white text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
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
