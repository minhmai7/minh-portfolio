import { useState, useEffect } from "react";

const TypingAnimation = ({ text, delay = 0, showCursor = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setDisplayText(""); setCurrentIndex(0); setStartTyping(false);
    const startTimer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, startTyping]);

  return <span>{displayText}{showCursor && <span className="animate-pulse text-accent">|</span>}</span>;
};

export default TypingAnimation;