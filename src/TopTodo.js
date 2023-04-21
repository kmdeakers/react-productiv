import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  //TODO: check length, if 0 return null
  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);


  return (
    <Todo 
      id={top.id}
      title={top.title}
      description={top.description}
      priority={top.priority} 
    />
  );
}

export default TopTodo;