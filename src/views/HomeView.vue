<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="btn btn-primary" @click="goToBookLayout()">primario</button>
    <button class="btn btn-secondary">secundario</button>
    <button class="btn btn-success">success</button>
  </div>  
</template>
<script>
export default{
  methods:{
    goToBookLayout(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
