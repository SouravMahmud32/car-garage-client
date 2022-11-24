import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="pt-5">
      <div className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Question.1</span>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              React
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </p>
            <p className="mt-2">
              {" "}
              React state management is a process for managing the data that
              React components need in order to render themselves. This data is
              typically stored in the component's state object. When the state
              object changes, the component will re-render itself. React state
              management is basically half of a React app.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="hover:underline dark:text-violet-400">
              Go Home
            </Link>
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="dark:text-gray-400">Leroy Jenkins</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Question.2</span>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Javascript
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">
              {" "}
              How does prototypical inheritance work?
            </p>
            <p className="mt-2">
              {" "}
              Prototypical inheritance allows us to reuse the properties or
              methods from one JavaScript object to another through a reference
              pointer function. All JavaScript objects inherit properties and
              methods from a prototype: Date objects inherit from Date.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="hover:underline dark:text-violet-400">
              Go Home
            </Link>
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="dark:text-gray-400">Leroy Jenkins</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Question.3</span>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Unit Testing
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold">
              {" "}
              What is a unit test? Why should we write unit tests?
            </p>
            <p className="mt-2">
              {" "}
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important.{" "}
              <br />
              Developers typically write unit tests. However, they are largely
              responsible for writing these tests to ensure that the code works
              – most developer tests are likely to cover happy-path and obvious
              negative cases.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="hover:underline dark:text-violet-400">
              Go Home
            </Link>
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="dark:text-gray-400">Leroy Jenkins</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">Question.4</span>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Framwork
            </Link>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold"> React vs. Angular vs. Vue?</p>
            <p className="mt-2">
              {" "}
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link to="/" className="hover:underline dark:text-violet-400">
              Go Home
            </Link>
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src="https://source.unsplash.com/50x50/?portrait"
                  alt="avatar"
                  className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                />
                <span className="dark:text-gray-400">Leroy Jenkins</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
