import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <img
        src="https://www.pngkey.com/png/full/212-2123428_404-sign.png"
        alt="error 404 image"
        className="w-1/2"
      />
      <Link
        to="/"
        className="mt-5 bg-orange-400 text-black p-2 rounded shadow hover:bg-gray-200"
      >
        Back To Home
      </Link>
    </div>
  );
}
