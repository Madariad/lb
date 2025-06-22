import React from 'react';
// import CircleConstructionExplorer from './graph/CircleConstructionExplorer';
import { MdHelpOutline } from 'react-icons/md';
import { MdLightbulbOutline } from 'react-icons/md';
import { MdInfoOutline } from 'react-icons/md';

import pic20v1 from '../../../assets/img/pic20v1.png'
import pic20v2 from '../../../assets/img/pic20v2.png' 

import pic20v3n4 from '../../../assets/img/pic20v3n4.png' 
import pic2v5 from '../../../assets/img/pic2v5.png' 
import pic2v6 from '../../../assets/img/pic2v6.png' 
import pic2v7 from '../../../assets/img/pic2v7.png'


import pic2n10 from '../../../assets/img/pic2n10.png'

import pic2v11n12 from '../../../assets/img/pic2v11n12.png'
import pic2v8n9 from '../../../assets/img/pic2v8n9.png'

import picRes from '../../../assets/img/picRes.png'

import Insin from './graph/insin'
import Loc from './graph/loc'



export default function CirclesMutualPosition() {
  return (
    <>
      <div className='pt-16'>
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
           Взаимное расположение двух окружностей
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
            <div className="text-center text-xs text-gray-500">
                <img src={pic20v1} alt="Рис. 20.1" />
                Рис. 20.1
            </div>
            <div className="text-center text-xs text-gray-500">
                    <img src={pic20v2} alt="Рис. 20.2" />
                
                Рис. 20.2</div>
            <div className="text-center text-xs text-gray-500">
                    <img src={pic20v3n4} alt="Рис. 20.3 и Рис. 20.4"  />
                
                Рис. 20.3  /  Рис. 20.4</div>
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
            <span>Доказательство. Пусть даны две окружности с центрами в точках O₁ и O₂ и радиусами соответственно R₁, R₂, O₁O₂ = R₁ + R₂ (рис. 20.5, а).   </span>
          </div>
        </div>

     


        <div className="flex flex-col items-center mt-4">
    <img src={pic2v5} alt="рис. 20.5" className="max-w-xs border rounded shadow" />
    <span className="text-xs text-gray-500 mt-2">рис. 20.5</span>
  </div>

<div className="">

<div className="mb-8 p-6 border border-green-300 rounded-lg bg-green-50 shadow-md space-y-4">
  <p className="text-base text-gray-700 leading-relaxed">
    Рассмотрим точку <b>C</b> на первой окружности, <span className="font-mono">O<sub>1</sub>C = R<sub>1</sub></span>. Тогда <span className="font-mono">O<sub>2</sub>C = O<sub>1</sub>O<sub>2</sub> - R<sub>1</sub></span>. Следовательно, точка C не принадлежит второй окружности. Значит, эти окружности не имеют общих точек, причем одна из окружностей лежит во внешней области другой.
  </p>
  <p className="text-base text-gray-700 leading-relaxed">
    Предположим теперь, что <span className="font-mono">O<sub>1</sub>O<sub>2</sub> &lt; R<sub>1</sub> - R<sub>2</sub></span> (рис. 20.5, б). Рассмотрим точку C на первой окружности, <span className="font-mono">O<sub>1</sub>C = R<sub>1</sub></span>. Тогда <span className="font-mono">O<sub>2</sub>C = O<sub>1</sub>O<sub>2</sub> - R<sub>1</sub></span>. Следовательно, точка C не принадлежит второй окружности. Значит, эти окружности также не имеют общих точек, причем одна из окружностей лежит во внутренней области другой.
  </p>
  <div className="flex items-center gap-2 bg-yellow-50 border-l-4 border-yellow-400 rounded p-3">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-yellow-700"><MdHelpOutline size={22} /></span>
    <span className="font-semibold text-gray-800">
      Попробуйте самостоятельно установить соотношение между радиусами окружностей, касающихся друг друга, и расстоянием между их центрами.
    </span>
  </div>
  <div className="text-base text-gray-700 leading-relaxed">
    <b>Ответ на этот вопрос даёт следующая теорема.</b>
  </div>
  <div className="flex items-center gap-2 bg-red-50 border-l-4 border-red-400 rounded p-3">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700"><MdLightbulbOutline size={22} /></span>
    <span className="font-semibold text-gray-800">
      <b>Теорема.</b> Если расстояние между центрами двух окружностей равно сумме или разности их радиусов, то эти окружности касаются.
    </span>
  </div>
  <div className="text-base text-gray-700 leading-relaxed">
    <b>Доказательство.</b> Пусть даны две окружности с центрами в точках O<sub>1</sub>, O<sub>2</sub> и радиусами соответственно R<sub>1</sub>, R<sub>2</sub>. O<sub>1</sub>O<sub>2</sub> = R<sub>1</sub> + R<sub>2</sub> (рис. 20.6, а).
  </div>
  <div className="flex flex-col items-center mt-4">
    <img src={pic2v6} alt="Рис. 20.6" className="max-w-xs border rounded shadow" />
    <span className="text-xs text-gray-500 mt-2">Рис. 20.6</span>
  </div>
</div>    
</div>


<div className="mb-8 p-6 border border-orange-300 rounded-lg bg-white shadow-md space-y-4">
  <p className="text-base text-gray-700 leading-relaxed">
    Рассмотрим точку C на отрезке O<sub>1</sub>O<sub>2</sub>, для которой O<sub>1</sub>C = R<sub>1</sub>. Тогда O<sub>2</sub>C = O<sub>1</sub>O<sub>2</sub> - R<sub>1</sub>. Следовательно, точка C будет общей точкой для данных окружностей, если O<sub>2</sub>C = R<sub>2</sub>. Если D — точка на первой окружности, отличная от C, то из неравенства треугольника следует, что O<sub>1</sub>D + O<sub>2</sub>D &gt; O<sub>1</sub>O<sub>2</sub>, и точка D не принадлежит второй окружности. Значит, эти окружности не имеют общих точек, причем одна из окружностей лежит во внешней области другой.
  </p>
  <p className="text-base text-gray-700 leading-relaxed">
    Предположим теперь, что O<sub>1</sub>O<sub>2</sub> &lt; R<sub>1</sub> - R<sub>2</sub> (рис. 20.5, б). Рассмотрим точку C на первой окружности, для которой O<sub>1</sub>C = R<sub>1</sub>. Тогда O<sub>2</sub>C = O<sub>1</sub>O<sub>2</sub> - R<sub>1</sub>. Следовательно, точка C не принадлежит второй окружности. Значит, эти окружности также не имеют общих точек, причем одна из окружностей лежит во внутренней области другой.
  </p>
  <div className="flex items-center gap-2 bg-blue-50 border-l-4 border-blue-400 rounded p-3">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-200 text-blue-700"><MdHelpOutline size={22} /></span>
    <span className="font-semibold text-gray-800">Изобразите окружности, касающиеся внешним образом, и окружности, касающиеся внутренним образом.</span>
  </div>
  <p className="text-base text-gray-700 leading-relaxed">
    Рассмотрим несколько вариантов расположения двух окружностей:
  </p>
  <div className="space-y-4 pl-2">
    <div>
      <span className="font-semibold text-gray-800">1.</span> Изобразите точки O<sub>1</sub> и O<sub>2</sub>, расположенные на расстоянии 6 см друг от друга. С помощью циркуля с центром в точке O<sub>1</sub> проведите окружность радиусом 3 см. С центром в точке O<sub>2</sub> проведите окружность радиусом 2 см.
    </div>
    <div className="flex items-center gap-2 bg-red-50 border-l-4 border-red-400 rounded p-3 my-2">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700"><MdHelpOutline size={22} /></span>
      <span className="font-semibold text-gray-800">Как расположены относительно друг друга эти окружности?</span>
    </div>
    <div>
      <span className="font-semibold text-gray-800">2.</span> Изобразите точки O<sub>1</sub> и O<sub>2</sub>, расположенные на расстоянии 1 см друг от друга. С помощью циркуля с центром в точке O<sub>1</sub> проведите окружность радиусом 4 см. С центром в точке O<sub>2</sub> проведите окружность радиусом 2 см.
    </div>
    <div className="flex items-center gap-2 bg-red-50 border-l-4 border-red-400 rounded p-3 my-2">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-700"><MdHelpOutline size={22} /></span>
      <span className="font-semibold text-gray-800">Как расположены относительно друг друга эти окружности?</span>
    </div>
  </div>
  <div className="text-base text-gray-700 leading-relaxed">
    <b>Ответ на эти вопросы даёт следующая теорема.</b>
  </div>
  <div className="flex items-center gap-2 bg-green-50 border-l-4 border-green-400 rounded p-3">
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-200 text-green-700"><MdLightbulbOutline size={22} /></span>
    <span className="font-semibold text-gray-800">
      <b>Теорема.</b> Если расстояние между центрами двух окружностей больше суммы их радиусов или меньше их разности, то эти окружности не имеют общих точек, а если оно больше их разности и меньше их суммы, то эти окружности пересекаются.
    </span>
  </div>
  <div className="flex flex-col items-center mt-4">
    {/* <img src="/img/geometry/circles_20_7.png" alt="Взаимное расположение двух окружностей" className="max-w-xs border rounded shadow" /> */}
    <span className="text-xs text-gray-500 mt-2">
    <img src={pic2v7} alt="Рис. 20.7" />
    Рис. 20.7</span>
  </div>
  <div className="text-xs text-gray-500 mt-2">Приведено без доказательства.</div>
</div>



<div className="mb-8 p-6 border border-yellow-300 rounded-lg bg-yellow-50 shadow-md">
  <div className="flex items-center gap-2 mb-4">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
      <MdHelpOutline size={28} />
    </span>
    <span className="text-xl font-semibold text-yellow-800">Вопросы для повторения</span>
  </div>
  <ol className="list-decimal list-inside space-y-1 pl-4 text-yellow-900">
    <li>Как могут быть расположены относительно друг друга две окружности?</li>
    <li>Сколько общих точек могут иметь две окружности?</li>
    <li>Какие две окружности называются: а) касающимися; б) пересекающимися?</li>
    <li>Какие окружности называются концентрическими?</li>
    <li>В каком случае одна окружность лежит: а) во внешней области другой; б) во внутренней области другой?</li>
    <li>В каком случае две окружности касаются: а) внешним образом; б) внутренним образом?</li>
    <li>В каком случае две окружности пересекаются?</li>
  </ol>
