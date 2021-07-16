<template>
  <div class="container-md mb-3 text-center">
  <h1 class="change">{{mssg}} </h1></div>

</template>

<script>
export default {
  name: 'Header',
  props: {
    mssg: String
  } 
}
</script>

<style>
.change{
  color:#fff;
  font-weight:900 !Important;
  font-size:2rem;
}
</style>
