import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import SelectNumber from "./SelectNumber";

const _worker = { name: "", workedHours: "" };

function Main() {
  const [howManyWorkers, setHowManyWorkers] = useState(3);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const _workers = [];
    for (let i = 0; i <= howManyWorkers; i++) {
      _workers.push(_worker);
    }
    setWorkers([..._workers]);
  }, [howManyWorkers]);
  return (
    <div className="Main">
      <SelectNumber
        howManyWorkers={parseInt(howManyWorkers)}
        setHowManyWorkers={setHowManyWorkers}
      />
      <InputText label="GESAMT TRINKGELD:" />
      <div>
        {workers.map((worker,index) => (
          <div key={index}>
            <InputText label="name:" /> <InputText label="stunden:" />
          </div>
        ))}
        <button>RECHEN</button>
      </div>
    </div>
  );
}

export default Main;
