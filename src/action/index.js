import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  SET_TODO_TEXT,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from './actionType'
let nextTodoId = 0


// 异步请求start
  const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
  })

  const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
  })

  const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
  })

  export const fetchTodos = () => {
    return (dispatch) => {
      dispatch(fetchTodosRequest())
      return fetch('./mock/todos.json').then(res => {
        res.json().then(data => {
          dispatch(fetchTodosSuccess(data))
        })
      }, err => {
        dispatch(fetchTodosFailure(err))
        console.log('an err' + err)
      })
    }
  }
// 异步请求end


/**
 * 新增代办事项
 */
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

/**
 * 更改代办事项状态
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

/**
 * 更改过滤状态
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})

/**
 * 新增待办事项文本信息
 */

 export const setTodoText = text => ({
   type: SET_TODO_TEXT,
   text
 })