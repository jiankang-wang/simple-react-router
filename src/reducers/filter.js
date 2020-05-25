import { SET_FILTER } from '../action/actionType'

const filter = (state = 'all', action) => {
  switch(action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filter