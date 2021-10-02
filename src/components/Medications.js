import { useSelector, useDispatch } from "react-redux";
import { remove } from '../actions';
import Medication from "./Medication";
import { add } from '../actions'

function Medications() {
    const dispatch = useDispatch()
    const medicines = useSelector(state => state.MedicationReducer);
    if (medicines !== []) {
        return (
            <div>
                <ul className="row pl-0">
                    {medicines.map(item => (
                    <li className="col-4 list-unstyled mb-4"><Medication remove={remove} name={item.medicine} time={item.timeBetween} generic={item.genericName} comments={item.comments} /></li>
                    ))}          
                </ul>
            </div>
        )
    }
    else {
        return <div></div>;
    }
}

export default Medications;