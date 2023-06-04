import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import Gallery from "../components/Gallery/Gallery";
import Review from "../components/Review/Review";
import ShopByCategory from "../components/ShopByCategory/ShopByCategory";

export default function Home() {
   document.title = "Home | ActionHero";
   return (
      <>
         <Banner />
         <Gallery />
         <ShopByCategory />
         <Review />
         <Client />
      </>
   );
}
