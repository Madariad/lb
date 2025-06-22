import React from 'react';
import ph1 from '../../../assets/img/ph1.png'
import Coments from '../../../components/Coments';
import TriangleExplorer from './graph/TriangleExplorer'
export default function Two() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 pt-16">
        Треугольники
      </h1>
    <div className="container mx-auto  px-4 border border-gray-300 rounded-lg bg-gray-100">

      {/* Описание */}
      <div className="mb-8   ">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Описание</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Треугольник и его виды. Медианы, биссектрисы, высоты треугольника. Средние линии треугольника. Признаки равенства треугольников. Равнобедренный треугольник и свойства. Признаки равнобедренного треугольника.
        </p>
      </div>

      {/* Классификация треугольников */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Классификация треугольников</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          В зависимости от величины углов, треугольники бывают:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
          <li>Остроугольные (у которых все три угла острые)</li>
          <li>Прямоугольные (у которых есть прямой угол)</li>
          <li>Тупоугольные (у которых есть тупой угол)</li>
        </ul>
      </div>

      {/* Упражнения */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Упражнения</h2>
        <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
          <li>Постройте динамическую модель остроугольного треугольника.</li>
          <li>Постройте динамическую модель прямоугольного треугольника.</li>
          <li>Постройте динамическую модель тупоугольного треугольника.</li>
        </ol>
      </div>

      {/* Определения */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Определения</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          <strong>Биссектриса угла треугольника</strong> – это отрезок биссектрисы угла треугольника, соединяющий вершину треугольника с точкой противоположной стороны.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          <strong>Медиана треугольника</strong> – это отрезок, соединяющий вершину треугольника с серединой противоположной стороны.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          <strong>Высота треугольника</strong> – это перпендикуляр, проведённый из вершины треугольника к прямой, содержащей противоположную сторону.
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          <strong>Средняя линия треугольника</strong> – это отрезок, соединяющий середины двух его сторон. Средняя линия треугольника параллельна третьей стороне треугольника, а длина средней линии треугольника равна половине этой стороны.
        </p>
      </div>



       {/* Упражнения */}
       <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Упражнения</h2>
        <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
          <li>Постройте медиану CD в остроугольном треугольнике ABC. Используйте динамическую модель.</li>
          <li>Постройте медиану прямоугольного треугольника ABC (прямой), исходящую из вершины А. Используйте динамическую модель.</li>
          <li>Постройте медиану, исходящую из вершины В тупоугольного треугольника ABC (тупой). Используйте динамическую модель.</li>
          <li>Постройте динамическую модель средних линий остроугольного, прямоугольного и  тупоугольного треугольника.</li>

        </ol>
      </div>



      {/* Задачи */}
      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Задачи</h2>
        <div>
            <h3>1</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>
                Постройте треугольник. Используйте динамическую модель.   
            </li>
            <li>
            Проведите в нем медианы.
            </li>
            <li>
            Сформулируйте гипотезу о пересечении медиан в треугольнике. Поочередно переместите каждую из вершин треугольника.
            </li>

            <li>
            Сделайте вывод. Запишите его.
            </li>
            </ol>
        </div>



        <div>
            <h3>2</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>
            Постройте треугольник. Используйте динамическую модель.  
            </li>
            <li>
            Проведите в нем все высоты.
            </li>
            <li>
            Сформулируйте гипотезу о пересечении высот в треугольнике.
            </li>

            <li>
            Поочередно переместите каждую из вершин треугольника. 
            </li>

            <li>
            Сделайте вывод. Запишите его.
            </li>
            </ol>
        </div>




        <div>
            <h3>3</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>
            Постройте треугольник. Используйте динамическую модель.
            </li>
            <li>
            Проведите в нем все биссектрисы.
            </li>
            <li>
            Сформулируйте гипотезу о пересечении биссектрис в треугольнике.
            </li>

            <li>
            Поочередно переместите каждую из вершин треугольника. 
            </li>

            <li>
            Сделайте вывод. Запишите его.
            </li>
            </ol>
        </div>
      </div>


      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Равенство треугольников</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Два треугольника называются равными, если их можно совместить наложением.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Если два треугольника равны, то элементы (стороны и углы) одного треугольника соответственно равны элементам другого треугольника.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    В равных треугольниках против соответственно равных сторон лежат равные углы.
  </p>
  <p className="text-base text-gray-700 leading-relaxed">
    И обратно: против соответственно равных углов лежат равные стороны.
  </p>
</div>

      <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-gray-50 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Задачи</h2>
       
            <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
            <li>
            Используя свойство вертикальных углов и первый признак равенства треугольников, постройте равные треугольники. Выпишите все пары равных треугольников. Для решения постройте динамическую модель.  
            </li>
            <li>
            Даны два равных треугольника. Создайте динамическую модель и с ее помощью исследуйте вопрос о соотношении длин медиан, проведенных в равных треугольниках к соответствующим сторонам. Сделайте вывод. Проведите доказательство, используя первый признак равенства треугольников.
            </li>
            <li>
            AC=AF, CD=FB. Постройте динамическую модель. Используя инструмент «мерка», исследуйте вопрос о соотношении длин отрезков CB и FD. Сделайте вывод. Запишите доказательство.
            </li>

           
            </ol>
      
     </div>
     <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Равнобедренный треугольник</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Треугольник называется равнобедренным, если две его стороны равны.
    Равные стороны называются боковыми сторонами, а третья сторона – основанием треугольника.
    Вершину, противолежащую основанию, иногда называют вершиной равнобедренного треугольника.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Упражнение 1</h3>
  <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
    <li>Постройте динамическую модель равнобедренного треугольника АВС (АВ=АС).</li>
    <li>Измерьте углы при основании.</li>
    <li>Сформулируйте гипотезу о величинах углов при основании равнобедренного треугольника.</li>
    <li>Измените треугольник, переместив вершины при его основании.</li>
    <li>Сделайте вывод и запишите его.</li>
  </ol>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Упражнение 2</h3>
  <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
    <li>Постройте динамическую модель равнобедренного треугольника АВС (АВ=АС).</li>
    <li>Из вершины А проведите медиану, биссектрису и высоту.</li>
    <li>Сформулируйте гипотезу о взаимном расположении медианы, биссектрисы и высоты, проведенных из вершины равнобедренного треугольника.</li>
    <li>Поочередно переместите вершины треугольника.</li>
    <li>Сделайте вывод и запишите его.</li>
  </ol>
</div>



<div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Свойства равнобедренного треугольника</h2>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    <strong>Теорема:</strong> В равнобедренном треугольнике углы при основании равны.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    В равнобедренном треугольнике медианы, проведенные к боковым сторонам, равны.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    <strong>Теорема:</strong> В равнобедренном треугольнике биссектриса, проведенная к основанию, является медианой и высотой.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    <strong>Следствие:</strong> В равнобедренном треугольнике медиана, биссектриса и высота, проведенные к основанию, совпадают.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    <strong>Признак равнобедренного треугольника:</strong> Если медиана треугольника совпадает с его высотой, то он равнобедренный.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 1</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Точки D, E – середины сторон треугольника АВС. Что можно сказать о сторонах треугольника, в котором:
  </p>
  <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
    <li>все медианы имеют разную длину;</li>
    <li>две медианы имеют равную длину.</li>
  </ul>
  <p className="text-base text-gray-700 leading-relaxed mt-4">
    Запишите соотношения между длинами сторон треугольника для каждого случая.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 2</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Как должна быть расположена высота ВЕ относительно медианы ВD, чтобы треугольник АВС стал равнобедренным (АС=АВ)? Для решения используйте динамическую модель. Дайте обоснование вывода.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 3</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Каким должно быть соотношение между отрезком СМ и медианой АМ в треугольнике АВС, чтобы? Для решения используйте динамическую модель.
  </p>
</div>
    


    <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Второй признак равенства треугольников</h2>
  
  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 1</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Прямая, перпендикулярная биссектрисе угла, пересекает его стороны. С помощью динамической модели исследуйте вопрос о виде треугольника, образованного сторонами угла и указанной прямой. Сделайте вывод и докажите его.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 2</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Как должна быть расположена высота АН относительно биссектрисы АК, чтобы треугольник стал равнобедренным с равными сторонами АВ и АС? Для решения используйте динамическую модель. Дайте обоснование вывода.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 3</h3>
 <div className='md:flex md:space-x-2 flex-col space-y-2'>
 <p className="text-base text-gray-700 leading-relaxed mb-4 w-[50%] pb-5">
    АС = AF, CD = FB. Найдите все пары равных треугольников. Для решения используйте динамическую модель. Для каждого равенства приведите доказательство.
  </p>
    <img src={ph1} alt='' className='border border-2 w-[50%]'/>
 </div>

  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Если сторона и два прилежащих к ней угла одного треугольника соответственно равны стороне и двум прилежащим к ней углам другого треугольника, то такие треугольники равны.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    В равных треугольниках биссектрисы, проведенные к равным сторонам, равны.
  </p>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    В равнобедренном треугольнике биссектрисы углов при основании равны.
  </p>
  <p className="text-base text-gray-700 leading-relaxed">
    Если в треугольнике высота совпадает с биссектрисой, то он равнобедренный.
  </p>
</div>
<div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
  <h2 className="text-2xl font-bold text-blue-600 mb-4">Третий признак равенства треугольников</h2>
  
  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 1</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Треугольник АВС равен треугольнику DEF. С помощью динамической модели исследуйте вопрос о соотношении длин высот, проведенных в равных треугольниках к соответствующим сторонам. Сделайте вывод. 
    Проведите доказательство, используя третий признак равенства треугольников.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 mb-3">Задача 2</h3>
  <p className="text-base text-gray-700 leading-relaxed mb-4">
    Треугольник АВС – равнобедренный (АВ = АС). ВМ – медиана. DE = AC, KL = MB. Постройте равнобедренный треугольник DEK с равными боковыми сторонами KD и DE, в котором отрезок KL был бы медианой. Используйте динамическую модель. Докажите равенство треугольников.
  </p>
</div>
<TriangleExplorer />
<Coments subject={2}/>  
  </div>
  </>
  );
}