import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
    token: string | null;
}
const initialState: TokenState = {
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
