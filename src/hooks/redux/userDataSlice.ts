import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDataState } from 'interfaces/redux/Store.interface';

const initialState: UserDataState = {
    userID: null,
    email: null,
    userNickName: null,
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserID: (state, action: PayloadAction<string | null>) => {
            state.userID = action.payload;
        },
        setEmail: (state, action: PayloadAction<string | null>) => {
            state.email = action.payload;
        },
        setUserNickName: (state, action: PayloadAction<string | null>) => {
            state.userNickName = action.payload;
        },
    },
});

export const { setUserID, setEmail, setUserNickName } = userDataSlice.actions;
export default userDataSlice;
