import React, { useEffect, useState } from "react";
import "./index.css";
import { mapper } from "../../helpers/mapper";
import { getElement } from "../../helpers/getElement";

const Home = () => {
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  useEffect(() => {
    const cleanup = mapper(
      "font-1",
      "left",
      "",
      (object_position, rotation_degrees) => {
        console.log("object_position : ", object_position);
        getElement("font-1").style.left = object_position + "px";
        getElement("font-1").style.opacity = object_position / 100;
        getElement("font-2").style.right = object_position + "px";
        getElement("font-2").style.opacity = object_position / 100;
        getElement("font-3").style.left = object_position + "px";
        getElement("font-3").style.opacity = object_position / 100;
        getElement("font-4").style.right = object_position + "px";
        getElement("font-4").style.opacity = object_position / 100;
      }
    );
    return () => cleanup();
  }, []);
  return (
    <>
      <div className="flex w-100 justify-center home-container">
        {/* <div className="heading-lg-top"></div> */}
        <div id="heading-lg" className="flex justify-center">
          <div id="font-1" className="mt-8">
            SHUBHAM HIWALE
          </div>
          <div id="font-2" className="mt-8">
            SOFTWARE DEVELOPER
          </div>
          <div id="font-3" className="mt-8">
            EXPERIENCED 2+ YEAR'S
          </div>
          <div id="font-4" className="mt-8">
            MERN PRIMARY
          </div>
        </div>
        {/* <div className="heading-lg-bottom"></div> */}
      </div>
    </>
  );
};

export default Home;
