import './home-work.css';
import React from 'react';

class HomeWork extends React.Component {
  constructor(props) {
    super(props);
    this.score = {
      yo: 10
    };
  }
  plusCount = () => {
    this.setState({
      yo: this.score.yo +=1
    })
  }
  minusCount = () => {
    this.setState({
      yo: this.score.yo -=1
    })
  }
  randomCount = () => {
    this.setState({
      counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  }
  resetCount = () => {
    this.setState({
      yo: this.score.yo = 10
    })
  }
  
  render() {
    return (
      <div className="home-work">
        <div className="counter">{this.score.yo}</div>
        <div className="controls">
          <button onClick ={this.plusCount}>INC</button>
          <button onClick ={this.minusCount}>DEC</button>
          <button onClick ={this.randomCount}>RND</button>
          <button onClick ={this.resetCount}>RESET</button>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default HomeWork;