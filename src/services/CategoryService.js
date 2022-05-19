import axios from 'axios';

const CATEGORY_BASE_REST_API_URL =  "http://localhost:8080/";

class CategoryService{
getAllCategories() {
        return axios.get(CATEGORY_BASE_REST_API_URL + "categories")
    }

}

export default new CategoryService();