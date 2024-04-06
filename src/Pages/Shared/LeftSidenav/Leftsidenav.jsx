import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [catagoer, setCatagoer] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagoer(data));
  }, []);
  return (
    <div className=" space-y-3">
      <h2 className="text-2xl font-bold">All categories</h2>
      {catagoer.map((cata) => (
        <Link
          className=" block ml-4 text-xl font-bold "
          to={`/category/${cata.id}`}
          key={cata.id}
        >
          {cata.name}
        </Link>
      ))}
    </div>
  );
};

export default Leftsidenav;
