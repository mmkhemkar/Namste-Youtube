import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "News",
    "Valentines",
    "Romantic",
    "Songs",
    "Doremons",
    "Rajesh",
    "Kapil",
    "ABP",
    "Aaj Tak",
    "shreya "
  ];

  return (
    <div className="flex">
      {list.map((item,index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
