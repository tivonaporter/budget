import React from 'react'
import { FlatList, Text } from 'react-native'

const TodoListItem = ({item, handlePress}) => (
  <Text onPress={handlePress.bind(this)}>
  {item.text} {item.completed ? 'DONE!' : 'NOT DONE GET TO WORK BITCH'}
  </Text>
)

const TodoList = ({todos, handleTodoToggle}) => (
  <FlatList
    data={todos}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) =>
      <TodoListItem
        item={item}
        handlePress={handleTodoToggle.bind(this, item.id)}
      />
    }
  />
)

export default TodoList
