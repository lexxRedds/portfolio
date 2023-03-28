import { useState, useEffect, useLayoutEffect } from "react";
const MAX_DELAY = 200;
const CHARS = 'abcdefghijklmnñopqrstuvwxyz0123456789/&$@%#';

function ScramblingText({ text, delay = 4000 }) {
  const [scrambledText, setScrambledText] = useState(text);
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    setCount(1);
  }, []);

  useEffect(() => {
    const MAX_COUNTS = 4 * scrambledText.length;
    let intervalId = null;

    if (count < MAX_COUNTS) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
        setScrambledText(scrambleChar(scrambledText, text, count < (MAX_COUNTS - 1) / 2));
      }, Math.random() * MAX_DELAY);
    } else {
      setScrambledText(text);
      setTimeout(() => {
        setCount(0);
      }, delay);
    }

    return () => {
      clearTimeout(intervalId);
    };
  }, [count, text, scrambledText, delay]);

  return <span>{scrambledText}</span>;
}

function scrambleChar(text, origninalText, isScrambling) {
  let textChars = text.split("");
  let indexChars = Math.floor(Math.random() * textChars.length);

  if (isScrambling) {
    textChars[indexChars] = CHARS[Math.floor(Math.random() * CHARS.length)];
  } else if (textChars.join('') != origninalText) {
    textChars[indexChars] = origninalText.charAt(indexChars);
  }

  return textChars.join('');
}

export default ScramblingText;
