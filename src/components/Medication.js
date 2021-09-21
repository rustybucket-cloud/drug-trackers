function Medication(props) {
    if (props.name) {
        return (
            <div className="border border-primary pl-2">
                <h3>{props.name}</h3>
                <p>Time between doses: {props.time} hours</p>
                {props.generic ? <p>Generic name: {props.generic}</p> : null}
                {props.comments ? <p>Comments: {props.comments}</p> : null}
            </div>
        );
    }
    else {
        return null;
    }
}

export default Medication;