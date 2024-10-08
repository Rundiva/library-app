
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import BookList from "./pages/bookList";
import AddBook from "./pages/addbook";
import "./App.css";
import BookDetails from "./pages/bookDetails";
import Login from "./pages/addbook/Login";


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
      path: "/account",
      element: <Login/>,
    },

    {
      path: "/books/:id",
      element: <BookDetails/>,
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;


