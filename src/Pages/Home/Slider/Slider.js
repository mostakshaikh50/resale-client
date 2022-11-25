import React from 'react';
import sliderImage1 from '../../../assets/slideImages/hp_s.webp'
import sliderImage2 from '../../../assets/slideImages/dell-s.jpg'
import sliderImage3 from '../../../assets/slideImages/lenevo_s.jpg'
import SliderItem from './SliderItem';

const sliderData = [
    {
        image: sliderImage1,
        prev: 3,
        id: 1, 
        next: 2
    },
    {
        image: sliderImage2,
        prev: 1,
        id: 2, 
        next: 3
    },
    {
        image: sliderImage3,
        prev: 2,
        id: 3, 
        next: 1
    }
]

const Slider = () => {
    return (
        <div className="carousel w-full py-10">
           {
            sliderData.map(slide => <SliderItem
              key={slide.id}
              slide={slide}
            ></SliderItem>)
           }
        </div>
    );
};

export default Slider;