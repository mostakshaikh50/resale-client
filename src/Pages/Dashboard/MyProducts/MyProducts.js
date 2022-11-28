import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }
    const { data: addProducts, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = fetch('http://localhost:5000/addproduct', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await (await res).json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = product => {
        console.log(product);
        fetch(`http://localhost:5000/addproduct/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.name} deleted successfully`)
                }
            })
    }

    const handleAvailable = available => {

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Role</th>
                            <th>Use</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addProducts?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                {/* <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td> */}
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.condition}</td>
                                <td>{product.phone}</td>
                                <td>{product.location}</td>
                                <td>{product.category}</td>
                                <td>{
                                    (product?.role === 'available')
                                        ?
                                        <button className='btn btn-primary btn-sm'>Advertise</button>
                                        :
                                        <button onClick={() => handleAvailable(product)} className='btn btn-xs btn-primary'>Available</button>}</td>

                                <td>{product.use}</td>

                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undo`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;