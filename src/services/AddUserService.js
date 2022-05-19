import axios from 'axios';

const USER_BASE_REST_API_URL =  "http://localhost:8080/";

class AddUserServiceService{
createUser(user) {
        return axios.post(USER_BASE_REST_API_URL + 'users' , user)
    }

}

export default new AddUserServiceService();