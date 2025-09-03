import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login Successful!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/front.jpg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden gap-2">
        {/* Left side - Login Form */}
        <div className="flex flex-col justify-center p-10">
          <h2 className="text-3xl font-bold mb-8">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email / Phone */}
            <div>
              <label className="block font-medium mb-1">Email / Phone no</label>
              <input
                type="text"
                placeholder="1234567890"
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                className="w-full border rounded-lg p-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full border rounded-lg p-3 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600  hover:shadow-[0_0_25px_rgba(0,0,255,0.5)] "
            >
              Login
            </button>
          </form>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:block">
          <img
            src="login.png"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
