import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from '../utils/selectors';
import API from 'datas/API';

export const login = createAsyncThunk(
    'token/login',
    async (arg) => {
        return await API.login(arg).then((res) => res.data.body.token);
    },
    {
        condition: (arg, thunkAPI) => {
            const status = selectToken(thunkAPI.getState()).status;
            if (status === 'pending' || status === 'updating') {
                return false;
            }
        }
    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        status: null,
        error: null
    },
    reducers: {
        resetToken: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'loading';
        },
        [login.fulfilled]: (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default loginSlice.reducer;
export const { resetToken } = loginSlice.actions;
