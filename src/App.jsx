
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import BookList from "./pages/bookList";
import AddBook from "./pages/addbook";
import "./App.css";
import BookDetails from "./pages/bookDetails";
import Hero from "./pages/bookList/components/Hero";
import Navbar from "./components/Navbar";



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

  ]);

  return <RouterProvider router={router} />;
}

export default App;


