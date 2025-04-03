import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Slidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function Home() {
  return (
   
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
           <Dashboard />
              {/* Add other routes as needed */}
          
          </main>
        </div>
      </div>
  
  );
}

export default Home;