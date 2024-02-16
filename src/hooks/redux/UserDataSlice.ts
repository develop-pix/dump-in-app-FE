import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserDataState } from 'interfaces/redux/Store.interface';

// 임시 초기값 설정
const initialState: UserDataState = {
    userID: null,
    userNickName: null,
};

const UserDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserID: (state, action: PayloadAction<string | null>) => {
            state.userID = action.payload;
        },
        setUserNickName: (state, action: PayloadAction<string | null>) => {
            state.userNickName = action.payload;
        },
    },
});

export const { setUserID, setUserNickName } = UserDataSlice.actions;
export default UserDataSlice;
