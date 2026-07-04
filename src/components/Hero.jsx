import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import intro from '../content/intro.md?raw';
import { GitHubIcon, LinkedInIcon } from './icons';
import './Hero.css';
import { BlogCta } from './BlogCta';

export function Hero() {
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
            fetchPriority="high"
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__name">
            <span className="hero__name-line">Dougie</span>
            <span className="hero__name-line hero__name-line--accent">Richardson</span>
          </h1>

          <div className="hero__link">
            <a href="https://www.linkedin.com/in/dougie-richardson/" className="hero__linkedin" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/dougiewougie" className="hero__github" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </div>

          <div className="hero__intro">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>
          </div>
          <BlogCta />
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
