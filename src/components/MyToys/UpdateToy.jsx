import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function UpdateToy() {
   document.title = "Update Toy | ActionHero";
   const { id } = useParams();
   const [updated, setUpdated] = useState(false);

   const [toyData, setToyData] = useState({});

   useEffect(() => {
      fetch(`https://action-hero-server.vercel.app/update-toy/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setToyData(data);
            setPrice(data.price);
            setQuantity(data.quantity);
            setDescription(data.description);
         })
         .catch((err) => console.log(err));
   }, [id]);

   const [price, setPrice] = useState("");
   const [quantity, setQuantity] = useState("");
   const [description, setDescription] = useState("");

   const handlePriceInput = (e) => {
      setPrice(e.target.value);
   };

   const handleQuantityInput = (e) => {
      setQuantity(e.target.value);
   };
   const handleDescriptionInput = (e) => {
      setDescription(e.target.value);
   };

   const updateProduct = (e) => {
      e.preventDefault();
      const productData = {
         price,
         quantity,
         description,
      };
      fetch(`https://action-hero-server.vercel.app/update-toy/${id}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(productData),
      })
         .then((res) => res.json())
         .then(() => {
            toastr.success("Toy Updated Successfully");
            setUpdated(true);
         })
         .catch((err) => {
            console.log(err);
            toastr.error("Failed To Update Toy");
         });
   };

   return (
      <>
         {updated && <Navigate to={`/my-toys/${toyData?.userID}`} />}
         <div className="section-title">
            <div className="container">
               <h2 className="text-5xl text-green-500 py-20 text-center ">
                  Update Toy
               </h2>
            </div>
         </div>

         <div className="px-5 py-10">
            <div className="container">
               <div className="text-2xl">
                  Updating Product:{" "}
                  <span className="text-green-500">{toyData?.name}</span>
               </div>
               <div className="text-2xl mb-10">
                  Seller:{" "}
                  <span className="text-green-500">{toyData?.sellerName}</span>
               </div>
               <form onSubmit={updateProduct}>
                  <div>
                     <div>
                        <label className="label">
                           <span className="text-base label-text">Price</span>
                        </label>
                        <input
                           type="number"
                           min={1}
                           step={0.1}
                           placeholder="price"
                           className="w-full input input-bordered"
                           value={price}
                           onChange={handlePriceInput}
                           required
                        />
                     </div>
                     <div>
                        <label className="label">
                           <span className="text-base label-text">
                              Quantity
                           </span>
                        </label>
                        <input
                           type="number"
                           min={1}
                           placeholder="quantity"
                           className="w-full input input-bordered"
                           value={quantity}
                           onChange={handleQuantityInput}
                           required
                        />
                     </div>
                  </div>

                  <label className="label">
                     <span className="text-base label-text">
                        Toy Description
                     </span>
                  </label>
                  <textarea
                     placeholder="toy dsetails description"
                     className="w-full input input-bordered h-52 p-3"
                     value={description}
                     onChange={handleDescriptionInput}
                     required
                  />

                  <div className="text-center">
                     <button type="submit" className="btn mt-5">
                        Update Toy
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}
