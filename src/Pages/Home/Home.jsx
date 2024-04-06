import Header from "../Shared/Header/Header";
import Leftsidenav from "../Shared/LeftSidenav/Leftsidenav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import Breakingnews from "./Breakingnews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>

      <Breakingnews></Breakingnews>
      <Navbar></Navbar>

      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <Leftsidenav></Leftsidenav>
        </div>
        <div className=" col-span-2">
          <h2 className="text-3xl">news comming</h2>
          {news.map((anews) => (
            <NewsCard key={anews._id} news={anews}></NewsCard>
          ))}
        </div>
        <div>
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
