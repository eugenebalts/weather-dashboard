import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { weatherActions } from '../../redux/slices/weather/weatherSlice';
import Button from '../Button/Button';
import Container from '../Container/Container';
import styles from './Header.module.scss';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <header className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <Button variant='text' disableHover onClick={() => dispatch(weatherActions.resetState())}>
              Weather
            </Button>
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
