export const selectCount = (state) => state.count;

export const selectTransaction = (state) => state.transaction.value;

export const selectLogin = (state) => state.user.value;

const voidUser = { status: 'void' };

export const selectUser = (userEmail) => (state) => {
    return state.user[userEmail] ?? voidUser;
};
