import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';


import slide1 from '../../assets/home/01.jpg'
import slide2 from '../../assets/home/02.jpg'
import slide3 from '../../assets/home/03.png'
import slide4 from '../../assets/home/04.jpg'
import slide5 from '../../assets/home/05.png'
import slide6 from '../../assets/home/06.png'


const SmBanner = () => {
    return (
        <div className='md:hidden'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[800px] w-full' src={slide6} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SmBanner;