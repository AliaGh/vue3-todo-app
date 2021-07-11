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
#app {
  height:100vh;
  font-family:'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  background: #373B44;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
