import React from 'react';

const Heading = ({heading, subHeading}) => {
    return (
        <div className='text-center max-w-fit mx-auto'>
            <p className='text-[#D99904] my-2'>{subHeading}</p>
            <h2 className='text-3xl border-y-2 py-3 px-12'>{heading}</h2>
        </div>
    );
};

export default Heading;