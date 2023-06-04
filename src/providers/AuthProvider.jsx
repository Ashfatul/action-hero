import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useEffect } from "react";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Loader from "../components/Loader/Loader";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        toastr.success("Registration success");
        const user = res.user;
        return updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .catch((err) => {
        console.log(err);
        toastr.error(err.message);
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toastr.success("Login Success");
        return "success";
      })
      .catch((e) => {
        toastr.error(e.message);
        setLoading(false);
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
      .then(() => {
        toastr.success("Login Success");
        return "success";
      })
      .catch((err) => {
        console.log(err);
        toastr.error(err.message);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
