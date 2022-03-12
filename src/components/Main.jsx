import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import Worker from "./Worker";
import InputSelect from "./InputSelect";

const _worker = { name: "", workedHours: "" };

function Main() {
  const [howManyWorkers, setHowManyWorkers] = useState(3);
  const [workers, setWorkers] = useState([]);

  const numberOfWorker = [3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const _workers = [];
    for (let i = 1; i <= howManyWorkers; i++) {
      _workers.push(_worker);
    }
    setWorkers([..._workers]);
  }, [howManyWorkers]);
  return (
    <div className="Main">
      <InputSelect
        value={howManyWorkers}
        setValue={setHowManyWorkers}
        list={numberOfWorker}
        label="WIE VIELE MITARBEITER"
      />
      <InputText label="GESAMT TRINKGELD:" />
      <div>
        {workers.map((worker, index) => (
          <Worker key={index} inputName={index} />
        ))}
        <button>RECHEN</button>
      </div>
    </div>
  );
}

export default Main;
