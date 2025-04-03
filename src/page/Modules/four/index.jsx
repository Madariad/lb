import React from 'react';

import pic5 from '../../../assets/img/Picture5.png';
import pic6 from '../../../assets/img/Picture6.png';
import pic7 from '../../../assets/img/Picture7.png';
import pic8 from '../../../assets/img/Picture8.png';
import pic9 from '../../../assets/img/Picture9.png';




export default function Four() {
  return (
    <>
      <div className='pt-16'>
       
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Окружность. Геометрические построения.
      </h1>
      </div>
    <div className="container mx-auto  px-4 bg-gray-100 border border-gray-300 rounded-lg">
  

      {/* Описание */}
      <div className="mb-8 p-6  ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Описание</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Окружность, круг, их элементы и части. Центральный угол. Взаимное расположение прямой и окружности. Взаимное расположение двух окружностей. Касательная к окружности. Свойства касательных к окружности. Окружность, описанная около треугольника и окружность, вписанная в треугольник. Задачи на построение. Итоговая практическая работа.
        </p>
      </div>

      {/* Окружность */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Окружность</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Окружностью называется геометрическая фигура, состоящая из всех точек, расположенных на заданном расстоянии от данной точки. Данная точка называется центром окружности.
          <br />
          <strong>А</strong> – центр окружности.
          <br />
          Центр не является точкой окружности.
          <br />
          <strong>Круг</strong> – это конечная часть плоскости, ограниченная окружностью.
          <br />
          <strong>Радиус</strong> – это отрезок, соединяющий центр с какой-либо точкой окружности.
        </p>
        <div className="flex justify-center">
          <img src={pic5} alt="Окружность" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Упражнение */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Упражнение</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Постройте динамические модели окружности с центрами в точках А, В и С при одновременном соблюдении следующих условий:
        </p>
        <ul className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
          <li>Радиус окружности с центром в точке А не больше радиуса окружности с центром в точке В.</li>
          <li>Радиус окружности с центром в точке С не меньше радиуса окружности с центром в точке В.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">См. стр. 50 в книге Сергеевой.</p>
      </div>

      {/* Преобразование плоскости */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Преобразование плоскости. Движение и его виды.</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          <strong>Цель:</strong> Научиться строить эскиз фигур при симметрии, повороте около окружности и параллельном переносе.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Апплеты:</h3>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
          <li>
            <a href="https://www.geogebra.org/m/xqesdquz" className="text-blue-500 underline">
              Симметрия относительно точки
            </a>
          </li>
          <li>
            <a href="https://www.geogebra.org/m/zpbsf9em" className="text-blue-500 underline">
              Симметрия относительно прямой
            </a>
          </li>
          <li>
            <a href="https://www.geogebra.org/m/pssfam3z" className="text-blue-500 underline">
              Параллельный перенос
            </a>
          </li>
          <li>
            <a href="https://www.geogebra.org/m/fpnzyyqz" className="text-blue-500 underline">
              Поворот плоскости относительно точки
            </a>
          </li>
        </ul>
      </div>


      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Вопросы</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
            <li>Что такое преобразование функции?</li>
            <li>Какие две точки называются симметричными? (приведите примеры)</li>
            <li>При симметрии должны ли быть одинаковыми расстояния между точками?</li>
            <li>
            Дайте определение понятия:
            <ul className="list-disc list-inside space-y-1 pl-6">
                <li>а{')'} параллельный перенос</li>
                <li>б{')'} поворот около данной точки</li>
            </ul>
            </li>
        </ul>
        </div>

      {/* Инструкция для учеников */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Инструкция для учеников</h2>
        <h3 className='font-bold py-3 text-center'>Постройте симметрию квадрата ABCD относительно точки E.</h3>
        <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
          
          <li>Откройте новый лист в <a href="https://www.geogebra.org/" className="text-blue-500 underline">GeoGebra</a>.</li>
          <li>Откройте Вид – Геометрия.</li>
          <li>Используя инструмент <img src={pic6} alt='' style={{display: 'inline'}}/> , постройте квадрат.</li>
          <li>Постройте точку E, как показано на рисунке 1.
           <div className='flex justify-center py-3'>
                <div>
                    <img src={pic7} alt='' className="border border-2"/>
                    <div className='text-sm text-gray-500 text-center'>Рисунок 1</div>
                </div>
           </div>
          </li>
          <li>Используйте инструмент  
            <img style={{display: 'inline'}}  src={pic8}  alt=''/>
          клинкните по точке  D и E. Повторите действие для всех точек квадрата c точкой E.</li>

          <li>Выделите квадрат и кликните по точке E.</li>
          <li>7.Используйте инструмент 
          <img src={pic9} alt='' style={{display: 'inline'}}/>
          измерьте расстояние между точкой D и E, а потом E и D’.  Повторите действие для всех точек.</li>
        </ol>
        <p className="text-sm text-gray-500 mt-4">
          Проверьте свою работу по ссылке: <a href="https://www.geogebra.org/m/cuqb9jvd" className="text-blue-500 underline">https://www.geogebra.org/m/cuqb9jvd</a>
        </p>
      </div>

      {/* Самостоятельная работа */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Самостоятельная работа</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          На координатной плоскости отметьте точки A(0;0), B(3;1), C(4;4), D(5;1), E(8;0). Соедините эти точки и постройте симметрию этой фигуры относительно оси абсцисс.
        </p>
        <p className="text-sm text-gray-500">
          Проверьте свою работу по ссылке: <a href="https://www.geogebra.org/m/ej8yytbn" className="text-blue-500 underline">https://www.geogebra.org/m/ej8yytbn</a>
        </p>
      </div>
    </div>
    </>
  );
}