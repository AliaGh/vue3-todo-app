<template>
<div class="row">
    <div class="toast"> hi my toast</div>
</div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
  },
  
  
}
</script>

<style>
.row{
    position:relative;
}
.toast{
  color:#fff;
  position:absolute;
  top:15px;
  left:10px;
}
</style>
