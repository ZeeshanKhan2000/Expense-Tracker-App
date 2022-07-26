export const AppReducer = ((state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                transactions: 
                    state.transactions.filter(
                    Obj => Obj.id !== action.payload
                )
            }

        case "ADD":
            return {
                ...state,
                transactions: [
                    ...state.transactions, 
                    action.payload
                ]
            }
        default:
            return state;
    }
});
