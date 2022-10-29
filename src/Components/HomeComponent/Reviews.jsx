import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviewsData } from '../../test/test_data.js';

const Reviews = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      cssEase: 'linear',
      arrows: false,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <div className='py-16 sm:px-6 md:px-10 lg:px-24 xl:px-60 2xl:px-80 bg-slate-100'>
         <Slider {...settings}>
            {reviewsData.map(item => {
               const { id, userName, review, img } = item;
               return (
                  <div key={id} className='my-3'>
                     <div className='mx-4 space-y-2 px-6 py-10 shadow-lg rounded-3xl bg-white'>
                        <div className='flex justify-between items-center'>
                           <div className='w-20 h-20 rounded-full relative'>
                              <img
                                 src={img}
                                 alt=''
                                 className='w-full h-full absolute rounded-full'
                              />
                           </div>
                           <h3 className='overflow-auto h-[56px] capitalize font-semibold text-md lg:text-lg'>
                              {userName}
                           </h3>
                        </div>
                        <div>
                           <p>{review}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </Slider>
      </div>
   );
};

export default Reviews;
