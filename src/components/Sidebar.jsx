import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen h-screen bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(173,216,230,1)_40%,rgba(135,206,250,1)_100%)] border-white border-r-4 p-4">
      <h1 className="text-2xl font-bold text-orange-500 mb-6">Signify</h1>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg ${
              isActive ? "bg-blue-300 font-bold" : "hover:bg-blue-200"
            }`
          }
        >
          <i className="fa-solid fa-house mr-4"></i>Home
        </NavLink>
        <NavLink
          to="/practice"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg ${
              isActive ? "bg-blue-300 font-bold" : "hover:bg-blue-200"
            }`
          }
        >
          <i class="fa-solid fa-chalkboard-user mr-4"></i>Practice
        </NavLink>
        <NavLink
          to="/dictionary"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg ${
              isActive ? "bg-blue-300 font-bold" : "hover:bg-blue-200"
            }`
          }
        >
          <i className="fa-solid fa-book mr-4"></i>Dictionary
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `px-3 py-2 rounded-lg ${
              isActive ? "bg-blue-300 font-bold" : "hover:bg-blue-200"
            }`
          }
        >
          <i class="fa-solid fa-gear mr-4"></i>Setting
        </NavLink>
      </nav>
    </div>
  );
}
