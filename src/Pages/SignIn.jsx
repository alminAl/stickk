import { InputLabel, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin.jsx';
import { loginValidation } from '../validation/FormValidation.js';

// ! main function is starting here

const SignIn = () => {
   const { login, error, isLoading } = useLogin();
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
         email: '',
         password: '',
      },
      validationSchema: loginValidation,
      onSubmit: async (data, actions) => {
         const { email, password } = data;
         try {
            console.log(email, password);
            login(email, password);
            resetForm();
         } catch (err) {
            console.log(err.message);
         }
      },
   });
   return (
      <div className='flex justify-center items-center min-h-screen'>
         <div className='sm:px-10 lg:px-0 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 space-y-6'>
            <form
               onSubmit={handleSubmit}
               noValidate
               autoComplete='off'
               className='space-y-6'>
               <div className='space-y-1'>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <TextField
                     fullWidth
                     required
                     placeholder='Your Email'
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

               <div className='space-y-1'>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <TextField
                     fullWidth
                     required
                     placeholder='Your Password'
                     size='small'
                     label='Password'
                     name='password'
                     type='password'
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     error={touched.password && Boolean(errors.password)}
                     helperText={touched.password && errors.password}
                  />
               </div>

               <div>
                  <button
                     type='submit'
                     className='signIn-btn rounded-xl border-black bg-black text-white mt-6 hover:text-black hover:bg-transparent duration-200'
                     disabled={isLoading}>
                     SIGN IN
                  </button>
               </div>
            </form>
            {error && <div className='text-red-500'>{error}</div>}

            <div className='flex items-center justify-center space-x-5'>
               <p className='capitalize text-lg font-sans'>
                  don't have an account ?{' '}
               </p>
               <Link
                  to='/signin'
                  className='border border-black px-3 py-2 rounded-lg hover:bg-black hover:text-white duration-150'>
                  Register
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
