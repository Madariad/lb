import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import StatsCard from '../components/StatsCard';
import TimeTable from '../components/TimeTable';
import EventsList from '../components/EventsList';
import TasksList from '../components/TasksList';

function Dashboard() {
  // Sample data - in a real app, this would come from an API or context
  const statsData = {
    attendance: { value: '19/20', description: 'Well done! You\'re attending all lessons. Keep going!' },
    homework: { value: '53/56', description: 'Don\'t forget about your next homework' },
    rating: { value: '89/100', description: 'Go to report', isLink: true }
  };
  
  const todoTasks = [
    { id: 1, title: 'Rational Inequalities: AI Assessment #5', deadline: '30 Nov, 2024' },
    { id: 2, title: 'All about Homestasis: Quiz', deadline: '29 Nov, 2024' },
    { id: 3, title: 'Shapes and Structures', deadline: '03 Apr, 2024' },
    { id: 4, title: 'Word Wonders: Unraveling Language', deadline: '03 Apr, 2024' },
  ];
  
  const reviewTasks = [
    { id: 5, title: 'Historical Chronicles: Exploring the Past', deadline: '30 Nov, 2024' },
    { id: 6, title: 'Epoch Explorations: Unraveling Timelines', deadline: '30 Nov, 2024' },
  ];
  
  const completedTasks = [
    { id: 7, title: 'Physics Phantoms: Unraveling the Laws of Nature', deadline: '26 Nov, 2024', completed: true },
    { id: 8, title: 'Language Landscapes: Exploring Vocabulary', deadline: '24 Nov, 2024', completed: true },
  ];
  
  const events = [
    { id: 1, title: 'English Lessons', date: '18 Apr, 2024, 15:00', image: 'bg-blue-200' },
    { id: 2, title: 'RoboFest', date: '26 May, 2024, 16:00', image: 'bg-gray-200' },
    { id: 3, title: 'AI Introduction', date: '05 Jun, 2024, 12:30', image: 'bg-green-200' },
    { id: 4, title: 'Why engineers are must-have', date: '20 Dec, 2024, 12:00', image: 'bg-yellow-200' },
  ];

  return (
    <div className="space-y-6">
      <WelcomeCard name="James" progress={70} />
      
      <div className="grid grid-cols-3 gap-4">
        <StatsCard 
          title="Attendance" 
          value={statsData.attendance.value} 
          description={statsData.attendance.description}
          icon="clock"
        />
        <StatsCard 
          title="Homework" 
          value={statsData.homework.value} 
          description={statsData.homework.description}
          icon="home"
        />
        <StatsCard 
          title="Rating" 
          value={statsData.rating.value} 
          description={statsData.rating.description}
          icon="star"
          isLink={statsData.rating.isLink}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TimeTable />
        </div>
        <div>
          <EventsList events={events} />
        </div>
      </div>
      
      <div>
        <TasksList 
          todoTasks={todoTasks} 
          reviewTasks={reviewTasks} 
          completedTasks={completedTasks} 
        />
      </div>
    </div>
  );
}

export default Dashboard;