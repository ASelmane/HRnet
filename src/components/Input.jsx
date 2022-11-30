import Dropdown from 'react-dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Input = ({ label, name, value, type, onChange }) => {

    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            {type === "date" ? (
                <DatePicker id={name} name={name} selected={value} onChange={onChange} />
            ) : type === "select" ? (
                <Dropdown className={name} name={name} options={value} onChange={onChange}/>
            ) : (
                <input id={name} name={name} type={type} />
            )}
        </div>
    );
};

export default Input;