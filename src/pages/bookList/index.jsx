import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";


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