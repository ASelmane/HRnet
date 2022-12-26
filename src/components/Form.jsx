import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getListEmployee } from '../services/redux/listEmployeeSlice';
import Modal from 'react-modal';
import { states } from '../_mocks_/states';
import { departments } from '../_mocks_/department';
import Input from './Input';

const Form = () => {
    const dispatch = useDispatch();
    const listEmployee = useSelector(state => state.listEmployee.listEmployee);
    const [startDate, setStartDate] = useState("");
    const [dob, setDob] = useState("");
    const [state, setState] = useState("");
    const [stateOptions, setStateOptions] = useState([]);
    const [department, setDepartment] = useState("");
    const [departmentOptions, setDepartmentOptions] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    Modal.setAppElement('#root');
    
    useEffect(() => {
        setStateOptions(states.map(state => ({ label: state.name, value: state.abbreviation })))
        setDepartmentOptions(departments.map(department => ({ label: department, value: department })))
    }, [listEmployee]);

    const saveEmployee = (e) => {
        e.preventDefault();
        const form = document.getElementById('create-employee');
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const zipCode = document.getElementById('zip-code');

        if (firstName.value !== "" && lastName.value !== "" && street.value !== "" && city.value !== "" && zipCode.value !== "" && startDate !== "" && dob !== "" && state !== "" && department !== "") {
            const birthDate = `${dob.getFullYear()}/${dob.getMonth() + 1 < 10 ? ("0"+(dob.getMonth() + 1)) : (dob.getMonth() + 1)}/${dob.getDate() < 10 ? ("0"+dob.getDate()) : dob.getDate()}`;
            const dateStart = `${dob.getFullYear()}/${startDate.getMonth() + 1 < 10 ? ("0"+(startDate.getMonth() + 1)) : (startDate.getMonth() + 1)}/${startDate.getDate() < 10 ? ("0"+startDate.getDate()) : startDate.getDate()}`;

            const employee = {
                firstName: firstName.value,
                lastName: lastName.value,
                dateOfBirth: birthDate,
                startDate: dateStart,
                department: department.value,
                street: street.value,
                city: city.value,
                state: state.value,
                zipCode: zipCode.value
            };

            dispatch(getListEmployee(employee));

            setModalIsOpen(true);
            setDob("");
            setStartDate("");
            setState("");
            setDepartment("");
            document.querySelectorAll(".Dropdown-placeholder").forEach(element => {
                element.innerHTML = "Select...";
            });
            form.reset();
        }
    }

    const handleStartDate = (date) => {
        setStartDate(date);
    }

    const handleDob = (date) => {
        setDob(date);
    }

    return (
        <div className="form">
            <form id="create-employee">
                <div className='personal'>
                    <Input label="First Name" name="first-name" type="text" />
                    <Input label="Last Name" name="last-name" type="text" />
                    <Input label="Date of Birth" name="dob" type="date" value={dob} onChange={(date) => handleDob(date)}/>
                </div>
                <div className="adress">
                    <fieldset>
                        <legend>Address</legend>
                        <Input label="Street" name="street" type="text" />
                        <Input label="Zip Code" name="zip-code" type="number" />
                        <Input label="City" name="city" type="text" />
                        <Input label="State" name="state" type="select" value={stateOptions} onChange={(value) => setState(value)}/>
                    </fieldset>
                </div>
                <div className="work">
                <Input label="Department" name="department" type="select" value={departmentOptions} onChange={(value) => setDepartment(value)}/>
                <Input label="Start Date" name="start-date" type="date" value={startDate} onChange={(date) => handleStartDate(date)} />
                </div>
                <button className='save' onClick={(e) => saveEmployee(e)}>Save</button>
            </form>
            <Modal id="confirmation" className="modal" isOpen={modalIsOpen} overlayClassName="overlay">
                <div className="modal-content">
                    Employee Created!
                    <button className='close-modal' onClick={() => setModalIsOpen(false)}>X</button>
                </div>
            </Modal>
        </div>
    )
}

export default Form;