import React, {createRef} from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import route from "ziggy-js";


export default function HomePage(props: any) {

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
                           className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Account
                Plans</InertiaLink>
            </li>
            <InertiaLink href={route('register')} className="btn-secondary">Register</InertiaLink>
          </ul>
        </div>
      </nav>


      {/*----*/}
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="w-2/6 flex flex-col h-1/2 p-2">
          <h3 className="m-2 text-3xl text-gray-800 font-bold leading-none">
            About
          </h3>
          <p className="m-2 text-gray-600 py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="m-2 py-4">
            <InertiaLink href="#" className="btn-primary mr-4">Join an event</InertiaLink>
            <InertiaLink href="#" className="btn-secondary">Host an event</InertiaLink>
          </div>
        </div>
        <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
          <svg className="w-full h-full">
            <title>Image</title>
            <rect width="100%" display="block" height="100%" rx="15" fill="#f2f2f2"/>
          </svg>
        </div>
      </div>

      {/*----*/}
      <div className="bg-gray-200">
        <h2 className="text-center text-2xl font-bold py-6"> Our Client</h2>
        <div className="flex justify-center">
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
          <div className="rounded-full h-28 w-28 bg-black m-8"></div>
        </div>
      </div>

      {/*------*/}
      <div className="bg-white">
        <div className="h-screen">
          <h1 className="py-4 text-2xl font-bold text-black text-center">Events</h1>
          <p className="py-6 mb-4 text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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

      {/*-------*/}
      <div className="bg-gray-100 min-h-screen">
        <div className="h-screen flex flex-wrap justify-center items-center">
          <div className="w-2/6 p-6 items-center">
            <h3 className="m-2 text-3xl text-gray-800 font-bold leading-none mb-3">
              Features
            </h3>
            <p className="m-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="py-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </div>
            <InertiaLink href="#" className=" btn-primary">Learn More</InertiaLink>
          </div>
          <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
            <svg className="w-full h-full">
              <title>Image</title>
              <rect width="100%" display="block" height="100%" rx="15" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/*-------*/}
      <div className="bg-white">
        <div className="h-screen">
          <h1 className="py-4 text-2xl font-bold text-black text-center">Account Plans</h1>
          <p className="py-6 mb-4 text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex justify-center items-center ">
            <div className="bg-gray-100 rounded-lg m-4 border-2 border-black">
              <div className="h-64 w-64 flex flex-col justify-center items-center">
                <div className="rounded-full h-16 w-16 bg-black  "></div>
                <p className="text-black text-center py-2">Title</p>
                <p className="text-center py-2 ">Subtitle</p>
                <p className="text-center">Feature 1</p>
                <p className="text-center">Feature 2</p>
                <p className="text-center">Feature 3</p>
              </div>
              <div className="h-32 w-64  flex justify-center items-center">
                <InertiaLink href="#" className=" btn-primary">Order Now</InertiaLink>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg m-4 border-2 border-black">
              <div className="h-64 w-64 flex flex-col justify-center items-center">
                <div className="rounded-full h-16 w-16 bg-black  "></div>
                <p className="text-black text-center py-2">Title</p>
                <p className="text-center py-2 ">Subtitle</p>
                <p className="text-center">Feature 1</p>
                <p className="text-center">Feature 2</p>
                <p className="text-center">Feature 3</p>
              </div>
              <div className="h-32 w-64  flex justify-center items-center">
                <InertiaLink href="#" className=" btn-primary">Order Now</InertiaLink>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg m-4 border-2 border-black">
              <div className="h-64 w-64 flex flex-col justify-center items-center">
                <div className="rounded-full h-16 w-16 bg-black  "></div>
                <p className="text-black text-center py-2">Title</p>
                <p className="text-center py-2 ">Subtitle</p>
                <p className="text-center">Feature 1</p>
                <p className="text-center">Feature 2</p>
                <p className="text-center">Feature 3</p>
              </div>
              <div className="h-32 w-64  flex justify-center items-center">
                <InertiaLink href="#" className=" btn-primary">Order Now</InertiaLink>
              </div>
            </div>


          </div>
        </div>
      </div>


      {/*-------*/}
      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-screen-lg text-center">
          Ready to create an event?
        </h1>
        <h6 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
        <div className="flex justify-center items-center">
          <InertiaLink href="#" className="btn-primary mr-4">Host an event</InertiaLink>
          <InertiaLink href="#" className="btn-secondary">Contact us</InertiaLink>
        </div>
      </div>

      {/*-------*/}

      <div className="bg-gray-300">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <InertiaLink className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                           href="#">CRANIUM</InertiaLink>
              <p className="mt-4 text-gray-500 no-underline hover:no-underline text-xs">?? 2022 CRANIUM INDONESIA. ALL
                RIGHTS RESERVED</p>
              <p className="mt-4 text-grey-500 no-underline hover:no-underline text-xs">Privacy ??? Terms</p>
            </div>


            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Contact</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Phone
                    Number</InertiaLink>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#"
                               className="no-underline hover:underline text-gray-800 hover:text-pink-500">Email</InertiaLink>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Social
                    Media</InertiaLink>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
