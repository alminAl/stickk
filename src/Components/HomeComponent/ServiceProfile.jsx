import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const ServiceProfile = () => {
   return (
      <div className='mt-[100px]'>
         <div className='flex justify-between items-center h-72 bg-[#4F0C81] text-white sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56 border border-white'>
            <div className='text-center space-y-3'>
               <div className='text-center'>
                  <AttachMoneyIcon className='text-6xl' />
               </div>
               <h3 className='text-5xl'>60M</h3>
               <p>dollars on the line</p>
            </div>
            <div className='text-center space-y-3'>
               <div className='text-center'>
                  <BorderColorIcon className='text-6xl' />
               </div>
               <h3 className='text-5xl'>585K</h3>
               <p>commitments created</p>
            </div>
            <div className='text-center space-y-3'>
               <div className='text-center'>
                  <FitnessCenterIcon className='text-6xl' />
               </div>
               <h3 className='text-5xl'>1M</h3>
               <p>workouts completed</p>
            </div>
            <div className='text-center space-y-3'>
               <div className='text-center'>
                  <SmokeFreeIcon className='text-6xl' />
               </div>
               <h3 className='text-5xl'>55M</h3>
               <p>cigarettes not smoked</p>
            </div>
         </div>
      </div>
   );
};

export default ServiceProfile;
