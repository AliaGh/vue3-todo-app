<template>
  <form @submit.prevent="addNewTodo" autoComplete="off">
    <div class="container ">
      <div class="row justify-content-center mb-4 ">
        <!-- input user text field -->
          <div class="col-sm-5 text-start">
            <label for="todoText">Your Todo</label>
            <input type="text" v-model="inputText"   id="todoText" name="todo-name" placeholder="Add Todo">
          </div>

        <!-- input user date field -->
          <div class="col-md-5">
            <label for="date">Due Date:(optional) </label>
            <input type="date" v-model="inputDate" id="date" name="todo-date"> 
          </div>

        <!-- add button submitt -->
          <div class="col-1">
            <button type="submit" class="button_add bt-border example_d " >
              <i class="fas fa-arrow-right"></i>
              </button>
          </div>
        </div>
      </div>
      
  </form>
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
    // create a new item and emit an event to the parent with newTodo
    const addNewTodo = () => {
      itemObj ={
        id:Date.now(),
        checked:false,
        text:inputText.value.trim(),
        date:inputDate.value
       }
      // emitting an event to the parent with custom message 'getTodo'
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

#date:focus ,#todoText:focus{
  color:#2C3E50;
  box-shadow: none;
  outline:none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}
.example_d {
  width:40px;
  height:40px;
	color:#2C3E50 !important;
  text-decoration:none;
}
.example_d:hover {
	color: #494949 !important;
}
.fas.fa-arrow-right{
  font-size:28px;
}

.bt-border{
  border:none;
  background:none;
}
</style>
