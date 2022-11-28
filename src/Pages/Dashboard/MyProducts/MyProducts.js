import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const MyProducts = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
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
                            <th>Description</th>
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
                                <td>{product.description}</td>
                                <td>{product.use}</td>
                                
                                <td>
                                    <label onClick={() => setDeletingDoctor(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {
                deletingDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undo`}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            } */}
        </div>
    );
};

export default MyProducts;