import { SectionProps } from './Section.types';
import styles from './Section.module.scss';

const Section = ({ children, width }: SectionProps) => (
  <section style={{ width }} className={styles.wrapper}>
    {children}
  </section>
);

export default Section;
