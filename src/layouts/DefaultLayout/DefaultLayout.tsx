import { PropsWithChildren } from 'react';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>
    <Header />
    <main>
      <Container>{children}</Container>
    </main>
  </div>
);

export default DefaultLayout;
