import React from "react"

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through text-gray-700` : "text-gray-700 font-bold text-xl"
  return (
    <div>
      <h2 className="heading font-semibold text-white pb-3 pt-5">Todo List</h2>
      <div className="flex justify-between items-center border-b-1 border-gray-800 bg-white rounded-lg p-2">
        <div className="">
          <h1 className={checkTodo}>{todo.name}</h1>
          <span className={checkTodo}>{todo.description}</span>
        </div>
        <div className="bg-white p-2 rounded-lg cursor-pointer">
          <button
            onClick={() => updateTodo(todo)}
            className={todo.status ? `hidden` : "border-green-600 border pl-3 pr-3 pt-1 pb-1 rounded-full"}
          >
            Complete
        </button>
          <button
            onClick={() => deleteTodo(todo._id)}
            className="ml-3 border-red-600 border pl-3 pr-3 pt-1 pb-1 rounded-full"
          >
            Delete
        </button>
        </div>
      </div>
    </div>
  )
}

export default Todo