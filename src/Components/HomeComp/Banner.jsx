import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

// import required modules
import { Parallax, Pagination, Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import slide1 from '../../assets/home/01.jpg'
import slide2 from '../../assets/home/02.jpg'
import slide3 from '../../assets/home/03.png'
import slide4 from '../../assets/home/04.jpg'
import slide5 from '../../assets/home/05.png'
import slide6 from '../../assets/home/06.png'

const Banner = () => {
    return (
        <div className=' mx-auto text-white text-center'>
            <Swiper
                // install Swiper modules
                modules={[Parallax, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                // navigation  
                pagination={{ 
                    dynamicBullets: true,
                    clickable: true
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                // parallax={true}
                loop={true}
                // onSwiper={(swiper) => { }}
                // onSlideChange={() => { }}
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

export default Banner;