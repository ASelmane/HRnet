import { Link } from "react-router-dom"
import Form from "../components/Form"

const Home = () => {
    return (
        <div className="create-employee container">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <Link to="/employees" className="link">View Current Employees</Link>
            <div className="content">
                <h2>Create Employee</h2>
                <Form />
            </div>
        </div>
    )
}

export default Home