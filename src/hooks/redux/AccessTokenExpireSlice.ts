import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AccessTokenExpireState } from 'interfaces/redux/Store.interface';

const initialState: AccessTokenExpireState = {
    expire: null,
};

export const AccessTokenExpireSlice = createSlice({
    name: 'accessTokenExpire',
    initialState,
    reducers: {
        setAccessTokenExpire(state, action: PayloadAction<Date | null>) {
            state.expire = action.payload;
        },
    },
});

export const { setAccessTokenExpire } = AccessTokenExpireSlice.actions;
export default AccessTokenExpireSlice;
