import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

function TasksList({ todoTasks, reviewTasks, completedTasks }) {
  const renderTaskList = (tasks, isCompleted = false) => {
    return tasks.map((task) => (
      <div key={task.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
        <div className="mr-3">
          {isCompleted ? (
            <CheckCircle size={20} className="text-green-500" />
          ) : (
            <Circle size={20} className="text-blue-200" />
          )}
        </div>
        <div className="flex-1">
          <div className={`text-sm ${isCompleted ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {task.title}
          </div>
          <div className="text-xs text-gray-400">
            Deadline
          </div>
        </div>
        <div className="text-xs text-gray-500">{task.deadline}</div>
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Homework progress</h2>
          <div className="text-sm">
            <select className="border-none text-gray-500 focus:outline-none bg-transparent">
              <option>All</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">To do</h3>
          <div className="space-y-1">
            {renderTaskList(todoTasks)}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm font-medium mb-2">On review</h3>
        <div className="space-y-1">
          {renderTaskList(reviewTasks)}
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm font-medium mb-2">Completed</h3>
        <div className="space-y-1">
          {renderTaskList(completedTasks, true)}
        </div>
      </div>
    </div>
  );
}

export default TasksList;