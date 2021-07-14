 <template>
  <div class="container-md text-start ">
    <div class="row">
        <div class="col-11 ">
            <h2 class="title">{{ text }}</h2>
        </div>
        <div class="col-1 text-end ">
            <div class="button_update" align="center" title="Refesh your List">
            <a class="example_d" href="#" target="_blank" rel="nofollow noopener noreferrer" draggable="false">
            <i class="far fa-sync-alt"></i>
            </a>
        </div>
            
        </div>
    </div>
  
  </div>

</template>

<script>
export default {
  name: 'Title',
  props:{
      text:String
  },
  
}
</script>

<style>
--main-color:#1f2937;
h2.title{
  color:var(--main-color);
  font-weight:900 !important;
  font-size:6rem;
}

</style>
