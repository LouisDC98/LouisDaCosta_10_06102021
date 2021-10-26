import { createSlice } from '@reduxjs/toolkit';
import { selectUser, selectToken } from '../utils/selectors';
import API from 'datas/API';

const initialState = {
    status: 'void',
    data: null,
    error: null
};

//get user profile informations
export function getProfile() {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status;
        if (status === 'pending' || status === 'updating') {
            return;
        }

        dispatch(actions.fetching());
        try {
            const response = await API.userProfile(selectToken(getState()).data);
            dispatch(actions.resolved(response.data.body));
        } catch (error) {
            dispatch(actions.rejected(error));
        }
    };
}

//update firstName and lastName of the user
export function updateProfile(data) {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status;
        if (status === 'pending' || status === 'updating') {
            return;
        }

        dispatch(actions.fetching());
        try {
            const response = await API.updateUserProfile(
                { firstName: data.newFirstname, lastName: data.newLastname },
                selectToken(getState()).data
            );
            dispatch(actions.resolved(response.data.body));
        } catch (error) {
            dispatch(actions.rejected(error));
        }
    };
}

const { actions, reducer } = createSlice({
    name: 'profile',
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
        //when API call is resolved data egal payload
        resolved: (state, action) => {
            if (state.status === 'pending' || state.status === 'updating') {
                state.data = action.payload;
                state.status = 'resolved';
            }
        },
        //when API call is rejected error egal payload
        rejected: (state, action) => {
            if (state.status === 'pending' || state.status === 'updating') {
                state.error = action.payload;
                state.data = null;
                state.status = 'rejected';
            }
        }
    }
});

export default reducer;
