import { useContext } from "react";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { AuthContext } from "../../providers/AuthProvider";

export default function AddNewProduct() {
   document.title = "Add New Toy | ActionHero";
   const [name, setName] = useState("");
   const [photo, setPhoto] = useState("");
   const [subCategory, setSubCategory] = useState("Marvel Universe");
   const [price, setPrice] = useState("");
   const [rating, setRating] = useState("");
   const [quantity, setQuantity] = useState("");
   const [description, setDescription] = useState("");
   const AuthData = useContext(AuthContext);
   const { user } = AuthData;

   const handleNameInput = (e) => {
      setName(e.target.value);
   };
   const handlePhotoURLInput = (e) => {
      setPhoto(e.target.value);
   };
   const handleSubCategoryInput = (e) => {
      setSubCategory(e.target.value);
   };
   const handlePriceInput = (e) => {
      setPrice(e.target.value);
   };
   const handleRatingInput = (e) => {
      setRating(e.target.value);
   };
   const handleQuantityInput = (e) => {
      setQuantity(e.target.value);
   };
   const handleDescriptionInput = (e) => {
      setDescription(e.target.value);
   };

   const createNewProduct = (e) => {
      e.preventDefault();
      const productData = {
         userID: user.uid,
         name,
         photo,
         sellerName: user.displayName,
         sellerEmail: user.email,
         subCategory,
         price,
         rating,
         quantity,
         description,
      };
      fetch("https://action-hero-server.vercel.app/add-product", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(productData),
      })
         .then((res) => res.json())
         .then(() => {
            toastr.success("Toy Added Successfully");
            setName("");
            setPhoto("");
            setSubCategory("Marvel Universe");
            setPrice("");
            setRating("");
            setQuantity("");
            setDescription("");
         })
         .catch((err) => {
            console.log(err);
            toastr.error("Failed To Add Toy");
         });
   };

   return (
      <>
         <div className="section-title">
            <div className="container">
               <h2 className="text-5xl text-green-500 py-20 text-center ">
                  Add A Toy
               </h2>
            </div>
         </div>

         <div className="px-5 py-10">
            <div className="container">
               <form onSubmit={createNewProduct}>
                  <input type="hidden" value={user.uid} />
                  <label className="label">
                     <span className="text-base label-text">Toy Name</span>
                  </label>
                  <input
                     type="text"
                     placeholder="write toy name"
                     className="w-full input input-bordered"
                     value={name}
                     onChange={handleNameInput}
                     required
                  />

                  <label className="label">
                     <span className="text-base label-text">Toy PhotoURL</span>
                  </label>
                  <input
                     type="text"
                     placeholder="photo.png"
                     className="w-full input input-bordered"
                     value={photo}
                     onChange={handlePhotoURLInput}
                     required
                  />

                  <label className="label">
                     <span className="text-base label-text">Seller Name</span>
                  </label>
                  <input
                     type="text"
                     placeholder="seller name"
                     className="w-full input input-bordered"
                     value={user.displayName}
                     disabled
                  />

                  <label className="label">
                     <span className="text-base label-text">
                        Seller Email Address
                     </span>
                  </label>
                  <input
                     type="email"
                     placeholder="seller email address"
                     className="w-full input input-bordered"
                     value={user.email}
                     disabled
                  />

                  <label className="label">
                     <span className="text-base label-text">
                        Toy SubCategory
                     </span>
                  </label>
                  <select
                     className="w-full input input-bordered"
                     onChange={handleSubCategoryInput}
                     value={subCategory}
                  >
                     <option value="Marvel Universe">Marvel Universe</option>
                     <option value="DC Universe">DC Universe</option>
                     <option value="Disney Universe">Disney Universe</option>
                  </select>

                  <div className="grid gap-3 grid-cols-3">
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
                           <span className="text-base label-text">Rating</span>
                        </label>
                        <input
                           type="number"
                           step={0.1}
                           min={1}
                           max={5}
                           placeholder="rating"
                           className="w-full input input-bordered"
                           value={rating}
                           onChange={handleRatingInput}
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
                        Add New Toy
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}
