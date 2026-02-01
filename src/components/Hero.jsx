import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdown } from '../hooks/useMarkdown';
import './Hero.css';

export function Hero() {
  const { content, loading } = useMarkdown('/content/intro.md');

  return (
    <section className="hero">
      <div className="hero__bg-shape" aria-hidden="true" />
      <div className="hero__bg-shape hero__bg-shape--2" aria-hidden="true" />

      <div className="hero__container">
        <div className="hero__image-wrapper">
          <div className="hero__image-decoration" aria-hidden="true" />
          <div className="hero__image-ring" aria-hidden="true" />
          <img
            src="/ProfilePicture.png"
            alt="Dougie Richardson"
            className="hero__image"
            width="320"
            height="320"
            loading="eager"
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__name">
            <span className="hero__name-line">Dougie</span>
            <span className="hero__name-line hero__name-line--accent">Richardson</span>
          </h1>

          {!loading && content && (
            <div className="hero__intro">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
