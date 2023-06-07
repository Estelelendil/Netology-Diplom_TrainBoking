import classNames from "classnames";
import React from "react";

export default function ReviewItem({ name, review, photo }) {
  const photoClass = classNames({
    "bg-[url('img/photo1.png')]": photo === "photo1",
    "bg-[url('img/photo2.png')]": photo === "photo2",
    "bg-cover w-[320px] h-[320px] rounded-full": true,
  });
  return (
    <div className="flex gap-10 items-center w-[800px]">
      <div className={photoClass}></div>
      <div className="flex flex-col justify-start gap-2 ">
        <h3 className="text-24 font-semibold">{name}</h3>
        <p className=" text-gray/50 italic text-24 w-[400px]">{`"${review}"`}</p>
      </div>
    </div>
  );
}
