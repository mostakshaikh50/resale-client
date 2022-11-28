import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm('');

    //const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const { data: productCategories, isLoading } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productCategory');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {

        const product = {
            name: data.name,
            price: data.price,
            condition: data.condition,
            phone: data.phone,
            location: data.location,
            category: data.category,
            role: data.role,
            use: data.use,

        }

        // save doctors info to the database
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/myproduct');
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type="text"
                        {...register("name")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Price</span></label>
                    <input type="text"
                        {...register("price")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <input type="text"
                        {...register("condition")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Phone</span></label>
                    <input type="text"
                        {...register("phone")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location")}
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product Category</span></label>
                    <select
                        {...register('category')}
                        className="select input-bordered w-full max-w-xs">
                        <option>Please select a Category</option>
                        {
                            productCategories?.map(category => <option
                                key={category._id}
                                value={category.CategoryName}
                            >{category.CategoryName}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Role</span></label>
                    <select
                        {...register('role')}
                        className="select input-bordered w-full max-w-xs">
                        <option defaultValue={"Available"}>Available</option>
                        <option>Sold</option>

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Use</span></label>
                    <input type="text"
                        {...register("use")}
                        className="input input-bordered w-full max-w-xs" />

                </div>

                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;