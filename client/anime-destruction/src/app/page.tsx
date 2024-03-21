import React from 'react';
import Sidebar from '../app/components/Sidebar';
import MapComponent from '../app/components/Map';

export default function Home() {
  return (
    <div>
        <Sidebar />
        <MapComponent />
        <div className=''></div>
    </div>
  );
};
