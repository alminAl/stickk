const Error = () => {
   return (
      <div className='flex items-center justify-center min-h-screen'>
         <div className='text-center'>
            <h3 className='text-3xl text-rose-700 font-bold uppercase my-2'>
               404! page not found
            </h3>
            <p className='text-base font-bold capitalize'>
               sorry invalid path name try again
            </p>
         </div>
      </div>
   );
};

export default Error;
