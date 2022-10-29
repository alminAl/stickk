import AboutStickk from '../Components/HomeComponent/AboutStickk.jsx';
import Banner from '../Components/HomeComponent/Banner.jsx';
import Goals from '../Components/HomeComponent/Goals.jsx';
import News from '../Components/HomeComponent/News.jsx';
import Reviews from '../Components/HomeComponent/Reviews.jsx';
import ServiceProfile from '../Components/HomeComponent/ServiceProfile.jsx';
import Solutions from '../Components/HomeComponent/Solutions.jsx';

const Home = () => {
   return (
      <>
         <Banner />
         <ServiceProfile />
         <AboutStickk />
         <Reviews />
         <Solutions />
         <Goals />
         <News />
      </>
   );
};

export default Home;
