import hill1 from "../assets/imgs/hill1.png";
import hill2 from "../assets/imgs/hill2.png";
import hill3 from "../assets/imgs/hill3.png";
import hill4 from "../assets/imgs/hill4.png";
import hill5 from "../assets/imgs/hill5.png";
import tree from "../assets/imgs/tree.png";
import leaf from "../assets/imgs/leaf.png";
import plant from "../assets/imgs/plant.png";

import '../functions/script.js'

export default function Parallax() {
   
  return (
    <div className="relative flex justify-center items-center h-screen">
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={hill1}
        id="hill1"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={hill2}
        id="hill2"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={hill3}
        id="hill3"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={hill4}
        id="hill4"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={hill5}
        id="hill5"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={tree}
        id="tree"
      />
      <h2
        className="absolute text-8xl font-bold text-white"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}
        id="text"
      >
        {" "}
        Parallax Website
      </h2>
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={leaf}
        id="leaf"
      />
      <img
        className="absolute top-0 left-0 w-full pointer-events-none"
        src={plant}
      />
    </div>
  );
}
