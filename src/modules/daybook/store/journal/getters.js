export const getEntriesByTerm= (state)=>(term='')=>{
    console.log("des getter",state.entries)
    if(term.length===0)return state.entries
    else
    return state.entries.filter(t=>t.text.toLowerCase().includes(term.toLowerCase()))
}
export const getEntryById=(state)=>(id)=>{
    console.log(id)
    const entry= state.entries.find(e=>e.id==id)
    console.log(state.entries,entry)
    if(!entry) return entry
    else
    return {...entry}
 
}