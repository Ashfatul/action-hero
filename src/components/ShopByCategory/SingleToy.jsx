import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function SingleToy({ data }) {
  return (
    <div className="bg-black rounded-lg p-5">
      <div className="img w-full rounded-lg overflow-hidden mb-5">
        <img
          src={data.photo}
          className="h-48 w-full object-cover object-top"
          alt={data.name}
        />
      </div>
      <div className="description">
        <h3 className="name text-2xl text-green-500">{data.name}</h3>
        <p className="price">Price: ${data.price}</p>
        <p className="rating">Rating: {data.rating}★</p>
        <NavLink
          to={`/toy/${data?._id}`}
          className="btn block mt-10 flex items-center"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
}
