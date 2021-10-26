import { createSlice } from '@reduxjs/toolkit';
import { transactions } from 'datas/transactions';

//get all transactions
const initialState = {
    value: transactions
};

const transactionsReducer = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        //on SelectForm submit
        changeCategory: (state, action) => {
            let transaction = state.value.find((element) => element.id === action.payload.id);
            if (transaction) {
                transaction.category = action.payload.category;
            }
        },
        //on TextForm submit
        changeNote: (state, action) => {
            let transaction = state.value.find((element) => element.id === action.payload.id);
            if (transaction) {
                transaction.note = action.payload.note;
            }
        }
    }
});

export const { changeCategory, changeNote } = transactionsReducer.actions;
export default transactionsReducer.reducer;
