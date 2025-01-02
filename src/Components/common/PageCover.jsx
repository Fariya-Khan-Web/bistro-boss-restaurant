import React from 'react';

const PageCover = ({bgimage, title, description}) => {
    return (
        <div
            className="hero min-h-[calc(100vh-200px)]"
            style={{
                backgroundImage: `url("${bgimage}")`,
            }}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-neutral-content text-center max-w-screen-xl md:px-80 py-16 bg-black/45">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                </div>
            </div>
           
        </div>
    );
};

export default PageCover;   