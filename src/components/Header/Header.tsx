import Container from '../Container/Container';
import styles from './Header.module.scss';

const Header = () => (
  <header>
    <Container>
      <div className={styles.wrapper}>
        <h1>Weather</h1>
        <button type='button'>Toggle theme</button>
      </div>
    </Container>
  </header>
);

export default Header;
