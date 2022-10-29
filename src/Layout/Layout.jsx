import { useLocation } from 'react-router-dom';
import Footer from '../Components/GlobalComponent/Footer.jsx';
import NavBar from '../Components/GlobalComponent/NavBar.jsx';

const Layout = ({ children }) => {
   const location = useLocation();
   return (
      <div className='layout'>
         {location.pathname.includes('dashboard') || <NavBar />}
         <main className=''>
            {children}
         </main>
         {location.pathname.includes('dashboard') || <Footer />}
      </div>
   );
};

export default Layout;
