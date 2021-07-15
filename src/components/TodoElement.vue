<template>
<li>
 <div class="container-md text-center mt-1 pt-2">
      <!-- <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>-->
      <div class="input-form item-style">
        <input type="checkbox"  id="checkbox" :checked="item.checked" name="checkbox" @change="iscompleted(item)" >
        <!-- <input class="input-comment" type="text"  :placeholder="item.text.charAt(0).toUpperCase()+item.text.slice(1)" :class="{'done':item.checked}" > -->
        <input class="input-comment" type="text"  :placeholder="todotextFormat(item)" :class="{'done':item.checked}" @change="updateTodo(item, $event.target.value)" >

        <!-- Date input -->
        <span>{{ item.date }}</span>
        <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>
          <input type="date" class="datepicker-input" @input="updateDate(item, $event.target.value)" id="date" name="todo-date">
        </span>
        <i
          class="fa fa-times delete-icon"
          @click="remove(item)"
          aria-hidden="true"
          title="delete"></i>
        </div>
       </div>
</li>
</template>

<script>
export default {
  name: 'TodoElement',
  props:{
    item:{
      require:true
    },
  },
  setup(props,context){
    console.log(props)
    function todotextFormat(item){
      return item.text.charAt(0).toUpperCase()+item.text.slice(1)
    }
    function remove(item){
      console.log(item);
      context.emit("remove",item);
    }

    function iscompleted(item){
      item.checked = !item.checked;
      console.log(item.checked);
      context.emit("update", item)
    }

    function updateDate(item, newDate){
      item.date = newDate;
      console.log(item.date);
      context.emit("update", item)
    }
    
    function updateTodo(item, text){
      item.text = text;
      console.log(item.text);
      context.emit("update", item)
    }

    
  return{
    // array
    todotextFormat,
    remove,
    iscompleted,
    updateDate,
    updateTodo
     }
   } 
}
</script>

<style>
h2{
    color:var(--main-color)
}
.done{
  text-decoration:line-through;
}
ul{
}
ul li{
  list-style:none;
  height:45px;
}
li:hover{
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
}
{
  }
.item-style {

  display: flex;
  flex-flow:row;
  flex-wrap: wrap;
  position:relative;
}
.input-comment{
  position:relative;
  flex-grow:1;
  border: none;
  outline:none;
  background: transparent;
  color: black;
 

}
.input-comment::first-letter{
   text-transform: uppercase;
}
.input-comment::placeholder,span{
  color:#324455;
  opacity:0.9;
}


form input:focus {
  box-shadow: none;
  background:transparent;
  border:none;
}
.fa.delete-icon{
  font-size: 25px;
  cursor: pointer;
  color:#dc143c ;
  opacity:0.7;
margin-left:10px;
}

 .fa.fa-alarm-plus:hover, .fa.delete-icon:hover{
 opacity:0.4;
 font-size: 28px;
}
input[type="checkbox"]{
  margin-top:5px;
  margin-right:5px;
  height:25px;
  width:25px;
 }
 .text-checked{
   text-decoration: line-through;
 }

span{ 
  margin-right:1rem;
}
.datepicker-toggle {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 19px;
}
.datepicker-toggle-button {
  position: absolute;
  left: 0;
  top: 0;
  margin-right:10px;
  width: 28px;
  height:28px;
  background-image: url('../assets/calendar-check-fill(5).svg'); 
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.datepicker-toggle-button:hover{
  width:32px;
  height:32px;
}
.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}


</style>
