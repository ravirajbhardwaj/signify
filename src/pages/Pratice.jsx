export default function Practice() {
  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <img src="/icons/learning.png" alt="Learning Icon" className="w-20" />
          <h2 className="text-3xl font-bold">
            Where <span className="text-orange-500">Learning</span> Meets Play
          </h2>
        </div>
        <div>
          <img
            src="/icons/student.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full border"
          />
          <p className="text-center font-semibold">Profile</p>
        </div>
      </div>

      {/* Game & Quiz */}
      <div className="grid grid-cols-2 mb-10">
        <div className="flex flex-col items-center">
          <div className="border-4 border-black rounded-full p-1  bg-white">
            <img src="/icons/game.png" alt="Game" className="w-20 h-20" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-4 border-black rounded-full p-1 bg-white">
            <img src="/icons/quiz.jpeg" alt="Quiz" className="w-20 h-20" />
          </div>
        </div>
      </div>

      {/* Practice Options */}
      <div className="grid grid-cols-2 gap-6">
        <button className="border-4 border-white bg-yellow-200 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Color Sign</span>
          <img src="/icons/colors.png" alt="Color" className="w-10 h-10" />
        </button>

        <button className="border-4 border-white bg-green-300 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Alphabets</span>
          <img src="/icons/abc.png" alt="Alphabets" className="w-10 h-10" />
        </button>

        <button className="border-4 border-white bg-blue-300 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Flashcard</span>
          <img
            src="/icons/flashcard.png"
            alt="Flashcard"
            className="w-10 h-10"
          />
        </button>

        <button className="border-4 border-white bg-yellow-200 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Words</span>
          <img src="/icons/word.png" alt="Words" className="w-10 h-10" />
        </button>

        <button className="border-4 border-white bg-green-300 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Sign Race</span>
          <img src="/icons/race.jpeg" alt="Sign Race" className="w-10 h-10" />
        </button>

        <button className="border-4 border-white bg-blue-300 p-6 rounded-xl shadow hover:scale-105 transition flex justify-between items-center">
          <span className="font-bold text-lg">Sentences</span>
          <img
            src="/icons/sentence.png"
            alt="Sentences"
            className="w-10 h-10"
          />
        </button>
      </div>
    </div>
  );
}
