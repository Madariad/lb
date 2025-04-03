import React from 'react';
import { Bell, Search } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm z-10 py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 text-sm focus:outline-none"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-1">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img src="https://via.placeholder.com/32" alt="User avatar" className="h-full w-full object-cover" />
            </div>
            <div className="text-sm">
              <div className="font-medium">James Dean</div>
              <div className="text-xs text-gray-500">@james_dean</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;