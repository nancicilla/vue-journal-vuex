<template>
    
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input type="text" 
            class="form-control"
            placeholder="Buscar Entradas"
            v-model="term"
            >
        </div>
        <div class="mt-2 d-flex flex-colum">
            <button class="btn btn-primary mx-3" @click="$router.push({name:'entry',params:{id:'new'}})">
                <i class="fa fa-plus-circle">
                    Nueva entrada
                </i>
            </button>

        </div>
        
        <div class="entry-scrollarea" v-if="entriesByTerm!=[]">
        
            <entry-component v-for="entry in entriesByTerm" :entry="entry" :key="entry.id">
            </entry-component>
            </div>
    </div>
</template>
<script >
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
export default{
    components:{
        EntryComponent:defineAsyncComponent(()=>import("@/modules/daybook/components/EntryComponent.vue"))
        
    },
    computed:{
      //  getEntries(){
            //console.log("tratando de mostrar el listado de entries del state");
           // console.log(this.$store.state.journal.entries)
          
          // return this.$store.state.journal.entries
        //}
        ...mapGetters('journal',['getEntriesByTerm']),
         entriesByTerm(){
            return  this.getEntriesByTerm(this.term)
        }
    },
   
  data(){
    return{term:''}
  },
 
}
</script>

<style lang="scss" scoped>
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}
.entry-scrollarea{
    height: calc(100vh - 110px);
    overflow: scroll;
}
</style>