import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Employees = () => {
    const listEmployee = useSelector(state => state.employee.listEmployee);
    return (
        <div className="list-employee container">
            <h2>Current Employees</h2>
            <div className="List">
                <h2>Employee List</h2>
                {listEmployee.map((employee, index) => (
                    <div key={index}>
                        <p>{employee.firstName} {employee.lastName}</p>
                    </div>
                ))}
            </div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Employees;