import React from 'react';

function WelcomeCard({ name, progress }) {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {name} 👋
        </h1>
        <p className="mb-1">
          You've learned <span className="font-bold">{progress}%</span> of your goal this week!
        </p>
        <p>Keep it up and improve your progress.</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 h-32 w-32 bg-blue-400 rounded-full -mr-10 -mb-10 opacity-50"></div>
      <div className="absolute right-12 bottom-12 h-16 w-16 bg-blue-300 rounded-full opacity-30"></div>
    </div>
  );
}

export default WelcomeCard;