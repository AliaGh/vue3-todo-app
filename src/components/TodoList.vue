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
        <input type="checkbox" id="checkbox" name="checkbox" @click="iscompleted(item)" >
        <input class="input-comment" type="text"  :placeholder="item.text.charAt(0).toUpperCase()+item.text.slice(1)" :class="{'done':item.checked}">

        <hr>
        <span>{{item.date}}</span>
        <i class="fa fa-alarm-plus" title="due date"></i>
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

// import {  reactive } from 'vue'
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
    }
  return{
    // array
    remove,
    iscompleted
  }
  }
  
}
</script>

<style>
.done{
    text-decoration: line-through;
}

h2{
    color:#324455
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
  flex-grow:3;
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
.fa.delete-icon {
  font-size: 25px;
  cursor: pointer;
  color:blue; 
  opacity:1;
}
.fa.delete-icon:hover{
 opacity:0.3;
}

 .fa.fa-alarm-plus{
   color:blue;
   margin:0 20px ;
  font-size: 25px;
  cursor: pointer;
  opacity:1;

 }
 .fa.fa-alarm-plus:hover{
 opacity:0.3;
}
input[type="checkbox"]{
  margin-top:5px;
  margin-right:5px;
  height:25px;
  width:25px;
 }
 text-checked{
   text-decoration: line-through;
 }

</style>
