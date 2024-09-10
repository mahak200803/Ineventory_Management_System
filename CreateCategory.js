import React, { useState } from "react";
import axios from "axios";

const CreateCategory = () => {
  const [category, setCategory] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(category);
    axios
      .post("http://localhost:3001/product/createCategory", category)
      .then(function (response) {
        alert("Categories Listed on DB successfully");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <img
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzZXJ2aWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
        className="hidden md:block w-1/2 mr-8"
        alt="Category"
      />
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl font-bold text-center mb-6">List Category</h1>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="categoryName"
          >
            Category Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="categoryName"
            type="text"
            placeholder="Enter Category Name (e.g., Electronics)"
            onChange={(e) =>
              setCategory({ ...category, categoryName: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="categoryImage"
          >
            Category Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="categoryImage"
            type="text"
            placeholder="Enter Drive link for Category Image"
            onChange={(e) =>
              setCategory({ ...category, categoryImage: e.target.value })
            }
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
