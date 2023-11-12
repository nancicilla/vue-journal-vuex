import journalApi from "@/api/journalApi"
export const loadEntries=async({commit})=>{
    console.log("entrando a la accion")
    commit('setIsLoading',true)
    //commit('journal/setIsLoading',true)
 const {data}= await journalApi.get('/entries.json')
 if(data==null){
   commit('setEntries',[])
   return 
 }
 //commit('journal/setIsLoading',false)
 commit('setIsLoading',false)
 const entries =[]
 for ( let id of Object.keys(data))
 {
    entries.push({id,...data[id]})
 }
 commit('setEntries',entries)
}
export const updateEntries=async( {commit},informacion)=>{
   //const {fecha,picture,text}=informacion
   //const {id,...rest}=informacion
  await journalApi.put(`/entries/${ informacion.id}.json`,{"fecha":informacion.fecha,"picture":informacion.picture,"text":informacion.text}) .then(response => {
   console.log('put success');
   console.log(response)
})
.catch(error => {
   console.log('Oh No! Error!');  
   console.log(error)
})


   commit('updateEntry',{...informacion})
}
export const createEntries=async({commit},informacion)=>{
  const{fecha,picture,text}=informacion
  const {data}= await journalApi.post(`/entries.json`,{fecha,picture,text}) 
  console.log(data.name)
  commit('addEntry',{id:data.name,fecha,picture,text})
  return data.name
}
export const deleteEntry=async({commit},id)=>{  
   console.log(`------>/entries/${id}<------`)
  await journalApi.delete(`/entries/${id}.json`) 
  console.log("despues de eliminar")  
  commit('deleteEntry',id)
  
}