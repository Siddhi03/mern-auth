import React from "react";

export default function About(){
    return (
        <div className="px-4 py-12 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-slate-800">About</h1>
            <p className="mb-4 text-slate-700">This is a full-stack web application built with the MERN stack.
            It allows user to sign un, sign in, and sign out, and provides access to protected routes only for authenticated users.</p>
            <p className="mb-4 text-slate-700">The front-end application is built with React and uses React Router for client-side rendering.
            The backend is built with Node.js and Express.js and uses MongoDB as the database. Authentication is implemented using JSON Web Token(JWT). </p>
            <p className="mb-4 text-slate-700">This application is intended to as a starting point for building full-stack applications with authentication using the MERN-stack. Feel free to use it as a template for your projects!</p>
        </div>
    )
}