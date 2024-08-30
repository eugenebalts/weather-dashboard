import { PropsWithChildren } from 'react';
import Container from '../../components/Container/Container';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>
    <header>
      <Container>
        <h1>FORTE GROUP</h1>
      </Container>
    </header>
    <main>
      <Container>{children}</Container>
    </main>
  </div>
);

export default DefaultLayout;
