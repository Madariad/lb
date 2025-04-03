import React from 'react';
import { Clock, Home, Star } from 'lucide-react';

function StatsCard({ title, value, description, icon, isLink = false }) {
  const getIcon = () => {
    switch(icon) {
      case 'clock':
        return <Clock size={24} className="text-blue-500" />;
      case 'home':
        return <Home size={24} className="text-blue-500" />;
      case 'star':
        return <Star size={24} className="text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-500 text-sm mb-3">{title}</h3>
      <div className="flex items-center mb-4">
        <div className="bg-blue-50 p-2 rounded-full mr-3">
          {getIcon()}
        </div>
        <span className="text-xl font-bold">{value}</span>
      </div>
      <p className="text-xs text-gray-500">
        {isLink ? (
          <a href="#" className="text-blue-500 hover:underline">
            {description}
          </a>
        ) : (
          description
        )}
      </p>
    </div>
  );
}

export default StatsCard;