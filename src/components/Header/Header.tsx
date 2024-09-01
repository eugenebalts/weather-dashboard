import Container from '../Container/Container';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.wrapper}>
    <Container>
      <div className={styles.content}>
        <h1>Weather</h1>
      </div>
    </Container>
  </header>
);

export default Header;
