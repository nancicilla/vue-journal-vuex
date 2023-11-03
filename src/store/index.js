import { createStore } from "vuex";
//import index as journal from '@/modules/daybook/store/journal/index.js'
import journal from "@/modules/daybook/store/journal";
const store= createStore({
    modules:{
        journal
    }
})
export default store