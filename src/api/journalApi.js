import axios from 'axios'
const journalApi=axios.create({
    baseURL:'https://vue-demo-2378b-default-rtdb.firebaseio.com'
})

export default journalApi