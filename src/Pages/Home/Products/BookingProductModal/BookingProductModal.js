import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const BookingProductModal = ({ bookProducts, setBookProducts }) => {
    const { user } = useContext(AuthContext)

    const handleSubmitBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const productsName = form.productName.value
        const price = form.resalePrice.value
        const location = form.location.value
        const ProductImg = bookProducts.brands.img
        //const date = form.date.value
        // console.log(name, email, phone);


        const bookings = {

            name,
            email,
            phone,
            productsName,
            price,
            location,
            ProductImg
        }

        fetch('https://laptop-resale-server-three.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(bookings)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookProducts(null)
                    toast.success('Booking Confirmed')
                }
            })



    }
    return (
        <div>            
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className="">
                        <div className="w-16 rounded">
                            <img src={bookProducts.brands.img} alt='' />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold center mb-5">{bookProducts.brands.name}</h3>

                    <form onSubmit={handleSubmitBooking} action="" className='grid grid-cols-1 gap-3'>

                        <input name='productName' disabled value={bookProducts.brands.name} type="text" placeholder="Your Name" className="input input-bordered input-primary w-full " />
                        
                        <input name='name' disabled type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered input-primary w-full " />

                        <input name='email' disabled readOnly defaultValue={user?.email} type="email" placeholder="Email Address" className="input input-bordered input-primary w-full " />
                        
                        <input name='resalePrice' disabled value={`${bookProducts.brands.resalePrice}`} className="input input-bordered input-primary w-full " />

                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-primary w-full " />
                        
                        <input name='location' type="text" placeholder="Add Your Location" className="input input-bordered input-primary w-full " />

                        <br />
                        <input className='w-full btn btn-primary ' type="Submit" value="Submit" />

                    </form>


                </div>
            </div>
        </div>
    );
};

export default BookingProductModal;