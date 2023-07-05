import { ref, onMounted } from 'vue'
import { db } from '../../firebase/index'
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'

const useLearnTodoApi = () => {
  const todos = ref([])
  const collectionRef = collection(db, 'learn-todos')

  /** get all todo's item of learn-todos collection */
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

  /** add todo item of learn-todos collection */
  const addTodo = ({ newTodo, newPriority }) => {
    newTodo.length > 0 &&
      addDoc(collectionRef, {
        task: newTodo,
        done: false,
        priority: newPriority
      })
  }

  /** delete todo item of learn-todos collection */
  const deleteTodo = (todo) => todo.done && deleteDoc(doc(collectionRef, todo.id))
  
  /** toggle done value of a todo item of learn-todos collection */
  const toggleDone = (todo) => updateDoc(doc(collectionRef, todo.id), {
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
