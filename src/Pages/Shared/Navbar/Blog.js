import React from 'react';

const Blog = () => {
    return (
        <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold text-gray-800 mt-6">
                Click me to show/hide
            </div>
            <div className="collapse-content">
                <h1 className='text-3xl text-amber-500'>Difference between SQL and NoSQL?</h1>
                <span className='text-xl'>Ans:<p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). 
                 Whereas, NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p></span>
                <li className='text-xl'>SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.</li>
                <li className='text-xl'>NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.</li>
            
                <br />
                <h1 className='text-3xl text-amber-500'>What is JWT, and how does it work?</h1>
                <span className='text-xl'>Ans: <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p></span>
                
                <br />
                <h1 className='text-3xl text-amber-500'>What is the difference between javascript and NodeJS?</h1>
                <li className='text-xl'>Javascript is a programming language that is used for writing scripts on the website. </li>
                <li className='text-xl'>NodeJS is a Javascript runtime environment. </li>
                <li className='text-xl'>Javascript can only be run in the browsers.</li>
                <li className='text-xl'>We can run Javascript outside the browser with the help of NodeJS</li>
                <li className='text-xl'>It is basically used on the client-side.</li>
                <li className='text-xl'>It is mostly used on the server-side.</li>
 
                <br />
                <h1 className='text-3xl text-amber-500'>How does NodeJS handle multiple requests at the same time?</h1>
                <span className='text-xl'>Ans: <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p></span>
                
                
                
            </div>
        </div>
    );
};

export default Blog;