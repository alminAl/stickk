const Banner = () => {
   const imgUrl =
      'http://prescriptionpsychiatrists.com.ph/wp-content/uploads/2020/08/4824-scaled.jpg';
   return (
      <div className='space-y-6 lg:space-y-0 lg:flex lg:justify-around items-center min-h-[550px] lg:border-b px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
         <div>
            <img
               src={imgUrl}
               className='h-[590px] w-[600px] m-auto lg:m-0'
               alt='img not found'
            />
         </div>
         <div className='space-y-6 lg:w-5/12 text-center lg:text-start'>
            <h1 className='text-slate-700 text-2xl md:text-3xl lg:text-4xl uppercase font-semibold'>
               Ready to{' '}
               <strong className='font-extrabold text-black'>
                  finally stickK
               </strong>{' '}
               to your Goals?
            </h1>
            <p className='capitalize font-bold text-xl lg:text-3xl'>
               i commit to
            </p>
            <div className='w-full'>
               <select
                  name=''
                  // id=''
                  className='w-full border border-stone-200 h-14 px-6 rounded-2xl text-2xl bg-stone-200'>
                  <option disabled value='select a goal'>
                     select a goal
                  </option>
                  <option value='lose weight'>lose weigh</option>
                  <option value='exercise regularly'>exercise regularly</option>
                  <option value='quit smoking'>quit smoking</option>
                  <option value='race'>race</option>
                  <option value='maintain weight'>maintain weight</option>
                  <option value='custom goad (everything else)'>
                     custom goad (everything else)
                  </option>
               </select>
            </div>
         </div>
      </div>
   );
};

export default Banner;
