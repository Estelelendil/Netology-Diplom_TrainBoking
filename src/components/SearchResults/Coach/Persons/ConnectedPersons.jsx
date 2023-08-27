import React, { useState } from "react";
import { useQuery } from "../../../../utils";
import TripDetails from "./TripDetails";
import PassengersCard from "./PassengersCard";
import MyButton from "../../../UI/MyButton";

export default function ConnectedPersons() {
  let query = useQuery();
  const coach = query.get("coach");
  const [persons, setPersons] = useState([{ id: 1 }]);
  const addPerson = (obj) => {
    console.log("OBJECT FORM PERSONS", obj);
    // console.log("OBJECT FORM PERSONS", obj);
    setPersons((prev) => {
      const index = prev.findIndex((item) => item.id === obj.id);
      if (index === -1) {
        return [...prev, obj];
      } else {
        return prev.splice(index, 1, obj);
      }
    });
  };

  const addPassenger = () => {
    addPerson({ id: persons.length + 1 });
    // return <PassengersCard index={persons.length + 1} setPerson={setPerson} persons={persons} />;
  };
  return (
    <div className="flex">
      PERSONS
      <TripDetails id={coach} />
      {/* <div> */}
      {/* прокидывать номер как id */}
      <div className="flex flex-col gap-[30px] mt-[36px] pl-[75px]">
        {persons.map((item) => {
          return <PassengersCard key={item.id} index={item.id} setPerson={addPerson} person={persons[item.id - 1]} />;
        })}

        {/* </div> */}
        <div className="w-full">
          <MyButton
            className={" w-full"}
            label="Добавить пассажира"
            color="transparent"
            onClick={() => addPassenger()}
          ></MyButton>
        </div>
      </div>
    </div>
  );
}
