import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Coments({ subject }) {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5); // Количество видимых комментариев
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [errors, setErrors] = useState(false);

   function  getComments() {
    axios
    .get(`https://api.algorithmic-lab.kz/comments/${subject}`)
    .then((res) => {setComments(res.data)
      console.log(res.data);
      
    })
    .catch((err) => console.error('Ошибка при загрузке комментариев:', err));
  }

  useEffect(() => {
    // Получение комментариев с сервера
    getComments()
  }, [subject]);

  const handleAddComment = () => {
    if (name.trim().length === 0 || newComment.trim().length === 0) {
      setErrors(true);
      return;
    }

    setErrors(false);

    const commentObj = {
      name: name,
      comment: newComment,
      rating: newRating,
      subject_id: subject,
    };

    axios
      .post('https://api.algorithmic-lab.kz/comments', commentObj)
      .then((res) => {
        getComments()
        setNewComment('');
        setName('');
        setNewRating(5);
      })
      .catch((err) => console.error('Ошибка при добавлении комментария:', err));
  };

  const handleLoadMore = () => {
    setVisibleComments((prev) => prev + 5); // Увеличиваем количество видимых комментариев на 5
  };

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
          Отзывы и комментарии
        </h2>

        {/* Форма добавления отзыва */}
        <div className="mb-8 p-4 sm:p-6 rounded-xl bg-white/70 shadow-lg backdrop-blur-md">
          <input
            name="name"
            value={name}
            placeholder="Ваше имя"
            onChange={(e) => setName(e.target.value)}
            className="w-[300px] p-3 mb-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors && name.trim().length === 0 && (
            <p className="text-red-500 text-sm">Введите ваше имя</p>
          )}

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Оставьте ваш комментарий..."
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
            rows="3"
          />
          {errors && newComment.trim().length === 0 && (
            <p className="text-red-500 text-sm">Введите комментарий</p>
          )}

          <div className="flex flex-col sm:flex-row items-center mt-4">
            <label className="mb-2 sm:mb-0 sm:mr-4 text-base sm:text-xl text-gray-700 font-medium">
              Оценка:
            </label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-base sm:text-xl"
            >
              {[5, 4, 3, 2, 1].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddComment}
              className="mt-4 sm:mt-0 sm:ml-auto px-6 py-2 sm:px-8 sm:py-3 bg-purple-600 text-white rounded-xl text-base sm:text-xl font-semibold transition-colors hover:bg-purple-700"
            >
              Оставить отзыв
            </button>
          </div>
        </div>

        {/* Список комментариев */}
        <div className="space-y-4 sm:space-y-6">
          {comments.length > 0 ? (
            comments.slice(0, visibleComments).map((comm) => (
              <div
                key={comm.id}
                className="p-4 sm:p-6 rounded-xl bg-white/80 shadow-lg backdrop-blur-sm"
              >
                <div className="flex justify-between items-center border-b pb-2 mb-3">
                  <span className="font-bold text-base sm:text-xl text-gray-800">
                    {comm.name}
                  </span>
                  <span className="text-yellow-500 text-base sm:text-xl font-bold">
                    Рейтинг: {comm.rating}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  {comm.comment}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Нет комментариев</p>
          )}
        </div>
      </section>

      {/* Кнопка загрузки ещё отзывов */}
      {visibleComments < comments.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full text-base sm:text-xl font-medium transition-colors hover:bg-green-700"
          >
            Загрузить еще комментарии
          </button>
        </div>
      )}
    </div>
  );
}