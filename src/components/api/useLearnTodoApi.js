import { ref, onMounted } from 'vue'
import { db } from '../../firebase/index'
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'

const useLearnTodoApi = () => {
  const todos = ref([])
  const collectionRef = collection(db, 'learn-todos')

  onMounted(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const tmpTodos = []
      querySnapshot.forEach((doc) => {
        const todo = {
          id: doc.id,
          ...doc.data()
        }
        tmpTodos.push(todo)
      })
      todos.value = tmpTodos
    })
  })

  const addTodo = ({ newTodo, newPriority }) => {
    newTodo.length > 0 &&
      addDoc(collectionRef, {
        task: newTodo,
        done: false,
        priority: newPriority
      })
  }

  const deleteTodo = (todo) => todo.done && deleteDoc(doc(collectionRef, todo.id))

  const toggleDone = (todo) =>
    updateDoc(doc(collectionRef, todo.id), {
      ...todo.value,
      done: !todo.done
    })

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleDone
  }
}

export default useLearnTodoApi
