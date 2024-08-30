import { PropsWithChildren } from 'react';
import styles from './Container.module.scss';

const Container = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Container;
