import React, { useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [product, setProduct] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .post("http://localhost:3001/product/createProduct", product)
      .then(function (response) {
        alert("Items Listed on DB successfully");
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
        alt="Product"
      />
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg mt-10 mb-10"
        onSubmit={submitHandler}
      >
        <h1 className="text-3xl font-bold text-center mb-6">List Products</h1>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="productName"
          >
            Product Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="productName"
            type="text"
            placeholder="Enter Product Name (e.g., Mobile)"
            onChange={(e) =>
              setProduct({ ...product, productName: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-6 flex justify-between">
          <div className="w-1/2 pr-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="price"
              type="text"
              placeholder="Enter Price (e.g., Rs.100)"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 pl-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="quantity"
            >
              Quantity Available
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="quantity"
              type="text"
              placeholder="Quantity Available"
              onChange={(e) =>
                setProduct({ ...product, qty: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-6 flex justify-between">
          <div className="w-1/2 pr-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="category"
              type="text"
              placeholder="Category"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 pl-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="productImage"
            >
              Product Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="productImage"
              type="text"
              placeholder="Drive link"
              onChange={(e) =>
                setProduct({ ...product, productImage: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-6 flex justify-between">
          <div className="w-1/2 pr-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="manufacturer"
            >
              Manufacturer
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="manufacturer"
              type="text"
              placeholder="Manufacturer Name"
              onChange={(e) =>
                setProduct({ ...product, manufacturerName: e.target.value })
              }
              required
            />
          </div>
          <div className="w-1/2 pl-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="manufacturerContact"
            >
              Manufacturer Contact
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="manufacturerContact"
              type="text"
              placeholder="Manufacturer Number"
              onChange={(e) =>
                setProduct({
                  ...product,
                  manufacturerContact: e.target.value,
                })
              }
              required
            />
          </div>
        </div>
        <div className="mb-6 flex justify-between">
          <div className="w-1/2 pr-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description1"
            >
              Description 1
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="description1"
              type="text"
              placeholder="Enter Description 1"
              onChange={(e) =>{
                let descOne = { descOne: e.target.value };
                  setProduct({ ...product, ...descOne });
              }}
              required
            />
          </div>
          <div className="w-1/2 pl-1">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description2"
            >
              Description 2
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="description2"
              type="text"
              placeholder="Enter Description 2"
              onChange={(e) =>
                setProduct({ ...product, descTwo: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="description3"
          >
            Description 3
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="description3"
            type="text"
            placeholder="Enter Description 3"
            onChange={(e) =>
              setProduct({ ...product, descThree: e.target.value })
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

export default ProductList;
