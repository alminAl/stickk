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
      <>hes</>
      // <div className='lg:w-9/12 m-auto space-y-6 px-4'>
      //    <div className='text-center space-y-2'>
      //       {/* <ProfileImage /> */}
      //       {/* <img
      //          src='https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'
      //          alt=''
      //          className='inline-block m-auto w-32 h-32 rounded-full md:w-48 md:h-48 md:rounded-full'
      //       /> */}
      //       <p className='capitalize text-xl font-extrabold'>
      //          {userProfile?.user.userName}
      //       </p>
      //       <p className='capitalize text-lg font-bold'>admin</p>
      //    </div>
      //    <div>
      //       <table className='table-auto m-auto'>
      //          <tbody>
      //             <tr>
      //                <td className='py-2 pr-10 capitalize font-extrabold'>
      //                   Full Name
      //                </td>
      //                <td className='py-2 capitalize font-semibold'>
      //                   {userProfile?.user?.userName}
      //                </td>
      //             </tr>
      //             <tr>
      //                <td className='py-2 pr-10 capitalize font-extrabold'>
      //                   email
      //                </td>
      //                <td className='py-2 font-semibold'>
      //                   {userProfile?.user?.email}
      //                </td>
      //             </tr>
      //             <tr>
      //                <td className='py-2 pr-10 capitalize font-extrabold'>
      //                   mobile
      //                </td>
      //                <td className='py-2 font-semibold'>
      //                   {userProfile?.user.mobile}
      //                </td>
      //             </tr>
      //             <tr>
      //                <td className='py-2 pr-10 capitalize font-extrabold'>
      //                   about
      //                </td>
      //                <td className='py-2 font-semibold'>
      //                   {userProfile?.user.about}
      //                </td>
      //             </tr>
      //          </tbody>
      //       </table>
      //    </div>

      //    <div className='text-center py-10'>
      //       <button
      //          onClick={() => setOpen(!open)}
      //          className='signIn-btn rounded-full hover:bg-[#ff7900] hover:text-white duration-200'>
      //          <BorderColorIcon className='mr-2' />
      //          edit profile
      //       </button>
      //    </div>
      //    <ProfileUpdateModel open={open} setOpen={x => setOpen(x)} />
      // </div>
   );
};

export default Profile;
