import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccessTokenState } from 'interfaces/redux/Store.interface';

const initialState: AccessTokenState = {
    token: null,
};

export const accessTokenSlice = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
    },
});

export const { setAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice;
