import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LocationState } from 'interfaces/redux/Store.interface';

const initialState: LocationState = {
    latitude: null,
    longitude: null,
};

export const CurrentLocationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setCurrentLocation(state, action: PayloadAction<LocationState>) {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
    },
});

export const { setCurrentLocation } = CurrentLocationSlice.actions;
export default CurrentLocationSlice;
