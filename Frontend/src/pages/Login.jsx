import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = ({ setLoggedIn }) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 🔥 submit handler
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setServerError("");

      const response = await fetch("http://localhost:5050/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // { email, password }
      });

      const result = await response.json();

      if (!response.ok || !result.token) {
        throw new Error(result.message || "Login failed");
      }

      // ✅ store token
      if (!result.token) {
        throw new Error(result.message || "Login failed");
      }

      const token = result.token;
      localStorage.setItem("token", token);

      // ✅ redirect
      localStorage.setItem("token", token);
      setLoggedIn(true); // 🔥 THIS is required
      navigate("/");

    } catch (error) {
      setServerError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 hover:shadow-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">WOS</h1>
          <p className="text-gray-500 text-sm mt-2">login to your account</p>
        </div>

        {/* 🔥 added handleSubmit */}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required"
              })}

              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 placeholder-gray-400"
            />

            {/* 🔥 validation error */}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"

              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}

              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 placeholder-gray-400"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* 🔥 server error (you already had it commented) */}
          {serverError && (
            <div className="animate-pulse bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
              <p className="font-semibold text-sm">{serverError}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 cursor-pointer rounded-lg font-semibold text-white transition-all duration-300 transform ${'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 active:scale-95 shadow-lg hover:shadow-xl'
              }`}
          >
            {isLoading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;