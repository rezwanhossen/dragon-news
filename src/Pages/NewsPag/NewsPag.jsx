import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import { useParams } from "react-router-dom";

const NewsPag = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className=" grid md:grid-cols-4 ">
        <div className=" col-span-3">
          <h2 className="text-xl font-bold">News Detail</h2>
        </div>
        <div>
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsPag;
