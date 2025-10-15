import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/store/store';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
        <Toaster />
      </BrowserRouter>
    </>
  );
};
