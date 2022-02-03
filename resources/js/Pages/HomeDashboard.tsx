import React from 'react';
import {InertiaLink} from '@inertiajs/inertia-react';
import HomeSidebar from '@/Layouts/HomeSidebar';

interface Props {
  children: React.ReactNode;
}

export default function HomeDashboard({props}: any) {
  return (
    <HomeSidebar>
      <div className="bg-pink-400 flex justify-between p-6">
                <div className="flex">
                    <p>Events</p>
                    <button className="bg-gray-300 ml-4">+ Create Event</button>
                </div>
                <a>?</a>
            </div>
            <div className="flex flex-wrap p-6">
                <div className="bg-gray-300 w-1/3 p-4">
                    <div className="bg-orange-400">
                        <div className="w-full h-auto bg-blue-300">
                        img
                    </div>
                    <div className="p-2">
                        <p>Event</p>
                        <p>Public</p>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-300 w-1/3 p-4">
                    <div className="bg-orange-400">
                        <div className="w-full h-auto bg-blue-300">
                        img
                    </div>
                    <div className="p-2">
                        <p>Event</p>
                        <p>Public</p>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-300 w-1/3 p-4">
                    <div className="bg-orange-400">
                        <div className="w-full h-auto bg-blue-300">
                        img
                    </div>
                    <div className="p-2">
                        <p>Event</p>
                        <p>Public</p>
                    </div>
                    </div>
                </div>
                <div className="bg-gray-300 w-1/3 p-4">
                    <div className="bg-orange-400">
                        <div className="w-full h-auto bg-blue-300">
                        img
                    </div>
                    <div className="p-2">
                        <p>Event</p>
                        <p>Public</p>
                    </div>
                    </div>
                </div>
            </div>
    </HomeSidebar>
  );
}