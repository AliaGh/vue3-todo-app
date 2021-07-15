<template>
  <div class="container-md bg-light text-start rounded box">
  <Toast />
  <Title text="Todo List"/>
  <UserInputItem @getTodo="addListItem"/>

   <div class="container-md text-start">
   <ul>
   <!-- faild to resolve component TodoElement-->
      <!-- <TodoElement v-for="(item,index) in userList" :key="index"-->
     <TodoElement v-for="item in sortArrayList(userList)" :item="item" :key="item.id"  @remove="removeItem" @update="updateItem"></TodoElement>
    </ul>
  </div>
  <!--<h5> {{ showMydate()}}</h5> @remove="removeItem"-->
  </div>

</template>

<script>
import { reactive, onMounted} from 'vue'
import moment from 'moment'
import Toast from './Toast.vue'
import Title from './Title.vue' 
import UserInputItem from './UserInputItem.vue' 




export default {
  name: 'TodoApp',
  props: {
  },
  components: {
   UserInputItem,
   Title,
   Toast
  },
  setup(){
    let userList=reactive([]);
    onMounted(() => {
      if(localStorage.getItem('userList')){
        let newUserList =JSON.parse(localStorage.getItem('userList'));
        newUserList.forEach( (item) =>{
          userList.push(item)
        })
      }
    })
    
    // add list item to the  Arraylist ...come from the userInputItem component
    //and call the writeLocalStorage to update the arraylist
    //addListItem(obj) {checked,text,date}
    function showMydate(){
     return moment().format('MMMM Do') 
    }
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
    //removeItem(index)
    function removeItem(item){
      console.log("her is my item");
      console.log(item);
      let index =userList.findIndex((obj) =>{ return obj.id == item.id});
      userList.splice(index,1);
      console.log(userList)
      // sortArrayList(userList);
      writeLocalStorage();
    }
    // sort the arraylist depends on:
    // 1-due date
    // 2-alphabetical (ascending)
    //and call the writeLocalStorage to update the arraylist
    //sortArrayList()
    function sortArrayList(todos){
      const dueDateTodos = todos.filter(todo => todo.date != null).sort((a,b) => moment(a.date).valueOf() - moment(b.date).valueOf())
      const otherTodos = todos.filter(todo => todo.date == null).sort((a, b) => {
        if(a.text < b.text) { return -1; }
        if(a.text > b.text) { return 1; }
        return 0;
      })
      return dueDateTodos.concat(otherTodos)
    }
    // store the arraylist in the localstorage with Json.stringify
    //writeLocalStorage(array)
    //localStorage.setItem("userList", JSON.stringify(userList));
    const writeLocalStorage=()=>{
      localStorage.setItem("userList", JSON.stringify(userList));
    }
    // get the arraylist from the localstorage  with JSON.parse
    function readLocalStorage(){
      let List= JSON.parse(localStorage.getItem('userList'));
      console.log(List);
      return List
    } 
    //update the list item everytime it will be changed
    //and call the writeLocalStorage to update the arraylist
    // updateItem(item,index)
    function updateItem(updatedObj){
      removeItem(updatedObj);
      addListItem(updatedObj); 
    }
    return{
      showMydate,
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

$header-color:#ffffff;
$main-color:#324455;
$text-color:#e0e1e3;
$bg-color:#1f2937;
$bt-bg:#f0bc79;
--bt-text-color:#1f2937;
--toast-color:#67c5f2;


h2{
    color:var(--main-color)
}
ul{
  margin-left:0;
}
ul li{
  list-style:none;
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
