import { Link } from 'react-router-dom';
import solutionOne from '../../images/stickK-Commit-D.png';
import logo from '../../images/stickk_logo_top.png';
import solutionTwo from '../../images/stickK-ForPros-D.png';
import logo2 from '../../images/logo-forPros.png';
import logo3 from '../../images/logo-workplaces.png';
import solution3 from '../../images/stickK-Workplaces-D.png';

const Solutions = () => {
   return (
      <div className='bg-[#FFF7EE]'>
         <div className='text-center'>
            <h3 className='capitalize text-xl md:text-3xl lg:text-4xl pt-10 font-semibold'>
               Our Behavioral Solutions
            </h3>
         </div>
         <div className='space-y-6 lg:space-y-0 lg:flex lg:justify-around items-center min-h-[550px] border-b px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
            <div>
               <img
                  src={solutionOne}
                  className='h-[300px] w-[360px] m-auto lg:m-0'
                  alt='img not found'
               />
            </div>
            <div className='space-y-6 lg:w-5/12 text-center lg:text-start'>
               <div className='text-center'>
                  <img
                     src={logo}
                     className='w-36 inline-block lg:block'
                     alt=''
                  />
               </div>
               <p>
                  Provides an incentive and accountability tool for committed
                  individuals that are looking to leverage behavioral techniques
                  to their advantage and stickK to their goals. Like-minded goal
                  setters can interact, offer support, and share best practices.
               </p>
               <div className='space-x-4'>
                  <Link
                     to='/signin'
                     className='register-btn rounded-full bg-[#380A5A] border border-[#380A5A] px-6 text-white duration-200'>
                     SIGN UP
                  </Link>

                  <Link
                     to='/'
                     className='register-btn px-6 rounded-full text-[#380A5A] bg-transparent border border-[#380A5A] duration-200'>
                     LEARN MORE
                  </Link>
               </div>
            </div>
         </div>

         {/* solution two */}
         <div className='space-y-6 lg:space-y-0 lg:flex lg:justify-around items-center min-h-[550px] border-b px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
            <div className='space-y-6 lg:w-5/12 text-center lg:text-start'>
               <div>
                  <img
                     src={logo2}
                     className='w-36 inline-block lg:block'
                     alt=''
                  />
               </div>
               <p>
                  A platform made for professionals to encourage, incentivize,
                  and monitor progress of goals created by their customers,
                  clients, or followers.
               </p>
               <div className='space-x-4'>
                  <Link
                     to='/signin'
                     className='register-btn rounded-full bg-[#B74400] border border-[#B74400] px-6 text-white duration-200'>
                     SIGN UP
                  </Link>

                  <Link
                     to='/'
                     className='register-btn px-6 rounded-full text-[#B74400] bg-transparent border border-[#B74400] duration-200'>
                     LEARN MORE
                  </Link>
               </div>
            </div>
            <div className=''>
               <img
                  src={solutionTwo}
                  className='h-[300px] w-[360px] m-auto lg:m-0'
                  alt='img not found'
               />
            </div>
         </div>

         {/* solution three */}
         <div className='space-y-6 lg:space-y-0 lg:flex lg:justify-around items-center min-h-[550px] border-b px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
            <div>
               <img
                  src={solution3}
                  className='h-[300px] w-[360px] m-auto lg:m-0'
                  alt='img not found'
               />
            </div>
            <div className='space-y-6 lg:w-5/12 text-center lg:text-start'>
               <div>
                  <img
                     src={logo3}
                     className='w-36 inline-block lg:block'
                     alt=''
                  />
               </div>
               <p>
                  A platform made for professionals to encourage, incentivize,
                  and monitor progress of goals created by their customers,
                  clients, or followers.
               </p>
               <div className='space-x-4'>
                  <Link
                     to='/signin'
                     className='register-btn rounded-full bg-[#2F379F] border border-[#2F379F] px-6 text-white duration-200'>
                     SIGN UP
                  </Link>

                  <Link
                     to='/'
                     className='register-btn px-6 rounded-full text-[#2F379F] bg-transparent border border-[#2F379F] duration-200'>
                     LEARN MORE
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Solutions;
