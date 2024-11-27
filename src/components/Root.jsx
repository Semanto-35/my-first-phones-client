import { Outlet } from "react-router-dom";
import Header from "./Header";
import '../App.css'


const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;