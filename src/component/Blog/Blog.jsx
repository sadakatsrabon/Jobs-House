import React from 'react';

const Blog = () => {
    return (
        <div className='md:flex '>
            <div className='bg-stone-500 mt-10 p-8 rounded-md'>
                <h1 className='text-6xl text-purple-900 text-center mb-5'>Questions</h1>
                <hr />
                <h2 className='text-2xl'>Question-1: <br /> When use context API?</h2>
                <br />
                <h2 className='text-2xl'>Question-2: <br /> What is custom hook?</h2>
                <br />
                <h2 className='text-2xl'>Question-3: <br /> What is useRef?</h2>
                <br />
                <h2 className='text-2xl'>Question-4: <br /> What is useMemo?</h2>
            </div>

            <div className='bg-slate-400 mt-10 p-8 rounded-md'>
                <h1 className='text-6xl text-red-800 text-center mb-5'>Answer Script</h1>
                <hr />
                <h4>Answer to the question no: 1</h4>
                <p>To avoid prop drilling, We use this react hook (useContext()). By context api we can pass a data to any component directly.</p>
                <br />
                <h4>Answer to the question no: 2</h4>
                <p>A function that reusable and encapsulates some common logic that can be shared across multiple components is custom hook in react.It allow to extract stateful logic from a component  and reuse it in another component with no repeat.</p>
                <br />
                <h4>Answer to the question no: 3</h4>
                <p>useRef is a react component that return a mutable ref object. Which properties is innitialize to pass the argument. it onle return one item.</p>
                <br />
                <h4>Answer to the question no: 4</h4>
                <p>The useMemo is a hook used in the functional component of react that returns a memoized value. It lets you cache the result of a calculation between re-renders.</p>
            </div>
        </div>
    );
};

export default Blog;