import { useInView } from '../hooks/useInView';
import { GitHubIcon } from './icons';
import './FeaturedLinks.css';

const links = [
  {
    title: 'GitHub',
    description: 'Open source & projects',
    url: 'https://github.com/DougieWougie',
    color: 'var(--olive)',
    icon: <GitHubIcon />,
  },
  {
    title: 'Running Paces',
    description: 'Quickly calculate your pace for any distance and time.',
    url: 'https://run.dougals.me/',
    color: 'var(--terracotta)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Tax calculator',
    description: 'Adjust pre-tax and post-tax deductions to see the difference in take home salary. Accounts for military pensions (not subject to National Insurance).',
    url: 'https://tax.dougals.me/',
    color: 'var(--gold)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="22" x2="21" y2="22"></line>
        <line x1="6" y1="18" x2="6" y2="11"></line>
        <line x1="10" y1="18" x2="10" y2="11"></line>
        <line x1="14" y1="18" x2="14" y2="11"></line>
        <line x1="18" y1="18" x2="18" y2="11"></line>
        <polygon points="12 2 2 7 22 7 12 2"></polygon>
      </svg>
    ),
  },
];

export function FeaturedLinks() {
  const { ref, inView } = useInView();

  return (
    <section className="links" ref={ref}>
      <div className="links__container">
        <h2 className="links__heading">Some Projects...</h2>
        <div className="links__grid">
          {links.map((link, i) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`links__card ${inView ? 'links__card--visible' : ''}`}
              style={{
                '--card-color': link.color,
                '--card-delay': `${i * 120}ms`,
              }}
            >
              <div className="links__card-glow" aria-hidden="true" />
              <div className="links__card-icon">{link.icon}</div>
              <h3 className="links__card-title">{link.title}</h3>
              <p className="links__card-desc">{link.description}</p>
              <span className="links__card-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
