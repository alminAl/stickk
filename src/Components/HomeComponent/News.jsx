import { newsData } from '../../test/test_data.js';
const News = () => {
   return (
      <div className='bg-slate-50 space-y-10 py-20 sm:px-6 md:px-10 lg:px-24 xl:px-40 2xl:px-56'>
         <div className='text-center'>
            <h3 className='capitalize text-xl md:text-3xl lg:text-4xl font-semibold'>
               In the news
            </h3>
            <a
               href='https://www.stickk.com/aboutus#news'
               target='_blank'
               rel='noopener noreferrer'>
               View More Articles
            </a>
         </div>

         <div className='md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {newsData.map(item => {
               const { id, title, detail, link } = item;
               return (
                  <div key={id} className='space-y-4'>
                     <h3 className='capitalize text-xl lg:text-3xl'>{title}</h3>
                     <p>{detail}</p>

                     <div className='pt-4'>
                        <a
                           href={link}
                           target='_blank'
                           rel='noopener noreferrer'
                           className='register-btn rounded-full hover:bg-transparent hover:text-[#ff7900] duration-200'>
                           Read More
                        </a>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default News;
