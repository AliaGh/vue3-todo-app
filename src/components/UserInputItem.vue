<template>
<div class="container">
  <form @submit.prevent="addNewTodo">
  <div class="container">
  <div class="row">
  
    <!-- input user text field -->
    <div class="col-5 text-start">
    <button type="submit" class="button_add bt-border example_d " >
        <i class="far fa-plus"></i>
      </button>
      <input type="text" v-model="inputText" class="ml-2"  id="todoText" name="todo-name" placeholder="Add Todo"></div>
    <!-- input user date field -->
    <div class="col-5 ">
      <label for="date">Due Date:(optional) </label>
      <input type="date" v-model="inputDate" id="date" name="todo-date" placeholder="Please write here"></div>
     
      <!-- add button submitt -->
      
      </div>
      </div>
    </form>

</div>
</template>

<script>
//  ref object Takes an inner value and returns a reactive and mutable ref object.

import { ref, reactive} from 'vue'
export default {
  name: 'UserInputItem',
  props: {
  },
  components:{
  },
  // in compostion API the setup take the props as an argument setup(props,context)
  //context is object that exposes three component properties{attrs,slots,emit}
  setup(props,context){
    const inputText=ref('');
    const inputDate=ref(null);
    let itemObj=reactive({});
    function addNewTodo(){
      itemObj ={
        id:Date.now(),
        checked:false,
        text:inputText.value.trim(),
        date:inputDate.value
       }
      
      console.log(`user just write his todo Item ${itemObj.text}`);
      //send the todo item by emitting an event to 
      //the parent with custom message 'getTodo'
      context.emit('getTodo',itemObj);
      inputText.value='';
      inputDate.value=null;
    }

    return{
      addNewTodo,
      inputDate,
      inputText
    }

  }
  
}
</script>

<style>
--bt-add:#ecf0f1;
.bt-border{
  border:none;
  background:none;
}

.todo-input{
  border:1px solid black;
}
/* A few custom styles for date inputs */
#todoText, #date {
  cursor:pointer;
  -webkit-appearance: none;
  color: #95a5a6;
  font-size: 18px;
  border:1px solid #ecf0f1;
  background:transparent;
  padding:5px;
  display: inline-block !important;
  visibility: visible !important;
  outline:none;
}
#todoText{
  color:black;
  margin-left:5px;
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
	background:#fff;
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
