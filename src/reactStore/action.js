const accesstoken =()=>{
    return {
        type: 'updateToken'
    }
}

const profileUser =()=>{
    return {
        type: 'updateUser'
    }
}

export {
    profileUser,
    accesstoken
}