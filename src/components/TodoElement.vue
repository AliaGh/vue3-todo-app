<template>
<li>
  <div class="container-md text-center mt-4 ">
  <!-- <input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
-->
   <div class="input-form hi" @submit.prevent="doSomthing">
    <input type="checkbox" id="checkbox" name="checkbox" >
    <input class="input-comment" type="text"  :placeholder="info.text" ref="">

      <hr>
      <span>info.date</span>
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
</template>

<script>
export default {
  name: 'TodoElement',
  props:{

  },
  setup(props){
    console.log(props);
    return{
      
    }
  }
  
}
</script>

<style>
.hi {
  margin-top: 1rem;
  margin-bottom:6px;
  display: flex;
  flex-flow:row;
  flex-wrap: wrap;
  position:relative;
}
input[type="text"]{
  position:relative;
  flex-grow:3;
  border: none;
  outline:none;
  background: transparent;
  color: #32325d;
  padding-right: 50px;
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
  opacity:0.3;
}
.fa.delete-icon:hover{
 opacity:1;
}

 .fa.fa-alarm-plus{
   color:blue;
   margin:0 20px ;
  
  font-size: 25px;
  cursor: pointer;
  opacity:0.3;

 }
 .fa.fa-alarm-plus:hover{
 opacity:1;
}
input[type="checkbox"]{
  margin-top:5px;
  margin-right:5px;
  height:20px;
  width:20px;
 }
 text-checked{
   text-decoration: line-through;
 }


</style>
