<template>
  <div class="container bg-light round  mb-3 p-2 ">
    <!-- Title-->
    <h3 class="mt-2 mb-3 text-start mx-4">My Todo</h3>
    <!-- user component icludes the user input and the date -->
    <UserInputItem @getTodo="addListItem"/>
  </div>
    <!-- render the todo list -->
  <div v-if="userList.length" class="container-md bg-light text-start box round">
      <ul>
      <!-- show user list item -->
      <TodoElement v-for="item in sortArrayList(userList)" :item="item" :key="item.id"  @remove="removeItem" @update="updateItem"></TodoElement>
      </ul>
  </div>
</template>

<script>
import { reactive, onMounted} from 'vue'
import moment from 'moment' 
import UserInputItem from './UserInputItem.vue' 
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'


export default {
  name: 'TodoApp',
  props: {
  },
  components: {
   UserInputItem,
  },
  setup(){
    let userList=reactive([]);
    onMounted(() => {
      if(localStorage.getItem('userList')){
        let newUserList = JSON.parse(localStorage.getItem('userList'));
        newUserList.forEach( (item) =>{
          userList.push(item)
        })
      }
        showToastNotification();
    })
    
    // add list item to the  Arraylist ...come from the userInputItem component
    //and call the writeLocalStorage to update the arraylist
    //addListItem(obj) {checked,text,date}
    const addListItem= (objItem) => { 
      if(objItem.text !== ''){
      console.log(objItem.text);
      userList.push(objItem);
      console.log(userList);
      writeLocalStorage();
      }
    }
    // remove the item from the array list ...
    //it should accept the (index) of the list item as an prameter
    //and call the writeLocalStorage to update the arraylist
    const removeItem =(item) =>{
      let index =userList.findIndex((obj) =>{ return obj.id == item.id});
      userList.splice(index,1);
      writeLocalStorage();
    }
    // sort the arraylist depends on:
    // 1-due date
    // 2-alphabetical (ascending)
    //and call the writeLocalStorage to update the arraylist
    //sortArrayList()
    const sortArrayList = (todos) =>{
      const dueDateTodos = todos.filter(todo => todo.date != null).sort((a,b) => moment(a.date).valueOf() - moment(b.date).valueOf())
      const otherTodos = todos.filter(todo => todo.date == null).sort()
      return dueDateTodos.concat(otherTodos)
    }
    // store the arraylist in the localstorage with Json.stringify
    //writeLocalStorage(array)
    //localStorage.setItem("userList", JSON.stringify(userList));
    const writeLocalStorage=()=>{
      localStorage.setItem("userList", JSON.stringify(userList));
    }
    // get the arraylist from the localstorage  with JSON.parse
    const readLocalStorage=() => {
      let List= JSON.parse(localStorage.getItem('userList'));
      return List
    } 
    //update the list item everytime it will be changed
    //and call the writeLocalStorage to update the arraylist
    // updateItem(item,index)
    const updateItem = (updatedObj) =>{
      removeItem(updatedObj);
      addListItem(updatedObj); 
    }
    const showToastNotification= () =>{
      let countover=0;
        let ongoing=0;
        userList.filter(item=>{return ((item.date !== null) && (!item.checked))}).forEach(item =>{
          if((moment(item.date)< moment()))
            countover+=1;
          else 
            ongoing+=1;
        });
      
        createToast(`you have  ${countover} expired todos  and ${ongoing} will end soon `,{
            position: 'bottom-center',
            showIcon: true,
            type: 'info',
            timeout: 6000
            });
    }
    return{
      addListItem,
      removeItem,
      sortArrayList,
      writeLocalStorage,
      readLocalStorage,
      updateItem,
      userList,
    }
  },
  
}
</script>

<style>

ul li{
  list-style:none;
}

.round{
  border-radius:10px;
  padding:0 2rem;
background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

h1{
    color:red;
}
.box{
  height:100%;
  width:14rem;
  padding:2rem;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>
