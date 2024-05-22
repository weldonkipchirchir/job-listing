/* eslint-disable react/prop-types */

const ButtonGroup = ({ options, selectedOption, onChange }) => {
    
  return (
    <div className="flex flex-wrap justify-start gap-3 items-center my-2">
      {options.map(option => (
        <button
          type="button"
          key={option}
          className={`px-4 py-1 text-[16px] font-bold ${selectedOption === option ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} rounded`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
