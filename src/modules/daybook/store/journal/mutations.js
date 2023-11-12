export const setEntries=(state,valor)=>{
  console.log("dentro de la mutacion")
  state.entries=valor
}
export const updateEntry=(state,informacion)=>{
  console.log(informacion)
  let entry=state.entries.find(f=>f.id==informacion.id)
  entry.fecha=informacion.fecha
  entry.text=informacion.text
  entry.picture=informacion.picture
console.log("en teroria deberia estar actualizada")
}
export const addEntry=(state,informacion)=>{

 state.entries.push(informacion)
 //this.router.push({name:'daybook'})
  //this.$store.dispatch({name:'daybook'})
 // next({name:'daybook'})

 
}
export const setIsLoading=(state,valor)=>{
    state.isLoading=valor
    console.log("isLoadinf:"+state.isLoading)
}
export const deleteEntry=(state,id)=>{
  let resultado = state.entries.filter(e => e.id != id);
   state.entries=resultado
}