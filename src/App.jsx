
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AddBook from "./pages/addbook";
import "./App.css";
import Book from "./pages/bookDetails/Book";
import Hero from "./pages/bookList/Hero";
import Navbar from "./components/Navbar"; 
import Login from "./pages/Account/login";
import Signup from "./pages/Account/signup";
import BookList from "./pages/bookList/BookList";

function App(){
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Hero/>,
    },

    {
      path: "/add-new",
      element: <AddBook/>,
    },

    {
      path: "/books/:id",
      element: <Book/>,
    },

    {
      path: "/add-new",
      element: <Hero/>
    },
    {
      path: "/add-new",
      element: <Navbar/>, 
    },   
    {
      path: "/account",
      element: <Signup/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },  
    {
      // path: "/index",
      // element: <GoBack/>,
    },  

    {
      path: "/",
      element: <AddBook/>
    }
   

  ]);

  return <RouterProvider router={router} />;
}

export default App;


