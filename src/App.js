import React from "react";
import "./App.css";

export default function App() {
  const data = [
    {
      title: "Италия",
      desc: "описание страны1",
    },
    {
      title: "Франция",
      desc: "описание страны2",
    },
    {
      title: "Румыния",
      desc: "описание страны3",
    },
  ];

  console.log(data);
  const newCard = ({ title, desc }) => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: "10px",
          border: "1px solid grey",
          width: "30%",
          borderRadius: "10px",
        }}
        key={(desc.toString(), title.toString())}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Блог о путешествиях</h1>
      </header>
      <img
        style={{
          maxWidth: "100%",
        }}
        src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg"
        alt="logo"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {data.map((props) => newCard(props))}
      </div>
    </div>
  );
}
