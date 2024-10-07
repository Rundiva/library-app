import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import AddedBooks from "./components/AddedBooks";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploadedBooks, setUploadedBooks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null); // Store the ID of the book being edited

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill all the fields!");
      return;
    }

    if (editMode) {
      // If in edit mode, update the existing book
      setUploadedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === currentBookId
            ? { ...book, title, description, image: URL.createObjectURL(image) }
            : book
        )
      );
      setEditMode(false); // Exit edit mode
      setCurrentBookId(null); // Clear current book ID
    } else {
      // Add a new book
      const newBook = {
        id: Date.now(),
        title,
        description,
        image: URL.createObjectURL(image),
      };
      setUploadedBooks([...uploadedBooks, newBook]);
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setImage(null);
  };

  // Handle image input
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle book deletion
  const handleDeleteBook = (bookId) => {
    const updatedBooks = uploadedBooks.filter((book) => book.id !== bookId);
    setUploadedBooks(updatedBooks);
  };

  // Handle book edit
  const handleEditBook = (book) => {
    setTitle(book.title);
    setDescription(book.description);
    setImage(null); // Set the image to null because it can't be previewed
    setEditMode(true); // Set to edit mode
    setCurrentBookId(book.id); // Track which book is being edited
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-full lg:max-w-[1345px] h-auto flex flex-col justify-center items-center bg-gray-100 p-6 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[80%] bg-gray-800 p-6 rounded-lg relative border-2 border-transparent"
        >
          <div className="absolute inset-0 rounded-lg border-[3px] border-gradient-to-r from-orange-400 via-yellow-500 to-red-500"></div>

          <div className="relative z-10 space-y-4">
            <label className="block text-gray-300">BOOK TITLE</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter the Title of the Book Here"
              className="w-full p-2 bg-gray-700 text-gray-400 placeholder-gray-500 rounded-md focus:outline-none focus:text-white"
            />

            <label className="block text-gray-300">DESCRIPTION</label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Description"
              rows="5"
              className="w-full p-2 h-[200px] bg-gray-700 text-gray-400 placeholder-gray-500 rounded-md focus:outline-none focus:text-white resize-none"
            ></textarea>

            <label className="block text-gray-300">Upload an Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full bg-gray-700 text-gray-400 rounded-md focus:outline-none focus:text-white"
            />

            <button
              type="submit"
              className="w-full p-2 mt-4 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              {editMode ? "UPDATE BOOK" : "UPLOAD"}
            </button>
          </div>
        </form>

        {/* Pass the necessary props to the AddedBooks component */}
        <AddedBooks
          uploadedBooks={uploadedBooks}
          handleEditBook={handleEditBook}
          handleDeleteBook={handleDeleteBook}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AddBook;