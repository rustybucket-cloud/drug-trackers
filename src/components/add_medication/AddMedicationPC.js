function AddMedication(props) {
    return (
        <div className="bg-main p-2 rounded col-lg-5 mr-lg-2">
            <h3>Add Medication</h3>
            <div className="row px-4">
                <div className="mr-3">
                    <label className="d-block">Medication Name
                        <input className="d-block" onChange={props.onChange} id="name" value={props.medicine}/>
                    </label>
                    <label className="d-block">Time Between Doses
                        <span className="d-block"><input type="number" onChange={props.onChange} id="hours" value={props.timeBetween}/> Hours</span>
                    </label>
                    <label className="d-block">Take With Food?
                        <span className="d-block"><input type="radio" value="yes" name="with-food" /> Yes</span>
                        <span className="d-block"><input type="radio" value="no" name="with-food" /> No</span>
                    </label>
                </div>
                <div>
                    <label className="d-block">Generic Name
                        <input className="d-block" onChange={props.onChange} id="generic" value={props.genericName}/>
                    </label>
                    <label className="d-block">Comments
                        <textarea className="d-block" onChange={props.onChange} id="comments" value={props.comments}></textarea>
                    </label>
                </div>
            </div>
            <button onClick={props.onClick} className="btn bg-white" type="button">ADD MEDICATION</button>
        </div>
    )
}

export default AddMedication;