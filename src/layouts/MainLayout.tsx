import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
        <Outlet />
        <ToastContainer position='top-center' />
        
    </>
  );
}

export default MainLayout;