import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useState } from 'react';
import useProfileStore from '../../store/useProfileStore.js';
import shallow from 'zustand/shallow';
import ProfileUpdateModel, { ProfileImage } from './ProfileUpdateModel.jsx';

const Profile = () => {
   const [userProfile] = useProfileStore(state => [state.userProfile], shallow);
   const [open, setOpen] = useState(false);
   // console.log(userProfile);

   return (
      <div className='mt-16 space-y-6'>
         <div className='flex justify-center'>
            <div className='space-y-2'>
               <div className='w-24 h-24 relative rounded-full'>
                  <img
                     src='https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/16a-400x292.jpg'
                     className='w-full h-full rounded-full'
                     alt=''
                  />
               </div>
            </div>
         </div>
         <div className='overflow-x-auto relative flex justify-center'>
            <table className='w-full lg:w-3/6 text-sm text-left text-gray-500 dark:text-gray-400 space-y-6'>
               <tbody>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        User Name
                     </th>
                     <td className='py-4 px-6'>Mamun Hossain</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        User Number
                     </th>
                     <td className='py-4 px-6'>01265214564</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        User Email
                     </th>
                     <td className='py-4 px-6'>hmamun492@gmail.com</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        About
                     </th>
                     <td className='py-4 px-6'>about user</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className='flex justify-center'>
            <button className='signIn-btn inline-block rounded-md px-6'>
               Edit Profile
            </button>
         </div>
      </div>
   );
};

export default Profile;
