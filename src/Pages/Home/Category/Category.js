import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json()
                .then(data => setCategories(data)))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-yellow-600">Our Brands</p>
            </div>
            {/* <div className='card-actions justify-end'>
                <Link to="/allservices/">
                    <button className="btn btn-warning mb-10 mr-10">See All</button>
                </Link>
            </div> */}
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;