import { TfiReload } from 'react-icons/tfi';
import Button from '../Button/Button';
import { PropsWithOnClick } from '../../types';

const ReloadButton = ({ onClick }: PropsWithOnClick) => (
  <Button variant='text' disableHover onClick={onClick}>
    <TfiReload size='2rem' />
  </Button>
);

export default ReloadButton;
