// import { createSlice } from '@reduxjs/toolkit';
import { selectUser } from '../utils/selectors';
// import { useSelector } from 'react-redux';
import produce from 'immer';
import API from 'datas/API';

const initialState = {
    status: 'void',
    data: null,
    error: null
};

const FETCHING = 'login/fetching';
const RESOLVED = 'login/resolved';
const REJECTED = 'login/rejected';

const loginFetching = () => ({ type: FETCHING });

const loginResolved = (data) => ({
    type: RESOLVED,
    payload: data
});

const loginRejected = (error) => ({
    type: REJECTED,
    payload: error
});

export function fetchOrUpdateLogin(account) {
    return async (dispatch, getState) => {
        const selectEmail = selectUser(account.email);
        const status = selectEmail(getState()).status;
        if (status === 'pending' || status === 'updating') {
            return;
        }
        dispatch(loginFetching());
        try {
            const response = API.login(account);
            const data = await response;
            console.log(data.data.body);
            dispatch(loginResolved(data));
        } catch (error) {
            dispatch(loginRejected(error));
        }
    };
}

export default function loginReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCHING: {
                if (draft.status === 'void') {
                    draft.status = 'pending';
                    return;
                }
                if (draft.status === 'rejected') {
                    draft.error = null;
                    draft.status = 'pending';
                    return;
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating';
                    return;
                }
                return;
            }
            case RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload;
                    draft.status = 'resolved';
                    return;
                }
                return;
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload;
                    draft.data = null;
                    draft.status = 'rejected';
                    return;
                }
                return;
            }

            default:
                return;
        }
    });
}

// const initialState = {
//     user: undefined,
//     token: undefined
// };

// const { actions, reducer } = createSlice({
//     name: 'login',
//     initialState,
//     reducers: {
//         fetching: {}
//         // matchDatas: (state, action) => {
//         //     console.log(state);
//         //     console.log(action.payload);
//         // }
//     }
// });

// // export const { fetching, resolved, rejected } = loginReducer.actions;
// export default reducer;
