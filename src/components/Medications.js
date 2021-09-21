import { useSelector, useDispatch } from "react-redux";
import { remove } from '../reducers/MedicationReducer';
import Medication from "./Medication";

function Medications() {
    const medicines = useSelector(state => state.MedicationReducer);
    if (medicines !== []) {
        return (
            <div>
                <ul className="row pl-0">
                    {medicines.map(item => (
                    <li className="col-4 list-unstyled mb-4"><Medication name={item.medicine} time={item.timeBetween} generic={item.genericName} comments={item.comments} /></li>
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