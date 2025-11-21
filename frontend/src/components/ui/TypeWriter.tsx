import { useState, useEffect } from 'react';

export default function TypewriterEffect({ statements }: { statements: string[] }) { 
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentStatement = statements[currentStatementIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseDuration = 2000;

    if (!isDeleting && charIndex < currentStatement.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(currentStatement.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentStatement.length) {
      // Pause at end of statement
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText(currentStatement.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to next statement
      setIsDeleting(false);
      setCurrentStatementIndex((currentStatementIndex + 1) % statements.length);
    }
  }, [charIndex, isDeleting, currentStatementIndex]);

  return (
    <>{displayedText}</>
  );
}