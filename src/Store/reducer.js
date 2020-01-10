const initialState = {
    number: '',
    color: '',
    trueAnswer: '',
    falseAnswer: '',
    disableButton: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBERS':
            if (state.number.length >= 4) {
                return {...state, number: state.number, disableButton: 'disabled'}
            } else {
                return {...state, number: state.number + action.num};
            }
        case 'CONFIRM_NUMBERS':
            if (state.number === '7777') {
                return {...state, trueAnswer: 'Correct code', color: 'green'};
            } else {
            return {...state, falseAnswer: 'Wrong code', color: 'red', number: ''};
            }
        case 'REMOVE_NUMBER':
           let sliceNumber = state.number.slice(0, -1);
            return {...state, number: sliceNumber};
        default:
            return state;
    }
};

export default reducer;