import { createPortal } from 'react-dom';
import { BurgerMenuProps } from './BurgerMenu.types';
import Container from '../Container/Container';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isOpen, children }: BurgerMenuProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>{children}</div>
      </Container>
    </div>,
    document.body,
  );
};

export default BurgerMenu;
