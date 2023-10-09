import { useState } from "react";
import { useMouse } from "@mantine/hooks";

import "./App.css";
import useReactImageSlider from "./hooks/useCardImageAnimation";

function App() {
  const images = [
    {
      url: "/images/watches/1.webp",
    },
    {
      url: "/images/watches/3.jpg",
    },
    {
      url: "/images/watches/2.jpg",
    },
    {
      url: "/images/watches/1.webp",
    },
    {
      url: "/images/watches/2.jpg",
    },
    {
      url: "/images/watches/1.webp",
    },
    {
      url: "/images/watches/2.jpg",
    },
    {
      url: "/images/watches/1.webp",
    },
  ];

  const { ref, x } = useMouse();

  const { active, currentActiveImage } = useReactImageSlider({
    images,
    x,
    cardWidth: 220,
  });

  return (
    <div>
      <div className="w-[220px]">
        <div
          ref={ref}
          className="cursor-pointer overflow:hidden my-3 p-5 group"
        >
          <div className="">
            <img
              className=""
              src={currentActiveImage}
              alt={"watches"}
              width={200}
              height={200}
            />
            <div className="flex gap-1">
              {images?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`transition-all duration-700 hidden group-hover:block border-b-2 w-[100%] ${
                      active >= index ? "border-black" : "text-gray-500"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
