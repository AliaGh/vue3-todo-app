 <template>
  <div class="container-md text-start">
   <ul>
   <!-- faild to resolve component TodoElement-->
      <!-- <TodoElement v-for="(item,index) in userList" :key="index"-->

    <li v-for="item in userList" :key="item.id"  >
      <div class="container-md text-center mt-4">
      <!-- <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>-->
      <div class="input-form item-style">
        <input type="checkbox"  id="checkbox" :checked="item.checked" name="checkbox" @change="iscompleted(item)" >
        <!-- <input class="input-comment" type="text"  :placeholder="item.text.charAt(0).toUpperCase()+item.text.slice(1)" :class="{'done':item.checked}" > -->
        <input class="input-comment" type="text"  :placeholder="item.text" :class="{'done':item.checked}" @change="updateTodo(item, $event.target.value)" >

        <!-- Date input -->
        <span>{{ item.date }}</span>
        <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>
          <input type="date" class="datepicker-input" v-if="item.date"  @input="updateDate(item, $event.target.value)" id="date" name="todo-date">
        </span>
        <i
          class="fa fa-times delete-icon"
          @click="remove(item)"
          aria-hidden="true"
          title="delete"></i>
        </div>
       </div>
      </li>
    </ul>
  </div>

</template>

<script>
// import { ref } from 'vue'
export default {
  name: 'TodoList',
  props:{
    userList:{
      require:true
    },
    components:{
    }
  },
  setup(props,context){
    console.log(props.userList);
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
    remove,
    iscompleted,
    updateDate,
    updateTodo
  }
  }
  
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
.done{
  text-decoration:line-through;
}
ul{
  margin-left:0;
}
ul li{
  list-style:none;
}
.item-style {
  margin-top: 1rem;
  margin-bottom:6px;
  display: flex;
  flex-flow:row;
  flex-wrap: wrap;
  position:relative;
}
.input-comment{
  position:relative;
  flex-grow:2;
  border: none;
  outline:none;
  background: transparent;
  color: black;
  padding-right: 50px;
}
.input-comment::first-letter{
   text-transform: uppercase;
}
.input-comment::placeholder{
  color:#324455;
  opacity:1;
}


form input:focus {
  box-shadow: none;
  background:transparent;
  border:none;
}
.fa.delete-icon, .fa.fa-alarm-plus{
  font-size: 25px;
  cursor: pointer;
  color: #f0bc79;
  opacity:1;
}

 .fa.fa-alarm-plus{
   margin:0 20px ;
}
 .fa.fa-alarm-plus:hover, .fa.delete-icon:hover{
 opacity:0.8;
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
  width: 100%;
  height: 100%;
  background-image: url('../assets/logo.png');
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
