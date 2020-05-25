import React, { Component } from 'react'

export default class AddTodo extends Component {

  handlerClick = () => {
    const { addTodo, text } = this.props
    addTodo(text)
  }

  handlerChange = (e) => {
    const { setTodoText } = this.props
    setTodoText(e.target.value)
  }

  render() {
    const { text } = this.props
    return (
      <div>
        <input value={ text } onChange={ this.handlerChange } />
        <button onClick={ this.handlerClick }>Add</button>
      </div>
    )
  }
}