</div>


<div className="">

    
</div>


<Insin />



<div className="" style={{backgroundColor: '#8ea5b5', padding: '50px', borderRadius: '50px', marginTop: '40px', marginBottom: '40px',}}>
<h2 className='text-center ' style={{fontSize: '32px'}}>Задачи</h2>
<div className="mb-8 mt-3 p-6 border border-blue-300 rounded-lg bg-blue-50 shadow-md space-y-4">
<p className="text-base text-gray-700 leading-relaxed">
На рисунке 8.12 точки <b>A</b>, <b>B</b>, <b>C</b> принадлежат одной прямой. Точки <b>D<sub>1</sub></b> и <b>D<sub>2</sub></b> лежат по разные стороны от этой прямой. Докажите, что если треугольники <b>ABD<sub>1</sub></b> и <b>ABD<sub>2</sub></b> равны, то треугольники <b>BCD<sub>1</sub></b> и <b>BCD<sub>2</sub></b> тоже равны.
</p>
<div className="flex flex-wrap gap-8 justify-center mt-4">
<div className="flex flex-col items-center">
<img src={picRes} alt="Рис. 8.12" className=" border rounded shadow" style={{width: '500px'}}/>
<span className="text-xs text-gray-500 mt-2">Рис. 8.12 / 8.13</span>
</div>

