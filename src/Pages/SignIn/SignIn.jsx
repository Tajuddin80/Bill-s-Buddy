import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import mascot2 from "../../assets/bill_buddy_mascot-2.png";
import { AuthContext } from "../../components/Contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";

const SignIn = () => {
  const {
    signInUser,
    sendResetPass,
    signInWithGoogle,
    setUser,
    setName,
    setPhoto,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        setError("Login failed: Invalid information");
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email) {
      toast("Please enter your email address first.");
      return;
    }

    sendResetPass(email)
      .then(() => {
        toast("Password reset email sent!");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);

        const displayName = user.displayName || "";
        const photoURL =
          user.photoURL || "https://i.postimg.cc/QM6LPFwV/icons8-avatar.gif";

        setName(displayName);
        setPhoto(photoURL);

        localStorage.setItem("userName", displayName);
        localStorage.setItem("userPhoto", photoURL);

        navigate("/home");
      })
      .catch((err) => {
      
        setError(err.message);
      });
  };

  return (
    <div className="w-11/12 min-h-screen mx-auto py-8 flex flex-col justify-center items-center">
      <Helmet><title>Bill's Buddy | Sign in</title></Helmet>
      <h3 className="text-center text-[3rem] font-bold text-[#ff5c15] my-10">
        Bill Buddy
      </h3>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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
                Welcome Back Buddy!
              </h2>
              <p className="text-xl font-semibold text-gray-900">
                Log-in to Your Account
              </p>
            </div>

            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5] w-full"
              >
                <svg
                  aria-label="Google logo"
                  width="18"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
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
                Sign In with Google
              </button>
            </div>

            <div className="relative flex items-center justify-center mb-6 text-2xl">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSignInUser} className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  ref={emailRef}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <p className="mt-2">
                Forgot password?{" "}
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="underline text-[#ff5c15] ml-1 cursor-pointer"
                >
                  click here
                </button>
              </p>

              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Sign In Your Account
                </button>
              </div>
            </form>

            <Link to="/signup" className="mb-10 block text-center mt-4">
              Don't have an account?{" "}
              <span className="text-[#ff5c15] underline">Sign Up</span>
            </Link>

            {error && (
              <p className="text-red-600 font-medium text-center mt-2">
                {error}
              </p> )
            }
        
          </div>
        </div>

        <div className="right-0 bottom-0 hidden lg:block fixed">
          <img src={mascot2} alt="Bill Buddy Mascot" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
