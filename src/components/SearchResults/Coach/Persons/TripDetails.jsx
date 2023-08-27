import classNames from "classnames";
import React from "react";

export default function TripDetails({ id }) {
  const mainClass = classNames({
    "w-[360px] h-[890px] bg-[#3E3C41] mt-9 px-[20px] pt-[10px]": true,
  });
  return <div className={mainClass}> детали поездки</div>;
}
