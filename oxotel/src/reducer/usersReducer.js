const usersReducer = (userData = [], action) => {
    if (action.type === "ADD_USER") {
        userData = action.userData;
    }
    if (action.type === "UPDATE_USER_DETAILS") {
        userData = action.userData;
    }
    return userData;
};



export default usersReducer;
