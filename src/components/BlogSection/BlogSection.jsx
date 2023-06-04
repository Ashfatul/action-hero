import SingleBlog from "./SingleBlog";
import blogs from "./BlogData.json";

export default function BlogSection() {
   document.title = "Blog | ActionHero";
   return (
      <>
         <div className="section-title">
            <div className="container">
               <h2 className="text-5xl text-green-500 py-20 text-center ">
                  Blogs
               </h2>
            </div>
         </div>

         <div className="blogs py-20 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center container gap-5">
               {blogs.map((blog) => (
                  <SingleBlog key={blog.id} blog={blog} />
               ))}
            </div>
         </div>
      </>
   );
}
