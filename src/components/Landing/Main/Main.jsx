import React, { useEffect, useState } from "react";

import SearchResultsTrain from "../../SearchResults/SearchResultstrain";
import { useLazyJsonFetch, useQuery } from "../../../utils";
import Loading from "../../UI/Loading";
import { Outlet, useLocation } from "react-router";
import Filters from "../../SearchResults/Filters";

export default function Main() {
  // const [stepSearch, setStepSearch] = useState(0);

  // const mainClass = classNames({
  //   "h-[993px] flex flex-col justify-between  bg-cover border-b-8 border-orange": true,
  //   "bg-[url('img/search.png')]": stepSearch === 0,
  //   "bg-[url('img/search2.png')]": stepSearch !== 0,
  // });
  //Вынести сюда логику запросов и хранение результатов
  // Компонент фильтра будет дополнять обьект параметров для запроса
  // const [searchParams, setSearchParams] = useState({});

  // const containerClass = classNames({
  //   // flex: true,
  //   " flex justify-center p-l-[50px] gap-[120px]": stepSearch === 0,
  //   "flex flex-col justify-end justifyself-end": stepSearch !== 0,
  // });
  const { pathname } = useLocation();
  console.log("PATH", pathname);

  //TODO перенести полностью логику с запросом и фильтром в компонент Train
  return (
    <div>
      {/* <div className={mainClass}>
        <div className={containerClass} id="container">
          {stepSearch === 0 ? (
            <div className="flex flex-col ">
              <h1 className=" mt-[162px] text-white text-72 font-thin">Вся жизнь -</h1>
              <h1 className="text-white text-72 font-bold">путешествие!</h1>
            </div>
          ) : (
            <></>
          )}
          <SearchMain
            step={stepSearch}
            setStep={setStepSearch}
            setSearchParams={setSearchParams}
            paramSearch={searchParams}
          />
        </div>
      </div> */}
      <Outlet />
      {/* {stepSearch !== 0 ? <SearchProgressBar searchStep={stepSearch} /> : <></>} */}
      {/* <div className="flex justify-center gap-[86px] px-[259px] mt-9">
        <Filters setParams={setSearchParams} params={searchParams} />
        {data ? <SearchResultsTrain data={searchResults.items} /> : <></>}
      </div> */}
      {/* ) : (
        <></>
      )} */}
      {/* {loading ? <Loading /> : <></>} */}
    </div>
  );
}
