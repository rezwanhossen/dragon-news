import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContexts } from "../../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContexts);
  const location = useLocation();
  console.log(location);
  const neviget = useNavigate();
  const handellogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const Password = form.get("password");
    console.log(email, Password);
    login(email, Password)
      .then((resulr) => {
        console.log(resulr.user);
        neviget(location?.state ? location.state : "/");
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
          <form onSubmit={handellogin} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" text-center">
            Do not have an account?{" "}
            <Link className=" font-bold text-indigo-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
