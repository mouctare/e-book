import { Route, Routes } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import AddBook from './components/AddBook';
import MyBooks from './components/MyBooks';
import Login from './components/Login';
import AddUser from "./components/AddUser";
import MyBorrows from "./components/MyBorrows";
import Header from "./components/Header";




function App() {
  return (
    <div>
      <Header/>
    <div className="App">
     <Routes>
       <Route path="list-livres" element={<ListBooks /> } />
       <Route path="myBooks" element={<MyBooks /> } />  
       <Route path="addBook" element={<AddBook /> } />
       <Route path="addBook/:bookId" element={<AddBook /> } />
       <Route path="myBorrows" element={<MyBorrows /> } />
       <Route path="login" element={<Login /> } />
       <Route path="addUser" element={<AddUser /> } />
      </Routes>
    </div>
    </div>
  );
}

export default App;
