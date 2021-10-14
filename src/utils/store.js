import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
import transactionsReducer from '../features/transactionSlice';
import loginReducer from '../features/loginSlice';
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        count: countReducer,
        transaction: transactionsReducer,
        token: loginReducer,
        user: userReducer
    }
});
