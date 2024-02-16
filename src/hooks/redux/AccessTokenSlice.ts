import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccessTokenState } from 'interfaces/redux/Store.interface';

const initialState: AccessTokenState = {
    token: null,
};

export const AccessTokenSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
    },
});

export const { setAccessToken } = AccessTokenSlice.actions;
export default AccessTokenSlice;
