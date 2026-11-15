import forageHtml from '../content/forage.md';
import { useInView } from '../hooks/useInView';
import { GitHubIcon } from './icons';
import './ForageCta.css';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=me.dougals.forage';
const SOURCE_URL = 'https://github.com/DougieWougie/forage';

export function ForageCta() {
  const { ref, inView } = useInView();

  return (
    <section className={`forage ${inView ? 'forage--visible' : ''}`} ref={ref}>
      <div className="forage__card">
        <img
          className="forage__banner"
          src="/forage-banner.webp"
          srcSet="/forage-banner-800.webp 800w, /forage-banner.webp 1600w"
          sizes="(min-width: 964px) 900px, calc(100vw - 4rem)"
          alt="Forage: a minimalist RSS feed reader"
          width="1600"
          height="529"
          loading="lazy"
        />
        <div className="forage__body">
          {/* Content is repo-owned markdown rendered to HTML at build time */}
          <div className="forage__content" dangerouslySetInnerHTML={{ __html: forageHtml }} />
          <div className="forage__actions">
            <a
              href={PLAY_URL}
              className="forage__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 3.5v17a1 1 0 0 0 1.5.86l14-8.5a1 1 0 0 0 0-1.72l-14-8.5A1 1 0 0 0 6 3.5z" />
              </svg>
              Get it on Google Play
            </a>
            <a
              href={SOURCE_URL}
              className="forage__source"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
