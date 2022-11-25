import React from 'react';
import './SliderItem.css'

const SliderItem = ({slide}) => {
    const {image, id, prev, next} =slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-yellow-600'>
                        TUITION<br />
                    </h1>
                    <p className='text-lg text-white ml-4'>Way to Knowledge</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className=' text-xl text-white'>Improve your skill, provides assistance or tutelage to one or more people on certain subject areas or skills. specially Math, Physics, Chemistry & ICT</p>
                </div>                
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5 text-yellow-600">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle text-yellow-600">❯</a>
                </div>
            </div>
    );
};

export default SliderItem;