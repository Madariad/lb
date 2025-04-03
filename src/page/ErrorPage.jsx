// ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";
import errorImg from "../assets/img/erorr.png";
const ErrorPage = () => {
  const error = useRouteError();
  console.error("Ошибка маршрутизации:", error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#29648d"
      }}
    >
    <div>
        <img
          src={errorImg}
          alt="Ошибка"
          style={{ width: "100px", height: "100px" }}
        />
    </div>
      <h1>Упс... Что-то пошло не так!</h1>
      <p>
        Кажется, наши биты заблудились в бескрайних просторах интернета.
      </p>
      <p>
        Ошибка:{" "}
        <i>{error.statusText || error.message || "Неизвестная ошибка"}</i>
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          border: "1px solid #fff",
          borderRadius: "4px",
        }}
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};

export default ErrorPage;
