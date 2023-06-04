import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Login() {
  const redirect = useLocation();
  const from = redirect.state || "/";
  const navigate = useNavigate();

  const AuthData = useContext(AuthContext);
  const { signIn, googleSignIn } = AuthData;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePassInput = (e) => {
    setPass(e.target.value);
  };

  const handleLoginWithGoogle = () => {
    googleSignIn().then((res) => {
      if (res === "success") {
        navigate(from);
      }
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, pass).then((res) => {
      if (res === "success") {
        navigate(from);
      }
    });
  };
  return (
    <div className="login-form">
      <div className="py-20">
        <div className="w-72 md:w-96 p-4 m-auto bg-black rounded-md shadow-md ring-2 ring-gray-800/50">
          <h1 className="text-3xl font-semibold text-center text-white">
            Welcome Back!
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
                value={email}
                onChange={handleEmailInput}
                required
              />
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
                value={pass}
                onChange={handlePassInput}
                required
              />
            </div>
            <div className="pt-5">
              <button
                className="btn btn-block bg-blue-900 hover:bg-blue-800"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <p className="flex justify-center py-5 items-center before:flex-1 before:mr-2 before:h-px before:bg-gray-500 after:h-px after:flex-1 after:ml-2 after:bg-gray-500">
            Or
          </p>
          <button
            className="btn btn-block text-uppercase"
            onClick={handleLoginWithGoogle}
          >
            Login With Google
          </button>

          <p className="text-center mt-3">
            Don&apos;t Have Account?{" "}
            <Link
              to="/register"
              className="text-green-500 hover:text-green-600"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
