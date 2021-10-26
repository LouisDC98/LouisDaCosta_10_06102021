import { configureStore } from '@reduxjs/toolkit';
import accountReducer from '../features/accountSlice';
import transactionsReducer from '../features/transactionSlice';
import loginReducer from '../features/loginSlice';
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        account: accountReducer,
        transaction: transactionsReducer,
        token: loginReducer,
        user: userReducer
    }
});
