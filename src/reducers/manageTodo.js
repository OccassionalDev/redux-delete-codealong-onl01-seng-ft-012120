export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };
      break
      
    case 'DELETE_TODO':
      state.

    default:
      return state;
  }
}
