import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleToy from "./SingleToy";
import Loader from "../Loader/Loader";

export default function ShopByCategory() {
   const [marvel, setMarvel] = useState([]);
   const [dcu, setDCU] = useState([]);
   const [disney, setDisney] = useState([]);
   const [marvelLoading, setMarvelLoading] = useState(true);
   const [dcuLoading, setDCULoading] = useState(true);
   const [disneyLoading, setDisneyLoading] = useState(true);

   useEffect(() => {
      fetch("https://action-hero-server.vercel.app/category-marvel")
         .then((res) => res.json())
         .then((data) => {
            setMarvelLoading(false);
            setMarvel(data);
         })
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      fetch("https://action-hero-server.vercel.app/category-dcu")
         .then((res) => res.json())
         .then((data) => {
            setDCULoading(false);
            setDCU(data);
         })
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      fetch("https://action-hero-server.vercel.app/category-disney")
         .then((res) => res.json())
         .then((data) => {
            setDisneyLoading(false);
            setDisney(data);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="px-5 py-10">
         <div className="container">
            <h3 className="text-center text-3xl mb-5">Shop By Category</h3>
            <Tabs>
               <TabList className="mt-10 flex justify-center">
                  <Tab className="p-3 px-5 rounded-xl hover:cursor-pointer">
                     Marvel Universe
                  </Tab>
                  <Tab className="p-3 px-5 rounded-xl hover:cursor-pointer">
                     DC Universe
                  </Tab>
                  <Tab className="p-3 px-5 rounded-xl hover:cursor-pointer">
                     Disney Universe
                  </Tab>
               </TabList>

               <div className="mt-10">
                  <TabPanel>
                     {marvelLoading ? (
                        <Loader />
                     ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                           {marvel?.map((toy) => (
                              <SingleToy key={toy._id} data={toy} />
                           ))}
                        </div>
                     )}
                  </TabPanel>
                  <TabPanel>
                     {dcuLoading ? (
                        <Loader />
                     ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                           {dcu?.map((toy) => (
                              <SingleToy key={toy._id} data={toy} />
                           ))}
                        </div>
                     )}
                  </TabPanel>
                  <TabPanel>
                     {disneyLoading ? (
                        <Loader />
                     ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                           {disney?.map((toy) => (
                              <SingleToy key={toy._id} data={toy} />
                           ))}
                        </div>
                     )}
                  </TabPanel>
               </div>
            </Tabs>
         </div>
      </div>
   );
}
