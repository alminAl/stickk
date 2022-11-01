import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpValidation } from '../validation/FormValidation.js';
import { InputLabel, TextField } from '@mui/material';
import { useSignUp } from '../hooks/useSignup.jsx';

//!  main function is starting here
const Register = () => {
   const { signUp, isLoading, error } = useSignUp();

   // use Formic hook
   const {
      handleChange,
      handleBlur,
      values,
      touched,
      errors,
      handleSubmit,
      resetForm,
   } = useFormik({
      initialValues: {
         userName: '',
         mobile: '',
         email: '',
         password: '',
         about: '',
      },
      validationSchema: signUpValidation,
      onSubmit: async (data, actions) => {
         const { userName, mobile, email, password, about } = data;
         try {
            console.log(data);
            signUp(userName, mobile, email, password, about);
            resetForm();
         } catch (err) {
            console.log(err.message);
         }
      },
   });

   return (
      <div className='flex justify-center items-center min-h-full py-28'>
         <div className='sm:px-10 lg:px-0 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 space-y-6'>
            <form
               onSubmit={handleSubmit}
               noValidate
               autoComplete='off'
               className='space-y-6'>
               <div className='space-y-1'>
                  <TextField
                     fullWidth
                     required
                     placeholder='Enter Name'
                     size='small'
                     type="text"
                     label='Your Name'
                     name='userName'
                     value={values.userName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.userName && Boolean(errors.userName)}
                     helperText={touched.userName && errors.userName}
                  />
               </div>
               <div className='space-y-1'>
                  <TextField
                     fullWidth
                     required
                     placeholder='Enter Mobile Number'
                     size='small'
                     label='Your Mobile Number'
                     type='tel'
                     name='mobile'
                     value={values.mobile}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.mobile && Boolean(errors.mobile)}
                     helperText={touched.mobile && errors.mobile}
                  />
               </div>
               <div className='space-y-1'>
                  <TextField
                     fullWidth
                     required
                     placeholder='Enter Email'
                     size='small'
                     label='Your Email'
                     name='email'
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.email && Boolean(errors.email)}
                     helperText={touched.email && errors.email}
                  />
               </div>

               <div className='space-y-1'>
                  <TextField
                     fullWidth
                     required
                     placeholder='Enter Password'
                     size='small'
                     label='Your Password'
                     name='password'
                     type='password'
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.password && Boolean(errors.password)}
                     helperText={touched.password && errors.password}
                  />
               </div>

               <div className='space-y-2'>
                  <InputLabel htmlFor='about'>About</InputLabel>
                  <TextField
                     fullWidth
                     required
                     size='small'
                     label='About Yourself'
                     multiline
                     rows={8}
                     name='about'
                     value={values.about}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.about && Boolean(errors.about)}
                     helperText={touched.about && errors.about}
                  />
               </div>

               <div>
                  <button
                     type='submit'
                     className='signIn-btn rounded-xl border-black bg-black text-white mt-6 hover:text-black hover:bg-transparent duration-200'
                     disabled={isLoading}>
                     REGISTER
                  </button>
               </div>
            </form>
            {error && <div className='text-red-500'>{error}</div>}

            <div className='flex items-center justify-center space-x-5'>
               <p className='capitalize text-lg font-sans'>
                  all ready have an account ?{' '}
               </p>
               <Link
                  to='/login'
                  className='border border-black px-3 py-2 rounded-lg hover:bg-black hover:text-white duration-150'>
                  Sign In
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Register;
