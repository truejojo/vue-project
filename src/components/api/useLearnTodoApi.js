import { ref } from 'vue'

const useLearnTodoApi = () => {
  const todos = ref([
    {
      id: 1,
      task: 'Vue',
      done: false,
      priority: true
    },
    {
      id: 2,
      task: 'Linux',
      done: false,
      priority: false
    },
    {
      id: 3,
      task: 'Docker',
      done: false,
      priority: false
    }
  ])
  
  const addTodo = ({ newTodo, newPriority }) => {
    newTodo.length > 0 &&
      (todos.value = [
        {
          id: todos.value.length + 1,
          task: newTodo,
          done: false,
          priority: newPriority
        },
        ...todos.value
      ])
  }

  const deleteTodo = (id) => (todos.value = todos.value.filter((todo) => todo.id !== id))

  const toggleDone = (id) =>
    (todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))

  return {
    addTodo,
    deleteTodo,
    toggleDone
  }
}

export default useLearnTodoApi
