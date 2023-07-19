import React from "react";
import TrainCard from "./TrainCard";

export default function SearchResultsTrain({ data }) {
  console.log("SearchResultsTrain", data);
  // const [items, setItems] = useState(data ? data : []);
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-start gap-[47px] pt-9">
        {data &&
          data.map((item) => {
            return (
              <TrainCard item={item} key={item.departure.train._id} />
              // <div className="text-white" key={item.departure.train._id}>
              //   {item.departure.train._id}
              // </div>
            );
          })}
      </div>
    </div>
  );
}
