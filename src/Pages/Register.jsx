import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <div className='flex justify-center items-center min-h-full py-28'>
         <div className='sm:px-10 lg:px-0 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 space-y-6'>
            <form className='space-y-6'>
               <label className='block space-y-1'>
                  <span className='block text-lg capitalize'>Your Name</span>
                  <input
                     type='text'
                     className='w-full p-3 rounded-xl bg-transparent border border-black'
                     placeholder='Enter Your Name'
                  />
               </label>
               <label className='block space-y-1'>
                  <span className='block text-lg capitalize'>
                     Your mobile number
                  </span>
                  <input
                     type='number'
                     className='w-full p-3 rounded-xl bg-transparent border border-black'
                     placeholder='+88 '
                  />
               </label>
               <label className='block space-y-1'>
                  <span className='block text-lg capitalize'>Your Email</span>
                  <input
                     type='email'
                     className='w-full p-3 rounded-xl bg-transparent border border-black'
                     placeholder='Enter Your Email'
                  />
               </label>

               <label className='block space-y-1'>
                  <span className='block text-lg capitalize'>
                     Your password
                  </span>
                  <input
                     type='email'
                     className='w-full p-3 rounded-xl bg-transparent border border-black'
                     placeholder='Enter Your Password'
                  />
               </label>

               <label className='block space-y-1'>
                  <span className='block text-lg capitalize'>
                     Profile Image
                  </span>
                  <input
                     type='file'
                     className='w-full p-3 rounded-xl bg-transparent border border-black'
                     placeholder='Enter Your Password'
                  />
               </label>

               <label className='block space-y-2'>
                  <span className='block text-xl capitalize text-white'>
                     About Yourself
                  </span>
                  <textarea
                     type='text'
                     rows='10'
                     className='w-full p-3 rounded-lg bg-transparent border border-black text-black'
                     placeholder='Your Message'
                  />
               </label>

               {/* submit btn */}
               <label className='block'>
                  <input
                     type='submit'
                     className='signIn-btn rounded-xl border-black bg-black text-white hover:text-black hover:bg-transparent duration-200'
                     value='REGISTER'
                  />
               </label>
            </form>
            <div className='flex items-center justify-center space-x-5'>
               <p className='capitalize text-xl'>
                  all ready have an account ?{' '}
               </p>
               <Link
                  to='/sign_in'
                  className='register-btn rounded-xl hover:text-[#ff7900] hover:bg-transparent duration-200'>
                  SIGN IN
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Register;
