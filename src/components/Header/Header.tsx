import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CiMenuFries } from 'react-icons/ci';
import { AppDispatch } from '../../redux/store';
import { weatherActions } from '../../redux/slices/weather/weatherSlice';
import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';
import Button from '../Button/Button';
import Container from '../Container/Container';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LocationToolbar from '../../widgets/LocationToolbar/LocationToolbar';
import FavoriteLocations from '../../widgets/FavoriteLocations/FavoriteLocations';
import { MOBILE_WIDTH } from '../../constants';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useCheckScreenWidth(MOBILE_WIDTH);

  const dispatch: AppDispatch = useDispatch();

  const toggeMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isMobile) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <header className={styles.wrapper}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>
              <Button variant='text' disableHover onClick={() => !isMobile && dispatch(weatherActions.resetState())}>
                Weather
              </Button>
            </h1>
            {isMobile && (
              <>
                <Button variant='text' disableHover onClick={toggeMenu}>
                  <CiMenuFries size='1.5rem' />
                </Button>
                <BurgerMenu isOpen={isMenuOpen}>
                  <LocationToolbar onClick={toggeMenu} />
                  <FavoriteLocations onClick={toggeMenu} />
                </BurgerMenu>
              </>
            )}
          </div>
        </Container>
      </header>
      <BurgerMenu isOpen={isMenuOpen}>
        <LocationToolbar onClick={toggeMenu} />
        <FavoriteLocations onClick={toggeMenu} />
      </BurgerMenu>
    </>
  );
};

export default Header;
