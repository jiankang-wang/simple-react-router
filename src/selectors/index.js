import { createSelector } from 'reselect'

export const getText = state => state.get('text')

export const getFilter = state => state.get('filter')

const getTodos = state => state.getIn(['todos', 'data'])

  // 之后经过计算的state , 所依赖的变量变化那么曹慧执行操作
  // 没有经过复杂计算的则不需要使用createSelector进行处理
export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (data, filter) => {
    switch (filter) {
      case "all":
        return data;
      case "completed":
        return data.filter(t => t.get('completed'));
      case "active":
        return data.filter(t => !t.get('completed'));
      default:
        return new Error("Unknown filter: " + filter);
    }
  }
)
// export const getVisibleTodos = state => {
//   // 逐层往下拿需要的数据
//   const data = state.getIn(['todos', 'data'])
//   const filter = state.get('filter')
//   // const { todos: { data }, filter } = state
//   switch (filter) {
//     case "all":
//       return data;
//     case "completed":
//       return data.filter(t => t.get('completed'));
//     case "active":
//       return data.filter(t => !t.get('completed'));
//     default:
//       return new Error("Unknown filter: " + filter);
//   }
// }