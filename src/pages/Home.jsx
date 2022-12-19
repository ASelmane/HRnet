import { Link } from "react-router-dom"
import Form from "../components/Form"

const Home = () => {
    return (
        <div className="create-employee container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <Link to="/employees">View Current Employees</Link>
            <h2>Create Employee</h2>
            <Form />
        </div>
    )
}

export default Home