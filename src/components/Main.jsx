import React, { useState } from "react";
import SelectNumber from "./SelectNumber";

function Main() {
  const [howManyWorkers, setHowManyWorkers] = useState(3);
  return (
    <div>
      <SelectNumber
        howManyWorkers={howManyWorkers}
        setHowManyWorkers={setHowManyWorkers}
      />
      {/* <form>
        <label htmlFor="wie viele mitterbeiter" />
        wie viele mitterbeiter
        <input type="select" min="2" max="8" />
      </form> */}
    </div>
  );
}

export default Main;
