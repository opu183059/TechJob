import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1 className="grid content-center justify-center h-64 -mt-8 bg-[url('https://i.ibb.co/Kr0Rk79/Vector.png')] bg-no-repeat bg-left-bottom text-3xl font-extrabold bg-auto">
        Blogs
      </h1>
      <div className="question w-10/12 mx-auto mt-8 ">
        {/* qs 1  */}
        <div className=" p-5 my-5 transition duration-200 bg-indigo-200 hover:bg-indigo-500 hover:text-white rounded-lg">
          <h2 className=" text-2xl font-semibold">
            When should you use context API?
          </h2>
          <p className="mt-3 text-base">
            The <strong>Context API</strong> in React is used when we need to
            share data between multiple components that are not directly related
            to each other in the component tree. The Context API provides a way
            to pass data down the component tree without the need to pass props
            explicitly at every level.
          </p>
        </div>
        {/* qs 2 */}
        <div className=" p-5 my-5 transition duration-200 bg-indigo-200 hover:bg-indigo-500 hover:text-white rounded-lg">
          <h2 className=" text-2xl font-semibold">What is custom hook?</h2>
          <p className="mt-3 text-base">
            A <strong>custom hook</strong> in React is a JavaScript function
            that starts with the prefix "use" and enables to reuse stateful
            logic across multiple components. Custom hooks allow us to abstract
            away complex logic and share it between different components without
            having to repeat the same code multiple times. Custom hooks are
            built using the existing React hooks, such as useState, useEffect,
            and useContext, and can also use other custom hooks. By
            encapsulating the logic within a custom hook, we can create a
            reusable module of logic that can be easily imported and used in
            multiple components.
          </p>
        </div>
        {/* qs 3 */}
        <div className=" p-5 my-5 transition duration-200 bg-indigo-200 hover:bg-indigo-500 hover:text-white rounded-lg">
          <h2 className=" text-2xl font-semibold">What is useRef?</h2>
          <p className="mt-3 text-base">
            The <strong>useRef Hook</strong> allows you to persist values
            between renders. It can be used to store a mutable value that does
            not cause a re-render when updated. It can be used to access a DOM
            element directly. If we tried to count how many times our
            application renders using the useState Hook, we would be caught in
            an infinite loop since this Hook itself causes a re-render. To avoid
            this, we can use the useRef Hook. useRef() only returns one item. It
            returns an Object called current. <br />
            In summary, useRef is a hook in React that allows you to create a
            mutable reference that persists between component renders, and can
            be used to access DOM elements, store values, or reference
            components.
          </p>
        </div>
        {/* qs 4 */}
        <div className=" p-5 my-5 transition duration-200 bg-indigo-200 hover:bg-indigo-500 hover:text-white rounded-lg">
          <h2 className=" text-2xl font-semibold">What is useMemo?</h2>
          <p className="mt-3 text-base">
            <strong>useMemo</strong> is a hook in React that allows you to
            memoize the result of a function call and avoid unnecessary
            re-computation of that result. The basic idea behind useMemo is that
            you can provide a function and an array of dependencies to the
            useMemo hook, and it will only recompute the result of the function
            when one or more of the dependencies have changed. <br />
            The useMemo Hook can be used to keep expensive, resource intensive
            functions from needlessly running. To fix performance issue, we can
            use the useMemo Hook to memoize the expensiveCalculation function.
            This will cause the function to only run when needed. We can wrap
            the expensive function call with useMemo. The useMemoHook accepts a
            second parameter to declare dependencies. The expensive function
            will only run when its dependencies have changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
