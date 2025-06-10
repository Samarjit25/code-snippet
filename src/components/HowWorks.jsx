const steps = [
  {
    number: 1,
    title: "Paste or Upload Your Code",
    description:
      "Easily paste your code snippet or upload a file to get started. No signup required.",
  },
  {
    number: 2,
    title: "Share or Save Instantly",
    description:
      "Save your snippet to your collection or share it with others using a unique link.",
  },
];

const HowWorks = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl mx-auto p-8 border-t-4 border-red-600 rounded-3xl shadow-lg mb-24 bg-white ">
      <div className="flex-1">
        <span className="text-base font-semibold uppercase tracking-wider text-red-600 border-b-2 border-purple-200 pb-1">
          How It Works
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 mt-8 text-gray-900">
          Just 2 Simple Steps
        </h2>
        <div className="space-y-10 mt-12 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="rounded-full border-4 border-purple-200 bg-purple-50 w-14 h-14 flex justify-center items-center text-red-700 font-bold text-2xl shadow">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-500 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center max-lg:hidden">
        <img
          src="/application-coding-web-code-write-svgrepo-com.svg"
          alt="Code Snippet Image"
          className="h-full w-auto rounded-3xl object-cover "
        />
      </div>
    </section>
  );
};

export default HowWorks;
