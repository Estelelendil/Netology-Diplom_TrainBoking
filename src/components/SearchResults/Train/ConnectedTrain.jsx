import React, { useEffect, useState } from "react";
import { useLazyJsonFetch, useQuery } from "../../../utils";
import Loading from "../../UI/Loading";
import Filters from "../Filters";
import TrainCard from "./TrainCard";

export default function ConnectedTrain() {
  const [searchParams, setSearchParams] = useState({});
  // const [searchResults, setSearchResults] = useState({});
  let query = useQuery();
  const from_city_id = query.get("from_city_id");
  const to_city_id = query.get("to_city_id");
  const date_start = query.get("date_start");
  const date_end = query.get("date_end");
  useEffect(() => {
    setSearchParams({
      from_city_id,
      to_city_id,
      date_start,
      date_end,
    });
  }, [from_city_id, to_city_id, date_start, date_end]);

  console.log("Connected Trains");
  const [data, loading, error, callback] = useLazyJsonFetch();
  console.log("DATA DATA", data);
  //первый запрос на получение списков направлений
  useEffect(() => {
    callback(
      "https://students.netoservices.ru/fe-diplom/routes",
      new URLSearchParams({
        ...searchParams,
      })
    );
    if (!data) {
      console.log(error);
    }
  }, [callback, data, error, searchParams]);
  return (
    <div className="flex justify-center gap-[86px] px-[259px] mt-9">
      <Filters setParams={setSearchParams} params={searchParams} />
      <div className="w-full flex flex-col items-center justify-start gap-[47px] pt-9">
        {loading ? <Loading /> : <></>}

        {data && data.items ? (
          <div className="flex flex-col gap-[15px]">
            {data.items.map((item) => {
              return <TrainCard item={item} key={item.departure.train._id} />;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
