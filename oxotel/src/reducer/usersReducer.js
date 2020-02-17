const usersReducer = (userData = {}, action) => {
    if (action.type === "ADD_USER") {
        console.log('sdsdsdssds', action.userData)
        userData = action.userData;
        return userData
    }
    if (action.type === "UPDATE_USER_DETAILS") {
        userData = Object.assign({}, action.userData)
    }
    return userData;
};


export default usersReducer;
