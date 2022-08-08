import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Person from "../assets/person-icon.png";
import Image from "next/image";

export default function () {
  const content = [
    {
      title: "Lorem Ipsum",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repre henderit in voluptate velit esse.`,
      image: Person,
    },
    {
      title: "Lorem Ipsum",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repre henderit in voluptate velit esse.`,
      image: Person,
    },
    {
      title: "Lorem Ipsum",
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repre henderit in voluptate velit esse.`,
      image: Person,
    },
  ];

  return (
    <Slider>
      {content.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col justify-center items-center h-full text-center box-border">
            <div>
              <Image src={Person} alt="" />
            </div>
            <div className="w-[50%] text-center mx-auto">
              <h1 className="font-bold text-5xl m-0 py-6">{item.title}</h1>
              <p className="py-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
