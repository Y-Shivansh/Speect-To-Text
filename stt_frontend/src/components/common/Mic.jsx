import React from "react";
import { Mic } from "lucide-react";

const MicComponent = ({ isListening, startListening, stopListening }) => {
  return (
    <div
      onClick={isListening ? stopListening : startListening}
      className={`cursor-pointer transition-all border-2 rounded-full p-3 shadow-xl ${
        isListening
          ? "border-red-600 bg-red-100 animate-pulse"
          : "border-gray-400 hover:bg-gray-100"
      }`}
    >
      <Mic
        size={50}
        className={`${
          isListening ? "text-red-700" : "text-gray-800"
        } transition-colors duration-300`}
      />
    </div>
  );
};

export default MicComponent;
