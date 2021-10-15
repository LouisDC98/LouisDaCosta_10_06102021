import { createSlice } from '@reduxjs/toolkit';
import { selectToken } from '../utils/selectors';
import API from 'datas/API';

const initialState = {
    status: 'void',
    data: null,
    error: null
};

const { actions, reducer } = createSlice({
    name: 'login',
    initialState,
    reducers: {
        fetching: (state) => {
            if (state.status === 'void') {
                state.status = 'pending';
            }
            if (state.status === 'rejected') {
                state.error = null;
                state.status = 'pending';
            }
            if (state.status === 'resolved') {
                state.status = 'updating';
            }
        },
        resolved: (state, action) => {
            if (state.status === 'pending' || state.status === 'updating') {
                state.data = action.payload;
                state.status = 'resolved';
            }
        },
        rejected: (state, action) => {
            if (state.status === 'pending' || state.status === 'updating') {
                state.error = action.payload;
                state.data = null;
                state.status = 'rejected';
            }
        },
        resetToken: (state) => {
            state.data = null;
        }
    }
});

export function login(account) {
    return async (dispatch, getState) => {
        const status = selectToken(getState()).status;
        if (status === 'pending' || status === 'updating') {
            return;
        }
        dispatch(actions.fetching());
        try {
            const response = await API.login(account);
            dispatch(actions.resolved(response.data.body.token));
        } catch (error) {
            dispatch(actions.rejected(error.response.data.message));
            throw error.response.data.message;
        }
    };
}

export const { resetToken } = actions;
export default reducer;
