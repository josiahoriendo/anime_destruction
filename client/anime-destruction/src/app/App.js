import React from 'react';
import Sidebar from './components/Sidebar';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';

function App() {
  return (
    <NextUIProvider>
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
    </NextUIProvider>
  );
}

export default App;