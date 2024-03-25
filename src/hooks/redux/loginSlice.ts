import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginState } from 'interfaces/redux/Store.interface';

const initialState: LoginState = {
    isLoggedIn: false,
};

export const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setIsLoggedIn } = LoginSlice.actions;
export default LoginSlice;
