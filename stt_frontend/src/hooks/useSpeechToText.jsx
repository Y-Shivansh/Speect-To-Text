import { useState, useRef } from "react";

export function useSpeechToText() {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    // checking if browser supports the API (works in Chrome only).
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    // instance of the speech recognizer
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true; // keeps listening until manually stopped
    recognition.interimResults = true; // returns partial live results
    recognition.lang = "en-IN"; // Hinglish + Hindi supported

    recognition.onstart = () => {
      setIsListening(true);
      console.log("🎤 Listening...");
    };

    // Converts all audio results into plain text

    /**
     * When Chrome’s SpeechRecognition detects speech, it fires the onresult event.   
     * That event looks like this
        event.results = [
          [ { transcript: "Mujhe", confidence: 0.95 } ],
          [ { transcript: "paani", confidence: 0.93 } ],
          [ { transcript: "chahiye", confidence: 0.98 } ]
        ];

     */

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");
      setText(transcript);
    };

    recognition.onerror = (err) => {
      console.error("Speech error:", err);
      setIsListening(false);
    };

    recognition.onend = () => {
      console.log("🛑 Stopped listening");
      setIsListening(false);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return { text, isListening, startListening, stopListening , setText};
}
