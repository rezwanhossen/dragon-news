import Marquee from "react-fast-marquee";
const Breakingnews = () => {
  return (
    <div className=" flex">
      <button className="btn btn-secondary">Breaking</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Breakingnews;
