<template>
  <div class="container-md text-center">
  <h1 class="change">{{mssg}} </h1></div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    mssg: String
  },
  
}
</script>

<style>
.change{
  color:#fefcf8;
}
</style>
