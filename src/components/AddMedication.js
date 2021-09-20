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
        if (medicine !== '') {
            dispatch(add(medicine));
            setMedicine('');
        }
    }

    return (
        <div className="bg-main p-2 rounded">
            <h3>Add Medication</h3>
            <div className="row">
                <div className="col-md-3 col-sm-5">
                    <label className="d-block">Medication Name
                        <input className="d-block" onChange={handleChange} value={medicine}/>
                    </label>
                    <label className="d-block">Time Between Doses
                        <input className="d-block" />
                    </label>
                    <label className="d-block">Take With Food?
                        <span className="d-block"><input type="radio" value="yes" name="with-food" /> Yes</span>
                        <span className="d-block"><input type="radio" value="no" name="with-food" /> No</span>
                    </label>
                </div>
                <div className="col-md-3 col-sm-5">
                    <label className="d-block">Generic Name
                        <input className="d-block"/>
                    </label>
                    <label className="d-block">Comments
                        <textarea className="d-block"></textarea>
                    </label>
                </div>
            </div>
            <button onClick={handleClick}>Add To My Medication</button>
        </div>
    )
}

export default AddMedication;