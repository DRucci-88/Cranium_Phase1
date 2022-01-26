import React, {createRef, LegacyRef, useRef} from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import route from 'ziggy-js';

export default function Welcome(props: any) {

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
              <InertiaLink href="" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Services</InertiaLink>
            </li>
            <li className="mr-6">
              <InertiaLink href="" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Features</InertiaLink>
            </li>
            <li className="mr-6">
              <InertiaLink href="" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Contact</InertiaLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}

      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-screen-lg text-center">
          At eripuit signiferumque sea, vel ad mucius eiusmod.
        </h1>
        <h6 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>

        <InertiaLink href="#" className="bg-black px-8 py-4 text-white inline-block rounded shadow hover:text-blue-300">CTA</InertiaLink>

      </div>

      {/* Services */}

      <div className="bg-gray-300 flex flex-col justify-center items-center py-12">
        <h4 className="text-2xl md:text-4xl text-black font-bold text-center">
          Services
        </h4>
        <p className="text-lg md:text-xl text-gray-400 max-w-screen-md text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg font-bold mb-2">Service 1</p>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg font-bold mb-2">Service 2</p>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg font-bold mb-2">Service 3</p>
            <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

    </div>

  );
}
