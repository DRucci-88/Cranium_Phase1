import React, {createRef} from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';



export default function Homepage(props: any) {

  const navContentRef = createRef<HTMLDivElement>();

  const navToggle = () => {
    navContentRef.current?.classList.toggle('hidden');
  }
  return (
    <div className="bg-white font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-black p-3 fixed w-full z-10 top-0 pin-t">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <InertiaLink href="/" className="text-white no-underline hover:text-white hover:no-underline">
            <span className="text-2xl pl-2 font-semibold">Cranium</span></InertiaLink>
        </div>

        <div className="block lg:hidden">
          <button onClick={navToggle}
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>

        </div>

        {/* Navbar */}

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
             ref={navContentRef}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-6">
              <InertiaLink href=""
                           className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Events</InertiaLink>
            </li>
            <li className="mr-6">
              <InertiaLink href=""
                           className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Features</InertiaLink>
            </li>
            <li className="mr-6">
              <InertiaLink href=""
                           className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Account Plans</InertiaLink>
            </li>
            <button className="mr-6 bg-black border-2 border-white rounded ">

              <InertiaLink href="Login"
                           className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Sign In</InertiaLink>
            </button>
          </ul>
        </div>
      </nav>


      {/*----*/}
<div className="bg-pink-400 min-h-screen ">
  <div className="h-screen flex flex-wrap justify-center items-center">
    <div className="w-5/6 sm:w-1/2 p-4 items-center sm:items-center">
    <h3 className="m-2 text-3xl text-gray-800 font-bold leading-none mb-3">
      Blackpink
    </h3>
    <p className="m-2 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
      amet ligula.
    </p>
    </div>
    <div className="w-5/6 h-5/6 sm:h-1/2 sm:w-1/2 p-4">
      <svg className="w-full h-full">
        <title>Image</title>
        <rect  width="430" height="280" rx="15" fill="#f2f2f2" />
      </svg>
    </div>
  </div>
</div>
    </div>
  );
}
