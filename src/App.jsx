import { Outlet } from "react-router";
import Header from "./component/Header"
import Sidebar from "./component/Sidebar";
import './index.css'

const App = () => {
  return <div>
    <Header />
   <div className="flex fixed top-16 w-full">
     <Sidebar />
    <Outlet />
   </div>
  </div>;
};
export default App;
