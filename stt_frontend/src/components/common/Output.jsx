import { translateToHindi } from "@/utils/functions/translate";
import React, { useState } from "react";

const Output = ({ text, setText }) => {
  const [translated, setTranslated] = useState("");
  const [showHindi, setShowHindi] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!text) return;
    setIsTranslating(true);
    try {
      const result = await translateToHindi(text);
      setTranslated(result);
      setShowHindi(true);
    } catch (err) {
      console.error("Translation error:", err);
      setTranslated("");
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="w-[60%] min-h-[150px] border-2 border-gray-200 shadow-md rounded-xl p-4 bg-secondary text-lg font-medium text-gray-800 overflow-y-auto transition-all duration-300">
      {text ? (
        <div className="flex flex-col items-stretch gap-3">
          <p className="text-gray-700">
            <strong>Original:</strong> {text}
          </p>

          {showHindi && (
            <p className="text-primary mt-2">
              <strong>In Hindi:</strong> {translated}
            </p>
          )}

          <button
            onClick={handleTranslate}
            disabled={isTranslating}
            className={`self-start px-3 py-1 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${isTranslating
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-light hover:bg-gray-200 text-gray-800 border-gray-300 cursor-pointer"
              }`}
          >
            {isTranslating ? "Translating..." : showHindi ? "Re-Translate" : "Translate to Hindi"}
          </button>
        </div>
      ) : (
        <p className="text-gray-500 italic">Start speaking...</p>
      )}
      {
        text && <button onClick={() => { setText(""); setTranslated(""); setShowHindi(false)}} className="px-2 py-1 border rounded-md">
          Clear
        </button>
      }
    </div>
  );
};

export default Output;
