import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import shallow from 'zustand/shallow';
import useProfileStore from '../../store/useProfileStore';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { usePatchRequest } from '../../hooks/requestMethods';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useEffect, useRef } from 'react';
import { userProfileUpdateValidation } from '../../validation/FormValidation.js';

export const ProfileImage = () => {
   // global storage
   const [userProfile, setUserProfile] = useProfileStore(
      state => [state.userProfile, state.setUserProfile],
      shallow
   );
   const { user } = useAuthContext();
   const { data: getUpdateData, updateData } = usePatchRequest();
   console.log(user);

   const fileInput = useRef(null);
   const handleChange = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
         const data = {
            profileImg: reader.result.toString(),
         };
         updateData('/api/user/profile', user.token, data);
      };
      reader.readAsDataURL(file);
   };
   useEffect(() => {
      if (getUpdateData) {
         setUserProfile(getUpdateData);
      }
   }, [getUpdateData, setUserProfile]);
   return (
      <>
         <label
            htmlFor='dropzone-file'
            className='cursor-pointer'
            onClick={e => fileInput.current && fileInput.current.click()}>
            <img
               src={
                  userProfile.profileImg
                     ? userProfile.profileImg
                     : 'https://pbs.twimg.com/media/EYVxlOSXsAExOpX.jpg'
               }
               alt=''
               className='inline-block m-auto w-32 h-32 rounded-full md:w-48 md:h-48 md:rounded-full'
            />
            <input
               id='dropzone-file'
               className='hidden'
               accept='image/*'
               multiple
               type='file'
               onChange={handleChange}
            />
         </label>
      </>
   );
};

const ProfileUpdateModel = ({ open, setOpen }) => {
   // global storage
   const [userProfile, setUserProfile] = useProfileStore(
      state => [state.userProfile, state.setUserProfile],
      shallow
   );
   const { user } = useAuthContext();
   const { data: getUpdateData, updateData } = usePatchRequest();

   /** form submission */
   const {
      handleChange,
      handleBlur,
      values,
      touched,
      errors,
      isSubmitting,
      handleSubmit,
      // setFieldValue,
      resetForm,
   } = useFormik({
      initialValues: {
         userName: userProfile.userName ?? '',
         mobile: userProfile.mobile ?? '',
         email: userProfile.email ?? '',
         about: userProfile.about ?? '',
      },
      validationSchema: userProfileUpdateValidation,
      onSubmit: async (data, action) => {
         try {
            updateData('/api/user/profile', user.token, data);
            setOpen(!open);
            resetForm();
         } catch (error) {}
      },
   });
   useEffect(() => {
      if (getUpdateData) {
         setUserProfile(getUpdateData);
      }
   }, [getUpdateData, setUserProfile]);

   return (
      <div>
         <div>
            <Dialog
               fullWidth
               maxWidth='sm'
               open={open}
               onClose={() => setOpen(!open)}>
               <DialogTitle>{'UpdateProfile'}</DialogTitle>
               <form onSubmit={handleSubmit} noValidate autoComplete='off'>
                  <DialogContent>
                     <div className='my-2'>
                        <TextField
                           fullWidth
                           required
                           size='small'
                           label='Full Name'
                           name='name'
                           value={values.userName}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.userName && Boolean(errors.userName)}
                           helperText={touched.userName && errors.userName}
                        />
                     </div>

                     <div className='my-2'>
                        <TextField
                           fullWidth
                           required
                           size='small'
                           label='Mobile'
                           name='mobile_number'
                           value={values.mobile}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.mobile && Boolean(errors.mobile)}
                           helperText={touched.mobile && errors.mobile}
                        />
                     </div>

                     <div className='my-2'>
                        <TextField
                           fullWidth
                           required
                           size='small'
                           label='Email'
                           name='email'
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.email && Boolean(errors.email)}
                           helperText={touched.email && errors.email}
                        />
                     </div>

                     <div className='my-2'>
                        <TextField
                           fullWidth
                           required
                           multiline
                           rows={4}
                           placeholder='About'
                           size='small'
                           label='About'
                           name='about'
                           value={values.about}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           error={touched.about && Boolean(errors.about)}
                           helperText={touched.about && errors.about}
                        />
                     </div>
                  </DialogContent>
                  <DialogActions>
                     <Button onClick={() => setOpen(!open)}>Disagree</Button>
                     <LoadingButton
                        // fullWidth
                        variant='outlined'
                        type='submit'
                        loading={isSubmitting}
                        loadingPosition='start'
                        startIcon={<SaveIcon />}>
                        Save
                     </LoadingButton>
                  </DialogActions>
               </form>
            </Dialog>
         </div>
      </div>
   );
};

export default ProfileUpdateModel;
