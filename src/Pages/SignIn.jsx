import { Link } from 'react-router-dom';

const SignIn = () => {
   return (
      <div className='flex justify-center items-center min-h-screen'>
         <div className='sm:px-10 lg:px-0 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 space-y-6'>
            <form className='space-y-6'>
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

               <label className='block'>
                  <input
                     type='submit'
                     className='signIn-btn rounded-xl border-black bg-black text-white hover:text-black hover:bg-transparent duration-200'
                     value='SIGN IN'
                  />
               </label>
            </form>
            <div className='flex items-center justify-center space-x-5'>
               <p className='capitalize text-xl'>don't have an account ? </p>
               <Link
                  to='/register'
                  className='register-btn rounded-xl hover:text-[#ff7900] hover:bg-transparent duration-200'>
                  REGISTER
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
