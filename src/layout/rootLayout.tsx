import Navbar from '../components/navbar.tsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={'flex h-full'}>
      <Navbar />
      <div className={'w-full h-full m-2 ml-0'}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
