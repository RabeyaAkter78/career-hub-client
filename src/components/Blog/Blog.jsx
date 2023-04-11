import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div className='container mx-auto text-2xl font-semibold  text-center  mt-12'>
            <div className='' >
                <div className='blog-question mt-4'>
                    <li className='text-indigo-500'> When should you use context API?</li>
                    <li >Context is primarily used when some data needs to be accessible by many components at different nesting levels.</li>
                </div>
                <div className='blog-question mt-4'>
                    <li className='text-indigo-500'> What is a custom hook?</li>
                    <li>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</li>
                </div>
                <div className='blog-question mt-4'>
                    <li className='text-indigo-500'> What is useRef?</li>
                    <li>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference.</li>
                </div>
                <div className='blog-question mt-4 mb-8'>
                    <li className='text-indigo-500'> What is useMemo?</li>
                    <li>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</li>
                </div>
               
            </div>
        

        </div>
    );
};

export default Blog;