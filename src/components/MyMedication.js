import AddMedication from "./AddMedication";
import Medications from "./Medications";

function MyMedication() {
    return (
        <div>
            <h1 className="header text-primary">My Medications</h1>
            <Medications />
            <AddMedication />
        </div>
    );
}

export default MyMedication;