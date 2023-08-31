import React, { useEffect, useState } from "react";
import { useLazyJsonFetch, useQuery } from "../../../utils";
import TrainHeaderFull from "../Train/Components/TrainHeaderFull";
import Loading from "../../UI/Loading";
import TicketHeader from "../Train/Components/TicketHeader";
import SeatFilter from "../Train/Components/Ticket/SeatFilter";
import classNames from "classnames";
import CoachCard from "./CoachCard";
import CoachMap from "./CoachMap";
import { useNavigate } from "react-router";

export default function ConnectedCoach({ item, setVersion }) {
  const [searchParams, setSearchParams] = useState({});
  const buttonCoach = classNames({
    "text-18 font-bold text-black": true,
  });
  const buttonCoachChoosen = classNames({
    "text-18 font-bold text-white": true,
  });
  const query = useQuery();
  const dateStart = query.get("date_start");
  const dateEnd = query.get("date_end");
  // console.log("ITEM", item);
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
  // console.log("ConnectedCoach", id);
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error, callback] = useLazyJsonFetch();
  const [coach, setCoach] = useState();
  const navigate = useNavigate();
  //информация по id отправления на карту поезда
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
  const calculatePrice = () => {
    const price = [];
    console.log("Coach Item", coach.item);
    coach.chooseSeat &&
      coach.chooseSeat.forEach((item) => {
        switch (coach.item.coach.class_type) {
          case "first":
            price.push(coach.item.coach.price);
            break;
          case "second":
            item % 2 === 0 ? price.push(coach.item.coach.top_price) : price.push(coach.item.coach.bottom_price);
            break;
          case "third":
            if (item > 32) {
              price.push(coach.item.coach.side_price);
            } else {
              item % 2 === 0 ? price.push(coach.item.coach.top_price) : price.push(coach.item.coach.bottom_price);
            }
            break;
          case "fourth":
            price.push(coach.item.coach.price);
            break;
          default:
            console.log("recm");
        }
      });
    return price;
  };
  const seatChoose = (number) => {
    setCoach((prev) => {
      console.log("seatChoose", prev);
      const newObj = { ...prev };
      if (prev.chooseSeat) {
        console.log("chooseSeat");
        if (newObj.chooseSeat.includes(number)) {
          console.log("includes", newObj.chooseSeat.includes(number));
          newObj.chooseSeat = newObj.chooseSeat.filter((item) => item !== number);
          // localStorage.setItem("chooseSeat", JSON.stringify(newObj.chooseSeat));
        } else if (prev.chooseSeat.length < 3) {
          console.log("push");
          newObj.chooseSeat.push(number);
          // localStorage.setItem("chooseSeat", JSON.stringify(newObj.chooseSeat));
        }
      } else {
        newObj.chooseSeat = [];
        newObj.chooseSeat.push(number);
      }
      newObj.price = calculatePrice();
      // if (prev.chooseSeat === number) {
      //   delete newObj.chooseSeat;
      // } else {
      //   newObj.chooseSeat = number;
      // }
      console.log("calculatePrice", newObj);
      return newObj;
    });
  };
  return (
    <div className="flex flex-col border-1 border-gray/30">
      <div className="flex flex-col w-[959px] gap-[20px]">
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

      {data && (
        <div>
          <div className="flex justify-between items-center gap-4 bg-[#FFD98F] h-[37px] w-full mt-5">
            <div className="flex gap-2 items-center">
              <p>Вагоны</p>
              {data.map((item, index) => {
                return (
                  <button
                    className={coach.item && item.coach._id === coach.item.coach._id ? buttonCoach : buttonCoachChoosen}
                    onClick={() => setCoach({ number: `0${index + 1}`, item })} //номер поезда(усл) и вся инфа по поезду
                  >
                    {`0${index + 1}`}
                  </button>
                );
              })}
            </div>
            <p>Нумерация вагонов начинается с головы поезда</p>
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
              <CoachMap
                seats={coach.item.seats}
                number={coach.number}
                type={coach.item.coach.class_type}
                choosen={coach.chooseSeat}
                seatChoose={seatChoose}
              ></CoachMap>
              {coach.chooseSeat && (
                <button
                  disabled={coach.chooseSeat.length < 1}
                  onClick={() => {
                    console.log("redirect");
                    localStorage.setItem(
                      "tripInfo",
                      JSON.stringify({
                        ...item,
                        dateStart,
                        dateEnd,
                        price: coach.price,
                        chosenSeats: coach.chooseSeat,
                      })
                    );
                    navigate(
                      `/search/persons?coach=${coach.item.coach.train}&seat=${coach.chooseSeat[0]}&direction=${coach.item.coach._id}`
                    );
                  }}
                  className="w-[200px] h-[50px] bg-orange rounded text-18 text-white uppercase font-bold self-end"
                >
                  Далее
                </button>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
}
