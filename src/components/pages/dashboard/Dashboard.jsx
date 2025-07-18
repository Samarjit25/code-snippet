// ...existing imports...
import React, {useState, useRef, useEffect} from "react";
import {Settings, Palette} from "lucide-react";
import themes from "@/data/Theme";
import {Button} from "@/components/ui/button";
import CodeInput from "./components/CodeInput";

const Dashboard = () => {
  const [code, setCode] = useState("");
  const [theme, setTheme] = useState("vscode-dark");
  const [fontSize, setFontSize] = useState(14);
  const [padding, setPadding] = useState(20);
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  const canvasRef = useRef(null);

  const generateImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentTheme = themes[theme];

    const lineHeight = fontSize + 6;
    const lines = code.split("\n");
    const maxLineLength = Math.max(...lines.map((line) => line.length));
    const charWidth = fontSize * 0.6;

    const windowBarHeight = 40;
    const lineNumberWidth = showLineNumbers ? 36 : 0;
    const codeWidth = Math.max(
      400,
      maxLineLength * charWidth + padding * 2 + lineNumberWidth
    );
    const codeHeight =
      lines.length * lineHeight + padding * 2 + windowBarHeight;

    canvas.width = codeWidth;
    canvas.height = codeHeight;

    ctx.fillStyle = currentTheme.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = currentTheme.windowBar;
    ctx.fillRect(0, 0, canvas.width, windowBarHeight);

    const controlY = windowBarHeight / 2;
    ["#ff5f56", "#ffbd2e", "#27ca3f"].forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(20 + i * 20, controlY, 6, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // Set font for code
    ctx.font = `${fontSize}px 'SF Mono', Monaco, 'Cascadia Code', monospace`;
    ctx.textAlign = "left";
    ctx.fillStyle = currentTheme.text;

    // Draw code with optional line numbers
    const startY = windowBarHeight + padding;
    lines.forEach((line, index) => {
      const y = startY + index * lineHeight;
      if (showLineNumbers) {
        ctx.fillStyle = currentTheme.lineNumber || "#888";
        ctx.textAlign = "right";
        ctx.fillText(String(index + 1), padding + lineNumberWidth - 8, y);
        ctx.fillStyle = currentTheme.text;
        ctx.textAlign = "left";
        ctx.fillText(line, padding + lineNumberWidth, y);
      } else {
        ctx.fillText(line, padding, y);
      }
    });
  };

  const downloadImage = () => {
    generateImage();
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = `code_snippet.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    generateImage();
    // eslint-disable-next-line
  }, [code, theme, fontSize, padding, showLineNumbers]);

  return (
    <div className="min-h-screen bg-white from-gray-100 to-gray-300 p-3 w-full">
      <div className="max-w-5xl mx-auto py-5 flex flex-col gap-6">
        {/* Top: Configuration and Code Input */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Configuration */}
          <div className="bg-white rounded-2xl p-6 shadow-2xs border flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-700" />
              Configuration
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1  focus:ring-blue-700"
                >
                  {Object.keys(themes).map((themeName) => (
                    <option className="" key={themeName} value={themeName}>
                      {themeName
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Size
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="24"
                    value={fontSize}
                    onChange={(e) => setFontSize(Number(e.target.value))}
                    className="w-full accent-blue-700"
                  />
                  <span className="text-xs text-gray-500">{fontSize}px</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Padding
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    value={padding}
                    onChange={(e) => setPadding(Number(e.target.value))}
                    className="w-full accent-blue-700"
                  />
                  <span className="text-xs text-gray-500">{padding}px</span>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={showLineNumbers}
                    onChange={(e) => setShowLineNumbers(e.target.checked)}
                    className="accent-blue-700"
                  />
                  Show Line Numbers
                </label>
              </div>
            </div>
          </div>
          {/* Code Input */}
          <div className="bg-white rounded-2xl p-6 shadow-2xs border flex-1">
            <CodeInput code={code} setCode={setCode} />
          </div>
        </div>
        {/* Bottom: Preview & Export */}
        <div className="bg-white rounded-2xl p-6 shadow-2xs border flex flex-col mt-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Palette className="w-5 h-5 mr-2 text-blue-700" />
              Preview
            </h2>
            <div className="flex space-x-2">
              <Button
                onClick={downloadImage}
                className="flex items-center px-5 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
      </div>
    </div>
  );
};

export default Dashboard;
