import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TokenState } from 'interfaces/redux/Store.interface';

const initialState: TokenState = {
    accessToken: null,
    mobileToken: null,
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string | null>) {
            state.accessToken = action.payload;
        },
        setMobileToken(state, action: PayloadAction<string | null>) {
            state.mobileToken = action.payload;
        },
    },
});

export const { setAccessToken, setMobileToken } = tokenSlice.actions;
export default tokenSlice;
