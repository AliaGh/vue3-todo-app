<template>
<div class="d-flex flex-column flex-sm-wrap">
  <form @submit.prevent="addNewTodo" class="">
    <!-- input user text field -->
      <label for="todoText">Your Todo: </label>
      <input type="text" v-model="inputText" id="todoText" name="todo-name" placeholder="Please write here">
      
    <!-- input user date field -->
      <label for="date">Due Date: </label>
      <input type="date" v-model="inputDate" id="date" name="todo-date" placeholder="Please write here">
     
      <!-- add button to submitt -->
        <div class="button_add " align="start" title="Add your Todo Item">
          <button type="submit" class="bt-border example_d">
            <i class="far fa-plus"></i>
          </button>
        </div>
    </form>
    <TodoList/>
</div>

</template>

<script>
import TodoList from './TodoList.vue'
import { ref } from 'vue'
export default {
  name: 'UserInputItem',
  props: {
  },
  components:{
    TodoList
  },
  setup(){
    const inputText=ref('');
    const inputDate=ref(null);
    const arrayList=ref([]);
    function addNewTodo(){
      arrayList.value.push({
        checked:false,
        text:inputText.value,
        date:inputDate.value
      });
      console.log('someone just write'+arrayList.value.length);
      addToLocalstorage(arrayList.value);
      inputText.value='';
      inputDate.value=null;
    }

    function addToLocalstorage(userList){
      localStorage.setItem("userList", JSON.stringify(userList));
    }

    return{
      inputText,
      addNewTodo,
      inputDate,
      arrayList,
    }

  }
  
}
</script>

<style>
h2{
    color:#324455
}
.bt-border{
  border:none;
  background:none;
}
/* A few custom styles for date inputs */
#todoText, #date {
  cursor:pointer;
    -webkit-appearance: none;
    color: #95a5a6;
    font-size: 18px;
    border:1px solid #ecf0f1;
    background:#ecf0f1;
    padding:5px;
    display: inline-block !important;
    visibility: visible !important;
}

#date:focus {
    color: #95a5a6;
    box-shadow: none;
    outline:none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
}
.example_d {
  width:40px;
  height:40px;
	color: #163c75 !important;
  text-decoration:none;
	background: #ffffff;
	padding: 8px;
	border: 2px solid #163c75 !important;
	border-radius: 6px;
	display: inline-block;
	transition: all 0.3s ease 0s;
}
.example_d:hover {
	color: #494949 !important;
	border-radius: 50px;
	border-color: #494949 !important;
	transition: all 0.3s ease 0s;
}
.far.fa-plus{
  font-size:1.2rem;
}
</style>
