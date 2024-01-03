import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist';

import AccessTokenExpireSlice from './AccessTokenExpireSlice';
import AccessTokenSlice from './AccessTokenSlice';
import ReviewDataSlice from './ReviewData';
import UserDataSlice from './UserDataSlice';

//상태추가 할것 추가
const reducers = combineReducers({
    login: AccessTokenSlice.reducer,
    expire: AccessTokenExpireSlice.reducer,
    reviewData: ReviewDataSlice.reducer,
    userData: UserDataSlice.reducer,
});

const logger = createLogger();
const initialState = {};

//redux를 localstorage에 저장해 새로 고침시 redux 상태가 증발하는것을 방지
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login', 'expire', 'userData'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    preloadedState: initialState,
    enhancers: defaultEnhancers => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

/*
 * redux를 사용할 컴포넌트 에서
 *
 * redux 데이터를 받아올때 useAppSelector
 * ex) const token = useAppSelector(state => state.login).token;
 *
 * redux 데이터를 수정할때 useAppDispatch 사용
 * ex) const dispatch =useAppDispatch();
 *      dispatch(setAccessTokenExpire('Date'));
 *
 */
