import { TbLocation } from 'react-icons/tb';
import Button from '../../components/Button/Button';
import useGeolocationPosition from '../../hooks/useNavigationLocation';
import LocationSearch from './LocationSearch/LocationSearch';
import { PropsWithOnClick } from '../../types';
import { DEFAULT_ICON_SIZE } from '../../constants';
import styles from './LocationToolbar.module.scss';

const LocationToolbar = ({ onClick }: PropsWithOnClick) => {
  const { getCurrentPosition } = useGeolocationPosition();

  const handleClickLocation = () => {
    if (onClick) {
      onClick();
    }

    getCurrentPosition();
  };

  return (
    <div className={styles.wrapper}>
      <LocationSearch onClick={onClick} />
      <Button variant='text' onClick={handleClickLocation}>
        <p className={styles['location-button']}>
          <TbLocation size={DEFAULT_ICON_SIZE} />
        </p>
      </Button>
    </div>
  );
};

export default LocationToolbar;
