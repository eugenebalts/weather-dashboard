import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Section from '../../components/Section/Section';
import FavoriteLocationCard from './FavoriteLocationCard/FavoriteLocationCard';
import { PropsWithOnClick } from '../../types';
import styles from './FavoriteLocations.module.scss';

const FavoriteLocations = ({ onClick }: PropsWithOnClick) => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  return (
    <Section title='Favorite Locations'>
      {favoriteLocations.length ? (
        <ul className={styles.list}>
          {favoriteLocations.map((location) => (
            <li key={location.lat}>
              <FavoriteLocationCard coordinatesWithMetadata={location} onClick={onClick} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Content</p>
      )}
    </Section>
  );
};

export default FavoriteLocations;
