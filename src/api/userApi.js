import axios from "../axios";


class UserApi{
    createUser (data){
        return axios.post("/users", data, {
            headers: {
                "Content-Type": "application/json"}
        })
    }
    loginUser (data){
        return axios.post("/auth/login", data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    getProfile(token){
        if (token) {
            return axios.get("/auth/profile",{
                headers:
                {Authorization:`Bearer ${token}`
            }
            })
        }
    }

}

export default new UserApi