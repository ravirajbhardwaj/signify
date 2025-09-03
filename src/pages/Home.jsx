export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center text-2xl gap-4">
        <img src="/icons/namesta.png" alt="" />
        <h2 className="text-6xl font-bold text-blue-600">
          नमस्ते
          <p className="text-2xl font-bold text-blue-600 mt-1">
            “बातचीत Sabke Liye – <b className="text-red-500">Signify</b>”
          </p>
        </h2>
      </div>

      <div className="bg-[#74c5f6] p-12 rounded-xl shadow border-4 border-white">
        <div className="grid grid-cols-2 gap-6 text-2xl pb-6">
          <div className="border-4 border-white bg-green-200 p-6 rounded-xl shadow hover:scale-105 transition flex flex-col items-center">
            <img
              src="/icons/camera.png"
              alt="Camera"
              className="border-4 border-white bg-green-400 rounded-full p-4"
            />
            Start Recognition
          </div>
          <div className="border-4 border-white bg-yellow-200 p-6 rounded-xl shadow hover:scale-105 transition flex flex-col items-center">
            <img
              src="/icons/text-sign.png"
              alt="Sign"
              className="border-4 border-white bg-yellow-400 rounded-full p-4"
            />{" "}
            Text to Sign
          </div>
        </div>
        <div className="border-4 border-white bg-red-200 p-6 rounded-xl shadow hover:scale-105 transition flex justify-center items-center text-2xl gap-4">
          <img
            src="/icons/volume.png"
            alt="Volume"
            className="border-4 border-white bg-red-400 rounded-full p-4"
          />{" "}
          Sign to Voice
        </div>
      </div>
    </div>
  );
}
