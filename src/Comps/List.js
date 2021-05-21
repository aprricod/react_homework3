import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    let countryData = {
      italy:
        "Короле́вство Ита́лия (итал. Regno d'Italia) — государство, возникшее в 1861 году в ходе Рисорджименто и объединившее все независимые итальянские государства в единую страну под властью Сардинского королевства. Правившая в Сардинском королевстве Савойская династия стала правящей династией Италии. После референдума 1946 года Италия перешла от монархического строя к республиканскому, а королевская семья уехала из страны.",
      france:
        "Фра́нция (фр. France), официальное название — Францу́зская Респу́блика (фр. République française), — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство, братство», её принцип — правление народа, народом и для народа.",
      romania:
        "Румы́ния (рум. România) — государство в Юго-Восточной Европе. Частично расположена в северо-восточной части Балканского полуострова. На юго-востоке омывается водами Чёрного моря. Граничит с Украиной на севере, Молдавией на востоке, Венгрией на северо-западе, Сербией на западе и Болгарией на югеПерейти к разделу «#Географическое положение».",
    };
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Выберите страну из списка ниже чтобы увидеть описание: </p>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value=""></option>
              <option value="italy">Италия</option>
              <option value="france">Франция</option>
              <option value="romania">Румыния</option>
            </select>
          </label>
          {/* <input type="submit" value="Отправить" /> */}
          {this.state.value === "italy" ? (
            <p>{countryData.italy}</p>
          ) : this.state.value === "france" ? (
            <p>{countryData.france}</p>
          ) : this.state.value === "romania" ? (
            <p>{countryData.romania}</p>
          ) : (
            <p>Страна не выбрана</p>
          )}
        </form>
      </div>
    );
  }
}

export default List;

// const options = [
//   {
//     label: "Apple",
//     value: "apple",
//   },
//   {
//     label: "Mango",
//     value: "mango",
//   },
//   {
//     label: "Banana",
//     value: "banana",
//   },
// ];

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fruit: "banana",
//     };
//     this.handlerClick = this.handlerClick.bind(this);
//     this.handlerChange = this.handlerChange.bind(this);
//   }

//     handlerClick() {
//       this.setState({ counter: this.state.counter + 1 });
//     }

//   handlerChange(e) {
//     this.setState({ fruit: e.target.value });
//     console.log(this.state.value);
//   }

//   render() {
//     return (
//       <div className="App">
//         <select value={this.state.fruit} onChange={this.handlerChange}>
//           {options.map((option) => (
//             <option value={option.value}>{option.label}</option>
//           ))}
//         </select>
//         <p>пример 1</p>
//         <p>пример 2</p>
//         <p>пример 3</p>

//         <button onClick={this.handlerClick}>ff</button>
//         <p>pressed {this.state.counter}</p>
//       </div>
//     );
//   }
// }
// export default List;
