import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/todoList'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleTodoToggle: (id) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
