import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide3.jpg'
import Heading from '../common/Heading';

const CategorySlide = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-14'>
            <Heading
                heading={'ORDER ONLINE'}
                subHeading={'---From 11:00am to 10:00pm---'}
            ></Heading>
            <Swiper
                breakpoints={{
                    360: {
                        slidesPerView: 2, // For small devices (screen width >= 360px)
                    },
                    640: {
                        slidesPerView: 3, // For small devices (screen width >= 640px)
                    },
                    1024: {
                        slidesPerView: 4, // For large devices (screen width >= 1024px)
                    },
                }}
                // slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    // dynamicBullets: true,
                    clickable: true,
                }}
                // loop={true}  
                modules={[Pagination,]}
                className="mySwiper"
            >
                <SwiperSlide className='py-8'>
                    <img className='h-[400px] w-full' src={slide1} />
                    <h4 className='text-3xl text-white text-center -mt-24'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide className='py-8'>
                    <img className='h-[400px] w-full' src={slide2} />
                    <h4 className='text-3xl text-white text-center -mt-24'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide className='py-8'>
                    <img className='h-[400px] w-full' src={slide3} />
                    <h4 className='text-3xl text-white text-center -mt-24'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide className='py-8'>
                    <img className='h-[400px] w-full' src={slide4} />
                    <h4 className='text-3xl text-white text-center -mt-24'>Desserts</h4>
                </SwiperSlide>
                <SwiperSlide className='py-8'>
                    <img className='h-[400px] w-full' src={slide5} />
                    {/* <h4 className='text-3xl text-white text-center -mt-24'>Soups</h4> */}
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CategorySlide;