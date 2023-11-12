<template >
 <template v-if="this.entry">

 <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">
            {{this.informacionfecha.dia}}
        </span>
        <span class="mx-1 fs-3"></span>
        <span class="mx-2 fs-4 fw-light">{{ this.informacionfecha.anio }}</span>
    </div>
    <div>
        <input type="file" @change="onSelectedImage" ref="imageSelector" id="Imagen" v-show="false" accept="image/jpg,image/jpeg , image/png">
        <button class="btn btn-danger mx-2" v-if="this.entry.id"  @click="delEntry" >
            Borrar
            <i class="fa fa-trash-alt"></i>

        </button>
        <button class="btn btn-primary mx-2" @click="onSelectImage">
            Subir foto
            <i class="fa fa-upload"></i>

        </button>
    </div>
    
 </div> 
 
 <hr>
    <div class="d-flex flex-column px-3 h-75">
      <textarea v-if="entry" placeholder="¿Que sucedio Hoy?" v-model="entry.text"></textarea>
     
    </div>
    <Fab :icono="'fa-save'" @on:click="saveEntry">
    </Fab> 
    
   
    <img v-if="localImage" :src="localImage" 
    class="img-thumbnail"
    > <img v-else :src="`${this.entry.picture}`"
    class="img-thumbnail"
    alt="entry-picture"
    >
</template>
</template>

<script>
import {  defineAsyncComponent } from 'vue';
import { mapGetters ,mapActions} from 'vuex';
import Swal from 'sweetalert2';
import uploadImage from '@/modules/daybook/helpers/uploadImage'
import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'

export default {
    props:{id:{type:String, required:true}},
components:{
    Fab:defineAsyncComponent(()=>import('@/modules/daybook/components/FabComponent'))
}
,
data(){
    return{
        entry:null,
        informacionfecha:null,
        localImage:null,
        file:null
    }
}
,
computed:{
...mapGetters('journal',['getEntryById']),
/*
anio(){
    if(!this.entry) return''
         let fecha= new Date(this.entry.fecha)
         
         //let indice=diasE.findIndex((elemento)=>elemento==this.informacion[0])
         //return days[indice]+','+this.informacion[3]
         return `${fecha.getFullYear()} , ${days[fecha.getDay()]}`
      },
      dia(){
        if(!this.entry) return''
         let fecha = new Date(this.entry.fecha)
         return fecha.getDate()
      },
      mes(){
        // let indice =monthsE.findIndex((elemento)=>elemento==this.informacion[1])
        if(!this.entry) return''
        let fecha = new Date(this.entry.fecha)
         return months[fecha.getMonth()]
      }*/
},
methods:{
    ...mapActions('journal',['updateEntries','createEntries','deleteEntry']),
    getEntry(){
   // console.log(this.$route.params.id)
   let entry;
   if(this.id==='new'){
     entry={
        fecha:new Date().getTime(),
        picture:'',
        text:''
     }
   }else{
     entry=this.getEntryById(this.id)
   
    if(!entry) return this.$router.push({name:'no-entry'})
   }
    this.entry=entry
    this.informacionfecha=getDayMonthYear(entry.fecha)

},
async saveEntry(){
    new Swal({
        title:"Espere por favor",
        allowOutsideClik:false
    })
    Swal.showLoading()
 const ruta=await uploadImage(this.file)
 console.log("apunto de guardar ruta",ruta)
 this.entry.picture=ruta==null ||ruta== undefined ?'':ruta
 console.log(this.entry)
 if(this.entry.id){
   await this.updateEntries(this.entry)
 }else{
   const id= await this.createEntries(this.entry)
   this.$router.push({name:'entry',params:{id}})
 }
 this.file=null
 this.localImage=null
 Swal.fire("Guardado","Entrada registrada con  exito","success") 
  
},
async delEntry(){
    const {isConfirmed}=await Swal.fire({
        title:"¿Esta seguro?",
        text:"Una vez borrado no se puede recuperar",
        showDenyButton:true,
        confirmButtonText:"Si, estoy seguro"

    })
    if(isConfirmed){
        new Swal({
            title:"Esper por favor",
            allowOutsideClik:false
        })
        Swal.showLoading()
    this.deleteEntry(this.id)
    this.$router.push({name:'no-entry'})
    Swal.fire("Eliminado","","success")
    }
},
onSelectedImage(event){
    console.log("mmm")
let file= event.target.files[0]
if (!file){
    this.localImage=null
    return
}
this.file=file
const filereader=new FileReader()
filereader.onload=()=>this.localImage=filereader.result
filereader.readAsDataURL(this.file)
},
onSelectImage(){
 //document.querySelector('#Imagen').click(); forma (1)
 // forma 2
 this.$refs.imageSelector.click()
    
   


  
//document.querySelector(".myclass");trigger
}
},
created(){
    this.getEntry()
}
,
watch:{
    id(){
        this.getEntry()
    }
}
}
</script>

<style lang="scss" scoped>
 textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
 }
 img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
 }
</style>