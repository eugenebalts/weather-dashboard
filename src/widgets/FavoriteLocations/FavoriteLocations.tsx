import { useSelector } from 'react-redux';
import styles from './FavoriteLocations.module.scss';
import { RootState } from '../../redux/store';

const FavoriteLocations = () => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  return (
    <section className={styles.wrapper}>
      <h2>Favorite Locations</h2>
      {favoriteLocations.map((location) => (
        <p key={location.lat}>{location.lat}</p>
      ))}
    </section>
  );
};

export default FavoriteLocations;
