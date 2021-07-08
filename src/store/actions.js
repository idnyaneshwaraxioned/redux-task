const { USER_LOGIN, USER_LOGOUT } = require("./actionstype");

export const loginUser = ()=>({
    type:USER_LOGIN
})

export const logoutUser = ()=>({
    type:USER_LOGOUT
})

