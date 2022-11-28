import { useQuery } from '@tanstack/react-query';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm('');
    const { createUser, updateUser, googleProviderLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
     const navigate = useNavigate();


     const googleAuthProvider = new GoogleAuthProvider();

    if (token) {
        navigate('/');
    }


const handleSignUp = data => {
    //console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            //console.log(user);
            toast('User Created Successfully!');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() => {
                    //console.log(data);
                    saveUser(data.name, data.email, data.position);
                })
                .catch(err => console.log(err));
        })
        .catch(error => {
            console.log(error);
            setSignUpError(error.message);
        });
}

const handleGoogleSignIn = () => {  


    googleProviderLogin(googleAuthProvider)
        .then(result => {
            const user = result.user;
            saveUser(user.displayName, user.email, "Buyer");
            
              
            setCreatedUserEmail(user.email);          
            
        })
        .catch(error => console.error(error));
}

const saveUser = (name, email, position ) => {
    const user = { name, email, position };

    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            setCreatedUserEmail(email);
            
        })

}
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "password must be 6 character or longer" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[@$!*#&])(?=.*[0-9])/, message: "Password must be strong(uppercase, lower case, special char, number)" }
                                })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Position</span></label>
                            <select
                                {...register('position')}
                                className="select input-bordered w-full max-w-xs">                            
                                <option defaultValue={"Buyer"}>Buyer</option>
                                <option>Seller</option>

                            </select>
                        </div>

                    <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account ?<Link className='text-green-700 font-bold' to="/login"> Please Login</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;