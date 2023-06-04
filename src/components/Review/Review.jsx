import star from "../../assets/star.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Review() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-indigo-950 px-5 py-10" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <h3 className="text-center text-3xl mb-5">Hot Review</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="review-item bg-gray-300 p-3 rounded-md text-black w-full">
            <div className="user-name text-2xl">Jhon Doe</div>
            <i className="user-designation text-gray-700">
              Photographer at <span className="text-green-600">PixelPhoto</span>
            </i>
            <div className="rating flex mb-5">
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
            </div>
            <div className="review">
              Great website for action figures! Wide selection, easy navigation,
              and detailed product descriptions. Smooth checkout and prompt
              shipping. Highly recommended!
            </div>
          </div>

          <div className="review-item bg-gray-300 p-3 rounded-md text-black w-full">
            <div className="user-name text-2xl">Mark Henri</div>
            <i className="user-designation text-gray-700">
              Engineer at <span className="text-green-600">Google</span>
            </i>
            <div className="rating flex mb-5">
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
              <img src={star} className="w-6 h-6" alt="star" />
            </div>
            <div className="review">
              Impressive action figure website! User-friendly interface,
              detailed product info, competitive pricing. Excellent packaging
              and responsive customer support. Check it out!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
