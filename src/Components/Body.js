import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex pt-20">
        <Header />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Body;