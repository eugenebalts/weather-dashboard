import { TfiReload } from 'react-icons/tfi';
import Button from '../Button/Button';
import { ReloadButtonProps } from './ReloadButton.types';

const ReloadButton = ({ onClick }: ReloadButtonProps) => (
  <Button variant='text' disableHover onClick={onClick}>
    <TfiReload size='2rem' />
  </Button>
);

export default ReloadButton;
