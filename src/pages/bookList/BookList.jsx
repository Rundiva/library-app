import { Link } from "react-router-dom";
import Hero from "../bookList/Hero";
// import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import K from "../../constants";

const BookList = () => {


  return (
    <div>
      <Navbar />
      <Hero />
      <div classname="grid grid-cols-3 w-3/2 mx-auto my-24 gap-12">
      {K.BOOKS.map((book,index) => {
        console.log(`${index}: ${book.text}`);
        return <div key={index} className="flex flex-col gap-y-2">
          {/* <span >{bookCover}</span> */}
          <h3>{book.text}</h3>
          <p>{ book.description}</p>
          </div>
      })
      
    }
        
      </div>

      <Footer />

    </div>
  );
};

export default BookList;