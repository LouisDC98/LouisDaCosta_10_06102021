import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { selectUser, selectToken } from '../utils/selectors';
import API from 'datas/API';

export const getUser = createAsyncThunk(
    'user/getUser',
    async (arg, thunkAPI) => {
        return await API.userProfile(selectToken(thunkAPI.getState()).data).then(
            (res) => res.data.body
        );
    },
    {
        condition: (arg, thunkAPI) => {
            const status = selectUser(thunkAPI.getState()).status;
            if (status === 'pending' || status === 'updating') {
                return false;
            }
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updateProfile',
    async (arg, thunkAPI) => {
        const response = await API.updateUserProfile(
            { firstName: arg.newFirstname, lastName: arg.newLastname },
            selectToken(thunkAPI.getState()).data
        );
        return response.data;
    },
    {
        condition: (arg, thunkAPI) => {
            const status = selectUser(thunkAPI.getState()).status;
            if (status === 'pending' || status === 'updating') {
                return false;
            }
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: null,
        error: null
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            state.status = 'loading';
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
        [updateUser.pending]: (state) => {
            state.status = 'loading';
        },
        [updateUser.fulfilled]: (state, action) => {
            state.status = 'success';
            state.user = action.payload;
        },
        [updateUser.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default userSlice.reducer;
