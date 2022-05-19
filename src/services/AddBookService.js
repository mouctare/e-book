import axios from 'axios';


const BOOK_BASE_REST_API_URL =  "http://localhost:8080/";


class AddBookService{

    createBook(book){
        return axios.post(BOOK_BASE_REST_API_URL, book)
    }

   
}

export default new AddBookService();