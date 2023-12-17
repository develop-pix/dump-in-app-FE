import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface UserDataState {
  userID: string | null;
  userNickName: string | null;
}

// 임시 초기값 설정
const initialState: UserDataState = {
  userID: 'jsee53',
  userNickName: '지나가던 오리너구리',
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

export const {setUserID, setUserNickName} = UserDataSlice.actions;
export default UserDataSlice;
