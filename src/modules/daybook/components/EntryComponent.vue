<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:this.entry.id}})">
     <!-- Titulo-->
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">{{this.informacionfecha.dia}}</span>
        <span class="mx-1 fs-5">{{this.informacionfecha.mes}}</span>
        <span class="mx-2 fw-l">{{this.informacionfecha.anio}}</span>
     </div>
     <div class="entry-description">
      
      {{this.shortText}}
         </div>
    
    </div>
</template>

<script >
import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'
 export default{
   props:{
      entry:{type:Object, required:true}
   },
   data(){
    return{
      informacionfecha:null,
      
    }
   },
   methods:{
     setInformacionFecha(){
      this.informacionfecha= getDayMonthYear(this.entry.fecha)
     }
   },
   computed:{
      shortText(){
       
         return (this.entry.text.length>130) ? this.entry.text.split(0,130)+'...':this.entry.text
      }
         
      
     

     
     // anio(){
        // let fecha= new Date(this.entry.fecha)
         //let indice=diasE.findIndex((elemento)=>elemento==this.informacion[0])
         //return days[indice]+','+this.informacion[3]
        // return `${fecha.getFullYear()} , ${days[fecha.getDay()]}`
       
      //},
      //dia(){
        // let fecha = new Date(this.entry.fecha)
         //return fecha.getDate()
      //},
      //mes(){
        // let indice =monthsE.findIndex((elemento)=>elemento==this.informacion[1])
        //let fecha = new Date(this.entry.fecha)
        // return months[fecha.getMonth()]
      //}
   },
   created(){
      this.setInformacionFecha()
   }


 }
</script>

<style lang="scss" scoped>
.entry-container{
   border-bottom: 1px solid #2c3e50;
   transition: 0.2s all ease-in;
   &:hover{
      background-color: lighten($color: grey, $amount:45);
      transition: 0.2s all ease-in;
   }
.entry-description{
   font-size: 12 px;
}
}
</style>