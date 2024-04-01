import React, { useEffect, useState } from "react";
import "./index.css";
import { mapper } from "../../helpers/mapper";
import { getElement } from "../../helpers/getElement";

const Home = () => {
  const [currentScrollValue, setCurrentScrollValue] = useState(false);
  useEffect(() => {
    const cleanup1 = mapper(
      "font-1",
      "left",
      "",
      (object_position, rotation_degrees) => {
        console.log("object_position : ", object_position);
        setCurrentScrollValue(Boolean(object_position));
        if (object_position < 235) {
          getElement("font-1").style.left = object_position + "px";
          getElement("font-1").style.opacity = object_position / 100;
          getElement("font-2").style.right = object_position - 20 + "px";
          getElement("font-2").style.opacity = object_position / 100;
          getElement("font-3").style.left = object_position + "px";
          getElement("font-3").style.opacity = object_position / 100;
          getElement("font-4").style.right = object_position - 20 + "px";
          getElement("font-4").style.opacity = object_position / 100;
        }
      }
    );
    return () => cleanup1();
  }, []);
  return (
    <>
      <div>
        <div className="flex w-100 justify-center home-container">
          {/* <div className="heading-lg-top"></div> */}
          <div id="heading-lg" className="flex justify-center items-center">
            <div id="font-1" className="wrapper">
              <h1 className="glitch">{currentScrollValue && "JOHN DEO"}</h1>
            </div>
            <div id="font-2" className="mt-8">
              {currentScrollValue && "SOFTWARE DEVELOPER"}
            </div>
            <div id="font-gretting" className="mt-36">
              {!currentScrollValue && "Hello World"}
            </div>
            <div id="font-3" className="mt-8">
              {currentScrollValue && "EXPERIENCED 7+ YEARS"}
            </div>
            <div id="font-4" className="mt-8">
              {currentScrollValue && "MERN PRIMARY"}
            </div>
          </div>
          <div className="heading-lg-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
