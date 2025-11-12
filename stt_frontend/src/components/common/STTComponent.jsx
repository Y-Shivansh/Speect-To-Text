import React from "react";
import Output from "./Output";
import MicComponent from "./Mic";
import { useSpeechToText } from "@/hooks/useSpeechToText";

const STTComponent = () => {
  const { text, isListening, startListening, stopListening, setText } = useSpeechToText();

  return (
    // <div className="flex flex-col items-center justify-center gap-8 py-10">
      <div className="flex items-center justify-center gap-8 mt-6">
        <MicComponent
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
        />
        <Output text={text} setText = {setText}/>
      </div>
    // </div>
  );
};

export default STTComponent;
