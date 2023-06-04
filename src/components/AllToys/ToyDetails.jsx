import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ToyDetails() {
   document.title = "Toy Details | ActionHero";
   const { id } = useParams();
   const [details, setDetails] = useState({});

   useEffect(() => {
      fetch(`https://action-hero-server.vercel.app/toy/${id}`)
         .then((res) => res.json())
         .then((data) => setDetails(data))
         .catch((err) => console.log(err));
   }, [id]);

   return (
      <>
         <div className="section-title">
            <div className="container">
               <h2 className="text-5xl text-green-500 py-20 text-center ">
                  Toy Details
               </h2>
            </div>
         </div>
         <div className="py-10 px-5">
            <div className="container">
               <div className="md:flex md:gap-5 block">
                  <div className="toy-image">
                     <img
                        src={details?.photo}
                        className="w-72 h-72 object-cover object-top rounded-lg"
                        alt={details?.name}
                     />
                  </div>
                  <div className="toy-details mt-5 md:mt-0">
                     <div className="toy-name text-3xl text-green-500 mb-5">
                        {details?.name}
                     </div>
                     <div className="seller">
                        Seller:{" "}
                        <span className="text-green-500">
                           {details?.sellerName}
                        </span>
                     </div>
                     <div className="seller">
                        Seller Email:{" "}
                        <span className="text-green-500">
                           {details?.sellerEmail}
                        </span>
                     </div>
                     <div className="seller">
                        Price:{" "}
                        <span className="text-green-500">
                           ${details?.price}
                        </span>
                     </div>
                     <div className="seller">
                        Rating:{" "}
                        <span className="text-green-500">
                           {details?.rating} ★
                        </span>
                     </div>
                     <div className="seller">
                        Available Quantity:{" "}
                        <span className="text-green-500">
                           {details?.quantity}
                        </span>
                     </div>
                  </div>
               </div>
               <div className="description mt-5 text-justify">
                  {details?.description}
               </div>
            </div>
         </div>
      </>
   );
}
