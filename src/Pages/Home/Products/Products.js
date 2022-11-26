import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../Home/ProductsCard/ProductsCard';

const Products = () => {    

    const products = useLoaderData()
    
    return (

        <div>
            <div className='text-center mb-4'>
                <p className="text-3xl font-bold text-green-900">Category wise product</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
        </div>

    );
};

export default Products;