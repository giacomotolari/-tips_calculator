import React, { useState } from "react";
import DatePicker from "react-datepicker";
import InputSelect from "./InputSelect";
import "react-datepicker/dist/react-datepicker.css";
import InputRadio from "./InputRadio";
// import moment from "moment";

function roundToHour(date) {
  let p = 60 * 60 * 1000; // milliseconds in an hour
  return new Date(Math.round(date.getTime() / p) * p);
}

function Worker({ inputName }) {
  const [workedHours, setWorkedHours] = useState(roundToHour(new Date()));
  const [workerName, setWorkerName] = useState("");

  const listOfWorker = [
    "Giacomo",
    "Gabbrio",
    "Daniela",
    "Pipi",
    "Julio",
    "Jose",
    "Stefano",
    "Pedro",
    "Barney",
    "Luna",
    "Meye",
    "Lisa",
    "Lotte",
    "Boris",
    "Justin",
  ].sort((a, b) => a.localeCompare(b));
  
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div>
      <InputSelect
        value={workerName}
        setValue={setWorkerName}
        list={listOfWorker}
      />
      <DatePicker
        showTimeSelect
        showTimeSelectOnly
        dateFormat="HH:mm"
        timeIntervals={30}
        selected={workedHours}
        onChange={(e) => setWorkedHours(e)}
        minDate={new Date()}
        filterTime={filterPassedTime}
      />
      <InputRadio inputName={inputName} />
    </div>
  );
}

export default Worker;
