export default function Settings() {
  const settings = [
    { title: "Notification", icon: "/icons/notification.jpg" },
    { title: "Privacy & Security", icon: "/icons/security.jpg" },
    { title: "Help & Support", icon: "/icons/support.jpg" },
    { title: "About", icon: "/icons/about.jpg" },
  ];

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(173,216,230,1)_40%,rgba(135,206,250,1)_100%)] border-white border-4 rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Profile */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/icons/student.jpg" // replace with your profile image
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-black mb-4"
          />
          <h2 className="text-xl font-bold">Profile</h2>
        </div>

        {/* Settings List */}
        <div className="space-y-6">
          {settings.map((item, idx) => (
            <div
              key={idx}
              className="border-3 border-black flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              <img src={item.icon} className="w-[40px]" />
              <p className="font-semibold text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
