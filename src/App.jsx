
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import BookList from "./pages/bookList";
import AddBook from "./pages/addbook";
import "./App.css";
import BookDetails from "./pages/bookDetails";
import Hero from "./pages/bookList/components/Hero";
import Navbar from "./components/Navbar"; 
import Login from "./pages/Account/login";
import Signup from "./pages/Account/signup";



function App(){
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <BookList/>,
    },

    {
      path: "/add-new",
      element: <AddBook/>,
    },

    {
      path: "/books/:id",
      element: <BookDetails/>,
    },

    {
      path: "/add-new",
      element: <Hero/>,
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
   

  ]);

  return <RouterProvider router={router} />;
}

export default App;


