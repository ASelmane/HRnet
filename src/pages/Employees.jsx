import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "../components/Table";

const Employees = () => {
    const listEmployee = useSelector(state => state.listEmployee.listEmployee);
    return (
        <div className="list-employee container">
            <div className="title">
                <h1>Current Employees</h1>
            </div>
            <Link to="/" className="link">Home</Link>
            <div className="List">
                <h2>Employee List</h2>
                <Table data={listEmployee} />
            </div>
        </div>
    );
};

export default Employees;