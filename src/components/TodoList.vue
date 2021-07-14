 <template>
  <div class="container-md text-start">
   <ul>
   <!-- faild to resolve component TodoElement-->
      <!-- <TodoElement v-for="(item,index) in userList" :key="index"-->
     <TodoElement v-for="item in userList" :item="item" :key="item.id"></TodoElement>
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
  setup(props){
    console.log(props.userList);  
  return{
   
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
ul{
  margin-left:0;
}
ul li{
  list-style:none;
}


</style>
