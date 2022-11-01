import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useRef, useState } from 'react';
import useProfileStore from '../../store/useProfileStore.js';
import shallow from 'zustand/shallow';
import ProfileUpdateModel from './ProfileUpdateModel.jsx';
import { useAuthContext } from '../../hooks/useAuthContext.jsx';
import { usePatchRequest } from '../../hooks/requestMethods.jsx';



export const ProfileImage = () => {
   // glabal storage
   const [userProfile, setUserProfile] = useProfileStore(
      (state) => [state.userProfile, state.setUserProfile],
      shallow
   );
   const { user } = useAuthContext();
   const { data: getUpdateData, updateData } = usePatchRequest()


   const fileInput = useRef(null)
   const handleChange = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
         const data = {
            profileImg: reader.result.toString()
         }
         updateData('/api/user/profile', user.token, data)
      }
      reader.readAsDataURL(file)
   }
   useEffect(() => {
      if (getUpdateData) {
         setUserProfile(getUpdateData)
      }

   }, [getUpdateData, setUserProfile])
   return (
      <>
         <label htmlFor="dropzone-file" className='cursor-pointer' onClick={e => fileInput.current && fileInput.current.click()}>
            <img
               src={userProfile?.profileImg ? userProfile?.profileImg : 'https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'}
               alt=''
               className='inline-block m-auto w-32 h-32 rounded-full md:w-48 md:h-48 md:rounded-full'
            />
            <input id='dropzone-file' className='hidden' accept="image/*" multiple type="file" onChange={handleChange} />
         </label>
      </>
   )
}

const UserProfile = () => {
   const [userProfile] = useProfileStore(state => [state.userProfile], shallow);
   const [open, setOpen] = useState(false);
   

   return (
      <div className='lg:w-9/12 m-auto space-y-6 px-4'>
         <div className='text-center space-y-2'>
            <ProfileImage />
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
                     <td className='py-4 px-6'>{userProfile.userName}</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Phone Number
                     </th>
                     <td className='py-4 px-6'>{userProfile.mobile}</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        User Email
                     </th>
                     <td className='py-4 px-6'>{userProfile.email}</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                     <th
                        scope='row'
                        className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        About
                     </th>
                     <td className='py-4 px-6'>{userProfile.about}</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <div className='text-center py-10'>
            <button
               onClick={() => setOpen(!open)}
               className='signIn-btn rounded-full hover:bg-[#ff7900] hover:text-white duration-200'>
               <BorderColorIcon className='mr-2' />
               edit profile
            </button>
         </div>
         {userProfile && <ProfileUpdateModel open={open} setOpen={x => setOpen(x)} />}

      </div>
   );
};

export default UserProfile;
