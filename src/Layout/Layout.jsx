import Footer from '../Components/GlobalComponent/Footer.jsx';
import NavBar from '../Components/GlobalComponent/NavBar.jsx';

const Layout = ({ children }) => {
   return (
      <div className='layout'>
         <NavBar />
         <main className='px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
            {children}
         </main>
         <Footer />
      </div>
   );
};

export default Layout;
