import { TfiReload } from 'react-icons/tfi';
import Button from '../Button/Button';
import { PropsWithOnClick } from '../../types';
import { DEFAULT_ICON_SIZE } from '../../constants';

const ReloadButton = ({ onClick }: PropsWithOnClick) => (
  <Button variant='text' disableHover onClick={onClick}>
    <TfiReload size={DEFAULT_ICON_SIZE} />
  </Button>
);

export default ReloadButton;
