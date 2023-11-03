import state from './state'
import * as action from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const myCustomModule={
    namespace:true,
    action,
    getters,
    mutations,
    state
}
export default myCustomModule