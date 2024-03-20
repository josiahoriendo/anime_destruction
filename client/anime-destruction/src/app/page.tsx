import React from 'react';
import Sidebar from '../app/components/Sidebar';
import MapComponent from '../app/components/Map';

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div>
        {/* Other content for your page */}
        <h1>
          <MapComponent />
        </h1>
      </div>
    </div>
  );
};
