const numbers = [3, 4, 5, 6, 7, 8];

function SelectNumber({ howManyWorkers, setHowManyWorkers }) {
  return (
    <div className="selectDeparture">
      <select
        id="opts"
        value={howManyWorkers}
        onChange={(e) => setHowManyWorkers(e.target.value)}
      >
        {numbers.map((number, index) => (
          <option key={index} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectNumber;
