import { connect } from 'react-redux'
import { toggleTodo, fetchTodos } from '../action/index'
import TodoList from '../components/TodoList.js'
import { getVisibleTodos } from '../selectors/index'
import { toJS } from '../HOCs/toJS'

const mapStateToProps = (state) => ({
  // 转换为普通的js对象   
    todos: getVisibleTodos(state)
  // todos: getVisibleTodos(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)) ,
  fetchTodos: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(toJS(TodoList))