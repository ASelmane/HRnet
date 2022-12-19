import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../components/Table";

const Employees = () => {
    const listEmployee = useSelector(state => state.listEmployee.listEmployee);
    return (
        <div className="list-employee container">
            <h2>Current Employees</h2>
            <div className="List">
                <h2>Employee List</h2>
                <Table data={listEmployee} />
            </div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Employees;