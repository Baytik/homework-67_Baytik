const initialState = {
    number: '',
    color: '',
    trueAnswer: 'Correct code',
    falseAnswer: 'Wrong code',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBERS':
            if (state.number.length >= 4) {
                alert('Вы ввели больше чем нужно');
            } else {
                return {...state, number: state.number + action.num};
            }
        case 'CONFIRM_NUMBERS':
            if (state.number === '7777') {
                return {...state, trueAnswer: state.trueAnswer, color: 'green'};
            } else {
            return {...state, falseAnswer: state.falseAnswer, color: 'red'};
            }
        default:
            return state;
    }
};

export default reducer;