import { createSlice } from '@reduxjs/toolkit';
import { countData } from 'datas/count';

const { reducer } = createSlice({
    name: 'count',
    initialState: countData,
    reducer: {}
});

export default reducer;
