import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Calendar, Inbox, FileText, Settings, HelpCircle } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-52 bg-white shadow-md flex flex-col h-full">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold text-blue-500">Studdy</span>
        </Link>
      </div>
      
      <nav className="mt-4 flex-1">
        <ul className="space-y-1 px-3">
          <li>
            <Link to="/" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50 bg-blue-100">
              <Home size={20} className="mr-3 text-blue-500" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/lessons" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <BookOpen size={20} className="mr-3 text-gray-500" />
              <span>Lessons</span>
            </Link>
          </li>
          <li>
            <Link to="/timetable" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <Calendar size={20} className="mr-3 text-gray-500" />
              <span>Timetable</span>
            </Link>
          </li>
          <li>
            <Link to="/homework" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <FileText size={20} className="mr-3 text-gray-500" />
              <span>Homework</span>
            </Link>
          </li>
          <li>
            <Link to="/messages" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <Inbox size={20} className="mr-3 text-gray-500" />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/assessments" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <FileText size={20} className="mr-3 text-gray-500" />
              <span>Assessments</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="mt-auto mb-4">
        <ul className="space-y-1 px-3">
          <li>
            <Link to="/support" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <HelpCircle size={20} className="mr-3 text-gray-500" />
              <span>Support</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-blue-50">
              <Settings size={20} className="mr-3 text-gray-500" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;