import { goalsData } from '../../test/test_data.js';

const Goals = () => {
   return (
      <div className='space-y-10 py-20 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
         <div className='text-center'>
            <h3 className='capitalize text-xl md:text-3xl lg:text-4xl pt-10 font-semibold'>
               <span className='block font-light'>
                  More than{' '}
                  <span className='font-extrabold'>10 communities</span>
               </span>
               <span className='block font-light'>
                  to support and help you{' '}
                  <span className='font-extrabold'>reach your goals.</span>
               </span>
            </h3>
         </div>
         <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 sm:px-0'>
            {goalsData.map(goal => {
               const { id, goalName, member, goalImg, link } = goal;
               return (
                  <a key={Math.random()} href={link} target='_blank' rel='noopener noreferrer'>
                     <div
                        key={id}
                        className='flex justify-start items-center space-x-4 bg-[#F5EBF4] p-6 rounded-xl'>
                        <div>
                           <img src={goalImg} alt='' />
                        </div>
                        <div className='flex flex-col'>
                           <strong className='capitalize font-extrabold text-lg lg:text-xl text-slate-800'>
                              {goalName}
                           </strong>
                           <span>{member}</span>
                        </div>
                     </div>
                  </a>
               );
            })}
         </div>
      </div>
   );
};

export default Goals;
