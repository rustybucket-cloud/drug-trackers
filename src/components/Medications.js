import { useSelector, useDispatch } from "react-redux";
import { remove } from '../reducers/MedicationReducer';

function Medications() {
    const medicines = useSelector(state => state.MedicationReducer);
    if (medicines !== []) {
        return (
            <div>
                <ul>
                    {medicines.map(item => (
                    <li>{item}</li>
                    ))}          
                </ul>
            </div>
        )
    }
    else {
        return null;
    }
}

export default Medications;