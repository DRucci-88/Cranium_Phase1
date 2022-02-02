import React, {createRef} from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';


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

      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-screen-lg text-center">
          At eripuit signiferumque sea, vel ad mucius eiusmod.
        </h1>
        <h6 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>

        <InertiaLink href="#" className="bg-black px-8 py-4 text-white inline-block rounded shadow hover:text-blue-300">CTA</InertiaLink>

      </div>

      {/* Services */}

      <div className="bg-secondary flex flex-col justify-center items-center py-12">
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

      {/*bagian features*/}
      <div className="bg-white">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-4 items-center sm:items-center">
            <h3 className="m-6 text-3xl text-gray-800 font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="m-6 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <svg className="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5" xmlns="http://www.w3.org/2000/svg">
              <title>Image</title>
              <rect x="100" y="-20" width="900" height="600" rx="20.42" fill="#f2f2f2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
      {/*-----*/}
      <div className="bg-gray-300">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 p-4">
            <svg className="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5" xmlns="http://www.w3.org/2000/svg">
              <title>Image</title>
              <rect x="100" y="-20" width="900" height="600" rx="20.42" fill="#f2f2f2"/>
            </svg>
          </div>
          <div className="w-5/6 sm:w-1/2 p-4 items-center sm:items-center">
            <h3 className="m-6 text-3xl text-gray-800 font-bold leading-none mb-3">
              Get In Touch
            </h3>
            <p className="m-6 text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </p>
            <button className=" m-6 bg-black px-8 py-4 text-white inline-block rounded shadow hover:text-blue-300">Contact Us</button>
          </div>
        </div>
      </div>
      </div>

      {/*Footer*/}
      <div className="bg-white">
      <div className="container mx-auto text-center py-20">
        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-black">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
        </h3>
        <p className="mt-4 tracking-[.3em] text-xl leading-tight text-gray-400">
          - CRANIUM -
        </p>
      </div>
      </div>

      <div className="bg-gray-300">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
              <InertiaLink className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">CRANIUM</InertiaLink>
              <p className="mt-4 text-gray-500 no-underline hover:no-underline text-xs">© 2022 CRANIUM INDONESIA. ALL RIGHTS RESERVED</p>
              <p className="mt-4 text-grey-500 no-underline hover:no-underline text-xs">Privacy — Terms</p>
            </div>


            <div className="flex-1">
              <p className="uppercase text-gray-500 md:mb-6">Contact</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Phone Number</InertiaLink>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Email</InertiaLink>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <InertiaLink href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Social Media</InertiaLink>
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
