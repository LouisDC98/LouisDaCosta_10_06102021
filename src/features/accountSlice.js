import { createSlice } from '@reduxjs/toolkit';
import { accountData } from 'datas/account';

const { reducer } = createSlice({
    name: 'account',
    initialState: accountData,
    reducer: {}
});

export default reducer;
