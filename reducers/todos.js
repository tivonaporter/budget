defaultState = [
  { id: 1, text: 'Learn React', completed: true },
  { id: 2, text: 'Learn Redux', completed: true }
]

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
      )
    default:
      return state
  }
}
