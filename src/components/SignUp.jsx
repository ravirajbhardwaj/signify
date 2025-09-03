import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // eye icons

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Account Created Successfully!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/front.jpg')" }} // use your background path
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden gap-2">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex items-center justify-center">
          <img
            src="signup.jpg"
            alt="Sign Up Illustration"
            className="max-h-[440px] object-contain"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="p-8 ">
          <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full border rounded-lg p-2"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email / Phone */}
            <div>
              <input
                type="text"
                placeholder="Email / Phone no"
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                className="w-full border rounded-lg p-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password with Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full border rounded-lg p-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg  cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0)] hover:bg-blue-600  hover:shadow-[0_0_25px_rgba(0,0,255,0.5)]"
            >
              Create Account
            </button>

            <p className="text-center text-gray-500">OR</p>

            <button
              type="button"
              className="w-full bg-white text-black py-2 rounded-lg hover:bg-white-300 cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
