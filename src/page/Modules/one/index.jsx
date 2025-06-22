
// import MathJax from 'react-mathjax';
// import form from '../../../assets/img/form.png'
// import pic10 from '../../../assets/img/Picture10.png'
// import pic11 from '../../../assets/img/Picture11.png'
// import pic12 from '../../../assets/img/Picture12.png'
// import pic13 from '../../../assets/img/Picture13.png'
// import pic14 from '../../../assets/img/Picture14.png'
// import pic15 from '../../../assets/img/Picture15.png'
// import pic16 from '../../../assets/img/Picture16.png'


// import Coments from '../../../components/Coments';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function One() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      title: 'Решение систем двух линейных уравнений с двумя переменными графическим способом',
      link: 'one/1',
      quiz: 'https://quizizz.com/join/quiz/5c44e3857a02ac001a1aff63/start',
    },
    {
      title: 'Построение графиков квадратичных функций',
      link: 'one/2',
      quiz: 'https://quizizz.com/join/quiz/5cdb42741b8e43001a12e202/start',
    },
    {
      title: 'Применение функций в задачах на движение',
      link: 'one/3',
      quiz: 'https://quizizz.com/join/quiz/5e7e55151abda6001b06e9e1/start',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
      {/* Лёгкие полупрозрачные круги для атмосферы */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-gray-700 rounded-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-600 rounded-full opacity-08"></div>
      </div>

      {/* Контент */}
      <div className="relative container mx-auto py-16 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="bg-gray-800 bg-opacity-60 border border-gray-700 backdrop-blur-md rounded-xl shadow-md p-6 flex flex-col"
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              {c.title}
            </h2>
            <div className="mt-auto flex gap-3">
              <Link
                to={c.link}
                className="flex-1 px-4 py-2 bg-gray-700 bg-opacity-80 text-white rounded-md text-center hover:bg-gray-600 transition"
              >
                К теме
              </Link>
              <a
                href={c.quiz}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gray-700 bg-opacity-80 text-white rounded-md text-center hover:bg-gray-600 transition"
              >
                Тест
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}




// export default function One() {

//     useEffect(() => {
//         window.scrollTo(0, 0)
//       }, [])

//   return (
//     <div className="container mx-auto py-16 px-4">
       
          
//             <h1 className="text-3xl font-bold mb-6 text-center">
//             Функция. График функции.
//             </h1>

//             <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
//               <h2 className="text-xl font-semibold mb-4">Описание</h2>
//               <p className="text-base">
//             цель и содержание программы, формы контроля. Функция и график функции. Линейная функция и её график. 
//             Взаимное расположение графиков линейных функций. Решение системы линейных уравнений с двумя переменными графическим способом. 
//             Функция вида у=ах <sup>2</sup>, графики функции и ее свойства. Функция вида у=ах <sup>3</sup> графики функции и ее свойства. 
//             Функция вида <MathJax.Provider>
//               <MathJax.Node formula={"y = \\frac{k}{x}"} />
//             </MathJax.Provider>, графики функции и ее свойства.
//           </p>
//             </div>







//           <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
//   <h2 className="text-2xl font-bold text-blue-600 mb-4">Алгоритм изучения функции в программе GeoGebra</h2>
//   <MathJax.Provider>
//     <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
//       <li>Создать ползунок для коэффициента <span className='font-bold'>k</span>  от 1 до 10 с шагом 0.01.</li>
//       <li>Ввести функцию y = kx.</li>
//       <li>Перемещать бегунок коэффициента <span className='font-bold'>k</span> .</li>
//       <li>
//         Сделать вывод о поведении функции в зависимости от изменения коэффициента <span className='font-bold'>k</span> . 
//         <span className="italic">[При увеличении <span className='font-bold'>k</span> прямая стремится к оси ординат]</span>
//       </li>
//       <li>Затем меняем интервал <span className='font-bold'>k</span> от -10 до 0 шагом 0.01.</li>
//       <li>Перемещать бегунок коэффициента <span className='font-bold'>k</span>.</li>
//       <li>
//         Сделать вывод о поведении функции в зависимости от изменения коэффициента <span className='font-bold'>k</span>. 
//         <span className="italic">[При уменьшении k прямая стремится к оси ординат]</span>
//       </li>
//       <li>Затем меняем интервал <span className='font-bold'>k</span> от -10 до 10 шагом 0.01.</li>
//       <li>Перемещать бегунок коэффициента <span className='font-bold'>k</span>.</li>
//       <li>
//         Делаем предположение о том, если <span className='font-bold'>k</span> будет бесконечно увеличиваться, что будет происходить с графиком функции 
//         <span className="italic">[бесконечно приближаться к оси ординат]</span> и проверяем, вводя интервал для <span className='font-bold'>k</span> от 100 до 100.
//       </li>
//       <li>
//         Сделать и записать обобщенный вывод о поведении функции в зависимости от изменения коэффициента <span className='font-bold'>k</span> . 
//         <span className="italic">[При увеличении <span className='font-bold'>k</span> по модулю, функция бесконечно приближается к оси ординат]</span>
//       </li>
//       <li>
        
//       Можно еще отдельно ввести интервал для <span className='font-bold'>k</span> от 0 до 1 шаг 0.01. Он показывает учащимся, что угол в 45֯ прямая проходит как раз в этом интервале.

//       </li>
//       <li>Повторяем этот алгоритм для функции <span className='font-bold'>y = kx<sup>2</sup></span>. Шаги 1-11.</li>
//       <li>
//         Делаем и записываем вывод, что и для этой функции справедлив вывод 
//         <span className="italic">[При увеличении <span className='font-bold'>k</span> по модулю, функция <span className='font-bold'>y = kx<sup>2</sup></span> бесконечно приближается к оси ординат]</span>.
//       </li>
//       <li>
//         Перед построением функции <img src={form} alt='' className='inline'/> делаем предположение о её поведении в зависимости от <span className='font-bold'>k</span>. 
//         <span className="italic">[Чаще всего обучающиеся предполагают, что при увеличении k по модулю функция будет приближаться к осям координат]</span>.
//       </li>
     
//     </ol>
   
//   </MathJax.Provider>
//   <div className='pt-6'> 
//     Затем строим функцию <img src={form} alt='' className='inline'/>   и исследуем поведение этой функции в зависимости от <span className='font-bold'>k</span>. 
//     Делаем и записываем вывод о том, что при увеличении <span className='font-bold'>k</span> по модулю график функции удаляется от начала координат и координатных осей.
//     Изучение изменения графика квадратичной функции при различных параметрах <MathJax.Node formula="a, b, c" />. Построить график квадратичной функции в GeoGebra.
//     </div>
//   <p className="text-base text-blue-600 mt-4">
//     Ссылка: <a href="https://www.geogebra.org/classic" target="_blank" rel="noopener noreferrer" className="underline">GeoGebra Classic</a>
//   </p>
// </div>
        


//         <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
//   <h2 className="text-2xl font-bold text-blue-600 mb-4">Вопросы</h2>
//   <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
//     <li>
//       Как изменится местоположение квадратичной функции, если значение её коэффициентов удвоить (утроить и т.д.)?
//     </li>
//     <li> <span className='font-bold'>y = 2x<sup>2</sup> + 4x - 5</span> Если бы наша функция была иной?</li>
//     <li><span>y = ax <sup>2</sup> + 4x - 5</span> Почему <span className="font-bold">a ≠ 0</span>?</li>
//     <li>Что если <span className="font-bold">a = 0</span>?</li>
//   </ol>
//   <p className="text-base text-gray-700 leading-relaxed mt-4">
//     Ссылка на апплет: <a href="https://www.geogebra.org/classic" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">GeoGebra</a>
//   </p>
//   <p className="text-base text-gray-700 leading-relaxed mt-4">
//     Таким образом, на практике при исследовании параболы при различных параметрах <span className="font-bold">a, b, c</span>, использование компьютерной программы GeoGebra значительно сократило время, которое мы могли потратить при исследовании параболы при помощи ручки и листа бумаги. Также благодаря функции «Анимация» очень удобно и легко отследить «поведение» параболы при изменении параметров <span className="font-bold">a, b, c</span>.
//   </p>
//   <p className="text-base text-gray-700 leading-relaxed mt-4">
//     В процессе исследования ученики ознакомились со способами построения параболы, самостоятельно изучили и применили на практике возможности программы GeoGebra. Для многих людей математика является трудной и непонятной, но мы считаем, что если подробнее изучить математические понятия и их применение в жизни, то математика становится интересной, а наши знания более осмысленными и глубокими.
//   </p>
//   <p className="text-base text-gray-700 leading-relaxed mt-4">
//     Приобретённые в ходе исследования знания пригодятся ученикам на уроках, при подготовке к олимпиадам.
//   </p>
//   <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Пример построения функции</h3>
//   <ol className="list-decimal list-inside space-y-2 pl-4 text-gray-700">
//     <li>
//       При прохождении тем «Функции и их графики» ребята должны усвоить алгоритмы построения графиков функций, уметь исследовать поведение функции при изменении некоторых параметров. Рассмотрим простую функцию <span className="font-bold">y = ax + b</span>. Графиком функции является прямая, которую можно построить очень просто. А вот чтобы показать, как меняется график при изменении коэффициентов <span className="font-bold">a</span> и <span className="font-bold">b</span>, поможет программа GeoGebra.
//     </li>
//     <li>
//       Вводим ползунки <span className="font-bold">a</span> и <span className="font-bold">b</span> через панель инструментов:
//       <ul className="list-disc list-inside pl-6">
//         <li>Вызываем команду «Ползунок», нажимаем на рабочую область, появится карточка с названием параметра <span className="font-bold">a</span>, затем нажимаем ОК. Аналогично создаём параметр <span className="font-bold">b</span>.</li>
//         <li>В строку ввода записываем функцию <span className="font-bold">y = ax + b</span> и нажимаем «Enter».</li>
//         <li>Щёлкаем правой кнопкой мыши по ползунку <span className="font-bold">a</span> и выбираем «Анимировать». Для остановки анимации заходим в свойства ползунка и отключаем анимацию.</li>
//         <li>Наблюдаем, как при изменении значения коэффициента <span className="font-bold">a</span> меняется график функции <span className="font-bold">y = ax + b</span>.</li>
//         <li>Аналогично изменяем значение коэффициента <span className="font-bold">b</span>.</li>
//       </ul>
//     </li>
//     <li>
//       Вводим для этой же функции знаки модуля:
//       <ul className="list-disc list-inside pl-6">
//         <li><span className="font-bold">y = a|x| + b</span>: В строке «Ввод» вводим выражение <span className="font-bold">a abs(x) + b</span> и нажимаем «Enter».</li>
//         <li><span className="font-bold">y = |ax + b|</span>: В строке «Ввод» вводим выражение <span className="font-bold">abs(ax + b)</span> и нажимаем «Enter».</li>
//       </ul>
//     </li>
//     <li>
//       Для построения графиков квадратных функций вводим ползунки <span className="font-bold">a, b, c</span>. В строке «Ввод» записываем <span className="font-bold">y = ax^2 + bx + c</span> и нажимаем «Enter». Появится график функции.
//     </li>
//     <li>
//       Добавляем анимацию для коэффициентов <span className="font-bold">a, b, c</span>. Наблюдаем, как изменяется график параболы.
//     </li>
//   </ol>
//   <p className="text-base text-gray-700 leading-relaxed mt-4">
//     Символ «<span className="font-bold">^</span>» (shift+6) в программе GeoGebra обозначает возведение в степень.
//   </p>
//   <div className="mb-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
//   <h2 className="text-2xl font-bold text-blue-600 mb-4">Работа с графиками в GeoGebra</h2>
  
//   <div className="mb-6">
//     <img src={pic10} alt="График функции" className="w-full border border-gray-300 rounded-md mb-4" />
//     <p className="text-base text-gray-700 leading-relaxed">
//       Рисунок можно будет масштабировать. Для перемещения рабочей области нужно будет нажать клавишу «Shift», одновременно удерживая нажатой левую кнопку мыши.
//       Также можно перемещать сам график при помощи нажатой правой кнопки мыши, при этом в Панели объектов будут отображены изменения в уравнении.
//       Таким же способом можно работать и с другими, более сложными функциями.
//     </p>
//   </div>

//   <div className="mb-6">
//     <h3 className="text-xl font-semibold text-gray-800 mb-3">Графики квадратных функций, содержащих знаки модуля</h3>
//       <p className="text-base text-gray-700 leading-relaxed mb-4">
//         1. Построим график функции <span className='font-bold'>g(x) = 2x <sup>2</sup> + |x| - 3</span>: В строке «Ввод» введем выражение <span className="font-bold">2x<sup>2</sup> + abs(x) - 3</span> и нажмем клавишу «Enter» (abs обозначает модуль выражения).
//       </p>


//     <img src={pic11} alt="График функции" className="w-full border border-gray-300 rounded-md mb-4" />
//       <p className="text-base text-gray-700 leading-relaxed mb-4">
//         2. Таким же образом построим график функции: <span className="font-bold">y = |2x<sup>2</sup> + |x| - 3 |: abs(2x<sup>2</sup> + abs(x) - 3)</span>.
//       </p>
//       <img src={pic12} alt="График функции с модулем" className="w-full border border-gray-300 rounded-md" />
   
//   </div>
// {/* 
//   <div className="mb-6">
   
//     <img src={pic12} alt="График функции с модулем" className="w-full border border-gray-300 rounded-md" />
//   </div> */}

//   <div className="mb-6">
//     <h3 className="text-xl font-semibold text-gray-800 mb-3">Графики сложных функций</h3>
//     <div className="mb-4">
//       <p className="text-base text-gray-700 leading-relaxed">1. График функции <span className='font-bold'>y = cos(3x - 1) </span> :</p>
//       <img src={pic13} alt="График сложной функции 1" className="w-full border border-gray-300 rounded-md" />
//     </div>
//     <div className="mb-4">
//       <p className="text-base text-gray-700 leading-relaxed">2. График функции <span className='font-bold'>y = |log(x + 4)|</span> :</p>
//       <img src={pic14} alt="График сложной функции 2" className="w-full border border-gray-300 rounded-md" />
//     </div>
//     <div className="mb-4">
//       <p className="text-base text-gray-700 leading-relaxed">3. График функции <span className='font-bold'>y = |log2(|x<sup>2</sup> - 2x|)|</span> :</p>
//       <img src={pic15} alt="График сложной функции 3" className="w-full border border-gray-300 rounded-md" />
//     </div>
//     <div>
//       <p className="text-base text-gray-700 leading-relaxed">4. График функции <span className='font-bold'>y = |sin(|x <sup>2</sup> - 3|)|</span> :</p>
//       <img src={pic16} alt="График сложной функции 4" className="w-full border border-gray-300 rounded-md" />
//     </div>
//   </div>
// </div>

//   <Coments subject={1}/>
// </div>
        
            
          



          
       
      

//       </div>
//   )
// }
