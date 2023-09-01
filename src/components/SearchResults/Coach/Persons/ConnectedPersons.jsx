import React, { useEffect, useState } from "react";
import { useQuery } from "../../../../utils";
import TripDetails from "./TripDetails";
import PassengersCard from "./PassengersCard";
import MyButton from "../../../UI/MyButton";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router";
import UserCard from "./UserCard";
import classNames from "classnames";

export default function ConnectedPersons() {
  let query = useQuery();
  const coach = query.get("coach");
  const direction = query.get("direction");
  const [info, setInfo] = useState({});
  const [nextPayment, setNextPayment] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    let rawValue = localStorage.getItem("tripInfo");
    while (rawValue === null) {
      console.log("tripInfo is null");
      rawValue = localStorage.getItem("tripInfo");
    }
    const newTripInfo = rawValue !== null ? rawValue : "{}";
    setInfo(JSON.parse(newTripInfo));
  }, []);

  const [persons, setPersons] = useState([{ id: 1 }]);
  const afterClass = classNames({
    "text-14 text-red mt-[-17px]": true,
    hidden: persons.every((item) => {
      return item.first_name ? true : false;
    }),
  });
  const addPerson = (obj) => {
    console.log("ADD PERSONS", obj);
    setPersons((prev) => {
      const index = prev.findIndex((item) => item.id === obj.id);
      console.log("Индекc", index, prev, obj);
      if (index === -1) {
        return [...prev, obj];
      } else {
        const newPrev = [...prev];
        const deleted = newPrev.splice(index, 1, obj);
        console.log("Добавление данных формы", deleted, newPrev);
        return newPrev;
      }
    });
  };
  const addPassenger = () => {
    console.log("addPassenger");
    if (persons.length < info.price.length) {
      addPerson({ id: persons[persons.length - 1].id + 1 });
    }
  };

  const removePassenger = (id) => {
    if (persons.length === 1) {
      return;
    }
    const index = persons.findIndex((item) => item.id === id);
    if (index === -1) {
      console.log("-1", id);
      return;
    } else {
      setPersons((prev) => {
        const newPersons = [...prev];
        const deleted = newPersons.splice(index, 1);
        console.log("index", index, deleted, newPersons);
        return newPersons;
      });
    }
  };
  useEffect(() => {
    console.log("UE persons", persons);
  }, [persons]);
  return (
    <div className="flex justify-center">
      {!isEmpty(info) && <TripDetails item={info} persons={persons} />}

      <div className="flex flex-col gap-[30px] mt-[36px] pl-[75px]">
        {nextPayment ? (
          <UserCard
            info={info}
            user={user}
            setUser={setUser}
            persons={persons}
            directionId={direction}
            coachId={coach}
            goBack={() => setNextPayment(false)}
          />
        ) : (
          persons.map((item, index) => {
            return (
              <PassengersCard
                key={item.id}
                index={index}
                addPassenger={addPassenger}
                setPerson={addPerson}
                person={item}
                removePers={removePassenger}
              />
            );
          })
        )}
        {/* {persons.length !== 0 &&
            persons.every((item) => {
              if (!item.name) {
                toast.error("Заполните данные пассажиров");
                return false;
              }
            }) && ( */}
        {!nextPayment && (
          <div className="w-full mb-6">
            {info.price && persons.length < info.price.length && (
              <MyButton
                className={" w-full"}
                label="Добавить пассажира"
                color="transparent"
                onClick={() => addPassenger()}
              ></MyButton>
            )}
            <div className="flex justify-between mt-6">
              <MyButton
                className={" w-[250px] p-4 h-[100px]"}
                label="Назад"
                color="transparent"
                onClick={() => navigate(-1)}
              ></MyButton>
              <div className="flex flex-col">
                <span className={afterClass}>Заполните даннние всех пассажиров</span>
                <MyButton
                  label="Далее"
                  className={"w-[250px] self-end "}
                  color="orange"
                  disabled={
                    !persons.every((item) => {
                      return item.first_name ? true : false;
                    })
                  }
                  onClick={() => {
                    console.log("Persons", persons);
                    if (
                      persons.every((item) => {
                        return item.first_name ? true : false;
                      })
                    ) {
                      setNextPayment(true);
                    } else {
                      console.log("Заполните даннние пассажиров");
                    }
                    // }
                  }}
                ></MyButton>
              </div>
            </div>
          </div>
        )}
        {/* )} */}
      </div>
    </div>
  );
}
