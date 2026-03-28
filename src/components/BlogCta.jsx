import { useState, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useInView';
import './BlogCta.css';

const COMMAND = 'curl ';
const URL_TEXT = 'blog.dougals.me';
const FULL_TEXT = COMMAND + URL_TEXT;
const TYPE_SPEED = 60;

export function BlogCta() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);

  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setCharCount(FULL_TEXT.length);
      setDone(true);
      return;
    }

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
          return prev;
        }
        return prev + 1;
      });
    }, TYPE_SPEED);

    return () => clearInterval(interval);
  }, [inView, prefersReducedMotion]);

  const visibleText = FULL_TEXT.slice(0, charCount);
  const commandPart = visibleText.slice(0, Math.min(charCount, COMMAND.length));
  const urlPart = charCount > COMMAND.length
    ? visibleText.slice(COMMAND.length)
    : '';

  return (
    <a
      ref={ref}
      href="https://blog.dougals.me"
      target="_blank"
      rel="noopener noreferrer"
      className="blog-cta"
      aria-label="Read my blog"
    >
      <span className="blog-cta__arrow" aria-hidden="true">▶</span>
      <span className="blog-cta__prompt" aria-hidden="true">$</span>
      <span className="blog-cta__command">{commandPart}</span>
      <span className="blog-cta__url">{urlPart}</span>
      <span className="blog-cta__cursor" aria-hidden="true" />
    </a>
  );
}
