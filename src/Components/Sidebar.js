import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { toggleMenu } from "../utils/appSlice";
import menu from "../Assests/MenuIcon.svg";
import youtubeLogo from "../Assests/YoutubeLogo.png";

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  if (!isMenuOpen) return null;

  return (
    <>
      {isMenuOpen && path === "/watch" && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
      <div
        className={`${isMenuOpen && path === "/watch" ? 'translate-x-0 fixed top-0 left-0 h-full shadow-lg bg-white z-50 w-52' : 'shadow-lg w-52 top-20 h-[89vmin] shadow-lg bg-white w-52 overflow-y-scroll'}`}
        onBlur={() => { dispatch(closeMenu) }}
      >
        {path === "/watch" && <div className="flex items-center p-5">
          <img
            className="h-10 w-10 cursor-pointer"
            src={menu}
            alt="menu Icon"
            onClick={() => toggleMenuHandler()}
          />
          <img
            className="h-[4vmin] w-[10vmin] mx-2"
            src={youtubeLogo}
            alt="Youtube Logo"
          />
        </div>}
        <ul>
          <li className="text-xl hover:shadow-md px-3 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="text-xl hover:shadow-md px-3 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Shorts</li>
          <li className="text-xl hover:shadow-md px-3 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Video</li>
          <li className="text-xl hover:shadow-md px-3 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Live</li>
        </ul>
        <p className="font-semibold px-3 py-2 text-xl pt-5">Subscriptions</p>
        <ul className="">
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Music</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Sports</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Gaming</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Movies</li>
        </ul>
        <p className="font-semibold px-3 py-2 text-xl pt-5">Watch Later</p>
        <ul>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Music</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Sports</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Gaming</li>
          <li className="text-xl hover:shadow-md px-7 py-2 w-full hover:font-medium hover:bg-slate-100 cursor-pointer">Movies</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;