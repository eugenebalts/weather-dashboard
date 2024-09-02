import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Section from '../../components/Section/Section';
import FavoriteLocationCard from './FavoriteLocationCard/FavoriteLocationCard';
import styles from './FavoriteLocations.module.scss';

const FavoriteLocations = () => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  return (
    <Section width='250px'>
      <h2>Favorite Locations</h2>
      <ul className={styles.list}>
        {favoriteLocations.map((location) => (
          <li className={styles.item} key={location.lat}>
            <FavoriteLocationCard coordinatesWithMetadata={location} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default FavoriteLocations;
