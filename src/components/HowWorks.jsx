const steps = [
  {
    number: 1,
    title: "Paste or Write Your Code",
    description:
      "Enter your code in the editor. Adjust the font size, padding, and pick your favorite theme for a perfect look.",
  },
  {
    number: 2,
    title: "Preview & Download",
    description:
      "See a live preview of your code snippet as an image. Download it instantly and share anywhere you want.",
  },
];

const HowWorks = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-6 md:p-10 my-25 lg:h-[50vh] bg-white rounded-2xl shadow-md border-t-4 border-red-600 mt-0">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 text-center">
        How It Works
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="rounded-full border-2 border-purple-200 bg-purple-50 w-10 h-10 flex justify-center items-center text-red-700 font-bold text-lg shadow">
              {step.number}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-500 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
