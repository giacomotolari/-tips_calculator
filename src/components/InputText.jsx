function InputText({ value, setValue, label }) {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export default InputText;
