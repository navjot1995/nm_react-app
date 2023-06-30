
const user = sessionStorage.getItem("user") || null

const intialState={
    user: user ? JSON.parse(user) : null,
    token : sessionStorage.getItem("token") || ''
}

const stateUpdate = (state = intialState, action)=>{
    switch (action.type){
        case 'updateToken': return {
            ...state,token : sessionStorage.getItem("token")
        }
        case 'updateUser': return {
            ...state,user : user ? JSON.parse(user) : {}
        }
        default: return state
    }   
}

export {
    stateUpdate
}