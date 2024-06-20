import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
  // Eğer todos undefined veya null ise veya boş bir dizi ise boş bir liste döndür
  if (!todos || todos.length === 0) {
    return <p>No todos to display</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
