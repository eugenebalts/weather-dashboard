import styles from './Section.module.scss';
import { SectionProps } from './Section.types';

const Section = ({ children, maxWidth }: SectionProps) => (
  <section style={{ maxWidth }} className={styles.wrapper}>
    {children}
  </section>
);

export default Section;
