import Accordian from "./Accordian";

const FAQ = () => {
  return (
    <section className="text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black">
      <div className="section-container">
        <h2 className="section-heading max-w-lg mx-auto">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 max-w-2xl mx-auto">
          <Accordian />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
