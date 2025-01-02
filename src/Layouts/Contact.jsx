import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../Components/common/PageCover';
import pageCover from '../assets/contact/banner.jpg'
import Heading from '../Components/common/Heading';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <PageCover bgimage={pageCover} title={'contact us'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur accusamus ipsa officia odio perspiciatis voluptate commodi.'} />


            <div className='my-20'>
                <Heading
                    heading={'our location'}
                    subHeading={'---Visit Us---'}
                ></Heading>

            </div>


            <div className='my-20'>
                <Heading
                    heading={'contact form'}
                    subHeading={'---Send Us a Message---'}
                ></Heading>

            </div>
        </div>
    );
};

export default Contact;