const AboutStickk = () => {
   const imgUrl =
      'http://prescriptionpsychiatrists.com.ph/wp-content/uploads/2020/08/4824-scaled.jpg';
   return (
      <div className='space-y-6 lg:space-y-0 lg:flex lg:justify-around items-center min-h-[550px] lg:border-b px-4 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
         <div>
            <img
               src={imgUrl}
               className='h-[500px] w-[500px] m-auto lg:m-0'
               alt='img not found'
            />
         </div>
         <div className='space-y-6 lg:w-5/12 text-center lg:text-start'>
            <h1 className='text-slate-700 text-2xl md:text-3xl lg:text-6xl capitalize'>
               Who's stickKing?
            </h1>
            <p className='md:text-xl'>
               stickK is an ever evolving Commitment platform with the tools to
               help you achieve your goals. Here are some people from all around
               the world who are stickKing to theirs.
            </p>
         </div>
      </div>
   );
};

export default AboutStickk;
