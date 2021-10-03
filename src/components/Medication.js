function Medication(props) {
    if (props.name) {
        return (
            <div className="border rounded bg-main pl-2" style={{minHeight: "8em"}}>
                <div className="d-flex justify-content-between mr-3">
                    <h3>{props.name}</h3>
                    <i className="fas fa-times-circle mt-1" onClick={props.remove} style={{fontSize: '32px'}}></i>
                </div>
                <p>Time between doses: {props.time} hours</p>
                {props.generic ? <p>Generic name: {props.generic}</p> : null}
                {props.takeWithFood ? <p>Take with food: {props.takeWithFood}</p> : null}
                {props.comments ? <p>Comments: {props.comments}</p> : null}
            </div>
        );
    }
    else {
        return null;
    }
}

export default Medication;