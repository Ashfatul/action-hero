import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-5" data-aos="fade-up" data-aos-duration="1500">
      <div className="container py-10">
        <h3 className="text-center text-3xl mb-5">Our Clients</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="single-client bg-white border border-white py-5 px-5 rounded-lg flex justify-center items-center  hover:drop-shadow-lg hover:shadow-white">
            <img
              src="https://dypdvfcjkqkg2.cloudfront.net/large/6619058-9743.png"
              alt="client"
              className="w-4/5 h-24 object-cover object-center"
            />
          </div>

          <div className="single-client bg-white border border-white py-5 px-5 rounded-lg flex justify-center items-center  hover:drop-shadow-lg hover:shadow-white">
            <img
              src="https://cdn.dribbble.com/users/704425/screenshots/6178018/day49.png"
              alt="client"
              className="w-4/5 h-24 object-cover object-center"
            />
          </div>

          <div className="single-client bg-white border border-white py-5 px-5 rounded-lg flex justify-center items-center  hover:drop-shadow-lg hover:shadow-white">
            <img
              src="https://dypdvfcjkqkg2.cloudfront.net/large/6619058-9743.png"
              alt="client"
              className="w-4/5 h-24 object-cover object-center"
            />
          </div>

          <div className="single-client bg-white border border-white py-5 px-5 rounded-lg flex justify-center items-center  hover:drop-shadow-lg hover:shadow-white">
            <img
              src="https://www.shutterstock.com/image-vector/toy-store-modern-brush-lettering-260nw-1529645261.jpg"
              alt="client"
              className="w-4/5 h-24 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
