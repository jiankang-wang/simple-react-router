import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../action/actionType'

import Immutable from 'immutable'

const initialState = {
  isFetching: false,
  error: null,
  data: []
}

const reducer = (state = Immutable.fromJS(initialState), action) => {
  switch(action.type) {
    case FETCH_TODOS_REQUEST:
      return state.set('isFetching', true)
      // return {
      //   ...state,
      //   isFetching: true
      // }
    case FETCH_TODOS_SUCCESS:
      return state.merge({
        isFetching: false,
        data: Immutable.fromJS(action.data)
      })
      // return {
      //   ...state,
      //   isFetching: false,
      //   data: action.data
      // }
    case FETCH_TODOS_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error
      })
      // return {
      //   ...state,
      //   isFetching: false,
      //   error: action.error
      // }
    default:  
      const data = state.get('data')
      return state.set('data', todos(data, action))
      // return {
      //   ...state,
      //   data: todos(state.data, action)
      // }
  }
}

const todos = (state = Immutable.fromJS([]), action) => {
  switch(action.type) {
    case ADD_TODO:
      const newTodo = Immutable.fromJS({
        id: action.id,
        text: action.text,
        completed: false
      })
      return state.push(newTodo)
      // return [
      //   ...state,
      //   {
      //     id: action.id,
      //     text: action.text,
      //     completed: false
      //   }
      // ]
    case TOGGLE_TODO:
      return state.map(todo => {
        return todo.get('id') === action.id ? todo.set('completed', !todo.get('completed')) : todo
      })
      // return state.map(todo => {
      //   return todo.id === action.id ? ({ ...todo, completed: !todo.completed }) : todo
      // })
    default:
      return state
  }
}

export default reducer