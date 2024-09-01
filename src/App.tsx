import { ToastContainer } from 'react-toastify';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import AppView from './views/AppView/AppView';

const App = () => (
  <>
    <DefaultLayout>
      <AppView />
    </DefaultLayout>
    <ToastContainer
      position='bottom-right'
      autoClose={3000}
      hideProgressBar
      closeOnClick
      draggable
      pauseOnHover
    />
  </>
);

export default App;
