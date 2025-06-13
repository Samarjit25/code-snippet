import React from "react";

const CodeInput = ({code, setCode}) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Code Input</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="Enter your code here..."
      />
    </>
  );
};

export default CodeInput;
