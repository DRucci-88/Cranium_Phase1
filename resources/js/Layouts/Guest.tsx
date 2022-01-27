import ApplicationLogo from '../Components/ApplicationLogo';
import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';

interface Props {
  children: React.ReactNode;
}

export default function Guest({children}: Props) {
  return (
      <div className="px-12 w-auto my-14 bg-white shadow-md overflow-hidden sm:rounded-lg bg-gray-100">
        {children}
      </div>
  );
}
