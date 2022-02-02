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
<div className="bg-white min-h-screen ">
  <div className="h-screen flex flex-wrap justify-center items-center">
    <div className="w-2/6 p-6 items-center">
    <h3 className="m-2 text-3xl text-gray-800 font-bold leading-none mb-3">
      About
    </h3>
    <p className="m-2 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
      <InertiaLink href="#" className="bg-black w-52 px-2 py-4 mr-6  text-center text-white inline-block rounded shadow hover:text-blue-300">Join an event</InertiaLink>
      <InertiaLink href="#" className=" w-52 px-2 py-4 text-center text-black border-2 border-black inline-block rounded shadow hover:text-blue-300">Host an event</InertiaLink>
    </div>
    <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
      <svg className="w-full h-full">
        <title>Image</title>
        <rect   width="100%" display="block" height="100%" rx="15" fill="#f2f2f2" />
      </svg>
    </div>
  </div>
</div>

      {/*----*/}
      <div className="bg-pink-400">
        <h2 className="text-center text-2xl font-bold py-6"> Our Client</h2>
        <div className="flex justify-center">
        <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8 bg-[url('/img/darren.png')]" ></div>
      </div>
      </div>

      {/*------*/}
      <div className="bg-white">
        <div className="h-screen">
        <h1 className="py-4 text-2xl font-bold text-black text-center">Events</h1>
        <p className="py-6 mb-4 text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 rounded-lg m-4">
              <div className="h-64 w-64"></div>
              <div className="h-32 w-64 border-2 border-black rounded-b-lg">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg m-4">
              <div className="h-64 w-64"></div>
              <div className="h-32 w-64 border-2 border-black rounded-b-lg">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg m-4">
              <div className="h-64 w-64"></div>
              <div className="h-32 w-64 border-2 border-black rounded-b-lg">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg m-4">
              <div className="h-64 w-64"></div>
              <div className="h-32 w-64 border-2 border-black rounded-b-lg">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>
  );
}
