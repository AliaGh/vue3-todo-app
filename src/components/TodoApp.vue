<template>
  <div class="container-md bg-light text-start rounded box">
  <Title text="Todo List"/>
  <UserInputItem />
  <TodoList />
  <TodoElement />
  <TodoElement />
  <!--<h5> {{ showMydate()}}</h5> -->
  <!--<h6>{{text}}</h6> -->
  </div>

</template>

<script>
import { ref } from 'vue'
import moment from 'moment'
import Title from './Title.vue' 
import UserInputItem from './UserInputItem.vue' 
import TodoList from './TodoList.vue'
import TodoElement from './TodoElement.vue'



export default {
  name: 'TodoApp',
  props: {
    msg: {
      type:String
    }
  },
  components: {
   TodoElement,
   UserInputItem,
   Title,
   TodoList
  },
  setup(){
    const text =ref('alia');
    function showMydate(){
      return moment().format('MMMM Do') 
    }

    return{
      showMydate,
      text,
    }
  }
  
}
</script>

<style>
h1{
    color:red;
}

.box{
  height:70vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-top:1rem;
}
</style>
