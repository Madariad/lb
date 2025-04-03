import React from 'react';
import { Calendar } from 'lucide-react';

function TimeTable() {
  const currentDate = "Mar 28, 2024";
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  
  const scheduleItems = [
    { time: '08:00', title: 'Algorithms', duration: '08:00 - 09:00', teacher: 'SG', className: 'bg-gray-100' },
    { time: '09:00', title: 'Levels of organization of living things', duration: '09:00 - 10:00', teacher: 'JB', className: 'bg-white', label: 'active' },
    { time: '10:00', title: 'Break', duration: '10:00 - 10:30', className: 'bg-gray-50' },
    { time: '10:30', title: '', duration: '', className: 'bg-white' },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Timetable</h2>
        <div className="flex items-center text-blue-500">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{currentDate}</span>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-1 mb-4">
        <div className=""></div>
        {weekDays.map((day, index) => (
          <div 
            key={day} 
            className={`text-center py-2 ${index === 3 ? 'bg-blue-500 text-white rounded' : ''}`}
          >
            <div className="text-sm font-medium">{day}</div>
            <div className={`text-sm ${index === 3 ? 'text-white' : 'text-gray-500'}`}>{dates[index]}</div>
          </div>
        ))}
      </div>

      {scheduleItems.map((item, index) => (
        <div key={index} className="grid grid-cols-8 gap-1 mb-1">
          <div className="text-right pr-2 text-xs text-gray-500 pt-2">{item.time}</div>
          <div className={`col-span-7 ${item.className} rounded p-2`}>
            {item.title && (
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.duration}</div>
                </div>
                {item.teacher && (
                  <div className="flex items-center">
                    {item.label === 'active' && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-2">active</span>
                    )}
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">
                      {item.teacher}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeTable;