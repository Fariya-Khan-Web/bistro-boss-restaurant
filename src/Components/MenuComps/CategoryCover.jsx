import React from 'react';
import { Parallax, Background } from 'react-parallax';

const CategoryCover = ({ img, category, description }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='md:p-40'>
                    {/* <div className="hero-overlay bg-opacity-30"></div> */}
                    <div className="hero-content text-neutral-content text-center mx-auto max-w-screen-lg py-14 bg-black/40">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{category}</h1>
                            <p className="mb-5">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default CategoryCover;