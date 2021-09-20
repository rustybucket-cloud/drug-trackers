const MedicationReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(element => element !== action.payload);
        default: 
            return state;
    }
}

export default MedicationReducer;