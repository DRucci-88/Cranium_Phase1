import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Guest({children}: Props) {
  return (

      <div className="px-12 w- my-14 bg-white shadow-md overflow-hidden sm:rounded-lg bg-gray-100 items-center">
        {children}
      </div>
  );
}
