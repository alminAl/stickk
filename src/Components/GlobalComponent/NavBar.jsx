import { useState } from 'react';
import { Link } from 'react-router-dom';
import brand from '../../images/stickk_logo_top.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from '../../hooks/useAuthContext.jsx';
import { useLogout } from '../../hooks/useLogout.jsx';

const NavBar = () => {
   const [open, setOpen] = useState(false);
   const { logout } = useLogout();
   const { user } = useAuthContext();

   return (
      <div className='w-full fixed top-0 left-0 z-10'>
         <div className='lg:flex items-center justify-between bg-white py-4 px-3 sm:px-3.5 md:px-7 lg:px-14 xl:px-24'>
            <Link to='/'>
               <span>
                  <img src={brand} alt='brand img' className='w-32' />
               </span>
            </Link>

            <div
               onClick={() => setOpen(!open)}
               className='text-4xl absolute right-8 top-4 cursor-pointer lg:hidden'>
               {open ? <CloseIcon /> : <MenuIcon />}
            </div>

            <ul
               className={`lg:space-x-6 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 shadow-xl' : 'top-[-490px]'
                  }`}>
               <li className='lg:ml-6 text-base lg:my-0 my-7'>
                  <Link
                     to='/'
                     className='text-neutral-700 duration-500 hover:text-black'>
                     HOW IT WORK
                  </Link>
               </li>
               <li className='lg:ml-6 text-base lg:my-0 my-7'>
                  <Link
                     to='/'
                     className='text-neutral-700 duration-500 hover:text-black'>
                     ABOUT US
                  </Link>
               </li>
               {
                  user && <li className='lg:ml-6 text-base lg:my-0 my-7'>
                     <Link
                        to='/commit'
                        className='text-neutral-700 duration-500 hover:text-black'>
                        My Commits
                     </Link>
                  </li>
               }


               {user ? (
                  <>
                     <li className='lg:flex items-center space-x-4 text-base lg:my-0 my-7'>
                        <Link to='profile'>
                           <span className='text-base  text-black font-sans capitalize'>
                              Dashboard
                           </span>
                        </Link>
                        <button
                           onClick={() => logout()}
                           className='signIn-btn rounded-full'>
                           logout
                        </button>
                     </li>
                  </>
               ) : (
                  <>
                     <li className='lg:ml-6 text-base lg:my-0 my-7'>
                        <Link
                           to='/login'
                           className='signIn-btn rounded-full hover:bg-[#ff7900] hover:text-white duration-200'>
                           SIGN IN
                        </Link>
                     </li>
                     <li className='lg:ml-6 text-base lg:my-0 my-7'>
                        <Link
                           to='/signin'
                           className='register-btn rounded-full hover:bg-transparent hover:text-[#ff7900] duration-200'>
                           REGISTER
                        </Link>
                     </li>
                  </>
               )}
            </ul>
         </div>
      </div>
   );
};

export default NavBar;
