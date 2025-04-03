import React from 'react'
import { useNavigate } from 'react-router-dom'
import modulesList from './data/modules'
import svgICon from '../../assets/gif/graduate.gif'

export default function ModulesPage() {
  const navigate = useNavigate()

  const handleClick = (route) => {
    navigate(route)
  }
//   style={{backgroundColor: "rgb(31 41 55 / 1)"}}
// bg-green-50

// style={{color: 'oklch(0.49 0.25 315.64)'}}
return (
    <div className="min-h-screen p-10  flex flex-col items-center pt-26" >
        <h1 className="mb-4 text-3xl  font-bold" >Выберите модуль</h1>
        
        {/* Hero Banner Section */}
        <div className="flex items-center justify-center p-4 bg-blue-100 rounded-lg w-full max-w-4xl mx-auto mb-6">
            <img src={svgICon} alt="icon" className="w-20 h-20 mr-4 border-2" />
            <div>
                <h2 className="text-2xl font-bold text-gray-700">Добро пожаловать!</h2>
                <p className="text-gray-600 mt-1">
                    Изучите доступные модули и выберите интересующий вас раздел.
                </p>
            </div>
        </div>

        {/* Separator */}
        <div className="w-full max-w-4xl border-t-2 border-dashed border-gray-300 my-4"></div>

        <p className="mb-8 text-gray-600 text-center">
            Найдите интересующий модуль и приступите к выполнению задания.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
            {modulesList.map((module) => (
                <div 
                    key={module.id} 
                    className="bg-gradient-to-br from-white to-gray-100 w-72 h-44 p-6 rounded-xl shadow-lg flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                    <h2 
                        className="text-xl text-gray-700 font-medium text-center truncate" 
                        title={module.title}
                    >
                        {module.title}
                    </h2>
                    <button 
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer"
                        onClick={() => handleClick(module.route)}
                    >
                        Перейти
                    </button>
                </div>
            ))}
        </div>
        
        <footer className="mt-12 text-gray-500">
            © 2025 Algorithmic  Lab
        </footer>
    </div>
)
}
