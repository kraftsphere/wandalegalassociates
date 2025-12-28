"use client";
import { useState, useEffect } from "react";

export default function Pillars() {
  const words = ["Credibility", "Experience", "Transparency", "Expertise"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Current word we're working with
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing forward
        setDisplayedWord(currentWord.substring(0, displayedWord.length + 1));

        // If we've completed typing the word
        if (displayedWord.length === currentWord.length) {
          // Pause before starting to delete
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          // Normal typing speed
          setTypingSpeed(150);
        }
      } else {
        // Deleting
        setDisplayedWord(currentWord.substring(0, displayedWord.length - 1));

        // If we've deleted the entire word
        if (displayedWord.length === 0) {
          setIsDeleting(false);
          // Move to next word
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          // Faster typing speed after deletion
          setTypingSpeed(100);
        } else {
          // Deletion speed
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedWord, currentWordIndex, isDeleting, typingSpeed, words]);

  return (
    <div className="bg-[#F9F3F1]">
      <div className="s_wrapper ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium">
            <span className="text-[#931f1d]">{displayedWord}</span>
            <span className="text-black"> is our pillar.</span>
          </h1>
          <p className="text-gray-900 max-w-2xl mx-auto mt-6">
            Our achievements and the scale of our business represent our
            commitment to your financial success.
          </p>
        </div>
      </div>
    </div>
  );
}
