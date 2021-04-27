import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form flex-auto' onSubmit={(e) => saveTodo(e, formData)}>
      
      <div className="mb-4 text-sm font-medium text-center">
      <div className="space-x-3">
      <div>
        <div className="flex-1 justify-center">
          <label htmlFor='name' className="text-gray-800 text-xl mb-5">Name</label>
          <input onChange={handleForm} type='text' id='name' name="name" className="align-middle border-green-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border rounded-md py-2 pl-10 pr-10 flex-row" />
        </div>
        <div className="mt-5">
          <label htmlFor='description' className="text-gray-800 text-xl mb-5">Description</label>
          <input onChange={handleForm} type='text' id='description' name="description" className="border-green-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border rounded-md py-2 pl-10 pr-10 flex-row"/>
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} className="rounded-lg pt-3 pb-3 w-11/12 mt-5 flex items-center justify-center bg-green-500 text-white" >Add Todo</button>
      </div>
    </div>
    
    </form>
    
  )
}

export default AddTodo