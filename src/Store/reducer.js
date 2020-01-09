const initialState = {
    number: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NUMBERS':
            return {...state, number: state.number + action.num};
        default:
            return state;
    }
};

export default reducer;