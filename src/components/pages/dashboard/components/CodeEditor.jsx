import {Button} from "@/components/ui/button";
import {useState} from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[60vh] px-2">
      <div className="bg-white/90 backdrop-blur rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg w-full max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800">
            <svg
              className="w-6 h-6 text-red-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Paste Code Here
          </h3>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Supports all languages
          </span>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-56 sm:h-64 bg-gray-900 border border-gray-300 rounded-lg px-4 py-3 text-white font-mono text-sm resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-700 transition"
          placeholder="Paste your code here..."
        />
        <div className="flex justify-center mt-3">
          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-md transition text-sm shadow"
            onClick={() => setCode("")}
            type="button"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
