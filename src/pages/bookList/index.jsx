import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const BookList = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <div>Book list content goes here</div>

        <Link to="/add-new">Add Book</Link>
        <Footer/>
        
    </div>
  );
};

export default BookList;