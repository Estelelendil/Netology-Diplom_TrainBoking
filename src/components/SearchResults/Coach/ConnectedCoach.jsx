import React, { useEffect, useState } from "react";
import { useLazyJsonFetch } from "../../../utils";
import TrainHeaderFull from "../Train/Components/TrainHeaderFull";
import Loading from "../../UI/Loading";
import TicketHeader from "../Train/Components/TicketHeader";
import SeatFilter from "../Train/Components/Ticket/SeatFilter";
import classNames from "classnames";
import CoachCard from "./CoachCard";
import CoachMap from "./CoachMap";
// import Button from "../UI/Button";

export default function ConnectedCoach({ item, setVersion }) {
  const [searchParams, setSearchParams] = useState({});
  const buttonCoach = classNames({
    "text-18 font-bold text-black": true,
  });
  const buttonCoachChoosen = classNames({
    "text-18 font-bold text-white": true,
  });
  // const query = useQuery();
  console.log("ITEM", item);
  // const timeArrivalFrom = moment(item.arrival.from.datetime);
  // const timeArrivalTo = moment(item.arrival.to.datetime);
  // const timeDiffArrival = timeArrivalTo.diff(timeArrivalFrom);
  // const dataDiffArrival = moment(timeDiffArrival);
  const id = item.arrival._id;
  // const timedepartureFrom = moment(item.departure.from.datetime);
  // const timedepartureTo = moment(item.departure.to.datetime);
  // const timeDiffdeparture = timedepartureTo.diff(timedepartureFrom);
  // const dataDiffdeparture = moment(timeDiffdeparture);
  // const id = query.get("id");
  console.log("ConnectedCoach", id);
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error, callback] = useLazyJsonFetch();
  const [coach, setCoach] = useState();
  useEffect(() => {
    setCoach({});
    callback(
      "https://students.netoservices.ru/fe-diplom/routes",
      new URLSearchParams({
        ...searchParams,
      }),
      id
    );
    if (data) {
      console.log("DATA ChooseSeats", data);
      //   setSearchResults(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, searchParams]);
  const seatFilter = [
    { key: "have_fourth_class", name: "Сидячий" },
    { key: "have_third_class", name: "Плацкарт" },
    { key: "have_second_class", name: "Купе" },
    { key: "have_first_class", name: "Люкс" },
  ];
  return (
    <div className="border-1 border-gray/30">
      <div className="flex flex-col w-[959px] gap-[20px]">
        {/* {item.coach._id} */}
        <div className="flex w-full gap-[10px] h-[60px] py-2 p-3 my-4" onClick={() => setVersion(false)}>
          <div className="bg-[url('img/Subtract.png')] bg-no-repeat bg-contain w-[76px] h-[60px]"></div>
          <h3 className="border-1 border-gray h-[60px] rounded text-24 font-semibold py-2 px-4">
            Выбрать другой поезд
          </h3>
        </div>
        <TrainHeaderFull item={item} />

        <TicketHeader />
        <h3 className=" h-[60px] rounded text-24 font-semibold py-2 px-4">Тип вагона</h3>
        <div className="flex justify-between items-center px-10">
          {seatFilter.map((item) => {
            return <SeatFilter name={item} key={item} setSearchParams={setSearchParams} searchParams={searchParams} />;
          })}
        </div>
      </div>
      {/* <Filters setParams={setSearchParams} params={searchParams} /> */}
      {/* <div className="flex w-full gap-[10px] h-[60px] p-3" onClick={setVersion(false)}>
          <div className="bg-[url('img/Subtract.png')] bg-no-repeat bg-contain w-[76px] h-[60px]"></div>
          <h3 className="border-1 border-gray h-[60px] rounded text-24 font-semibold py-2 px-4">КУСЬ</h3>
        </div> */}
      {data && (
        <div>
          <div className="flex justify-between items-center gap-4 bg-[#FFD98F] h-[37px] w-full mt-5">
            <div className="flex gap-2 items-center">
              <p>Вагоны</p>
              {data.map((item, index) => {
                console.log("coach data map", item);
                // if (index === 0) {
                //   setCoach({ number: `0${index + 1}`, item });
                // }
                return (
                  <button
                    className={coach.item && item.coach._id === coach.item.coach._id ? buttonCoach : buttonCoachChoosen}
                    onClick={() => setCoach({ number: `0${index + 1}`, item })}
                  >
                    {`0${index + 1}`}
                  </button>
                );
              })}
            </div>
            <p>Нумерация вагонов начинается с головы поезда</p>
            {/* {data.map((item) => {
              return <CoachCard key={item.id} item={item}></CoachCard>;
            })} */}
          </div>
          {coach.item ? (
            <div className="flex flex-col">
              <div className="flex">
                <div className="flex flex-col items-center justify-center bg-[#FFD98F] h-[161px] w-[190px]">
                  <h3 className="text-72 font-bold">{coach.number}</h3>
                  <p>вагон</p>
                </div>
                <CoachCard item={coach.item}></CoachCard>
              </div>
              <CoachMap seats={coach.item.seats} number={coach.number} type={coach.item.coach.class_type}></CoachMap>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      {loading && <Loading />}
      {/* <div>RECM</div>
      <Button label="Далее" color="orange"></Button> */}
    </div>
  );
}
