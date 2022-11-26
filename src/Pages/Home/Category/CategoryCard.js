import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { _id, categoryImg, categoryName, description } = category;    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <img src={categoryImg} alt="service-img" />
            <div className="card-body">
                <h2 className="card-title font-serif text-green-900 font-bold">{categoryName}</h2>
                <p className='text-lg'>Description: {description.slice(0, 60)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;