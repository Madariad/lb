import React from 'react';

function EventsList({ events }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm h-full">
      <h2 className="text-lg font-medium mb-4">Upcoming events</h2>
      
      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <div className={`h-20 w-full ${event.image}`}></div>
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div className="text-sm font-medium">{event.title}</div>
                <div className="text-xs bg-black bg-opacity-30 text-white p-1 rounded inline-block">
                  {event.date}
                </div>
              </div>
            </div>
            <div className="bg-white p-2 text-right">
              <button className="text-blue-500 text-xs">More details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;