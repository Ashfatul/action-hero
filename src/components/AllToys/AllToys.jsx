import Loader from "../Loader/Loader";
import SingleToyRow from "./SingleToyRow";
import { useEffect, useState } from "react";

export default function AllToys() {
   const [toysCount, setToysCount] = useState(0);
   const [toys, setToys] = useState([]);
   const [filteredToys, setFilteredToys] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetch(`https://action-hero-server.vercel.app/all-toys/`)
         .then((res) => res.json())
         .then((data) => setToysCount(data.length))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      fetch(
         `https://action-hero-server.vercel.app/all-toys/?limit=${itemPerPage}&currentPage=${currentPage}`
      )
         .then((res) => res.json())
         .then((data) => {
            setToys(data);
            setFilteredToys(data);
            setLoading(false);
         })
         .catch((err) => console.log(err));
   }, [currentPage]);

   const handleQuery = (e) => {
      const searchQuery = e.target.value.toLowerCase();

      setFilteredToys(
         toys.filter((toy) => {
            return toy.name.toLowerCase().includes(searchQuery);
         })
      );
   };

   const itemPerPage = 20;
   const numberOfPages = Math.ceil(toysCount / itemPerPage);

   const pageCountArray = [];

   for (let i = 1; i <= numberOfPages; i++) {
      pageCountArray.push(i);
   }

   document.title = "ALL Toy | ActionHero";

   return (
      <div>
         <div className="">
            <div className="section-title">
               <div className="container">
                  <h2 className="text-5xl text-green-500 py-20 text-center ">
                     ALL Toys
                  </h2>
               </div>
            </div>

            <div className="px-5 py-10">
               <div className="container">
                  <div className="form-control mb-10">
                     <div className="input-group justify-center w-4/5 mx-auto">
                        <input
                           type="text"
                           placeholder="Search by toy name ..."
                           className="input input-bordered w-4/5"
                           onChange={handleQuery}
                        />
                        <div className="bg-green-800 px-5 flex items-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <div>
                        {filteredToys && filteredToys.length > 0 ? (
                           filteredToys.map((toy) => (
                              <SingleToyRow key={toy._id} toy={toy} />
                           ))
                        ) : (
                           <div className="flex justify-center py-10">
                              {loading ? <Loader /> : "Nothings Here!"}
                           </div>
                        )}
                     </div>
                  </div>

                  <div className="flex justify-center">
                     <div className="btn-group">
                        {pageCountArray.map((page) => (
                           <button
                              className={`btn ${
                                 currentPage === page && "active"
                              }`}
                              onClick={() => setCurrentPage(page)}
                              key={page}
                           >
                              {page}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
