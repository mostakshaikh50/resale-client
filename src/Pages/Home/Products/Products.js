import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../Home/ProductsCard/ProductsCard';
import BookingProductModal from './BookingProductModal/BookingProductModal';

const Products = () => {    
    const [bookProducts, setBookProducts] = useState(null)

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
                        setBookProducts={setBookProducts}
                    ></ProductsCard>)
                }
            </div>
            {
                    bookProducts &&
                    <BookingProductModal
                        bookProducts={bookProducts}
                        setBookProducts={setBookProducts}
                    ></BookingProductModal>
                }
        </div>

    );
};

export default Products;