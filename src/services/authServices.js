export async function register(data){
    return{
        username: "test",
        token: "token"
    }
}

export async function login(data){
    return{
        username: "test",
        jwt: "token"
    }
}

export async function logout(){
    return "Logged out."
}