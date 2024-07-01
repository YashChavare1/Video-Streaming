import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex pt-20">
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;