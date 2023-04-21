import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {
//TODO: need key prop on render EditableTodo and reformat
  // Iterate through todos and generate correct # of todos
  function renderEditableTodos() {
    return (
      <div>
        {todos.map(todo => (<EditableTodo key={todo.id} todo={todo} update={update} remove={remove} />))}
      </div>
    );
  }
  return (
    <div className="EditableTodoList">
      {renderEditableTodos()}
    </div>
  );
}

export default EditableTodoList;
