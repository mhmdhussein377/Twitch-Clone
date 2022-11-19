import React from 'react'

const Hero = () => {
    return (
        <div id="hero" className="p-2 md:p-8">
            <div className='relative pt-[56.25%]' >
                <iframe
                    className="absolute top-0 right-0 left-0 bottom-0 w-full h-full"
                    src="https://www.youtube.com/embed/2-nkABqpV44"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Hero