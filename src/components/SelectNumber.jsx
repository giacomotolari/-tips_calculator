const numbers = [3, 4, 5, 6, 7, 8];

function SelectNumber({ howManyWorkers, setHowManyWorkers }) {
  return (
    <div>
      <label htmlFor="howMany">WIE VIELE MITARBEITER:</label>
      <select
        id="opts"
        value={parseInt(howManyWorkers)}
        onChange={(e) => setHowManyWorkers(parseInt(e.target.value))}
      >
        {numbers.map((number, index) => (
          <option key={index} value={number}>
            {parseInt(number)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectNumber;
