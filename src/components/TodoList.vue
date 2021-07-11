 <template>
  <div class="container-md text-start">
    <h1></h1>

    <ul>
    <li v-for="(item,index) in userList" :key="index" >
    <div class="container-md text-center mt-4 ">
  <!-- <input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
-->
   <div class="input-form hi" @submit.prevent="doSomthing">
    <input type="checkbox" id="checkbox" name="checkbox" >
    <input class="input-comment" type="text"  :placeholder="item.text" ref="">

      <hr>
      <span>{{item.date}}</span>
      <i class="fa fa-alarm-plus" title="due date"></i>
      
      <i
        class="fa fa-times delete-icon"
        @click="removeItem()"
        aria-hidden="true"
        title="delete"
          ></i>
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
  setup(props){
    console.log(props.userList);
    console.log("plzzzzzzzzzzzzzzzzzz")
  return{
    // array
  }
  }
  
}
</script>

<style>

h2{
    color:#324455
}
</style>
