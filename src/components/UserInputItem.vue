<template>
<div class="d-flex justify-content-between flex-sm-wrap justify-content-betwee">
  <form @submit.prevent="addNewTodo">
    <!-- input user text field -->
      <label for="todoText">Your Todo: </label>
      <input type="text" v-model="inputText" id="todoText" name="todo-name" placeholder="Please write here">
      
    <!-- input user date field -->
      <label for="date">Due Date: </label>
      <input type="date" v-model="inputDate" id="date" name="todo-date" placeholder="Please write here">
     
      <!-- add button submitt -->
          <button type="submit" class="button_add bt-border example_d" >
            <i class="far fa-plus"></i>
          </button>
    </form>
</div>

</template>

<script>
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
      if(inputText.value){
      itemObj ={
        checked:false,
        text:inputText.value.trim(),
        date:inputDate.value
       }
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
