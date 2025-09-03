export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <img
        src="front.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-1 opacity-60"
      />

      <img
        src="home.jpg"
        alt="People"
        className="absolute inset-0 w-full h-full object-cover -z-2"
      />

      <div className="absolute flex flex-col items-center justify-center">
        <img
          src="SIGNIFY-LOGO.png"
          alt="Signify Logo"
          className="w-64 h-auto mb-6 mt-[120px] -z-0"
        />

        <button className="relative px-8 py-3 mt-[45px] bg-white text-black font-bold text-lg border-2 border-black rounded-xl shadow-[0_0_15px_rgba(0,0,0,0)] hover:bg-blue-500 hover:text-black hover:shadow-[0_0_25px_rgba(0,0,0,0.9)] cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}
