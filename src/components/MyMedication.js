import AddMedication from "./add_medication/AddMedicationCC";
import Medications from "./Medications";
import SearchMedication from "./SearchMedication";

function MyMedication() {
    return (
        <div>
            <h1 className="header text-primary">My Medications</h1>
            <Medications />
            <div className="row px-3">
                <AddMedication />
                <SearchMedication />
            </div>
        </div>
    );
}

export default MyMedication;