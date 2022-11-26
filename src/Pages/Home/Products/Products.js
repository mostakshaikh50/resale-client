import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../Home/ProductsCard/ProductsCard';

const Products = () => {
    const [bookProducts, setBookProducts] = useState(null)

    const products = useLoaderData()
    //console.log(products);
    return (

        <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-green-900">Our Brands</p>
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




        // <div>
        //    <div>
        //         <div className='grid grid-cols-1 mx-auto md:grid-cols-3 mt-10'>
        //             {
        //                 products.map(product => <ProductsCard product={product} key={product._id}
        //                     setBookProducts={setBookProducts}

        //                 ></ProductsCard>)
        //             }
        //         </div>
        //     </div>
        // </div>
    );
};

export default Products;