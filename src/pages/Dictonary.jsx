export default function Dictionary() {
  const items = [
    {
      title: "A to Z",
      icon: "/icons/alphabet.png", // replace with your own
      bg: "bg-blue-200",
    },
    {
      title: "1 to 20",
      icon: "/icons/numbers.png",
      bg: "bg-green-200",
    },
    {
      title: "Introduction",
      icon: "/icons/intro.png",
      bg: "bg-yellow-200",
    },
    {
      title: "Talks",
      icon: "/icons/talk.png",
      bg: "bg-pink-200",
    },
  ];

  return (
    <div className="p-6 w-full">
      {/* Title */}
      <div className="flex justify-center items-center text-2xl gap-4 pb-20">
        <img src="/icons/learning.png" alt="" className="w-20" />
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Your Sign Language <span className="text-orange-500">Library</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} border-4 border-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition cursor-pointer p-8 flex flex-col items-center`}
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
            <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
