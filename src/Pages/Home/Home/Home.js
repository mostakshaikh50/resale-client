import React from 'react';
import AdvertiseItem from '../AdvertiseItem/AdvertiseItem';
import Category from '../Category/Category';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-5'>
            <Slider></Slider>
            <AdvertiseItem></AdvertiseItem>
            <Category></Category>
        </div>
    );
};

export default Home;