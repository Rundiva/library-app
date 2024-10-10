import { Link } from "react-router-dom";
import Hero from "../bookList/Hero";
// import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import  { BASE_URL } from "../../constants";
import { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {

  const [books, setbooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`)
    setbooks(response.data);
  }

  useEffect(() => {
    getBooks();
  }, []);


  return (
    
    <div className="grid grid-cols-3 w-4/5 mx-auto my-24 gap-12">
       {books.map((book,index) => {
    console.log( book);
    return <div key={index} className="flex flex-col gap-y-2">
       <img src={book.cover} alt="pic" />
        <h3 className="text-2xl font-semibold">{book.title}</h3>
        <p>{book.summary}</p>
    </div>

})}
        </div>
  );
        

     

     

   
  
};

export default BookList;