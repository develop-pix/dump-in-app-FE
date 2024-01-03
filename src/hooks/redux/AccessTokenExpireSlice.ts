import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
interface ExpireState {
    expire: Date | null;
}

const initialState: ExpireState = {
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
