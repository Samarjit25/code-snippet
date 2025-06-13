import {Button} from "@/components/ui/button";
import {Palette} from "lucide-react";
import React from "react";

const Preview = ({downloadImage, canvasRef}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xs border flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-red-700" />
          Preview
        </h2>
        <div className="flex space-x-2">
          <Button
            onClick={downloadImage}
            className="flex items-center px-5 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Download
          </Button>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 overflow-auto flex-1 flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto border border-gray-200 rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};

export default Preview;
