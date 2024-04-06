import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import qzoon1 from "../../../assets/qZone1.png";
import qzoon2 from "../../../assets/qZone2.png";
import qzoon3 from "../../../assets/qZone3.png";
const RightsideNav = () => {
  return (
    <div>
      <div className=" p-4 space-y-3 mb-2">
        <h2 className=" text-2xl font-bold">Login with </h2>
        <button className="btn btn-outline w-full ">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline w-full ">
          <FaGithub></FaGithub> Login with github
        </button>
      </div>

      <div className=" p-4  mb-2">
        <h2 className=" text-2xl font-bold mb-4">Find Us On </h2>
        <a
          className=" flex p-4 items-center gap-3 text-xl border rounded-t-lg"
          href=""
        >
          <FaFacebookF></FaFacebookF> Facbook
        </a>
        <a className=" flex p-4 items-center gap-3 text-xl border-x" href="">
          <FaTwitter></FaTwitter> Twiter
        </a>
        <a
          className=" flex p-4 items-center gap-3 text-xl border rounded-b-lg"
          href=""
        >
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>

      <div className=" p-4 space-y-3 mb-2">
        <h2 className=" text-2xl font-bold">Q zone </h2>
        <img src={qzoon1} alt="" />
        <img src={qzoon2} alt="" />
        <img src={qzoon3} alt="" />
      </div>
    </div>
  );
};

export default RightsideNav;
