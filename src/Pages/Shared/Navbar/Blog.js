import React from 'react';

const Blog = () => {
    return (
        <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title text-xl text-green-700 font-bold mt-6">
                Click me to show/hide
            </div>
            <div className="collapse-content">
                <h1 className='text-3xl text-amber-500'>What are the different ways to manage a state in a React application?</h1>
                <span className='text-xl'>Ans: <p>There are four main types of state you need to properly manage in your React apps:

                   <li>Local state</li> 
                   <li>Global state</li> 
                   <li>Server state</li> 
                   <li>URL state</li> 
                    
                
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.
                </p></span>

                <br />
                <h1 className='text-3xl text-amber-500'>How does prototypical inheritance work?</h1>
                <span className='text-xl'>Ans: <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p></span>

                <br />
                <h1 className='text-3xl text-amber-500'>What is a unit test? Why should we write unit tests?</h1>
                <span className='text-xl'>Ans: <p><strong>The main objective of unit testing is to isolate written code to test and determine if it works as intended.</strong> Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p></span>


                <br />
                <h1 className='text-3xl text-amber-500'>React vs. Angular vs. Vue?</h1>
                <span className='text-xl'>Ans: <p>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You. It's easier to learn Vue than angular and it reasonably takes the same amount of time and effort as learning react. Although some people argue that it's even easier to learn than react but that's of course subjective and varies from person to person.</p></span>



            </div>
        </div>
    );
};

export default Blog;