import React, { useEffect, useState } from "react";
import { useLazyJsonFetch, useQuery } from "../../../utils";
import Loading from "../../UI/Loading";
import Filters from "../Filters";
import TrainCard from "./TrainCard";
import { isEmpty } from "lodash";

export default function ConnectedTrain() {
  const [searchParams, setSearchParams] = useState({});
  const [searchResults, setSearchResults] = useState({});
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
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error, callback] = useLazyJsonFetch();
  console.log("DATA DATA", data, searchResults);

  useEffect(() => {
    callback(
      "https://students.netoservices.ru/fe-diplom/routes",
      new URLSearchParams({
        ...searchParams,
      })
    );
    if (data && isEmpty(searchResults)) {
      setSearchResults(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  return (
    <div className="flex justify-center gap-[86px] px-[259px] mt-9">
      <Filters setParams={setSearchParams} params={searchParams} />
      {/* {data ? <SearchResultsTrain data={searchResults.items} /> : <></>} */}
      <div className="w-full flex flex-col items-center justify-start gap-[47px] pt-9">
        {loading ? <Loading /> : <></>}

        {data && data.items ? (
          <div className="flex flex-col gap-[15px]">
            {data.items.map((item) => {
              return (
                <TrainCard item={item} key={item.departure.train._id} />
                // <div className="text-white" key={item.departure.train._id}>
                //   {item.departure.train._id}
                // </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
