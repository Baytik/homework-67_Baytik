const initialState = {
    number: '',
    trueAnswer: 'green',
    falseAnswer: 'red',
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
                alert('OK');
                return {...state, trueAnswer: state.trueAnswer};
            } else {
                alert('NO');
            return {...state, falseAnswer: state.falseAnswer};
            }
        default:
            return state;
    }
};

export default reducer;