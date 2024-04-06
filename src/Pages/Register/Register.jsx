import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContexts } from "../../Provider/AuthProvider";

const Register = () => {
  const { creatuser } = useContext(AuthContexts);
  const handelRegs = (e) => {
    e.preventDefault();

    const from = new FormData(e.currentTarget);
    const name = from.get("name");
    const photo = from.get("photourl");
    const email = from.get("email");
    const password = from.get("password");
    // console.log(name, photo, email, password);
    creatuser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div className="card pb-6 w-full lg:w-1/2 mx-auto shadow-xl bg-base-300">
          <form onSubmit={handelRegs} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name.."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo url</span>
              </label>
              <input
                type="text"
                name="photourl"
                placeholder="photo url.."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className=" text-center">
            alredy have an account?{" "}
            <Link className=" font-bold text-indigo-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
