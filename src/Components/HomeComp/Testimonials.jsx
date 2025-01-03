import React, { useEffect, useState } from 'react';
import Heading from '../common/Heading';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('http://localhost:2000/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })

    }, [])

    return (
        <div className='max-w-screen-xl mx-auto my-24'>
            <Heading
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></Heading>
            <div className='text-center'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        testimonials.map(testimonial =>
                            <SwiperSlide key={testimonial._id} className='px-12 md:px-28 py-8'>

                                {/* star rating */}
                                {/* <Rating
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    fractions={2}
                                /> */}

                                {/* meterial ui */}
                                <Rating name="disabled" size="large" value={testimonial.rating} disabled />

                                <p className='my-8'>{testimonial.details}</p>
                                <h2 className='text-2xl text-[#CD9003]'>{testimonial.name}</h2>
                            </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;