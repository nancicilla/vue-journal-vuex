<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:10}})">
     <!-- Titulo-->
      <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Ocutubre</span>
        <span class="mx-2 fw-l">2023,martes</span>
     </div>
     <div class="entry-description">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
     </div>
    
    </div>
</template>

<script >

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