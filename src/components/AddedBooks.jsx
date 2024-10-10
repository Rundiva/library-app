// const AddedBooks = ({ uploadedBooks, handleEditBook, handleDeleteBook }) => {
//     return (
//       <div className="w-full sm:w-[80%] mt-8">
//         <h2 className="text-2xl font-bold text-gray-800">Uploaded Books</h2>
//         {uploadedBooks.length === 0 ? (
//           <p className="text-gray-600 mt-4">No books uploaded yet.</p>
//         ) : (
//           <div className="space-y-4 mt-4">
//             {uploadedBooks.map((book) => (
//               <div
//                 key={book.id}
//                 className="flex flex-col md:flex-row items-start bg-white p-4 rounded-lg shadow-md"
//               >
//                 <img
//                   src={book.image}
//                   alt={book.title}
//                   className="w-32 h-32 object-cover rounded-lg mr-4"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {book.title}
//                   </h3>
//                   <p className="text-gray-600 mt-2">{book.description}</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEditBook(book)}
//                     className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteBook(book.id)}
//                     className="p-2 text-white bg-red-500 rounded-md hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default AddedBooks;
  