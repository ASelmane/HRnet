import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";

const Input = ({ label, name, value, type, onChange }) => {
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            {type === "date" ? (
                <DatePicker 
                renderCustomHeader={({ date, changeYear,changeMonth,decreaseMonth,increaseMonth,prevMonthButtonDisabled,nextMonthButtonDisabled }) => 
                CustomHeader(({date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled}))} 
                placeholderText="yyyy/mm/dd" dateFormat="yyyy/MM/dd" id={name} name={name} selected={value} onChange={onChange} />
            ) : type === "select" ? (
                <Dropdown className={name} name={name} options={value} onChange={onChange} />
            ) : (
                <input id={name} name={name} type={type} />
            )}
        </div>
    );
};

const CustomHeader = ({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => {
    const today = new Date();
    const years = Array.from(new Array(100), (val, index) => today.getFullYear() - index);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <button onClick={(e) => {e.preventDefault();decreaseMonth()}} disabled={prevMonthButtonDisabled}>
                {"<"}
            </button>
            <select
                value={date.getFullYear()}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={months[date.getMonth()]}
                onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <button onClick={(e) => {e.preventDefault(); increaseMonth()}} disabled={nextMonthButtonDisabled}>
                {">"}
            </button>
        </div>
    )
}

export default Input;