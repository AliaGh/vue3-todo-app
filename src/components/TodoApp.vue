<template>
  <div class="container-md bg-light text-start rounded box">
  <Title text="Todo List"/>
  <UserInputItem @getTodo="addListItem"/>
  <TodoList :userList="sortArrayList(userList)"  @remove="removeItem"/>
  
  <!--<h5> {{ showMydate()}}</h5> @remove="removeItem"-->
  </div>

</template>

<script>
import { reactive, onMounted} from 'vue'
import moment from 'moment'
import Title from './Title.vue' 
import UserInputItem from './UserInputItem.vue' 
import TodoList from './TodoList.vue'



export default {
  name: 'TodoApp',
  props: {
  },
  components: {
   UserInputItem,
   Title,
   TodoList
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
    function updateItem(){ 
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
h1{
    color:red;
}
.box{
  height:100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-top:1rem;
}
</style>
