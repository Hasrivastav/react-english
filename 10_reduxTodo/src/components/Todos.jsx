import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const [editableTodo, setEditableTodo] = useState({ id: null, text: "" });

const handleEdit = (todo) => {
  setEditableTodo({
    id: todo.id,
    text: todo.text,
  });
};

const handleSave = () => {
  dispatch(
    updateTodo({
      id: editableTodo.id,
      text: editableTodo.text,
    })
  );
  setEditableTodo({ id: null, text: "" });
};

const handleInputChange = (e) => {
  setEditableTodo({
    ...editableTodo,
    text: e.target.value,
  });
};

function Todos() {
  const todos = useSelector((state) => state.todos); // Assuming 'todo' is the slice name
  const dispatch = useDispatch();

  const [editTodo, setEditableTodo] = useState({
    id: null,
    text: "",
  });

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-900 px-4 py-2 rounded-md"
            key={todo.id}
          >
            {editableTodo.id === todo.id ? (
              <input
                type="text"
                value={editableTodo.text}
                onChange={handleInputChange}
                className="w-full border border-gray-400 rounded px-2 py-1"
              />
            ) : (
              <div className="text-white flex-grow">{todo.text}</div>
            )}
            {editableTodo.id === todo.id ? (
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-green-600 text-white rounded-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="px-3 py-1 bg-blue-600 text-white rounded-md mr-2"
              >
                Edit
              </button>
            )}{" "}
            */
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-3 py-1 bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
