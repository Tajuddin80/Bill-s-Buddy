import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import mascot from "../../assets/bill_buddy_mascot-1.png";
import { AuthContext } from "../../components/Contexts/AuthContext";

const SignUp = () => {
  const { createUser, setUser, setName, setPhoto, signInWithGoogle } =
    useContext(AuthContext); 
  const navigate = useNavigate();
  const [error, setError] = useState("");


  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /[A-Z]/.test(password) && /[a-z]/.test(password) && password.length >= 6;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photoURL =
      form.photo.value || "https://i.postimg.cc/QM6LPFwV/icons8-avatar.gif";
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword?.value;

    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must contain uppercase, lowercase, and be at least 6 characters."
      );
      return;
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setName(name);
        setPhoto(photoURL);

        localStorage.setItem("userName", name);
        localStorage.setItem("userPhoto", photoURL);

        setError("");
        navigate("/home");
      })
      .catch((err) => {
        console.error("Signup error:", err.message);
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
  
        const displayName = user.displayName || "";
        const photoURL = user.photoURL || "https://i.postimg.cc/QM6LPFwV/icons8-avatar.gif";
  
        setName(displayName);           
        setPhoto(photoURL);            
  
        localStorage.setItem("userName", displayName);
        localStorage.setItem("userPhoto", photoURL);
  
        navigate("/home");
      })
      .catch((err) => {
        console.error("Google Sign-In Error:", err.message);
        setError(err.message);
      });
  };
  

  return (
    <div className="w-11/12 min-h-screen mx-auto py-8 flex flex-col justify-center items-center">
      <h3 className="text-center text-[3rem] font-bold text-[#ff5c15] my-10">
        Bill Buddy
      </h3>
      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gray-900">Your </span>
              <span className="text-orange-500">All-in-One Solution</span>
              <span className="text-gray-900">
                {" "}
                for Bill Purchases and Management
              </span>
            </h1>
            <p className="text-gray-600 max-w-3xl text-2xl mx-auto">
              Discover the Ease of Handling Bills and Simplifying Your Financial
              Life with Bill Buddy.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Let's Get You Started Buddy!
              </h2>
              <p className="text-xl font-semibold text-gray-900">
                Create an Account
              </p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center gap-2 py-2 mb-4 rounded-md"
            >
              <svg
                aria-label="Google logo"
                width="18"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  />
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  />
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  />
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  />
                </g>
              </svg>
              Sign Up with Google
            </button>

            <div className="relative flex items-center justify-center mb-6 text-2xl">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleOnSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="User Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="photo"
                placeholder="Photo-URL (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />

              {error && <p className="text-red-600 font-semibold">{error}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 text-orange-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I accept the{" "}
                  <Link to="" className="text-orange-500">
                    Terms of Use
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md"
              >
                Create Account
              </button>
            </form>

            <Link
              to="/signin"
              className="mt-4 inline-block text-[#ff5c15] underline"
            >
              Already have an account? Login
            </Link>
          </div>
        </div>

        <div className="hidden lg:block fixed right-0 bottom-0">
          <img src={mascot} alt="mascot" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
