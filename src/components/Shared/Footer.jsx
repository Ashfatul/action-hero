import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebookSquare,
   faInstagram,
   faLinkedin,
   faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
   return (
      <div className="bg-black pt-20">
         <div className="container">
            <div className="block text-center px-10 md:flex md:text-left flex-wrap gap-10">
               <div className="flex-item flex-1">
                  <div className="website-logo">
                     <p className="flex items-center justify-center md:justify-start text-xl">
                        ActionHero
                     </p>
                  </div>
                  <div className="website-about mt-5">
                     ActionHero: Your ultimate online destination for
                     high-quality action figures from popular franchises.
                  </div>
               </div>
               <div className="flex-item flex-1 mt-5 md:mt-0">
                  <div className="contact-info">
                     <h3 className="mb-5 text-xl">Contact</h3>
                     <p>
                        <b>Email: </b> actionHero@example.com
                     </p>

                     <p>
                        <b>Phone: </b> +1 001122334455
                     </p>

                     <p>
                        <b>Address: </b>
                        4495 Roosevelt Blvd #308, Jacksonville, Florida, United
                        States
                     </p>
                  </div>
               </div>
               <div className="flex-item flex-1 mt-5 md:mt-0">
                  <div className="social">
                     <h3 className="mb-5 text-xl">Find Us On</h3>
                     <ul>
                        <li className="hover:text-green-500">
                           <a href="#">
                              <FontAwesomeIcon icon={faFacebookSquare} />{" "}
                              Facebook
                           </a>
                        </li>
                        <li className="hover:text-green-500">
                           <a href="#">
                              <FontAwesomeIcon icon={faTwitter} /> Twitter
                           </a>
                        </li>
                        <li className="hover:text-green-500">
                           <a href="#">
                              <FontAwesomeIcon icon={faInstagram} /> Instagram
                           </a>
                        </li>
                        <li className="hover:text-green-500">
                           <a href="#">
                              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <hr className="mt-5 border-gray-500" />
            <div className="copyright text-center py-6">
               Copyright &copy; All Right Reserved | 2023
            </div>
         </div>
      </div>
   );
}
