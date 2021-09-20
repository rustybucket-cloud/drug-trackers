import { useState } from 'react';
import { useDispatch } from "react-redux";
import { add } from "../actions";

function AddMedication() {
    const [ medicine, setMedicine ] = useState('');
    const [ timeBetween, setTimeBetween ] = useState(null);
    const [ genericName, setGenericName ] = useState('');
    const [ comments, setComments ] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        switch(target.id) {
            case 'name':
                setMedicine(target.value);
            case 'hours':
                setTimeBetween(target.value);
            case 'generic':
                setGenericName(target.value);
            case 'comments':
                setComments(target.value);
        }
    }
    const handleClick = () => {
        if (medicine !== '') {
            dispatch(add({medicine, timeBetween, genericName, comments}));
            setMedicine('');
            setTimeBetween(null);
            setGenericName('');
            setComments('');
        }
    }

    return (
        <div className="bg-main p-2 rounded">
            <h3>Add Medication</h3>
            <div className="row">
                <div className="col-md-3 col-sm-5">
                    <label className="d-block">Medication Name
                        <input className="d-block" onChange={handleChange} id="name" value={medicine}/>
                    </label>
                    <label className="d-block">Time Between Doses
                        <span className="d-block"><input type="number" onChange={handleChange} id="hours"/> Hours</span>
                    </label>
                    <label className="d-block">Take With Food?
                        <span className="d-block"><input type="radio" value="yes" name="with-food" /> Yes</span>
                        <span className="d-block"><input type="radio" value="no" name="with-food" /> No</span>
                    </label>
                </div>
                <div className="col-md-3 col-sm-5">
                    <label className="d-block">Generic Name
                        <input className="d-block" onChange={handleChange} id="generic" />
                    </label>
                    <label className="d-block">Comments
                        <textarea className="d-block" onChange={handleChange} id="comments"></textarea>
                    </label>
                </div>
            </div>
            <button onClick={handleClick} type="button">Add To My Medication</button>
        </div>
    )
}

export default AddMedication;