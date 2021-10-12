import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countSlice';
import transactionsReducer from '../features/transactionSlice';

export default configureStore({
    reducer: { count: countReducer, transaction: transactionsReducer }
});
