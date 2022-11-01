import Footer from '../Components/GlobalComponent/Footer.jsx';
import NavBar from '../Components/GlobalComponent/NavBar.jsx';

const Layout = ({ children }) => {
   
   return (
      <div className='layout'>
         <NavBar />
         {/* {location.pathname.includes('dashboard') || <NavBar />} */}
         <main className=''>
            {children}
         </main>
         <Footer />
         {/* {location.pathname.includes('dashboard') || <Footer />} */}
      </div>
   );
};

export default Layout;
