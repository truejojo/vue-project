<script setup>
import { ref } from 'vue'
import HeaderView from '../common/HeaderView.vue'
import LearnTodoList2 from './LearnTodoList2.vue';
import LearnTodoListItem2 from './LearnTodoListItem2.vue'
// import useLearnTodoApi from '../api/useLearnTodoApi'

// const { todos, addTodo, deleteTodo, toggleDone } = useLearnTodoApi()

const title = ref("Meine Lern todo's")
const isInputForm = ref(false)

const toggleIsShowInputForm = () => {
  isInputForm.value = !isInputForm.value
  
}
</script><template>
  <div>
    <HeaderView :title="title" class="text-center">
      <template #subTitle>Das lerne ich gerade</template>
      <button
        @click="toggleIsShowInputForm"
        class="btn text-uppercase"
        :class="isInputForm ? 'btn-secondary' : 'btn-info text-danger fw-bold'"
      >
        {{ isInputForm ? 'Fertig' : 'Neues Todo' }}
      </button>
    </HeaderView>

    <LearnTodoList2>
      <LearnTodoListItem2 :todos="todos">

      </LearnTodoListItem2>
    </LearnTodoList2>

  </div>
</template>