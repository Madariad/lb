import React from 'react';
import { MdHelpOutline } from 'react-icons/md';
import { MdLightbulbOutline } from 'react-icons/md';
import { MdInfoOutline } from 'react-icons/md';
import CircleConstructionExplorer from './graph/CircleConstructionExplorer';

export default function CirclesMutualPosition() {
  return (
    <>
      <div className='pt-16'>
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          § 20. Взаимное расположение двух окружностей
        </h1>
      </div>
      <div className="container mx-auto px-4 bg-gray-100 border border-gray-300 rounded-lg">
        {/* Описание случаев */}
        <div className="mb-8 p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Случаи взаимного расположения двух окружностей</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>Две окружности могут не иметь общих точек. При этом они могут находиться вне друг друга (рис. 20.1, а) или одна внутри другой (рис. 20.1, б).</li>
            <li>Две окружности могут иметь одну общую точку. В этом случае говорят, что окружности касаются. Причем окружности могут касаться внешним образом (рис. 20.2, а) или внутренним образом (рис. 20.2, б).</li>
            <li>Две окружности могут иметь две общие точки (рис. 20.3). В этом случае говорят, что окружности пересекаются.</li>
          </ol>
          <div className="flex flex-wrap gap-8 justify-center mt-4">
            <div className="text-center text-xs text-gray-500">Рис. 20.1</div>
            <div className="text-center text-xs text-gray-500">Рис. 20.2</div>
            <div className="text-center text-xs text-gray-500">Рис. 20.3</div>
            <div className="text-center text-xs text-gray-500">Рис. 20.4</div>
          </div>
        </div>

        {/* Определения и задачи */}
        <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Окружности, имеющие общий центр, называются <span className="italic">концентрическими</span> (рис. 20.4). Взаимное расположение двух окружностей зависит от их радиусов и расстояния между центрами.
          </p>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-600"><MdInfoOutline size={22} /></span>
                <span className="font-semibold text-gray-800">Задача 1</span>
              </div>
              <div className="pl-9 text-gray-700">
                Изобразите точки O<sub>1</sub> и O<sub>2</sub>, расположенные на расстоянии 6 см друг от друга. С помощью циркуля с центром в точке O<sub>1</sub> проведите окружность радиусом 3 см. С центром в точке O<sub>2</sub> проведите окружность радиусом 2 см.
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 border-l-4 border-yellow-400 rounded p-3 my-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-yellow-700"><MdHelpOutline size={22} /></span>
              <span className="font-semibold text-gray-800">Как расположены относительно друг друга эти окружности?</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-100 text-orange-600"><MdInfoOutline size={22} /></span>
                <span className="font-semibold text-gray-800">Задача 2</span>
              </div>
              <div className="pl-9 text-gray-700">
                Изобразите точки O<sub>1</sub> и O<sub>2</sub>, расположенные на расстоянии 1 см друг от друга. С помощью циркуля с центром в точке O<sub>1</sub> проведите окружность радиусом 4 см. С центром в точке O<sub>2</sub> проведите окружность радиусом 2 см.
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 border-l-4 border-yellow-400 rounded p-3 my-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-yellow-700"><MdHelpOutline size={22} /></span>
              <span className="font-semibold text-gray-800">Как расположены относительно друг друга эти окружности?</span>
            </div>
          </div>
        </div>

        {/* Теорема */}
        <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-600"><MdLightbulbOutline size={22} /></span>
            <h2 className="text-xl font-semibold text-gray-800">Теорема</h2>
          </div>
          <div className="text-base text-gray-700 leading-relaxed mb-4">
            <span className="font-bold">Если расстояние между центрами двух окружностей больше суммы их радиусов или меньше их разности, то эти окружности не имеют общих точек.</span>
          </div>
        </div>

        {/* Вопросы для самостоятельной работы */}
        <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Вопросы и задания</h2>
          <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li>Попробуйте самостоятельно установить соотношение между радиусами окружностей, касающихся друг друга, и расстоянием между их центрами.</li>
            <li>Ответ дайте используя теорему выше.</li>
          </ul>
        </div>

        {/* Интерактив */}
        <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Интерактивная модель</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Используйте динамическую модель ниже для исследования взаимного расположения двух окружностей. Перемещайте центры и меняйте радиусы, чтобы увидеть различные случаи (пересечение, касание, вложенность и т.д.).
          </p>
          <CircleConstructionExplorer />
        </div>
      </div>
    </>
  );
} 