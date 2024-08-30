import { PropsWithChildren } from 'react';
import Container from '../../components/Container/Container';
import styles from './DefaultLayout.module.scss';
import Header from '../../components/Header/Header';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
  </div>
);

export default DefaultLayout;
