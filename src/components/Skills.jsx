import skillsHtml from '../content/skills.md';
import { useInView } from '../hooks/useInView';
import './Skills.css';

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section className={`skills ${inView ? 'skills--visible' : ''}`} ref={ref}>
      <div className="skills__container">
        {/* Content is repo-owned markdown rendered to HTML at build time */}
        <div className="skills__content" dangerouslySetInnerHTML={{ __html: skillsHtml }} />
      </div>
    </section>
  );
}
