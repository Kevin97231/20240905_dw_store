/* eslint-disable react/prop-types */
export const Select = ({ options = [], value, onChangeFunction, children }) => {
  // type attendu de l'objet 'option' : { value, label }

  const handleSelectChange = (e) => {
    onChangeFunction(e.target.value);
  };

  return (
    <div className="m-auto ml-10">
      <select
        value={value}
        onChange={handleSelectChange}
        className="w-full max-w-xs select select-bordered select-sm"
      >
        <option disabled>{children}</option>
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
