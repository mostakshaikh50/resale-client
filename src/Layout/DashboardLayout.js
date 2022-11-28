import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useBuyer(user?.email);

    console.log(isSeller);


    // if(isAdmin === true){
    //     menu = <>
    //     <li><Link to="/dashboard">My Orders</Link></li>
    //     <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
    //     <li><Link to="/dashboard/myproduct">My Product</Link></li>
    //     </>
    // }
    // if (isBuyer === true && user?.uid) {
    //      menu =<><li><Link to="/dashboard">My Orders</Link></li></>

    // } 
    // if(isSeller === true){
    //     menu = <>
    //     <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
    //     <li><Link to="/dashboard/myproduct">My Product</Link></li>
    //     </>
    // }

    // else {
    //   loginButton = <LoginButton />;
    // }

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                    
                        {user?.isBuyer || user?.uid && <li><Link to="/dashboard">My Order</Link></li>}
                        {
                            isAdmin && <>                                
                                <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                                <li><Link to="/dashboard/myproduct">My Product</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;