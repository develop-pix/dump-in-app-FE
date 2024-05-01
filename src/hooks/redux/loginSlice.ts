import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { storage } from 'hooks/mmkv/storage';
import { LoginState } from 'interfaces/redux/Store.interface';

const initialState: LoginState = {
    isLoggedIn: storage.getString('token.accessToken') !== null,
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
