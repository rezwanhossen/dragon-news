import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, image_url, details, _id } = news;
  return (
    <div className=" border rounded p-5 mb-3">
      <h4 className="text-2xl">{title} </h4>
      <img className="w-full" src={image_url} alt="" />
      {details.length > 150 ? (
        <p>
          {details.slice(0, 150)}
          <Link to={`/news/${_id}`} className=" text-indigo-700">
            Read more...
          </Link>{" "}
        </p>
      ) : (
        <p>{details} </p>
      )}
    </div>
  );
};

export default NewsCard;
