/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function SingleMyToy({ toy, deleteToy }) {
  return (
    <div className="bg-black border-white mb-5 rounded-lg block sm:flex">
      <div className="toy-image text-center">
        <img
          src={toy?.photo}
          alt={toy?.name}
          className="h-48 w-48 mx-auto object-cover object-top rounded-lg px-5 py-5"
        />
      </div>
      <div className="toy-details text-center sm:text-left flex-grow p-5">
        <div className="toy-name text-2xl text-green-500">{toy?.name}</div>
        <div className="seller-name mb-3">
          Seller: <span className="text-red-500">{toy?.sellerName}</span>
        </div>
        <div className="sub-category">
          Sub Category: <span>{toy?.subCategory}</span>
        </div>
        <div className="price">
          Price: <span>${toy?.price}</span>
        </div>
        <div className="quantity">
          Available Quantity: <span>{toy?.quantity}</span>
        </div>
      </div>
      <div className="view-details p-5 text-center flex flex-col items-center justify-center">
        <NavLink className="btn w-32" to={`/update-toy/${toy?._id}`}>
          Update
        </NavLink>
        <button className="btn w-32 mt-5" onClick={() => deleteToy()}>
          Delete
        </button>
      </div>
    </div>
  );
}
