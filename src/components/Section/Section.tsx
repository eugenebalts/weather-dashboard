import styles from './Section.module.scss';
import { SectionProps } from './Section.types';

const Section = ({ children, width }: SectionProps) => (
  <section style={{ width }} className={styles.wrapper}>
    {children}
  </section>
);

export default Section;
