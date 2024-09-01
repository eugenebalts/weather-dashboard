import { useSelector } from 'react-redux';
import styles from './FavoriteLocations.module.scss';
import { RootState } from '../../redux/store';
import FavoriteLocationCard from './FavoriteLocationCard/FavoriteLocationCard';

const FavoriteLocations = () => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  return (
    <section className={styles.wrapper}>
      <h2>Favorite Locations</h2>
      <ul className={styles.list}>
        {favoriteLocations.map((location) => (
          <li className={styles.item} key={location.lat}>
            <FavoriteLocationCard coordinatesWithMetadata={location} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoriteLocations;
