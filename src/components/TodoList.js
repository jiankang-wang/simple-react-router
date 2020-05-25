import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, toggleTodo } = this.props
    return (
      <div>
        <ul>
          {
            todos.length > 0 && todos.map(todo => {
              return <Todo onClick={() => toggleTodo(todo.id) } key={todo.id} {...todo} />
            })
          }
        </ul>
      </div>
    )
  }
}