</div>
</div>

<Loc/>
</div>
    

        <div className="mb-8 p-6 border border-cyan-300 rounded-lg bg-cyan-50 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded bg-cyan-200 text-cyan-900 font-semibold text-base">Упражнения</span>
            <span className="text-lg font-bold text-cyan-700">A</span>
          </div>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-cyan-900">
            <li>
              Нарисуйте две окружности: <br/>
              а) не имеющие общих точек; <br/>
              б) концентрические; <br/>
              в) касающиеся внешним образом; <br/>
              г) касающиеся внутренним образом; <br/>
              д) пересекающиеся.
            </li>
            <li>
              Дана окружность радиуса 3 см и точка A на расстоянии, равном 5 см от центра окружности. Найдите радиус окружности с центром в точке A и касающейся данной окружности: <br/>
              а) внешним образом; <br/>
              б) внутренним образом.
            </li>
            <li>
              Расстояние между центрами двух окружностей равно 5 см. Как расположены эти окружности по отношению друг к другу, если их радиусы равны: <br/>
              а) 2 см и 3 см; <br/>
              б) 2 см и 2 см?
            </li>
            <li>
              Расстояние между центрами двух окружностей равно 7 см. Как расположены эти окружности по отношению друг к другу, если их радиусы равны: <br/>
              а) 3 см и 5 см; <br/>
              б) 2 см и 6 см?
            </li>
            <li>
              Расстояние между центрами двух окружностей равно 8 см, радиусы которых равны 4 см и 6 см. Семь окружностей: <br/>
              а) касаются внешним образом; <br/>
              б) касаются внутренним образом?
            </li>
          </ol>
        </div>

        <div className="mb-8 p-6 border border-orange-300 rounded-lg bg-orange-50 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded bg-orange-200 text-orange-900 font-semibold text-base">Упражнения</span>
            <span className="text-lg font-bold text-orange-700">B</span>
          </div>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-orange-900">
            <li>
              На рисунке 20.8 изображена фигура, называемая <b>кольцом</b>. Сформулируйте определение этой фигуры.
            </li>
            <li>
              На рисунке 20.9 изображена фигура, называемая <b>сектором</b>. Сформулируйте определение этой фигуры.
            </li>
            <li>
              Расстояние между центрами двух окружностей равно d и больше суммы их радиусов R<sub>1</sub> и R<sub>2</sub>. Найдите наименьшее и наибольшее расстояния между точками, расположенными на данных окружностях.
            </li>
          </ol>
          <div className="flex flex-wrap gap-8 justify-center mt-6">
            <div className="flex flex-col items-center">
              <img src={pic2v8n9} alt="Кольцо" className="max-w-[290px] border rounded shadow" />
              <span className="text-xs text-gray-500 mt-2">Рис. 20.8</span>
            </div>
            {/* <div className="flex flex-col items-center">
              <img src="/img/geometry/circles_20_9.png" alt="Сектор" className="max-w-[290px] border rounded shadow" />
              <span className="text-xs text-gray-500 mt-2">Рис. 20.9</span>
            </div> */}
          </div>
          <ol start="9" className="list-decimal list-inside space-y-2 pl-4 text-orange-900 mt-6">
            <li>
              Расстояние между центрами двух окружностей равно d и меньше разности R<sub>1</sub> - R<sub>2</sub> или радиусов (R<sub>1</sub> &gt; R<sub>2</sub>). Найдите наименьшее и наибольшее расстояния между точками, расположенными на данных окружностях.
            </li>
            <li>
              Сколько жемчужин потребуется для изготовления бус длиной 50 см, если радиус одной жемчужины равен 5 мм?
            </li>
          </ol>
        </div>

        <div className="mb-8 p-6 border border-red-300 rounded-lg bg-red-50 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded bg-red-200 text-red-900 font-semibold text-base">Упражнения</span>
            <span className="text-lg font-bold text-red-700">C</span>
          </div>
          <ol className="list-decimal list-inside space-y-2 pl-4 text-red-900">
            <li value="11">
              Две окружности с центрами в точках O<sub>1</sub>, O<sub>2</sub> пересекаются в точках A и B. Докажите, что &ang;O<sub>1</sub>A O<sub>2</sub> = &ang;O<sub>2</sub>B O<sub>1</sub> (рис. 20.10).
            </li>
            <li>
              Две окружности с центрами в точках O<sub>1</sub>, O<sub>2</sub> пересекаются в точках A и B (рис. 20.11). Докажите, что прямая O<sub>1</sub>O<sub>2</sub> перпендикулярна прямой AB.
            </li>
          </ol>
          <div className="flex flex-wrap gap-8 justify-center mt-6">
            <div className="flex flex-col items-center">
              <img src={pic2n10} alt="Пересекающиеся окружности" className="max-w-[290px] border rounded shadow" />
              <span className="text-xs text-gray-500 mt-2">Рис. 20.10</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={pic2v11n12} alt="Пересекающиеся окружности и прямая" className="max-w-[290px] border rounded shadow" />
              <span className="text-xs text-gray-500 mt-2">Рис. 20.11 / Рис. 20.12</span>
            </div>
            {/* <div className="flex flex-col items-center">
              <img src="/img/geometry/circles_20_12.png" alt="Марс и Земля" className="max-w-[120px] border rounded shadow" />
              <span className="text-xs text-gray-500 mt-2">Рис. 20.12</span>
            </div> */}
          </div>
          <ol start="13" className="list-decimal list-inside space-y-2 pl-4 text-red-900 mt-6">
            <li>
              Три окружности одинакового радиуса попарно касаются друг друга. Докажите, что их центры являются вершинами правильного треугольника.
            </li>
            <li>
              Могут ли окружности касаться друг друга: а) при окружности; б) четырёх окружностях; в) пяти окружностях?
            </li>
            <li>
              Могут ли окружности касаться друг друга четырёх окружностей одновременно?
            </li>
            <li>
              Какое наибольшее число точек попарных пересечений можно получить: а) для трёх окружностей; б) для четырёх окружностей; в) для пяти окружностей? Нарисуйте соответствующие окружности.
            </li>
            <li>
              Какое наибольшее число областей могут разбивать плоскость n окружностей? Нарисуйте соответствующие окружности (четыре окружности показаны на рисунке 20.12). Найдите наибольшее число областей для пяти окружностей.
            </li>
          </ol>
        </div>


     
      </div>
    </>
  );
} 