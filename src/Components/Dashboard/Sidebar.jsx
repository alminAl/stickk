import { useState } from 'react';
import { Link } from 'react-router-dom';
import brand from '../../images/ftr_stickk_logo.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
   const [open, setOpen] = useState(false);
   return (
      <div>
         <>
            <div
               onClick={() => setOpen(!open)}
               className='inline-block rounded-md ml-2 mt-2'>
               <MenuIcon className='text-black cursor-pointer block w-10 h-10' />
            </div>
            <div
               className={
                  open
                     ? 'w-72 bg-slate-800 h-screen py-4 space-y-10 block top-0 left-0 absolute'
                     : 'w-72 bg-slate-800 h-screen py-4 space-y-10 hidden'
               }>
               <div className='flex justify-between items-center px-4'>
                  <img src={brand} className='w-32' alt='' />
                  <CloseIcon
                     onClick={() => setOpen(!open)}
                     className='text-white cursor-pointer w-8 h-8'
                  />
               </div>
               <div className='list-none space-y-3 text-white uppercase text-lg'>
                  <li>
                     <Link to='/' className='flex items-center pl-4'>
                        <HomeIcon className='mr-2' /> Back To Home
                     </Link>
                  </li>
                  <li>
                     <Link to='' className='flex items-center pl-4'>
                        <HomeIcon className='mr-2' /> Dashboard
                     </Link>
                  </li>
                  <li>
                     <Link to='profile' className='flex items-center pl-4'>
                        <PersonIcon className='mr-2' /> Profile
                     </Link>
                  </li>
               </div>
            </div>
         </>
      </div>
   );
};

export default Sidebar;
