import { useEffect, useState } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export function Typewriter({ text, delay = 0, speed = 50 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [displayText, text, speed, started]);

  return <span>{displayText}</span>;
}