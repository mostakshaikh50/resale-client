import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
   // console.log(product.products[0].name);
    //console.log(product.products[1].name);
    console.log(product);
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <img src={product.brands.img} alt="service-img" />
            <div className="card-body">
                <h2 className="card-title font-serif text-green-900 font-bold">{product.brands.name}</h2>
                <p className='text-lg'><span className='font-bold'>Original Price: </span> <span className='font-bold'>{product.brands.originalPrice}</span></p>
                <p className='text-lg'><span className='font-bold'>Resale Price: </span> <span className='font-bold'>{product.brands.resalePrice}</span></p>
                <p className='text-lg'><span className='font-bold'>Phone: </span>{product.brands.phone}</p>
                <p className='text-lg'><span className='font-bold'>Location: </span>{product.brands.location}</p>
                <p className='text-lg'><span className='font-bold'>Year of Use: </span>{product.brands.use}</p>
                <p className='text-lg'><span className='font-bold'>Description: </span><span className=' font-serif '>{product.brands.details.slice(0, 100)}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/booking/${product._id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>


        // <div>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //         <figure><img src={""} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">
        //                 {product.name}
        //                 <div className="badge badge-secondary">{product.price} </div>
        //             </h2>
        //             <p>{product.details}</p>
        //             <div className="card-actions justify-end">
        //                 {/* <label onClick={() => setBookProducts(product)} htmlFor="booking-modal" className="badge badge-outline btn btn-sm btn-primary">Book Now </label> */}



        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductsCard;