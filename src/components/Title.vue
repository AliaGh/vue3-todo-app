 <template>
    <div class="row">
        <div class="col-8 ">
            <h2 class="title">{{ text }}</h2>
        </div>
        <div class="col-4 text-end ">
            search
            
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
