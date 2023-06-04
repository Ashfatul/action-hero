export default function Gallery() {
  return (
    <div className="mt-10 mb-10 px-5">
      <div className="container">
        <h2 className="text-3xl text-center text">Hero Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5 justify-center">
          <img
            src="https://m.media-amazon.com/images/I/71npIL90wlL.jpg"
            alt="action figure"
            className="w-full h-60  overflow-hidden object-cover object-top rounded-2xl mx-auto hover:shadow-2xl"
          />

          <img
            src="https://www.hasbro.com/common/productimages/en_US/CABCF6C6A2714FC593973D9DF41C290D/d2684c79e1ac7cb00f09fbade32a2a7df88bb421.jpg"
            alt="action figure"
            className="w-full h-60 overflow-hidden object-cover object-top rounded-2xl mx-auto hover:shadow-2xl"
          />

          <img
            src="https://i5.walmartimages.ca/images/Large/774/101/6000205774101.jpg"
            alt="action figure"
            className="w-full h-60 overflow-hidden object-cover object-top rounded-2xl mx-auto hover:shadow-2xl"
          />

          <img
            src="https://www.hasbro.com/common/productimages/en_US/1FEBCCDB717C4825B1403B47E66B11A8/d11d99790ca3201eda835a5b4461344f3d9d811c.jpg"
            alt="action figure"
            className="w-full h-60 overflow-hidden object-cover object-top rounded-2xl mx-auto hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
