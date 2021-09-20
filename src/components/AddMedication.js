import { useState } from 'react';
import { useDispatch } from "react-redux";
import { add } from "../actions";

function AddMedication() {
    const [ medicine, setMedicine ] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        setMedicine(target.value);
    }
    const handleClick = () => {
        dispatch(add(medicine));
        setMedicine('');
    }

    return (
        <div>
            <h3>Add Medication</h3>
            <input onChange={handleChange} value={medicine}/>
            <button onClick={handleClick}>Add To My Medication</button>
        </div>
    )
}

export default AddMedication;