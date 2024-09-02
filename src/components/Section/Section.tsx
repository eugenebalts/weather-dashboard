import { SectionProps } from './Section.types';
import styles from './Section.module.scss';

const Section = ({ children, width, title }: SectionProps) => (
  <section style={{ width }} className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
