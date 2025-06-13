const steps = [
  {
    number: 1,
    title: "Paste or Write Your Code",
    description:
      "Enter your code in the editor. Adjust the font size, padding, and pick your favorite theme for a perfect look.",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700 text-2xl font-bold shadow">
        1
      </span>
    ),
  },
  {
    number: 2,
    title: "Preview & Download",
    description:
      "See a live preview of your code snippet as an image. Download it instantly and share anywhere you want.",
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 text-2xl font-bold shadow">
        2
      </span>
    ),
  },
];

const HowWorks = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 md:px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-2xl shadow-2xs border px-5 py-10 w-full max-w-3xl transition-transform hover:-translate-y-2 hover:shadow-lg"
          >
            {step.icon}
            <h3 className="mt-6 text-xl font-bold text-gray-800 text-center">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-500 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWorks;
