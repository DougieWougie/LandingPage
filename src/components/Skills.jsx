import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdown } from '../hooks/useMarkdown';
import { useInView } from '../hooks/useInView';
import './Skills.css';

export function Skills() {
  const { content, loading } = useMarkdown('/content/skills.md');
  const { ref, inView } = useInView();

  if (loading || !content) return null;

  return (
    <section className={`skills ${inView ? 'skills--visible' : ''}`} ref={ref}>
      <div className="skills__container">
        <div className="skills__content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="skills__heading">{children}</h2>
              ),
              ul: ({ children }) => (
                <div className="skills__tags">{children}</div>
              ),
              li: ({ children }) => (
                <span className="skills__tag">{children}</span>
              ),
              p: ({ children }) => (
                <p className="skills__text">{children}</p>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
