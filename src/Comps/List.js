import React from "react";

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: "banana",
    };
    // this.handlerClick = this.handlerClick.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  //   handlerClick() {
  //     this.setState({ counter: this.state.counter + 1 });
  //   }

  handlerChange(e) {
    this.setState({ fruit: e.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.fruit} onChange={this.handlerChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <p>пример 1</p>
        <p>пример 2</p>
        <p>пример 3</p>

        <button onClick={this.handlerClick}>ff</button>
        <p>pressed {this.state.counter}</p>
      </div>
    );
  }
}

export default List;
