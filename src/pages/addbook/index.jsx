import Footer from "../../components/Footer";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const AddBook = () => {
  //fetching Data
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/author`);
    setAuthors(response.data)
  }

  useEffect(() => {
    getAuthors();
  }, []);


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //collect the form data
      const formData = new FormData(event.target);

      //post data to api
      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get('title'),
        description: formData.get('summary'),
        content: formData.get(content),
        cover: formData.get('cover'),
        author: formData.get('author'),
      });

    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div>

      <div className="min-h-screen flex mb-[-200px] ">


        <aside className=" w-1/4 bg-gradient-to-b from-amber-400 to-lime-400 text-white p-4 pt-11 shadow-lg ">

        
          <h2 className="text-xl font-bold]">Dashboard</h2>
          <ul className="space-y-2 relative">
            <li>
              <Link to='/' className="block py-2 px-4 rounded-lg hover:bg-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg hover:bg-amber-500 transition">
                Manage Books
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded-lg hover:bg-amber-500 transition">
                Settings
              </a>
            </li>
          </ul>
        </aside>


        <div className="w-3/4 p-10 bg-transparent ">

          <div className="w-full mx-auto  rounded-xl bg-gradient-to-br from-amber-300 bg-[#20bd4f85] p-8 shadow-xl">
            <h1 className="text-center text-2xl font-bold text-gray-700 mb-8">
              Fill the Form Below to Upload a Book
            </h1>

            <form
              onSubmit={handleSubmit}
              id="home"
              className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col">
                <label className="text-lg font-semibold text-gray-600 mb-2">Book Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Enter the Title of the Book Here"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-lg font-semibold text-gray-600 mb-2">Author</label>
                <select
                  name="author"
                  type="text"
                  placeholder="Enter the Title of the Book Author Here"

                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  {authors.map((author) => {
                    return <option key={author._id} value={author._id}>{author.name}</option>
                  })}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-gray-600 mb-2">Description</label>
                <textarea
                  name="summary"
                  placeholder="Provide a short description"
                  rows="3"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-gray-600 mb-2">Content</label>
                <textarea
                  name="content"
                  placeholder="Enter the book content here"
                  rows="5"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label className="text-lg font-semibold text-gray-600 mb-2">Book Cover</label>
                <input
                  name="cover"
                  type="file"
                  accept="image/*"
                  className="p-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-white hover:file:bg-amber-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-4 w-[150px] py-3 bg-lime-400 hover:bg-lime-500 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out"
                >
                  Upload Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default AddBook;