import React from 'react'
import pic1 from '../../../assets/img/Picture1.png'
import pic2 from '../../../assets/img/Picture2.png'
import pic3 from '../../../assets/img/Picture3.png'
import pic4 from '../../../assets/img/Picture3.png'

import Coments from '../../../components/Coments';



export default function index() {
  return (
    <div className="container mx-auto py-16 px-4">
       

      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
      Взаимное расположение прямых.
      </h1>

      <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Описание</h2>
        <p className="text-base pb-3">
        Параллельные прямые, их признаки и свойства. Признаки параллельности прямых. Свойства параллельности прямых. Сумма углов треугольника. Внешний угол треугольника. Неравенство треугольника. Признаки равенства прямоугольных треугольников. Свойства прямоугольного треугольника. Перпендикулярные прямые. Перпендикуляр, наклонная и её проекция.
    </p>
     


    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">Построить угол заданной величины от заданной прямой:</h3>
  <ul className="list-disc list-inside space-y-2 pl-4">
    <li className="text-gray-700">Построим луч через две точки.</li>
    <li className="text-gray-700">
      Для постоения угла заданной величины выберем инструмент <span className="font-semibold">«Угол заданной величины»</span> и отметим две точки, через которые проходит луч. Появится окно, в которое нужно вписать величину угла (в нашем случае это <span className="text-blue-500">60º</span>).
      <div className="mt-2">
        <img src={pic1} alt="Пример построения угла" className="rounded-lg shadow-md" />
      </div>
      Затем нужно нажать клавишу <span className="font-semibold">«Enter»</span>. Получим третью точку. Проведем через вершину угла и новую точку луч с помощью инструмента <span className="font-semibold">«луч»</span>.
      <div className="mt-2">
        <img src={pic2} alt="Пример построения луча" className="rounded-lg shadow-md" />
      </div>
    </li>
  </ul>
</div>

<div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">Построения в полотне 3D</h3>
  <p className="text-gray-700 mb-4">
    Для перехода в 3D полотно нужно выбрать сверху <span className="font-semibold">«Вид»</span> и в всплывающем списке нажать на <span className="font-semibold">«3D полотно»</span>.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-2">Призма:</h3>
  <ol className="list-decimal list-inside space-y-2 pl-4">
    <li className="text-gray-700">В инструменте многоугольник щелкнем по белому треугольнику.</li>
    <li className="text-gray-700">Из всплывшего списка выберем <span className="font-semibold">«многоугольник»</span>.</li>
    <li className="text-gray-700">В «три Д полотне» начертим многоугольник, который будет в основании призмы.</li>
    <li className="text-gray-700">Выберем инструмент <span className="font-semibold">«выдавить призму или цилиндр»</span>.</li>
    <li className="text-gray-700">Тащим многоугольник вверх или вниз (как нам нужно).</li>
  </ol>
</div>

   
  
      
      
 
 

 


      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
  <h3 className="text-2xl font-bold text-blue-600 mb-4">Исследование</h3>
  <ol className="list-decimal list-inside space-y-4">
    {/* Первый и второй типы остаются без изменений */}
    <li>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li className="text-gray-700">Построить треугольник (залей его в синий цвет и сделай линии потолще).</li>
        <li className="text-gray-700">Построить для каждой стороны серединный перпендикуляр (пунктирными линиями).</li>
        <li className="text-gray-700">Динамически измени рисунок. Что ты замечаешь?</li>
        <li className="text-gray-700">Что можно сказать о взаимном расположении серединных перпендикуляров?</li>
        <li className="text-gray-700">Где лежит точка пересечения перпендикуляров в твоѐм треугольнике?</li>
        <li className="text-gray-700">Соедини точку пересечения перпендикуляров с вершинами треугольника (выдели их красным цветом). Обрати внимание на их длины в математической панели. Что ты замечаешь?</li>
        <li className="text-gray-700">Сформулируй гипотезу.</li>
      </ul>
    </li>
    <li>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li className="text-gray-700">Построить треугольник (залей его в синий цвет и сделай линии потолще).</li>
        <li className="text-gray-700">Построить все высоты треугольника (пунктирными линиями).</li>
        <li className="text-gray-700">Что можно сказать о взаимном расположении высот треугольника?</li>
        <li className="text-gray-700">Где лежит точка пересечения высот в твоѐм треугольнике?</li>
        <li className="text-gray-700">Сформулируй гипотезу.</li>
      </ul>
    </li>
    {/* Третий тип */}
    <li>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li className="text-gray-700">Построить треугольник (залей его в синий цвет и сделай линии потолще).</li>
        <li className="text-gray-700">Построить все медианы треугольника (стиль линии задать «пунктир»).</li>
        <li className="text-gray-700">Что можно сказать о взаимном расположении медиан треугольника?</li>
        <li className="text-gray-700">Обрати внимание на длины отрезков медиан, на которые они делятся точкой пересечения, и проанализируй соотношение их длин. Что ты замечаешь?</li>
        <li className="text-gray-700">Сформулируй гипотезу.</li>
      </ul>
    </li>
    {/* Четвертый тип */}
    <li>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li className="text-gray-700">Построить треугольник (залей его в синий цвет и сделай линии потолще).</li>
        <li className="text-gray-700">Построить все биссектрисы треугольника (стиль линии задать «пунктир»).</li>
        <li className="text-gray-700">Что можно сказать о взаимном расположении биссектрис треугольника?</li>
        <li className="text-gray-700">Соедини точку пересечения биссектрис с вершинами треугольника (выдели их красным цветом). Обрати внимание на их длины в математической панели. Что ты замечаешь?</li>
        <li className="text-gray-700">Сформулируй гипотезу.</li>
        <li className="text-gray-700">С помощью среды GeoGebra гипотезу геометрически визуализируй (учащиеся должны построить вписанную в треугольник окружность с центром в точке пересечения биссектрис).</li>
      </ul>
    </li>
    {/* Пятый тип */}
    <li>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li className="text-gray-700">Постройте в одном треугольнике центр тяжести, ортоцентр, центр описанной окружности.</li>
        <li className="text-gray-700">Обозначьте центр тяжести буквой M, ортоцентр — буквой H, а центр описанной окружности — буквой O.</li>
        <li className="text-gray-700">Проанализируйте с помощью GeoGebra взаимное расположение указанных точек и соотношение длин отрезков.</li>
        <li className="text-gray-700">Сформулируйте гипотезу.</li>
        <li className="text-gray-700">Площади двух треугольников с общим основанием равны S1 и S2, где S1 ≠ S2. Найдите площадь четырехугольника с вершинами в серединах их боковых сторон.
            <img src={pic3}  alt=''/>
        </li>
        <li className="text-gray-700">Задача: Основание пирамиды, высота которой равна 2 дм, а боковые ребра равны друг другу, является прямоугольник со сторонами 6 дм и 8 дм. Найдите площадь сечения, проведенного через диагональ основания параллельно боковому ребру.
        <img src={pic4}  alt=''/>
        </li>
      </ul>
    </li>
  </ol>
  {/* Выводы */}
  <div className="mt-6">
    <h4 className="text-xl font-semibold text-gray-800 mb-2">Выводы</h4>
    <ul className="list-disc list-inside space-y-2 pl-4">
      <li className="text-gray-700">Серединные перпендикуляры к сторонам треугольника пересекаются в центре описанной окружности.</li>
      <li className="text-gray-700">Биссектрисы углов треугольника пересекаются в центре вписанной окружности.</li>
      <li className="text-gray-700">Высоты треугольника пересекаются в ортоцентре.</li>
      <li className="text-gray-700">Медианы треугольника пересекаются в центре тяжести, и точкой пересечения делятся в отношении 2:1, считая от вершины.</li>
    </ul>
  </div>
</div>
<Coments subject={3}/>  
</div>



</div>
  )
}
