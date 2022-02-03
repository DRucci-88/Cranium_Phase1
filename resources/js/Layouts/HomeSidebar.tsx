import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';

interface Props {
  children: React.ReactNode;
}

export default function HomeSidebar({children}: Props) {
  return (
    <div>
      <div className="bg-blue-400 w-48 h-full fixed top-0 left-0">
          <InertiaLink href="#" className="hover:bg-blue-500 shadow-md w-full block p-5 font-bold text-xl">
              CRANIUM
          </InertiaLink>
          <div className="bg-gray-500 py-6 h-full flex flex-col">
              <InertiaLink href="#" className="hover:bg-red-400 p-3 mr-5 rounded-r-lg">^ Overview</InertiaLink>
              <InertiaLink href="#" className="bg-red-400 hover:bg-red-400 p-3 mr-5 rounded-r-lg">^ Events</InertiaLink>
              <InertiaLink href="#" className="hover:bg-red-400 p-3 mr-5 rounded-r-lg">^ Billing</InertiaLink>
              <InertiaLink href="#" className="hover:bg-red-400 p-3 mr-5 rounded-r-lg">^ Integration</InertiaLink>
              <InertiaLink href="#" className="hover:bg-red-400 p-3 mr-5 rounded-r-lg">^ Profile</InertiaLink>
          </div>
      </div>
      <div className="bg-purple-400 ml-48 min-h-screen">
          {children}
      </div>
    </div>
  );
}
