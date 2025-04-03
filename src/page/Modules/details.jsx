import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import modulesList from './data/modules'
import ReactPlayer from 'react-player'
import 'katex/dist/katex.min.css';
import katex from 'katex';

export default function Details() {
  const { id } = useParams()
  const moduleId = parseInt(id)
  const currentModule = modulesList.find(item => item.id === moduleId)



  

  // При монтировании компонента прокручиваем страницу в начало
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="container mx-auto py-16 px-4">
        {currentModule ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">
              {currentModule.title}
            </h1>

            <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
              <h2 className="text-xl font-semibold mb-4">Описание</h2>
              <div className="text-base" dangerouslySetInnerHTML={{__html: katex.renderToString(t('currentModule.content'))}}></div>
              {/* <p >{currentModule.content}</p> */}
            </div>

            {currentModule.video && (
              <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
                <h2 className="text-xl font-semibold mb-4">Видеоурок</h2>
                <ReactPlayer
                  url={currentModule.video}
                  width="100%"
                  height="360px"
                  className="react-player"
                />
              </div>
            )}

            {currentModule.desmos_link && (
              <div className="mb-8 p-4 border border-gray-300 rounded-lg bg-gray-100">
                <h2 className="text-xl font-semibold mb-4">Ресурсы</h2>
                <img
                  src="https://via.placeholder.com/800x400.png?text=Изображение+модуля"
                  alt="Изображение модуля"
                  className="w-full mb-4 rounded"
                />
                <a
                  href={currentModule.desmos_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 no-underline font-bold"
                >
                  Открыть Desmos
                </a>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-xl">Модуль не найден</p>
        )}

        {/* Карточка теста для мобильных устройств (отображается в конце контента, не фиксированная) */}
        {currentModule && (
          <div className="block mt-8">
            <Link
              to={`/test/${currentModule.route}`}
              className="flex items-center p-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/test-passed.png"
                alt="Иконка теста"
                className="h-8 w-8 mr-2"
              />
              <span>Перейти к тесту</span>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
