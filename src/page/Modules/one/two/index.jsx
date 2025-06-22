import React from 'react';
import {CircleHelp, BookOpen,} from "lucide-react"

import antena from "../../../../assets/img/antena.png"
import an1 from "../../../../assets/img/an1.png"

import anA from "../../../../assets/img/anA.png"
import anB from "../../../../assets/img/anB.png"
import anC from "../../../../assets/img/anC.png"
import anD from "../../../../assets/img/anD.png"
import anE from "../../../../assets/img/anE.png"
import anF from "../../../../assets/img/anF.png"


import QuadraticFunctionExplorer from './graph/QuadraticFunctionExplorer'




export default function twoTheme() {
    const config = {
        loader: { load: ["[tex]/html"] },
        tex: {
          packages: { "[+]": ["html"] },
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']]
        }
    };
      
  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-xl p-8 my-10 space-y-10">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-6 tracking-wide border-b-2 border-blue-200 pb-2 text-center flex items-center justify-center gap-3">
            <BookOpen className="inline-block text-blue-400" size={32} />
             25. ФУНКЦИЯ y = ax², ЕЁ СВОЙСТВА И ГРАФИК
            </h1>

            <section className="space-y-4 text-lg leading-relaxed">
                <p>
                    Вы знаете, что при изучении свойств функции находят ее область определения; множество значений; значения аргумента, при которых значение функции принимает положительные значения, отрицательные значения или равно нулю (нули функции); промежутки, на которых функция возрастает или убывает (промежутки возрастания и убывания функции).
                </p>
                <div className="bg-blue-50 p-5 rounded-xl shadow-inner border-l-4 border-blue-400 space-y-3">
                    <p>
                        Рассмотрим свойства функции <span className="font-mono bg-blue-100 px-1 rounded">y = ax²</span> для <span className="font-mono">a {'>'} 0</span> и <span className="font-mono">a {'<'} 0</span>:
                    </p>
                    <ul className="list-decimal pl-6 space-y-2">
                        <li>
                            <b>Область определения:</b> <span className="font-mono bg-yellow-100 px-1 rounded">D(y) = (-∞; +∞)</span>. Объясните, почему.
                        </li>
                        <li>
                            <b>Множество значений:</b>
                            <ul className="list-disc pl-6">
                                <li>
                                    Если <span className="font-mono">a {'>'} 0</span>, то <span className="font-mono bg-yellow-100 px-1 rounded">E(y) = [0; +∞)</span>
                                </li>
                                <li>
                                    Если <span className="font-mono">a {'<'} 0</span>, то <span className="font-mono bg-yellow-100 px-1 rounded">E(y) = (-∞; 0]</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white border-l-4 border-blue-500 shadow p-4 rounded-lg">
                    <CircleHelp color='red' size={32} />
                    <span className="text-base font-medium text-blue-900">
                        Объясните, почему при a {'>'} 0, ax² ≠ 0 для любых значений переменной x.
                    </span>
                </div>
                <div className="flex items-center gap-4 bg-white border-l-4 border-blue-500 shadow p-4 rounded-lg">
                    <CircleHelp color='red' size={32} />
                    <span className="text-base font-medium text-blue-900">
                        Объясните, почему при a {'<'} 0, ax² ≠ 0 для любых значений переменной x.
                    </span>
                </div>
            </div>

            <section className="space-y-2 text-lg">
                <p>
                    Из первого и второго свойств функции <span className="font-mono">y = ax²</span> следует, что ее график расположен:
                </p>
                <ul className="list-disc pl-6">
                    <li>в I и II координатной четвертях (выше оси абсцисс) при <span className="font-mono">a {'>'} 0</span></li>
                    <li>в III и IV координатной четвертях (ниже оси абсцисс) при <span className="font-mono">a {'<'} 0</span></li>
                </ul>
                <p>
                    <b>Промежутки знакопостоянства:</b>
                </p>
                <ul className="list-disc pl-6">
                    <li>при <span className="font-mono">a {'>'} 0</span> — только положительные значения на <span className="font-mono">(-∞; 0)∪(0; +∞)</span></li>
                    <li>при <span className="font-mono">a {'<'} 0</span> — только отрицательные значения на <span className="font-mono">(-∞; 0)∪(0; +∞)</span></li>
                </ul>
                <p>
                    <b>Значение функции при x = 0:</b> <span className="font-mono">y = ax² = 0</span>
                </p>
            </section>

            <section className="bg-yellow-50 rounded-xl p-6 shadow-inner space-y-3">
                <p>
                    Действительно, при <b>y = 0</b> получим <i>ax² = 0</i>. Поскольку <i>a ≠ 0</i>, то <i>x² = 0</i>, или <i>x = 0</i>.
                </p>
                <p>
                    Для построения графиков функций <i>y = x²</i> и <i>y = -x²</i> составим таблицу 25.1.
                </p>
                <div className="overflow-x-auto">
                    <table className="table-auto border border-gray-300 text-center mx-auto rounded-lg shadow">
                        <caption className="text-sm mb-2 font-semibold">Таблица 25.1</caption>
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border px-2 py-1">x</th>
                                <td className="border px-2 py-1">-3</td>
                                <td className="border px-2 py-1">-2</td>
                                <td className="border px-2 py-1">-1</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">1</td>
                                <td className="border px-2 py-1">2</td>
                                <td className="border px-2 py-1">3</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-gray-50">
                                <th className="border px-2 py-1">y = x²</th>
                                <td className="border px-2 py-1">9</td>
                                <td className="border px-2 py-1">4</td>
                                <td className="border px-2 py-1">1</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">1</td>
                                <td className="border px-2 py-1">4</td>
                                <td className="border px-2 py-1">9</td>
                            </tr>
                            <tr className="even:bg-gray-50">
                                <th className="border px-2 py-1">y = -x²</th>
                                <td className="border px-2 py-1">-9</td>
                                <td className="border px-2 py-1">-4</td>
                                <td className="border px-2 py-1">-1</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">-1</td>
                                <td className="border px-2 py-1">-4</td>
                                <td className="border px-2 py-1">-9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    Если построить другие точки, принадлежащие графику функции <i>y = x²</i> или <i>y = -x²</i>, то увидим, что они расположены на линии, которая плавно соединяет уже построенные с помощью таблицы точки.
                </p>
                <p>
                    Графики функций <i>y = x²</i> и <i>y = -x²</i> называют <b>параболами</b> (рис. 25.1, 25.2).
                </p>
            </section>

            <section className="bg-yellow-50 rounded-xl p-6 shadow-inner space-y-3">
                <p>
                    Для построения графиков функций <i>y = 2x²</i> и <i>y = -2x²</i> составим таблицу 25.2.
                </p>
                <div className="overflow-x-auto">
                    <table className="table-auto border border-gray-300 text-center mx-auto rounded-lg shadow">
                        <caption className="text-sm mb-2 font-semibold">Таблица 25.2</caption>
                        <thead className="bg-blue-100">
                            <tr>
                                <th className="border px-2 py-1">x</th>
                                <td className="border px-2 py-1">-2</td>
                                <td className="border px-2 py-1">-1</td>
                                <td className="border px-2 py-1">-½</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">½</td>
                                <td className="border px-2 py-1">1</td>
                                <td className="border px-2 py-1">2</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-gray-50">
                                <th className="border px-2 py-1">y = 2x²</th>
                                <td className="border px-2 py-1">8</td>
                                <td className="border px-2 py-1">2</td>
                                <td className="border px-2 py-1">0.5</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">0.5</td>
                                <td className="border px-2 py-1">2</td>
                                <td className="border px-2 py-1">8</td>
                            </tr>
                            <tr className="even:bg-gray-50">
                                <th className="border px-2 py-1">y = -2x²</th>
                                <td className="border px-2 py-1">-8</td>
                                <td className="border px-2 py-1">-2</td>
                                <td className="border px-2 py-1">-0.5</td>
                                <td className="border px-2 py-1">0</td>
                                <td className="border px-2 py-1">-0.5</td>
                                <td className="border px-2 py-1">-2</td>
                                <td className="border px-2 py-1">-8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    При одних и тех же значениях аргумента сравните соответствующие значения функций:
                    <br />
                    1) <i>y = 2x²</i> и <i>y = x²</i>; 2) <i>y = ½x²</i> и <i>y = x²</i> (табл. 25.3).
                </p>
            </section>

            <section className="bg-yellow-50 rounded-xl p-6 shadow-inner space-y-3">
                <h3 className="font-bold text-lg mb-2">Таблица 25.3</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto border border-gray-300 text-center mx-auto rounded-lg shadow">
                        <thead className="bg-blue-100">
                            <tr>
                                <th className='border px-2 py-1'>x</th>
                                <th className='border px-2 py-1'>-4</th>
                                <th className='border px-2 py-1'>-2</th>
                                <th className='border px-2 py-1'>-1</th>
                                <th className='border px-2 py-1'>-½</th>
                                <th className='border px-2 py-1'>0</th>
                                <th className='border px-2 py-1'>½</th>
                                <th className='border px-2 py-1'>1</th>
                                <th className='border px-2 py-1'>2</th>
                                <th className='border px-2 py-1'>4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-gray-50">
                                <td className='border px-2 py-1'>y = 2x²</td>
                                <td className='border px-2 py-1'>32</td>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1'>-½</td>
                                <td className='border px-2 py-1'>0</td>
                                <td className='border px-2 py-1'>½</td>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1'>8</td>
                                <td className='border px-2 py-1'>32</td>
                            </tr>
                            <tr className="even:bg-gray-50">
                                <td className='border px-2 py-1'>y = x²</td>
                                <td className='border px-2 py-1'>16</td>
                                <td className='border px-2 py-1'>4</td>
                                <td className='border px-2 py-1'>1</td>
                                <td className='border px-2 py-1'>¼</td>
                                <td className='border px-2 py-1'>0</td>
                                <td className='border px-2 py-1'>¼</td>
                                <td className='border px-2 py-1'>1</td>
                                <td className='border px-2 py-1'>4</td>
                                <td className='border px-2 py-1'>16</td>
                            </tr>
                            <tr className="even:bg-gray-50">
                                <td className='border px-2 py-1'>y = ½x²</td>
                                <td className='border px-2 py-1'>8</td>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1'>0.5</td>
                                <td className='border px-2 py-1'>⅛</td>
                                <td className='border px-2 py-1'>0</td>
                                <td className='border px-2 py-1'>⅛</td>
                                <td className='border px-2 py-1'>½</td>
                                <td className='border px-2 py-1'>2</td>
                                <td className='border px-2 py-1'>8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    При одних и тех же значениях аргумента значения функции <span className="font-mono">y = 2x²</span> в 2 раза больше соответствующих значений функции <span className="font-mono">y = x²</span>.
                </p>
                <p>
                    Говорят, что график функции <span className="font-mono">y = 2x²</span> получается из графика функции <span className="font-mono">y = x²</span> с помощью его растяжения вдоль оси Oy в 2 раза.
                </p>
                <p>
                    При одних и тех же значениях аргумента значения функции <span className="font-mono">y = ½x²</span> в 2 раза меньше соответствующих значений функции <span className="font-mono">y = x²</span>.
                </p>
            </section>

         <div className="" style={{position: 'relative'}}>
        

         <QuadraticFunctionExplorer />
      
         </div>

            <section className="space-y-2 text-lg">
                <p>
                    Говорят, что график функции <span className="font-mono">y = (1/2)x²</span> получается из графика функции <span className="font-mono">y = x²</span> с помощью его сжатия вдоль оси Oy в 2 раза.
                </p>
                <p>
                    В одной и той же системе координат построены графики функций: <span className="font-mono">y = x²</span>, <span className="font-mono">y = (1/2)x²</span> и <span className="font-mono">y = 2x²</span> (рис. 25.3).
                </p>
                <p>
                    Все эти графики называют параболами.
                </p>
            </section>

            <section className="space-y-2 text-lg">
                <p>
                    В одной и той же системе координат постройте параболы, которые являются графиками функций:
                    <span className="font-mono">y = -x²</span>, <span className="font-mono">y = -1/2x²</span> и <span className="font-mono">y = -2x²</span>.
                </p>
                <ol className="list-decimal pl-6 space-y-1">
                    <li>Как из параболы <span className="font-mono">y = x²</span> получить параболу: <span className="font-mono">y = -7x²</span>; <span className="font-mono">y = 1/2x²</span>?</li>
                    <li>Как относительно друг друга расположены параболы <span className="font-mono">y = 25x²</span> и <span className="font-mono">y = -25x²</span>?</li>
                    <li>Объясните, почему ось ординат является осью симметрии параболы вида <span className="font-mono">y = ax²</span>.</li>
                    <li>В каких координатных четвертях расположена парабола: <span className="font-mono">y = 9x²</span>; <span className="font-mono">y = -9x²</span>?</li>
                </ol>
            </section>

            {/* Задания A, B, C */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* A */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#08a898e0]">
                    <h3 className="font-bold mb-3 text-center text-[#08a898e0] text-2xl">A</h3>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.1. Принадлежит ли графику функции <code>y = 3x²</code> точка:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>A(1; 3)</li>
                            <li>B(0.5; 0.75)</li>
                            <li>C(-2; 8)</li>
                            <li>M(-4; 48)</li>
                            <li>P(-1; 3.5)</li>
                            <li>K(π; 3π²)</li>
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.2. Постройте график функции <code>y = -3x²</code>. По графику найдите и запишите промежутки возрастания и убывания функции.
                        </h4>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.3. Постройте в одной координатной плоскости графики функций:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><code>y = 4x²</code> и <code>y = 1/4x²</code></li>
                            <li><code>y = x²</code> и <code>y = 1/3x²</code></li>
                            <li><code>y = 2x²</code> и <code>y = 5x²</code></li>
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.4. С помощью графика функции <code>y = 0.4x²</code> сравните значения выражений:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><code>0.4 × 3²</code> и <code>0.4 × 4²</code></li>
                            <li><code>0.4 × (-2)²</code> и <code>0.4 × (-3)²</code></li>
                        </ul>
                    </section>
                </div>
                {/* B */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#ba9f0a]">
                    <h3 className="font-bold mb-3 text-center text-[#ba9f0a] text-2xl">B</h3>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.5. Используя графики функций, найдите число корней уравнения:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>1) x² + 4 = 0;</li>
                            <li>2) 4x² - 3 = 5;</li>
                            <li>3) 5 - 0.4x² = 2;</li>
                            <li>4) -2x³ + 3x + 5 = 2.</li>
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.6. Пересекаются ли графики функций y = 3x² и y = 5 - 2x?
                        </h4>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.7. Найдите графическим способом приближенные значения корней уравнения 2x² = 3x + 1.
                        </h4>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.8. Является ли функция y = 1/3x² возрастающей (убывающей) на промежутке:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>1) [1; 4];</li>
                            <li>2) [-4; -2];</li>
                            <li>3) [0; 14]?</li>
                        </ul>
                    </section>
                </div>
                {/* C */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#b90e0e]">
                    <h3 className="font-bold mb-3 text-center text-[#b90e0e] text-2xl">C</h3>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.9. a) Найдите наибольшее и наименьшее значения функции y = 5x² на промежутке:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>1) [0; 5];</li>
                            <li>2) [-5; 4];</li>
                            <li>3) [-5; -4].</li>
                        </ul>
                        <h4 className="text-lg font-semibold text-blue-700 mb-2 mt-4">
                            б) Найдите наибольшее и наименьшее значения функции y = -0.5x² на промежутке:
                        </h4>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>1) [-2; 0];</li>
                            <li>2) [-3; 3];</li>
                            <li>3) [-1; 1].</li>
                        </ul>
                    </section>
                    <section className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-700 mb-2">
                            25.10. Могут ли пересекаться графики функций y = ax² и y = x - 5?
                        </h4>
                    </section>
                </div>
            </div>

            {/* Теория и практика параболы */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-[#ba9f0a] mt-10">
                {/* <h3 className="font-bold mb-3 text-center text-[#ba9f0a] text-2xl">B</h3> */}
                <section className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        25.11. Как появилась теория "парабола"?
                    </h4>
                </section>
                <section className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        25.12. Расскажите о свойстве параболы, применяемом на практике.
                    </h4>
                    <p>На рисунке 25.4 изображен параболоид. Как он получается и где используется?</p>
                    <p>Пример: Параболическое свойство используется в параболических рефлекторах и спутниковых антеннах.</p>
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <img src={an1} alt="" className="rounded-lg shadow" />
                        <img src={antena} alt="" className="rounded-lg shadow" />
                    </div>
                </section>
                <section className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                        Таблица 25.4: Подготовьтесь к овладению новыми знаниями.
                    </h4>
                    <table className="w-full border-collapse border border-gray-300 bg-[#fceedb] rounded-lg shadow">
                        <thead className="bg-yellow-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Тип числового промежутка</th>
                                <th className="border border-gray-300 px-4 py-2">Изображение</th>
                                <th className="border border-gray-300 px-4 py-2">Обозначение</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Открытый числовой луч</td>
                                <td className="border border-gray-300 px-4 py-2"> <img src={anA} alt="" className="inline-block h-8" /> (a)</td>
                                <td className="border border-gray-300 px-4 py-2">(a; ∞)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Числовой луч</td>
                                <td className="border border-gray-300 px-4 py-2"> <img src={anB} alt="" className="inline-block h-8" /> (b)</td>
                                <td className="border border-gray-300 px-4 py-2">[a; ∞)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Числовой отрезок</td>
                                <td className="border border-gray-300 px-4 py-2"> <img src={anC} alt="" className="inline-block h-8" /> (c)</td>
                                <td className="border border-gray-300 px-4 py-2">[a; b]</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Полуинтервал</td>
                                <td className="border border-gray-300 px-4 py-2"> <img src={anD} alt="" className="inline-block h-8" /> (d)</td>
                                <td className="border border-gray-300 px-4 py-2">[a; b)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Полуинтервал</td>
                                <td className="border border-gray-300 px-4 py-2"> <img src={anE} alt="" className="inline-block h-8" /> (e)</td>
                                <td className="border border-gray-300 px-4 py-2">(a; b]</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>

  
  );
}