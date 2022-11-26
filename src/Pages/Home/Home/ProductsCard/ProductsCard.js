import React from 'react';

const ProductsCard = ({ product }) => {
   // console.log(product.products[0].name);
    //console.log(product.products[1].name);
    console.log(product);
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <img src={product.brands.img} alt="service-img" />
            <div className="card-body">
                <h2 className="card-title font-serif text-green-900 font-bold">{product.brands.name}</h2>
                <p className='text-lg'>Description: </p>
                <div className="card-actions justify-end">
                    {/* <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link> */}
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