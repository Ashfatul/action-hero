import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

export default function Register() {
  const AuthData = useContext(AuthContext);
  const { createUser } = AuthData;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [photoValid, setPhotoValid] = useState(false);

  const [error, setError] = useState(false);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePassInput = (e) => {
    setPassword(e.target.value);
  };
  const handlePhotoUrlInput = (e) => {
    setPhoto(e.target.value);
  };

  const handleRegistration = (valid) => {
    if (valid) {
      createUser(email, password, name, photo);
    } else {
      toastr.error("Invalid Form Data");
    }
  };

  const validator = (e) => {
    setError(true);
    e.preventDefault();
    setError(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex =
      /^(https?:\/\/)?([\w\d-]+\.){1,}[a-z]{2,}(:[\d]{1,5})?(\/[^\s]*)?$/i;
    const passwordRegex = /^.{6,}$/;

    const validName = name?.length > 0;
    const validPhoto = urlRegex.test(photo);
    const validEmail = emailRegex.test(email);
    const validPass = passwordRegex.test(password);

    setEmailValid(validEmail);
    setPasswordValid(validPass);
    setNameValid(validName);
    setPhotoValid(validPhoto);

    handleRegistration(validName && validPhoto && validEmail && validPass);
  };

  return (
    <div className="registration-form">
      <div className="py-20">
        <div className="w-72 md:w-96 p-4 m-auto bg-black rounded-md shadow-md ring-2 ring-gray-800/50">
          <h1 className="text-3xl font-semibold text-center text-white">
            Register Now!
          </h1>
          <form className="space-y-4" onSubmit={validator}>
            <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Write your name"
                className="w-full input input-bordered"
                value={name}
                onChange={handleNameInput}
              />
              {error && !nameValid && (
                <small className="text-red-500">Write Name</small>
              )}
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Write your email address"
                className="w-full input input-bordered"
                value={email}
                onChange={handleEmailInput}
              />
              {error && !emailValid && (
                <small className="text-red-500">Invalid Email Address</small>
              )}
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                value={password}
                onChange={handlePassInput}
              />
              {error && !passwordValid && (
                <small className="text-red-500">
                  Minimum Password Length 6
                </small>
              )}
              <label className="label">
                <span className="text-base label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo.png"
                className="w-full input input-bordered"
                value={photo}
                onChange={handlePhotoUrlInput}
              />
              {error && !photoValid && (
                <small className="text-red-500">Give a link to Photo</small>
              )}
            </div>
            <div className="pt-5">
              <button
                className="btn btn-block bg-blue-900 hover:bg-blue-800"
                type="submit"
              >
                Register
              </button>
            </div>

            <p className="text-center">
              Already Have Account?{" "}
              <Link to="/login" className="text-green-500 hover:text-green-600">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
