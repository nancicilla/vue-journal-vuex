<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
        
        No se selecciono una entrada...
    </h1>
   
  </div>
  <Fab @on:click="createNewEntry"></Fab>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
    components:{
        Fab: defineAsyncComponent(()=>import('@/modules/daybook/components/FabComponent.vue'))
    }
    ,
    methods:{
      createNewEntry(){
        this.$router.push({name:'entry',params:{id:'new'}})
      }
    }

}
</script >

<style lang="scss" scoped>
div{
    height: 100%;
}

</style>