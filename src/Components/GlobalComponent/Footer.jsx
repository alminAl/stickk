import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import playStore from '../../images/button_google_play_646.webp';
import iStore from '../../images/button_app_store_646.webp';
import footerImg from '../../images/ftr_stickk_logo.png';

const Footer = () => {
   return (
      <div className='text-white md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-20 mt-auto bg-[#4F0C81] px-6 sm:px-10 md:px-20 lg:px-40 xl:px-52'>
         <div className='space-y-4'>
            <img src={footerImg} className='w-36' alt='' />

            <p>
               &#169; {new Date().getFullYear()} Copyright stickK.com - All
               rights reserved
            </p>
            {/* social media link */}
            <div className='flex items-center space-x-3'>
               <a
                  href='https://www.facebook.com/stickK/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <div className='icon-box rounded-full hover:bg-white hover:text-[#4F0C81] duration-300'>
                     <FaFacebookF className='text-lg' />
                  </div>
               </a>
               <a
                  href='https://www.youtube.com/channel/UCS8N_k5HZTAmvh0lmzEBoYw'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <div className='icon-box rounded-full hover:bg-white hover:text-[#4F0C81] duration-300'>
                     <FaYoutube className='text-lg' />
                  </div>
               </a>
               <a
                  href='https://twitter.com/stickK'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <div className='icon-box rounded-full hover:bg-white hover:text-[#4F0C81] duration-300'>
                     <FaTwitter className='text-lg' />
                  </div>
               </a>
               <a
                  href='https://www.instagram.com/stickk/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <div className='icon-box rounded-full hover:bg-white hover:text-[#4F0C81] duration-300'>
                     <FaInstagram className='text-lg' />
                  </div>
               </a>
            </div>
         </div>

         <div className='space-y-4'>
            <h3 className='font-semibold ml-0 md:ml-10 lg:ml-16 text-xl'>
               General
            </h3>
            <div className='list-none space-y-2 capitalize ml-0 md:ml-10 lg:ml-16'>
               <li>
                  <Link to='/'>about us</Link>
               </li>
               <li>
                  <Link to='/'>help center</Link>
               </li>
               <li>
                  <Link to='/'>contact us</Link>
               </li>
               <li>
                  <Link to='/'>how it work</Link>
               </li>
            </div>
         </div>

         <div className='list-none space-y-2 capitalize'>
            <li>
               <Link to='/'>terms of use</Link>
            </li>
            <li>
               <Link to='/'>privacy policy</Link>
            </li>
            <li>
               <Link to='/'>
                  <img src={playStore} className='w-36' alt='' />
               </Link>
            </li>
            <li>
               <Link to='/'>
                  <img src={iStore} className='w-36' alt='' />
               </Link>
            </li>
         </div>
      </div>
   );
};

export default Footer;
