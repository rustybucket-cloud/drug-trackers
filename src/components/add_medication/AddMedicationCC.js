import { useState } from 'react';
import { useDispatch } from "react-redux";
import { add } from "../../actions";
import AddMedicationPC from './AddMedicationPC';

function AddMedication() {
    const [ medicine, setMedicine ] = useState('');
    const [ timeBetween, setTimeBetween ] = useState('');
    const [ genericName, setGenericName ] = useState('');
    const [ comments, setComments ] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        switch(target.id) {
            case 'name':
                setMedicine(target.value);
            break;
            case 'hours':
                setTimeBetween(target.value);
            break;
            case 'generic':
                setGenericName(target.value);
            break;
            case 'comments':
                setComments(target.value);
            break;
        }
    }
    const handleClick = () => {
        if (medicine !== '') {
            dispatch(add({medicine, timeBetween, genericName, comments}));
            setMedicine('');
            setTimeBetween('');
            setGenericName('');
            setComments('');
            fetch(`./add_medication/${medicine}/${timeBetween}/${genericName}/${comments}`)
                .then(response => console.log(response))
                .catch(err => console.log(err))
        }
    }

    return (
        <AddMedicationPC onChange={handleChange} onClick={handleClick} medicine={medicine} timeBetween={timeBetween} genericName={genericName} comments={comments} />
    )
}

export default AddMedication;