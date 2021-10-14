import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
import transactionsReducer from '../features/transactionSlice';
import loginReducer from '../features/loginSlice';

export default configureStore({
    reducer: { count: countReducer, transaction: transactionsReducer, user: loginReducer }
});
