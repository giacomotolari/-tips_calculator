function IputSelect({ value, setValue, list,label }) {
  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select
        id="opts"
        value={parseInt(value)}
        onChange={(e) => setValue(e.target.value)}
      >
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default IputSelect;
