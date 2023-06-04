export default function Banner() {
  return (
    <div className="px-5">
      <div className="container mt-5">
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-item w-full rounded-lg overflow-hidden"
          >
            <img
              src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dwxw52qg6ixhfruzmyi5.jpg"
              className="w-full"
            />
          </div>
          <div
            id="item2"
            className="carousel-item w-full rounded-lg overflow-hidden"
          >
            <img
              src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2019/07/Xmen.07.17.2019A1.jpg"
              className="w-full"
            />
          </div>
          <div
            id="item3"
            className="carousel-item w-full rounded-lg overflow-hidden"
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0383/4085/3804/articles/THOR_-_Love_and_Thunder_Cover_Photo_600x600_crop_center.png"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mt-5">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
}
