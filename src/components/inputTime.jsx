
function InputTime({ value, setValue, label }) {
  return (
    <div>
      <label htmlFor="time">{label}</label>
      <input
        type="time"
        step="300"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default InputTime;
