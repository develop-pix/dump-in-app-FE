import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserDataState {
  userID: string | null;
}

// 임시 초기값 설정
const initialState: UserDataState = {
  userID: null,
};

const UserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserID: (state, action: PayloadAction<string | null>) => {
      state.userID = action.payload;
    },
  },
});

export const {setUserID} = UserDataSlice.actions;
export default UserDataSlice;
