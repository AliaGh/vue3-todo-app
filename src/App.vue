<template>
  <Header mssg="Todo App with Bootstrap 5 and Vue3"/>
  <TodoApp />
</template>


<script>
import Header from './components/Header.vue'
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    Header,
    TodoApp
  },
  setup(){
    return{
      
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
#app {
  font-family:'Inter', sans-serif;
  text-align: center;
  color: #2c3e50;
  background:#1f2937;
  padding-top: 60px;
 

}
</style>
