import { useParams } from "react-router-dom";
import SingleMyToy from "./SingleMyToy";
import { useEffect, useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Loader from "../Loader/Loader";

export default function MyToys() {
   const [loading, setLoading] = useState(true);
   const { id } = useParams();
   const [toys, setToys] = useState([]);
   const [sortBy, setSortBy] = useState("low-to-high");

   const handleSorting = (e) => {
      setSortBy(e.target.value);
   };

   useEffect(() => {
      fetch(`https://action-hero-server.vercel.app/my-toys/${sortBy}/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
            setLoading(false);
         })
         .catch((err) => console.log(err));
   }, [id, sortBy]);

   const handleDelete = (id) => {
      const deletetoy = confirm("Are You Sure To Delete?");
      if (deletetoy) {
         fetch(`https://action-hero-server.vercel.app/my-toys/delete/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then(() => {
               toastr.success("Toy Deleted");
               setToys((prv) => prv.filter((toy) => toy._id !== id));
            })
            .catch((err) => {
               console.log(console.log(err));
               toastr.error("Failed to delete");
            });
      }
   };

   document.title = "My Toy | ActionHero";
   return (
      <div>
         <div className="">
            <div className="section-title">
               <div className="container">
                  <h2 className="text-5xl text-green-500 py-20 text-center ">
                     My Toys
                  </h2>
               </div>
            </div>

            <div className="px-5 py-10">
               <div className="container">
                  <div className="sorting flex justify-end mb-5">
                     <select
                        className="input input-bordered"
                        value={sortBy}
                        onChange={handleSorting}
                     >
                        <option value="low-to-high">
                           Sort (Price Low To High)
                        </option>
                        <option value="high-to-low">
                           Sort (Price High To Low)
                        </option>
                     </select>
                  </div>
                  <div className="w-full">
                     <div>
                        {toys && toys.length > 0 ? (
                           toys.map((toy) => (
                              <SingleMyToy
                                 key={toy._id}
                                 toy={toy}
                                 deleteToy={() => handleDelete(toy._id)}
                              />
                           ))
                        ) : (
                           <div className="flex justify-center py-10">
                              {loading ? <Loader /> : "Nothings Here!"}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
