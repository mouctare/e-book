import axios  from "axios";

const BOOK_URL = "http://localhost:8080/";
class MyBookService{

    getBooks(){
        return axios.get(BOOK_URL + "books");
    }
    
}

export default new MyBookService();